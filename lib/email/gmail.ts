import "server-only";

import nodemailer from "nodemailer";

type EmailContent = {
  subject: string;
  html: string;
};

type AdminNotificationParams = EmailContent & { replyTo: string };
type CustomerConfirmationParams = EmailContent & { to: string };

function getEmailConfig() {
  const smtpUser = process.env.SMTP_USER;
  const smtpAppPassword = process.env.SMTP_APP_PASSWORD;
  const contactEmail = process.env.CONTACT_EMAIL;

  if (!smtpUser || !smtpAppPassword || !contactEmail) {
    throw new Error("Contact email configuration is incomplete.");
  }

  return { smtpUser, smtpAppPassword, contactEmail };
}

function createGmailTransport() {
  const { smtpUser, smtpAppPassword } = getEmailConfig();

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: smtpUser, pass: smtpAppPassword },
  });
}

export async function sendAdminNotificationEmail({
  subject,
  html,
  replyTo,
}: AdminNotificationParams) {
  const { smtpUser, contactEmail } = getEmailConfig();

  return createGmailTransport().sendMail({
    from: `Nexa Digital Agency <${smtpUser}>`,
    to: contactEmail,
    replyTo,
    subject,
    html,
  });
}

export async function sendCustomerConfirmationEmail({
  to,
  subject,
  html,
}: CustomerConfirmationParams) {
  const { smtpUser } = getEmailConfig();

  return createGmailTransport().sendMail({
    from: `Nexa Digital Agency <${smtpUser}>`,
    to,
    subject,
    html,
  });
}
