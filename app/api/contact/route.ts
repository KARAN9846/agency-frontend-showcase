import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";
import { buildContactConfirmationEmail } from "@/lib/email/contact-confirmation";
import { buildContactNotificationEmail } from "@/lib/email/contact-notification";
import {
  sendAdminNotificationEmail,
  sendCustomerConfirmationEmail,
} from "@/lib/email/gmail";

export const runtime = "nodejs";

const contactSchema = z
  .object({
    name: z.string().trim().min(2, "Please enter your name.").max(100),
    email: z
      .string()
      .trim()
      .email("Please enter a valid email address.")
      .max(254),
    company: z.string().trim().max(150).optional().default(""),
    phone: z.string().trim().max(50).optional().default(""),
    service: z.enum([
      "Software",
      "Web",
      "Mobile",
      "Digital Marketing",
      "Something Else",
    ]),
    message: z
      .string()
      .trim()
      .min(20, "Please tell us a little more about your project.")
      .max(5_000, "Please keep your message under 5,000 characters."),
    website: z.string().max(200).optional().default(""),
  })
  .strict();

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "The request body must be valid JSON." },
      { status: 400 },
    );
  }

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        success: false,
        message: "Please check the submitted information.",
        errors: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const { name, email, company, phone, service, message, website } = result.data;

  // Silently accept the honeypot so bots do not learn how they were detected.
  if (website) {
    return NextResponse.json(
      { success: true, message: "Your enquiry has been submitted successfully." },
      { status: 201 },
    );
  }

  const enquiryId = randomUUID();

  try {
    await sendAdminNotificationEmail({
      subject: "New Website Enquiry — Nexa Digital Agency",
      html: buildContactNotificationEmail({
        name,
        email,
        company,
        phone,
        service,
        message,
        enquiryId,
      }),
      replyTo: email,
    });
  } catch {
    console.error("Contact notification email could not be sent.");

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while submitting your enquiry.",
      },
      { status: 500 },
    );
  }

  try {
    await sendCustomerConfirmationEmail({
      to: email,
      subject: "Thank you for contacting Nexa Digital Agency",
      html: buildContactConfirmationEmail({
        name,
        company,
        service,
        enquiryId,
      }),
    });
  } catch {
    // The admin notification succeeded, so do not fail or retry the submission.
    console.error("Contact confirmation email could not be sent.");
  }

  return NextResponse.json(
    {
      success: true,
      message: "Your enquiry has been submitted successfully.",
      enquiryId,
    },
    { status: 201 },
  );
}
