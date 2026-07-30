import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
import { capitalInsights } from "@/lib/capital-content";
import { getCapitalSiteOrNotFound } from "@/lib/capital-routing";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return capitalInsights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const site = await getCapitalSiteOrNotFound();
  const { slug } = await params;
  const insight = capitalInsights.find((item) => item.slug === slug);

  if (!insight) {
    return {};
  }

  return {
    title: `${insight.title} | ${site.brand.name}`,
    description: insight.description,
    alternates: { canonical: `https://${site.primaryDomain}/insights/${insight.slug}` },
    openGraph: {
      title: insight.title,
      description: insight.description,
      url: `https://${site.primaryDomain}/insights/${insight.slug}`,
      type: "article",
    },
  };
}

export default async function CapitalInsightPage({ params }: PageProps) {
  const site = await getCapitalSiteOrNotFound();
  const { slug } = await params;
  const insight = capitalInsights.find((item) => item.slug === slug);

  if (!insight) {
    notFound();
  }

  return (
    <main className="capital-site capital-inner">
      <div className="capital-shell">
        <CapitalHeader activePath="/insights" site={site} />

        <article className="capital-article">
          <Link className="capital-text-link" href="/insights">
            Back to insights
          </Link>
          <p className="capital-eyebrow">{insight.category} / {insight.minutes}</p>
          <h1>{insight.title}</h1>
          <p className="capital-article__lede">{insight.description}</p>
          <div className="capital-article__meta">
            <span>Published {insight.published}</span>
            <span>Updated {insight.updated}</span>
          </div>

          <section className="capital-article__summary">
            <h2>Executive summary</h2>
            <p>{insight.thesis}</p>
          </section>

          <section>
            <h2>Core investment question</h2>
            <p>
              What must be true for this transaction to justify serious time, professional review and capital attention?
            </p>
          </section>

          <section>
            <h2>Transaction context</h2>
            {insight.body.slice(0, 2).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          <section>
            <h2>Analytical framework</h2>
            {insight.body.slice(2).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </section>

          <section>
            <h2>Principal risks</h2>
            <p>
              The most important risks are usually not hidden in the final negotiation. They are visible early through title, counterparty authority, income durability, pricing evidence, execution sequence and exit liquidity.
            </p>
          </section>

          <section>
            <h2>Hacoco view</h2>
            <p>{insight.thesis}</p>
          </section>

          <section>
            <h2>Buyer or owner checklist</h2>
            <ul className="capital-article__checklist">
              <li>Define role, mandate, timing and decision authority.</li>
              <li>Confirm what must be reviewed by independent specialists.</li>
              <li>Separate asking price from transaction evidence.</li>
              <li>Identify the future buyer, tenant or capital partner.</li>
              <li>Decide what information can be shared and with whom.</li>
            </ul>
          </section>

          <section>
            <h2>Related strategy</h2>
            <p>
              This note is most relevant to {insight.category.toLowerCase()} conversations and larger private transactions where preparation can change the quality of counterparties reached.
            </p>
          </section>

          <div className="capital-article__cta">
            <Link className="capital-button" href="/private-desk">
              Speak To Private Desk
            </Link>
          </div>
        </article>

        <CapitalFooter site={site} />
      </div>
    </main>
  );
}
