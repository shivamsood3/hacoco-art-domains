import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";

import { getSiteConfigFromHeaders } from "@/lib/hostname";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  return {
    title: `Terms of Use | ${site.brand.name}`,
    description: `Terms of use for ${site.brand.name}.`,
  };
}

export default async function TermsPage() {
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
          <p className="eyebrow">Terms of Use</p>
          <h1 className="font-display mt-5 text-[3.5rem] leading-[0.9] text-[var(--textStrong)] md:text-[5rem]">
            Terms of Use
          </h1>
          <p className="lede mt-6">
            By using {site.primaryDomain}, you agree to these terms for
            {site.brand.name}.
          </p>

          <div className="mt-10 space-y-5 text-base leading-8 text-[var(--textMuted)]">
            <p>
              The content on this website is provided for general information and
              inquiry purposes only. It is not financial, legal, tax, investment,
              valuation, or professional advice.
            </p>
            <p>
              Submitting a form does not create an advisory, brokerage, agency, or
              client relationship unless a separate written agreement is executed.
            </p>
            <p>
              Any {verticalLabel} opportunity, shortlist, introduction, or
              discussion is subject to availability, independent review, due
              diligence, documentation, and final agreement between the relevant
              parties.
            </p>
            <p>
              You are responsible for appointing qualified legal, tax, financial,
              valuation, and compliance advisors before making any purchase,
              sale, investment, or commitment.
            </p>
            <p>
              We may update these terms from time to time. Continued use of this
              website means you accept the current version.
            </p>
            <p>
              For questions, email {site.footer.email}.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
