type ContactConfirmationData = {
  name: string;
  company: string;
  service: string;
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

export function buildContactConfirmationEmail(data: ContactConfirmationData) {
  const name = escapeHtml(data.name);
  const company = escapeHtml(data.company || "Not provided");
  const service = escapeHtml(data.service);
  const enquiryId = escapeHtml(data.enquiryId);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />
  <title>Thank You for Contacting Nexa Digital Agency</title>
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
    style="
      background-color: #f4f6f8;
      padding: 40px 16px;
    "
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
                padding: 30px 32px;
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

          <!-- Main -->
          <tr>
            <td style="padding: 36px 32px 20px;">

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
                Enquiry Received
              </div>

              <h1
                style="
                  margin: 18px 0 10px;
                  font-size: 28px;
                  line-height: 1.3;
                  color: #101828;
                "
              >
                Thank you for contacting us, ${name}.
              </h1>

              <p
                style="
                  margin: 0;
                  color: #667085;
                  font-size: 15px;
                  line-height: 1.7;
                "
              >
                Your enquiry has been delivered to the portfolio inbox.
                The portfolio owner can review it and respond using the
                email address you provided.
              </p>

            </td>
          </tr>

          <!-- Enquiry summary -->
          <tr>
            <td style="padding: 10px 32px 0;">

              <h2
                style="
                  margin: 0 0 14px;
                  font-size: 17px;
                  color: #101828;
                "
              >
                Your Enquiry
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
                    width="38%"
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
                    Status
                  </td>

                  <td
                    style="
                      padding: 14px 16px;
                      color: #101828;
                      font-size: 14px;
                      font-weight: 600;
                    "
                  >
                    Received
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- What happens next -->
          <tr>
            <td style="padding: 30px 32px 0;">

              <h2
                style="
                  margin: 0 0 14px;
                  font-size: 17px;
                  color: #101828;
                "
              >
                What happens next?
              </h2>

              <div
                style="
                  padding: 20px;
                  background-color: #f8fafc;
                  border: 1px solid #e4e7ec;
                  border-radius: 12px;
                "
              >

                <div
                  style="
                    font-size: 14px;
                    line-height: 1.8;
                    color: #344054;
                  "
                >
                  <strong style="color: #f65011;">
                    01
                  </strong>
                  &nbsp; Enquiry received
                </div>

                <div
                  style="
                    margin-top: 8px;
                    font-size: 14px;
                    line-height: 1.8;
                    color: #344054;
                  "
                >
                  <strong style="color: #f65011;">
                    02
                  </strong>
                  &nbsp; The portfolio owner reviews your message
                </div>

                <div
                  style="
                    margin-top: 8px;
                    font-size: 14px;
                    line-height: 1.8;
                    color: #344054;
                  "
                >
                  <strong style="color: #f65011;">
                    03
                  </strong>
                  &nbsp; A response may be sent to your email
                </div>

              </div>

            </td>
          </tr>

          <!-- Enquiry ID -->
          <tr>
            <td style="padding: 30px 32px;">

              <div
                style="
                  padding: 16px;
                  background-color: #fff8f5;
                  border: 1px solid #f65011;
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
                  Enquiry Reference
                </div>

                <div
                  style="
                    margin-top: 6px;
                    color: #101828;
                    font-size: 13px;
                    font-family: monospace;
                    word-break: break-all;
                  "
                >
                  ${enquiryId}
                </div>

              </div>

            </td>
          </tr>

          <!-- Closing -->
          <tr>
            <td style="padding: 0 32px 32px;">

              <p
                style="
                  margin: 0;
                  color: #667085;
                  font-size: 14px;
                  line-height: 1.7;
                "
              >
                Thank you for giving us the opportunity
                to understand your requirement. We look forward
                to speaking with you.
              </p>

              <p
                style="
                  margin: 22px 0 0;
                  color: #101828;
                  font-size: 14px;
                  line-height: 1.6;
                  font-weight: 600;
                "
              >
                Regards,<br />
                Nexa Digital Agency
              </p>

            </td>
          </tr>

          <!-- Footer -->
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
                  line-height: 1.6;
                "
              >
                This is an automated confirmation from the
                Nexa Digital Agency website. Please do not reply to this
                email if you did not submit an enquiry.
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
