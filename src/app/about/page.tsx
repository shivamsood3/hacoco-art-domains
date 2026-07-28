import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  return {
    title: `About Us | ${site.brand.name}`,
    description:
      site.slug === "investor"
        ? "About Invest With Hacoco, a private acquisition desk for real estate, land, Dubai market entry and selective global diversification."
        : `About ${site.brand.name}.`,
    alternates: {
      canonical: `https://${site.primaryDomain}/about`,
    },
  };
}

export default async function AboutPage() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const isInvestor = site.slug === "investor";

  return (
    <main className="page-shell min-h-screen">
      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <SiteHeader site={site} activePath="/about" />

        <section className="grid gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow">About Us</p>
            <h1 className="font-display copy-balance mt-5 max-w-5xl text-[3.6rem] leading-[0.88] text-[var(--textStrong)] md:text-[6rem]">
              {isInvestor
                ? "A private acquisition desk for serious real estate capital."
                : "A focused desk for private, high-trust mandates."}
            </h1>
          </div>
          <p className="lede">
            {isInvestor
              ? "Invest With Hacoco helps buyers move from broad interest to a disciplined shortlist across prime homes, land parcels, off plan property, Dubai/UAE market entry and selective international diversification."
              : `${site.brand.name} exists for clients who need discretion, clarity and a more qualified path to counterparties, assets or opportunities.`}
          </p>
        </section>

        <section className="section-band section-band--elevated grid gap-8 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="eyebrow">What We Believe</p>
            <h2 className="font-display mt-4 text-4xl leading-none text-[var(--textStrong)] md:text-5xl">
              Access is only valuable when it is filtered.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[var(--textMuted)]">
            <p>
              The best opportunities are rarely solved by more browsing. They
              require a clear mandate, local context, documentation discipline,
              seller quality and a practical path to execution.
            </p>
            <p>
              Hacoco works as a high-touch acquisition partner. We help frame
              the requirement, qualify what deserves attention and coordinate
              the next serious conversation.
            </p>
            <p>
              We are not trying to become a high-volume listing portal. The
              value is in fewer irrelevant options, better market judgment and
              stronger control before capital is committed.
            </p>
          </div>
        </section>

        {isInvestor ? (
          <section className="section-shell py-14">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Prime residential",
                  copy: "South Delhi homes, builder floors, bungalows, Goa villas and lifestyle-led residential acquisitions.",
                },
                {
                  title: "Land acquisition",
                  copy: "North India corridors including Baghpat, Haridwar, Neemrana, Jewar, Dehradun foothills, Kotabagh and Bejunia.",
                },
                {
                  title: "Global routes",
                  copy: "Dubai property, UAE company setup support and selective France vineyard opportunities for diversification.",
                },
              ].map((item) => (
                <article key={item.title} className="surface-card p-6">
                  <h3 className="text-lg font-semibold text-[var(--textStrong)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--textMuted)]">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="section-band section-band--tint flex flex-col gap-5 p-6 md:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Next Step</p>
            <h2 className="font-display mt-3 text-4xl leading-none text-[var(--textStrong)] md:text-5xl">
              Start with the brief.
            </h2>
          </div>
          <Link href="/contact" className="primary-button">
            Contact Us
          </Link>
        </section>

        <SiteFooter site={site} />
      </div>
    </main>
  );
}
