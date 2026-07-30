import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
import { capitalInsights, transactionStrategies } from "@/lib/capital-content";
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

  const relatedInsight =
    capitalInsights.find((insight) =>
      insight.category.toLowerCase().includes(strategy.eyebrow.toLowerCase()) ||
      insight.title.toLowerCase().includes(strategy.title.split(" ")[0].toLowerCase()),
    ) ?? capitalInsights[0];

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
            <h2>What the strategy is</h2>
            <p>{strategy.focus}</p>
            <p>
              Hacoco Capital is most useful when the transaction is sensitive, larger in scale or too context-specific for ordinary distribution. The first step is to understand the asset, counterparty, desired outcome and reason the transaction exists.
            </p>
          </section>

          <section>
            <h2>Who it may suit</h2>
            <p>{strategy.maySuit}</p>
          </section>

          <section>
            <h2>What drives value</h2>
            <p>{strategy.valueDriver}</p>
          </section>

          <section>
            <h2>How Hacoco assesses it</h2>
            <p>
              We start by separating the transaction story from the transaction evidence. The desk looks at counterparty authority, economics, documentation, market support, execution sequence and whether the opportunity can reach the right capital without unnecessary circulation.
            </p>
          </section>

          <section>
            <h2>Core diligence</h2>
            <p>{strategy.diligence}</p>
            <p>
              Specialist legal, tax, technical, valuation and financial advisers may be required depending on the facts. Hacoco helps frame the workstream but does not replace independent professional review.
            </p>
          </section>

          <section>
            <h2>Key risks</h2>
            <p>{strategy.risk}</p>
          </section>

          <section>
            <h2>Common misconception</h2>
            <p>{strategy.misconception}</p>
          </section>

          <section>
            <h2>When Hacoco may decline</h2>
            <p>{strategy.decline}</p>
          </section>

          <section>
            <h2>Related insight</h2>
            <p>{relatedInsight.description}</p>
            <Link className="capital-text-link" href={`/insights/${relatedInsight.slug}`}>
              Read: {relatedInsight.title}
            </Link>
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
