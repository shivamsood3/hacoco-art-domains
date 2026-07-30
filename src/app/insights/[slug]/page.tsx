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
          <p className="capital-eyebrow">{insight.minutes}</p>
          <h1>{insight.title}</h1>
          <p className="capital-article__lede">{insight.description}</p>

          {insight.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <section>
            <h2>Practical implication</h2>
            <p>
              The right next step is not to request every available file. It is to define whether the opportunity fits mandate, role, timing and risk capacity. If that answer is unclear, capital should wait.
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
