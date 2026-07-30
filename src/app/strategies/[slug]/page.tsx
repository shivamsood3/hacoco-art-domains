import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
import { transactionStrategies } from "@/lib/capital-content";
import { getCapitalSiteOrNotFound } from "@/lib/capital-routing";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return transactionStrategies.map((strategy) => ({ slug: strategy.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const site = await getCapitalSiteOrNotFound();
  const { slug } = await params;
  const strategy = transactionStrategies.find((item) => item.slug === slug);

  if (!strategy) {
    return {};
  }

  return {
    title: `${strategy.title} | ${site.brand.name}`,
    description: strategy.summary,
    alternates: { canonical: `https://${site.primaryDomain}/strategies/${strategy.slug}` },
  };
}

export default async function StrategyDetailPage({ params }: PageProps) {
  const site = await getCapitalSiteOrNotFound();
  const { slug } = await params;
  const strategy = transactionStrategies.find((item) => item.slug === slug);

  if (!strategy) {
    notFound();
  }

  return (
    <main className="capital-site capital-inner">
      <div className="capital-shell">
        <CapitalHeader activePath="/strategies" site={site} />

        <article className="capital-article">
          <Link className="capital-text-link" href="/strategies">
            Back to strategies
          </Link>
          <p className="capital-eyebrow">{strategy.eyebrow}</p>
          <h1>{strategy.title}</h1>
          <p className="capital-article__lede">{strategy.summary}</p>

          <section>
            <h2>Where this strategy applies</h2>
            <p>{strategy.focus}</p>
            <p>
              Hacoco Capital is most useful when the transaction is too private, too large or too context-sensitive for ordinary listing-led distribution. The first step is to understand the asset, counterparty, desired outcome and reason the transaction exists.
            </p>
          </section>

          <section>
            <h2>Risk lens</h2>
            <p>{strategy.risk}</p>
            <p>
              We help frame what needs independent professional review, including title, tax, legal, technical, tenancy, permissions and structuring considerations. Hacoco Capital does not replace qualified legal, tax, valuation or regulatory advice.
            </p>
          </section>

          <section>
            <h2>How the desk would approach it</h2>
            <p>
              The process begins with a confidential brief, then moves to controlled assessment. If the opportunity or capital mandate is credible, Hacoco Capital may support sourcing, counterparty qualification, transaction preparation and introduction sequencing.
            </p>
          </section>

          <div className="capital-article__cta">
            <Link className="capital-button" href="/private-desk">
              Discuss With Private Desk
            </Link>
          </div>
        </article>

        <CapitalFooter site={site} />
      </div>
    </main>
  );
}
