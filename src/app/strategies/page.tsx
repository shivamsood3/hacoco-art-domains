import type { Metadata } from "next";
import Link from "next/link";

import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
import { transactionStrategies } from "@/lib/capital-content";
import { getCapitalSiteOrNotFound } from "@/lib/capital-routing";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCapitalSiteOrNotFound();

  return {
    title: `Transaction Strategies | ${site.brand.name}`,
    description:
      "Private real estate transaction strategies across acquisitions, income assets, development, land, special situations and disposition advisory.",
    alternates: { canonical: `https://${site.primaryDomain}/strategies` },
  };
}

export default async function StrategiesPage() {
  const site = await getCapitalSiteOrNotFound();

  return (
    <main className="capital-site capital-inner">
      <div className="capital-shell">
        <CapitalHeader activePath="/strategies" site={site} />

        <section className="capital-page-hero">
          <p className="capital-eyebrow">Strategies</p>
          <h1>Private real estate strategies where access is not enough.</h1>
          <p>
            Each strategy requires a different filter for risk, counterparty quality, documentation, hold period and execution path.
          </p>
        </section>

        <section className="capital-section">
          <div className="capital-strategy-grid">
            {transactionStrategies.map((strategy) => (
              <Link key={strategy.slug} className="capital-strategy-card" href={`/strategies/${strategy.slug}`}>
                <span>{strategy.eyebrow}</span>
                <h2>{strategy.title}</h2>
                <p>{strategy.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        <CapitalFooter site={site} />
      </div>
    </main>
  );
}
