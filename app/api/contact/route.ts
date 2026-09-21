import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";

const MAX_REQUEST_SIZE = 64 * 1024;

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
    const contentLength = Number(request.headers.get("content-length") || 0);

    if (contentLength > MAX_REQUEST_SIZE) {
      return NextResponse.json(
        { success: false, message: "The request body is too large." },
        { status: 413 },
      );
    }

    const rawBody = await request.text();

    if (new TextEncoder().encode(rawBody).byteLength > MAX_REQUEST_SIZE) {
      return NextResponse.json(
        { success: false, message: "The request body is too large." },
        { status: 413 },
      );
    }

    body = JSON.parse(rawBody);
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
  const isUpworkShowcase = process.env.UPWORK_SHOWCASE === "true";

  // Silently accept the honeypot so bots do not learn how they were detected.
  if (website) {
    return NextResponse.json(
      isUpworkShowcase
        ? { success: true, demo: true, emailSent: false }
        : {
            success: true,
            message: "Your enquiry has been submitted successfully.",
          },
      { status: 201 },
    );
  }

  if (isUpworkShowcase) {
    return NextResponse.json(
      { success: true, demo: true, emailSent: false },
      { status: 201 },
    );
  }

  const enquiryId = randomUUID();

  const [
    { buildContactConfirmationEmail },
    { buildContactNotificationEmail },
    { sendAdminNotificationEmail, sendCustomerConfirmationEmail },
  ] = await Promise.all([
    import("@/lib/email/contact-confirmation"),
    import("@/lib/email/contact-notification"),
    import("@/lib/email/gmail"),
  ]);

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
