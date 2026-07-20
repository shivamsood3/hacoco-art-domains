import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";

import { getSiteConfigFromHeaders } from "@/lib/hostname";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  return {
    title: `Privacy Policy | ${site.brand.name}`,
    description: `Privacy policy for ${site.brand.name}.`,
  };
}

export default async function PrivacyPage() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const verticalLabel = site.vertical === "art" ? "art advisory" : "real estate";

  return (
    <main className="page-shell min-h-screen">
      <div className="mx-auto max-w-4xl px-5 py-8 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between border-b border-subtle pb-8">
          <Link href="/" className="font-display text-3xl text-[var(--textStrong)]">
            {site.brand.name}
          </Link>
          <Link href="/#lead-form" className="primary-button">
            Contact
          </Link>
        </header>

        <article className="py-14">
          <p className="eyebrow">Privacy Policy</p>
          <h1 className="font-display mt-5 text-[3.5rem] leading-[0.9] text-[var(--textStrong)] md:text-[5rem]">
            Privacy Policy
          </h1>
          <p className="lede mt-6">
            This policy explains how {site.brand.name} handles information shared
            through {site.primaryDomain}.
          </p>

          <div className="mt-10 space-y-5 text-base leading-8 text-[var(--textMuted)]">
            <p>
              We collect the details you submit through our forms, including name,
              email, phone number, budget range, preferences, and notes related to
              your {verticalLabel} requirement.
            </p>
            <p>
              We use this information to respond to your inquiry, qualify your
              brief, prepare relevant follow up, maintain internal lead records,
              and improve our website and client process.
            </p>
            <p>
              Form submissions may be sent by email through Resend and may also be
              logged through a Google Sheets webhook for operational backup. We do
              not sell your personal information.
            </p>
            <p>
              Analytics and advertising tools such as GA4, Meta Pixel, and Google
              Ads may be enabled to understand site performance and campaign
              activity. These tools may use cookies or similar identifiers.
            </p>
            <p>
              To request access, correction, or deletion of your submitted details,
              email {site.footer.email}. We will respond as reasonably practical
              based on the nature of the request.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
