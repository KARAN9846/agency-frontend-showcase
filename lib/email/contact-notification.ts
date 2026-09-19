type ContactNotificationData = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
  enquiryId: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function buildContactNotificationEmail(data: ContactNotificationData) {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const company = escapeHtml(data.company || "Not provided");
  const phone = escapeHtml(data.phone || "Not provided");
  const service = escapeHtml(data.service);
  const message = escapeHtml(data.message);
  const enquiryId = escapeHtml(data.enquiryId);

  const submittedAt = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Website Enquiry</title>
</head>

<body
  style="
    margin: 0;
    padding: 0;
    background-color: #f4f6f8;
    font-family: Arial, Helvetica, sans-serif;
    color: #101828;
  "
>
  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="background-color: #f4f6f8; padding: 40px 16px;"
  >
    <tr>
      <td align="center">

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            max-width: 680px;
            background-color: #ffffff;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid #e4e7ec;
          "
        >

          <!-- Header -->
          <tr>
            <td
              style="
                background-color: #101828;
                padding: 28px 32px;
              "
            >
              <div
                style="
                  color: #f65011;
                  font-size: 24px;
                  font-weight: 700;
                  margin-bottom: 6px;
                "
              >
                Nexa Digital Agency
              </div>

              <div
                style="
                  color: #98a2b3;
                  font-size: 11px;
                  font-weight: 600;
                  letter-spacing: 2px;
                  text-transform: uppercase;
                "
              >
                Portfolio Studio
              </div>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding: 32px 32px 20px;">
              <div
                style="
                  display: inline-block;
                  padding: 7px 12px;
                  border-radius: 999px;
                  background-color: #fff3ee;
                  color: #f65011;
                  font-size: 11px;
                  font-weight: 700;
                  letter-spacing: 1px;
                  text-transform: uppercase;
                "
              >
                New Website Enquiry
              </div>

              <h1
                style="
                  margin: 18px 0 8px;
                  font-size: 28px;
                  line-height: 1.25;
                  color: #101828;
                "
              >
                You have a new enquiry
              </h1>

              <p
                style="
                  margin: 0;
                  font-size: 15px;
                  line-height: 1.6;
                  color: #667085;
                "
              >
                Someone has submitted a new enquiry through the Nexa
                website.
              </p>
            </td>
          </tr>

          <!-- Customer -->
          <tr>
            <td style="padding: 10px 32px 0;">
              <h2
                style="
                  margin: 0 0 14px;
                  font-size: 17px;
                  color: #101828;
                "
              >
                Contact Information
              </h2>

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  border: 1px solid #e4e7ec;
                  border-radius: 12px;
                  overflow: hidden;
                "
              >
                <tr>
                  <td
                    width="35%"
                    style="
                      padding: 14px 16px;
                      background-color: #f8fafc;
                      color: #667085;
                      font-size: 13px;
                      font-weight: 600;
                    "
                  >
                    Name
                  </td>

                  <td
                    style="
                      padding: 14px 16px;
                      color: #101828;
                      font-size: 14px;
                    "
                  >
                    ${name}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 14px 16px;
                      background-color: #f8fafc;
                      color: #667085;
                      font-size: 13px;
                      font-weight: 600;
                    "
                  >
                    Email
                  </td>

                  <td
                    style="
                      padding: 14px 16px;
                      color: #101828;
                      font-size: 14px;
                    "
                  >
                    ${email}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 14px 16px;
                      background-color: #f8fafc;
                      color: #667085;
                      font-size: 13px;
                      font-weight: 600;
                    "
                  >
                    Company
                  </td>

                  <td
                    style="
                      padding: 14px 16px;
                      color: #101828;
                      font-size: 14px;
                    "
                  >
                    ${company}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 14px 16px;
                      background-color: #f8fafc;
                      color: #667085;
                      font-size: 13px;
                      font-weight: 600;
                    "
                  >
                    Phone / WhatsApp
                  </td>

                  <td
                    style="
                      padding: 14px 16px;
                      color: #101828;
                      font-size: 14px;
                    "
                  >
                    ${phone}
                  </td>
                </tr>

                <tr>
                  <td
                    style="
                      padding: 14px 16px;
                      background-color: #f8fafc;
                      color: #667085;
                      font-size: 13px;
                      font-weight: 600;
                    "
                  >
                    Service
                  </td>

                  <td
                    style="
                      padding: 14px 16px;
                      color: #f65011;
                      font-size: 14px;
                      font-weight: 700;
                    "
                  >
                    ${service}
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding: 30px 32px 0;">
              <h2
                style="
                  margin: 0 0 14px;
                  font-size: 17px;
                  color: #101828;
                "
              >
                Project Details
              </h2>

              <div
                style="
                  padding: 18px;
                  background-color: #f8fafc;
                  border: 1px solid #e4e7ec;
                  border-radius: 12px;
                  color: #344054;
                  font-size: 14px;
                  line-height: 1.7;
                  white-space: pre-wrap;
                "
              >
                ${message}
              </div>
            </td>
          </tr>

          <!-- Metadata -->
          <tr>
            <td style="padding: 30px 32px;">
              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >
                <tr>
                  <td
                    style="
                      padding: 14px 16px;
                      background-color: #fff8f5;
                      border-radius: 10px;
                    "
                  >
                    <div
                      style="
                        color: #98a2b3;
                        font-size: 11px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                      "
                    >
                      Status
                    </div>

                    <div
                      style="
                        margin-top: 5px;
                        color: #f65011;
                        font-size: 14px;
                        font-weight: 700;
                      "
                    >
                      New
                    </div>
                  </td>

                  <td width="12"></td>

                  <td
                    style="
                      padding: 14px 16px;
                      background-color: #f8fafc;
                      border-radius: 10px;
                    "
                  >
                    <div
                      style="
                        color: #98a2b3;
                        font-size: 11px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: 1px;
                      "
                    >
                      Source
                    </div>

                    <div
                      style="
                        margin-top: 5px;
                        color: #101828;
                        font-size: 14px;
                        font-weight: 700;
                      "
                    >
                      Website
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer info -->
          <tr>
            <td
              style="
                padding: 20px 32px;
                border-top: 1px solid #e4e7ec;
                background-color: #f8fafc;
              "
            >
              <p
                style="
                  margin: 0 0 6px;
                  color: #667085;
                  font-size: 12px;
                "
              >
                Enquiry ID
              </p>

              <p
                style="
                  margin: 0 0 12px;
                  color: #101828;
                  font-size: 12px;
                  font-family: monospace;
                  word-break: break-all;
                "
              >
                ${enquiryId}
              </p>

              <p
                style="
                  margin: 0;
                  color: #98a2b3;
                  font-size: 12px;
                "
              >
                Submitted on ${submittedAt}
              </p>
            </td>
          </tr>

          <!-- Bottom -->
          <tr>
            <td
              align="center"
              style="
                padding: 22px 32px;
                background-color: #101828;
              "
            >
              <p
                style="
                  margin: 0;
                  color: #98a2b3;
                  font-size: 11px;
                  line-height: 1.5;
                "
              >
                This notification was generated automatically by the
                Nexa Digital Agency website.
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`;
}
