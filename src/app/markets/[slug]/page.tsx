import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { InvestorDetailView } from "@/components/investor-detail-view";
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

  return {
    title: `${page.title} | ${site.brand.name}`,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${page.title} | ${site.brand.name}`,
      description: page.description,
      url: canonicalUrl,
      type: "website",
      images: [{ url: ogImageUrl, width: 1200, height: 630, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${site.brand.name}`,
      description: page.description,
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

  return (
    <InvestorDetailView
      activePath="/#markets"
      ctaEyebrow="Market Brief"
      page={page}
      site={site}
    />
  );
}
