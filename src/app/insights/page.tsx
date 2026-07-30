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
  const [featured, ...notes] = capitalInsights;
  const categories = Array.from(new Set(capitalInsights.map((insight) => insight.category)));

  return (
    <main className="capital-site capital-inner">
      <div className="capital-shell">
        <CapitalHeader activePath="/insights" site={site} />

        <section className="capital-page-hero">
          <p className="capital-eyebrow">Hacoco Capital Insights</p>
          <h1>Transaction notes for private real estate capital.</h1>
          <p>
            A focused publication on origination, underwriting, private dispositions, income durability, land, development and large-ticket execution.
          </p>
        </section>

        <section className="capital-section">
          <div className="capital-featured-note">
            <p className="capital-eyebrow">Featured Note</p>
            <Link href={`/insights/${featured.slug}`}>
              <span>{featured.category} / {featured.minutes}</span>
              <h2>{featured.title}</h2>
              <p>{featured.thesis}</p>
              <small>Published {featured.published} / Updated {featured.updated}</small>
            </Link>
          </div>
        </section>

        <section className="capital-section">
          <div className="capital-section__head">
            <p className="capital-eyebrow">Publication Index</p>
            <h2>Notes by transaction topic.</h2>
          </div>
          <div className="capital-insight-categories">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
          <div className="capital-insight-list">
            {notes.map((insight) => (
              <Link key={insight.slug} href={`/insights/${insight.slug}`}>
                <span>{insight.category} / {insight.minutes}</span>
                <h2>{insight.title}</h2>
                <p>{insight.thesis}</p>
                <small>Published {insight.published} / Updated {insight.updated}</small>
              </Link>
            ))}
          </div>
        </section>

        <CapitalFooter site={site} />
      </div>
    </main>
  );
}
