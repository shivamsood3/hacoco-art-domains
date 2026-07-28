import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";

import { LeadForm } from "@/components/lead-form";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  return {
    title: `Contact Us | ${site.brand.name}`,
    description:
      site.slug === "investor"
        ? "Contact Invest With Hacoco for curated property, land, Dubai, Goa, South Delhi and global diversification opportunities."
        : `Contact ${site.brand.name}.`,
    alternates: {
      canonical: `https://${site.primaryDomain}/contact`,
    },
  };
}

export default async function ContactPage() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  return (
    <main className="page-shell min-h-screen">
      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <SiteHeader site={site} activePath="/contact" />

        <section className="grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Contact Us</p>
            <h1 className="font-display copy-balance mt-5 max-w-4xl text-[3.6rem] leading-[0.88] text-[var(--textStrong)] md:text-[6rem]">
              Tell us what you want to acquire.
            </h1>
            <p className="lede mt-6 max-w-2xl">
              Share the market, ticket size, asset type and timing. A clear
              mandate helps us respond with a sharper next step.
            </p>

            <div className="mt-8 grid gap-3">
              <div className="surface-card p-5">
                <p className="eyebrow">Email</p>
                <Link
                  href={`mailto:${site.footer.email}`}
                  className="mt-3 block text-lg font-semibold text-[var(--textStrong)]"
                >
                  {site.footer.email}
                </Link>
              </div>
              <div className="surface-card-soft p-5">
                <p className="eyebrow">Useful Brief</p>
                <p className="mt-3 text-sm leading-7 text-[var(--textMuted)]">
                  Include location, budget, timeline, intended use, hold period
                  and any non-negotiables around title, yield, size or access.
                </p>
              </div>
            </div>
          </div>

          <LeadForm site={site} compact={site.slug === "investor"} />
        </section>

        <SiteFooter site={site} />
      </div>
    </main>
  );
}
