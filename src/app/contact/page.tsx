import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";

import { CapitalForm } from "@/components/capital-form";
import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
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
        ? "Speak to Hacoco about a private real estate acquisition, property investment or land requirement across Delhi, NCR, Dubai and selected markets."
        : `Contact ${site.brand.name}.`,
    alternates: {
      canonical: `https://${site.primaryDomain}/contact`,
    },
  };
}

export default async function ContactPage() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (site.slug === "capital") {
    return (
      <main className="capital-site capital-inner">
        <div className="capital-shell">
          <CapitalHeader activePath="/private-desk" site={site} />

          <section className="capital-page-hero">
            <p className="capital-eyebrow">Contact Hacoco Capital</p>
            <h1>Start with the private desk, not a public listing request.</h1>
            <p>
              Share the minimum useful context. A mandate, role and timing are enough for Hacoco Capital to assess the correct next step.
            </p>
          </section>

          <section className="capital-section capital-split">
            <div>
              <p className="capital-eyebrow">Direct Contact</p>
              <h2>For sensitive conversations, email remains available.</h2>
            </div>
            <div className="capital-copy-stack">
              <p>
                Email: <Link className="capital-text-link" href={`mailto:${site.footer.email}`}>{site.footer.email}</Link>
              </p>
              <p>
                Do not send confidential documents through a public form. Hacoco Capital will request additional material only if fit, permission and confidentiality expectations are clear.
              </p>
            </div>
          </section>

          <section className="capital-form-section">
            <CapitalForm site={site} kind="transaction" />
          </section>

          <CapitalFooter site={site} />
        </div>
      </main>
    );
  }

  if (site.slug === "investor") {
    return (
      <main className="investor-site investor-inner">
        <div className="investor-container">
          <SiteHeader site={site} activePath="/contact" />

          <section className="investor-contact">
            <div className="investor-contact__copy">
              <p className="investor-eyebrow">Speak to Hacoco</p>
              <h1>Tell us what you are looking for.</h1>
              <p>
                A market, budget and property type are enough to begin. Hacoco
                will respond with the next useful question or opportunity.
              </p>

              <div className="investor-contact__details">
                <div>
                  <span>Email</span>
                  <Link href={`mailto:${site.footer.email}`}>
                    {site.footer.email}
                  </Link>
                </div>
                <div>
                  <span>Useful context</span>
                  <p>Location / Budget / Property type / Timing</p>
                </div>
              </div>
            </div>

            <LeadForm className="investor-form investor-contact__form" compact site={site} />
          </section>

          <SiteFooter site={site} />
        </div>
      </main>
    );
  }

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

          <LeadForm site={site} />
        </section>

        <SiteFooter site={site} />
      </div>
    </main>
  );
}
