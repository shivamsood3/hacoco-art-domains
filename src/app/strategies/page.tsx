import type { Metadata } from "next";
import Link from "next/link";

import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
import { strategyComparison, transactionStrategies } from "@/lib/capital-content";
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
          <h1>Different transactions require different underwriting.</h1>
          <p>
            A leased commercial asset, a redevelopment site, a land parcel and a special situation do not deserve the same questions. Hacoco Capital begins by identifying what actually drives value and what could prevent execution.
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

        <section className="capital-section">
          <div className="capital-section__head">
            <p className="capital-eyebrow">Comparison Framework</p>
            <h2>Different transactions require different diligence.</h2>
          </div>
          <div className="capital-comparison" role="table" aria-label="Strategy underwriting comparison">
            <div className="capital-comparison__row capital-comparison__row--head" role="row">
              <span>Strategy</span>
              <span>Primary driver</span>
              <span>What matters most</span>
              <span>Principal risk</span>
              <span>Counterparty</span>
            </div>
            {strategyComparison.map((item) => (
              <div key={item.strategy} className="capital-comparison__row" role="row">
                <strong>{item.strategy}</strong>
                <span>{item.driver}</span>
                <span>{item.matters}</span>
                <span>{item.risk}</span>
                <span>{item.counterparty}</span>
              </div>
            ))}
          </div>
        </section>

        <CapitalFooter site={site} />
      </div>
    </main>
  );
}
