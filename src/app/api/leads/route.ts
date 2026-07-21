import { NextResponse } from "next/server";

import { getSiteConfigByDomain } from "@/lib/site-config";
import {
  createLeadEmailHtml,
  getDestinationEmail,
  type LeadSubmission,
  submitLead,
  validateLeadPayload,
} from "@/lib/leads";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Partial<LeadSubmission>;
    const validation = validateLeadPayload(payload);

    if (!validation.success) {
      return NextResponse.json(
        { ok: false, message: validation.message },
        { status: 400 },
      );
    }

    const submission = validation.data;

    if (submission.companyWebsite) {
      return NextResponse.json({
        ok: true,
        message: "Thank you. Your request has been received.",
      });
    }

    const site = getSiteConfigByDomain(submission.domain);
    const destinationEmail = getDestinationEmail(submission.leadTag);

    await submitLead(submission, {
      destinationEmail,
      subject: `${submission.leadTag} | ${submission.name} | ${site.brand.name}`,
      html: createLeadEmailHtml(submission, site.brand.name),
    });

    return NextResponse.json({
      ok: true,
      message: site.success.message,
    });
  } catch (error) {
    console.error("Lead submission failed", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          "We could not submit your request just now. Please try again or email us directly.",
      },
      { status: 500 },
    );
  }
}
