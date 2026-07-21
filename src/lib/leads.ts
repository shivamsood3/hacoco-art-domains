import { getResend } from "./resend";

export type LeadSubmission = {
  name: string;
  email: string;
  phone: string;
  domain: string;
  companyWebsite: string;
  leadTag: string;
  [key: string]: string;
};

type ValidationResult =
  | { success: true; data: LeadSubmission }
  | { success: false; message: string };

type LeadDeliveryPayload = {
  subject: string;
  html: string;
};

const protectedFields = new Set(["domain", "leadTag", "companyWebsite"]);

export function validateLeadPayload(payload: Partial<LeadSubmission>): ValidationResult {
  if (!payload.name || !payload.email || !payload.phone) {
    return {
      success: false,
      message: "Name, email, and phone are required.",
    };
  }

  if (!payload.domain || !payload.leadTag) {
    return {
      success: false,
      message: "Domain routing information is missing.",
    };
  }

  return {
    success: true,
    data: payload as LeadSubmission,
  };
}

export async function submitLead(
  submission: LeadSubmission,
  delivery: LeadDeliveryPayload & { destinationEmail: string },
) {
  await Promise.all([
    sendLeadEmail(delivery.destinationEmail, delivery.subject, delivery.html),
    sendBackupWebhook(submission),
  ]);
}

export function getDestinationEmail(leadTag: string) {
  switch (leadTag) {
    case "CAP-LEAD":
      return process.env.RESEND_CAPITAL_TO || "advisory@hacococapital.com";
    case "ADV-LEAD":
      return process.env.RESEND_ADVISORY_TO || "shiv@hacocoadvisory.com";
    case "INV-LEAD":
    default:
      return process.env.RESEND_INVESTOR_TO || "shiv@hacococapital.com";
  }
}

export function createLeadEmailHtml(
  submission: LeadSubmission,
  brandName: string,
) {
  const fields = Object.entries(submission).filter(
    ([key]) => !protectedFields.has(key),
  );

  const rows = fields
    .map(
      ([key, value]) => `
        <tr>
          <td style="padding:10px 14px;border-bottom:1px solid #e8dcc4;font-weight:600;text-transform:capitalize;">${sanitize(
            key.replace(/([A-Z])/g, " $1"),
          )}</td>
          <td style="padding:10px 14px;border-bottom:1px solid #e8dcc4;">${sanitize(value)}</td>
        </tr>
      `,
    )
    .join("");

  return `
    <div style="background:#0a0a0a;padding:32px;font-family:Arial,sans-serif;color:#f8f4ee;">
      <h1 style="margin:0 0 12px;font-size:28px;">${sanitize(brandName)} lead received</h1>
      <p style="margin:0 0 20px;color:#d4c29a;">${sanitize(submission.leadTag)} | ${sanitize(submission.domain)}</p>
      <table style="width:100%;border-collapse:collapse;background:#f8f4ee;color:#111;border-radius:12px;overflow:hidden;">
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

async function sendLeadEmail(to: string, subject: string, html: string) {
  const resend = getResend();

  if (!resend) {
    console.warn("Resend not configured. Skipping email delivery.");
    return;
  }

  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "concierge@hacococapital.com",
    to,
    subject,
    html,
  });
}

async function sendBackupWebhook(submission: LeadSubmission) {
  if (!process.env.GOOGLE_SHEETS_WEBHOOK_URL) {
    console.warn("Google Sheets webhook not configured. Skipping backup log.");
    return;
  }

  await fetch(process.env.GOOGLE_SHEETS_WEBHOOK_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      submittedAt: new Date().toISOString(),
      ...submission,
    }),
  });
}

function sanitize(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
