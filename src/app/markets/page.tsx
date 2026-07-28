import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getSiteConfigFromHeaders } from "@/lib/hostname";
import { investorMarketPages, investorMarketsBasePath } from "@/lib/investor-detail-pages";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const canonical = `https://${site.primaryDomain}${investorMarketsBasePath}`;

  return {
    title: `Real Estate Markets | ${site.brand.name}`,
    description:
      "Hacoco market dossiers for South Delhi homes, Delhi NCR off plan, Dubai property, Goa villas, North India land corridors and selected diversification markets.",
    alternates: { canonical },
    openGraph: {
      title: `Real Estate Markets | ${site.brand.name}`,
      description:
        "Market dossiers for serious real estate investors reviewing India, Dubai and selected diversification opportunities.",
      url: canonical,
      type: "website",
      images: [
        {
          url: `https://${site.primaryDomain}/og-investwithhacoco.png`,
          width: 1200,
          height: 630,
          type: "image/png",
        },
      ],
    },
  };
}

export default async function MarketsPage() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (site.slug !== "investor") {
    notFound();
  }

  const leadMarkets = investorMarketPages.slice(0, 4);
  const corridorMarkets = investorMarketPages.slice(4);

  return (
    <main className="investor-site investor-inner min-h-screen">
      <div className="investor-container">
        <SiteHeader site={site} activePath="/markets" />

        <section className="investor-index-hero">
          <p className="investor-eyebrow">Markets</p>
          <h1>Market context before capital commitment.</h1>
          <p>
            Hacoco studies markets as operating environments: who buys there,
            what drives value, where liquidity is real, and which risks should
            be visible before a shortlist is built.
          </p>
        </section>

        <section className="investor-market-index" aria-label="Lead markets">
          {leadMarkets.map((market, index) => (
            <article className="investor-market-index__feature" key={market.slug}>
              <Link
                className="investor-market-index__image"
                href={`${investorMarketsBasePath}/${market.slug}`}
              >
                <Image
                  alt={market.image.alt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 900px) 100vw, 50vw"
                  src={market.image.src}
                />
              </Link>
              <div>
                <p className="investor-eyebrow">
                  0{index + 1} / {market.eyebrow}
                </p>
                <h2>{market.title}</h2>
                <p>{market.description}</p>
                <Link
                  className="investor-text-link"
                  href={`${investorMarketsBasePath}/${market.slug}`}
                >
                  Read market dossier
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="investor-market-index__corridors">
          <div>
            <p className="investor-eyebrow">Growth Corridors</p>
            <h2>Land and specialist diversification need slower judgement.</h2>
          </div>
          <div>
            {corridorMarkets.map((market) => (
              <Link href={`${investorMarketsBasePath}/${market.slug}`} key={market.slug}>
                <span>{market.eyebrow}</span>
                <strong>{market.title}</strong>
                <small>{market.description}</small>
              </Link>
            ))}
          </div>
        </section>

        <section className="opportunity-private-cta">
          <div>
            <p className="investor-eyebrow">Market Brief</p>
            <h2>Need a market narrowed to your mandate?</h2>
            <p>
              Share the geography, ticket size, holding period and intended use.
              Hacoco will respond with the next useful question or relevant
              opportunity.
            </p>
          </div>
          <Link className="investor-button" href="/contact">
            Speak to Hacoco
          </Link>
        </section>

        <SiteFooter site={site} />
      </div>
    </main>
  );
}
