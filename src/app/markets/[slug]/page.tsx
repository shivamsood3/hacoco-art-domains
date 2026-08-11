import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { InvestorDetailView } from "@/components/investor-detail-view";
import { JsonLd } from "@/components/seo-structured-data";
import {
  getInvestorMarketPage,
  investorMarketPages,
  investorMarketsBasePath,
} from "@/lib/investor-detail-pages";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

type MarketPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return investorMarketPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: MarketPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getInvestorMarketPage(slug);
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (!page || site.slug !== "investor") {
    return {};
  }

  const canonicalUrl = `https://${site.primaryDomain}${investorMarketsBasePath}/${page.slug}`;
  const ogImageUrl = new URL("/og-investwithhacoco.png", canonicalUrl).toString();
  const isSouthDelhi = page.slug === "south-delhi-homes";
  const metadataTitle = isSouthDelhi
    ? `South Delhi Property Broker & Advisor | ${site.brand.name}`
    : `${page.title} | ${site.brand.name}`;
  const metadataDescription = isSouthDelhi
    ? "Private South Delhi property broker and acquisition advisor for builder floors, bungalows and select plots across Defence Colony, GK, Vasant Vihar, Panchsheel Park and adjoining prime colonies."
    : page.description;

  return {
    title: metadataTitle,
    description: metadataDescription,
    keywords: page.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: metadataTitle,
      description: metadataDescription,
      url: canonicalUrl,
      type: "website",
      images: [{ url: ogImageUrl, width: 1200, height: 630, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description: metadataDescription,
      images: [ogImageUrl],
    },
  };
}

export default async function MarketPage({ params }: MarketPageProps) {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const { slug } = await params;
  const page = getInvestorMarketPage(slug);

  if (site.slug !== "investor" || !page) {
    notFound();
  }

  const canonicalUrl = `https://${site.primaryDomain}${investorMarketsBasePath}/${page.slug}`;
  const areaServed =
    page.slug === "south-delhi-homes"
      ? [
          "South Delhi",
          "Defence Colony",
          "Greater Kailash",
          "Vasant Vihar",
          "Panchsheel Park",
          "Anand Niketan",
          "Jor Bagh",
          "Sunder Nagar",
          "Golf Links",
        ]
      : [page.title];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              "@id": `${canonicalUrl}/#service`,
              name:
                page.slug === "south-delhi-homes"
                  ? "South Delhi Property Brokerage and Acquisition Advisory"
                  : `${page.title} Property Acquisition Advisory`,
              description: page.description,
              url: canonicalUrl,
              serviceType:
                page.slug === "south-delhi-homes"
                  ? "Property brokerage, sourcing and acquisition advisory"
                  : "Private real estate sourcing and acquisition advisory",
              areaServed: areaServed.map((area) => ({
                "@type": "Place",
                name: area,
              })),
              provider: {
                "@type": "Organization",
                "@id": `https://${site.primaryDomain}/#organization`,
                name: site.brand.name,
                url: `https://${site.primaryDomain}`,
              },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: `https://${site.primaryDomain}`,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Markets",
                  item: `https://${site.primaryDomain}${investorMarketsBasePath}`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: page.title,
                  item: canonicalUrl,
                },
              ],
            },
          ],
        }}
      />
      <InvestorDetailView
        activePath="/#markets"
        ctaEyebrow="Market Brief"
        page={page}
        site={site}
      />
    </>
  );
}
