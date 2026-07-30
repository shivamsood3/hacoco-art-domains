import type { Metadata } from "next";
import Link from "next/link";

import { CapitalForm } from "@/components/capital-form";
import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
import { activeCapitalMandates, underwritingPillars } from "@/lib/capital-content";
import { getCapitalSiteOrNotFound } from "@/lib/capital-routing";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCapitalSiteOrNotFound();

  return {
    title: `Deploy Capital | ${site.brand.name}`,
    description:
      "Submit a private real estate capital mandate for larger acquisitions, income assets, land, development, redevelopment and special situations.",
    alternates: { canonical: `https://${site.primaryDomain}/capital` },
  };
}

export default async function CapitalMandatePage() {
  const site = await getCapitalSiteOrNotFound();

  return (
    <main className="capital-site capital-inner">
      <div className="capital-shell">
        <CapitalHeader activePath="/capital" site={site} />

        <section className="capital-page-hero">
          <p className="capital-eyebrow">Deploy Capital</p>
          <h1>Private capital deserves a mandate before it deserves a shortlist.</h1>
          <p>
            Hacoco Capital works with principals and advisers who want fewer, better-qualified real estate conversations across larger private transactions.
          </p>
        </section>

        <section className="capital-section capital-split">
          <div>
            <p className="capital-eyebrow">Mandate Fit</p>
            <h2>Useful for capital that already knows what weak opportunities look like.</h2>
          </div>
          <div className="capital-copy-stack">
            <p>
              The best first conversation is not about available assets. It is about the role the capital is meant to play. Income, appreciation, preservation, development upside and strategic land exposure create different sourcing filters.
            </p>
            <p>
              Hacoco Capital reviews mandate, ticket size, geography, asset class, risk tolerance and timing before introducing opportunities. We do not present private mandates as public inventory.
            </p>
            <p>
              This page is designed for serious capital allocations, typically starting around INR 25 Cr, with a stronger fit for INR 50 Cr to INR 500 Cr private real estate conversations.
            </p>
          </div>
        </section>

        <section className="capital-section">
          <div className="capital-section__head">
            <p className="capital-eyebrow">How We Screen</p>
            <h2>Every mandate is filtered before the market is widened.</h2>
          </div>
          <div className="capital-underwriting__grid">
            {underwritingPillars.map((pillar) => (
              <article key={pillar.title}>
                <span>{pillar.title}</span>
                <p>{pillar.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="capital-section capital-mandates">
          <div>
            <p className="capital-eyebrow">Active Capital Mandates</p>
            <h2>{activeCapitalMandates.title}</h2>
            <p>{activeCapitalMandates.description}</p>
            <Link className="capital-text-link" href="/strategies">
              Review transaction strategies
            </Link>
          </div>
          <div className="capital-empty-state capital-empty-state--dark">
            <span>Private</span>
            <h3>No public mandate directory.</h3>
            <p>{activeCapitalMandates.emptyState}</p>
          </div>
        </section>

        <section className="capital-form-section" id="mandate">
          <CapitalForm site={site} kind="deploy" />
        </section>

        <CapitalFooter site={site} />
      </div>
    </main>
  );
}
