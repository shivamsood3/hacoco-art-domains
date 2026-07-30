import type { Metadata } from "next";
import Link from "next/link";

import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
import { capitalInsights } from "@/lib/capital-content";
import { getCapitalSiteOrNotFound } from "@/lib/capital-routing";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCapitalSiteOrNotFound();

  return {
    title: `Insights | ${site.brand.name}`,
    description:
      "Private real estate capital notes on mandates, transaction memoranda, income assets, risk and large-ticket property decisions.",
    alternates: { canonical: `https://${site.primaryDomain}/insights` },
  };
}

export default async function CapitalInsightsPage() {
  const site = await getCapitalSiteOrNotFound();

  return (
    <main className="capital-site capital-inner">
      <div className="capital-shell">
        <CapitalHeader activePath="/insights" site={site} />

        <section className="capital-page-hero">
          <p className="capital-eyebrow">Insights</p>
          <h1>Investment notes for private real estate decisions.</h1>
          <p>
            Not a generic blog. Short, practical notes on how serious capital should think before entering private real estate conversations.
          </p>
        </section>

        <section className="capital-section">
          <div className="capital-insight-list">
            {capitalInsights.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`}>
                <span>{insight.minutes}</span>
                <h2>{insight.title}</h2>
                <p>{insight.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <CapitalFooter site={site} />
      </div>
    </main>
  );
}
