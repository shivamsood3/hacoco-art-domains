import type { Metadata } from "next";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { InvestorDetailView } from "@/components/investor-detail-view";
import {
  getInvestorServicePage,
  investorServicesBasePath,
  investorServicePages,
} from "@/lib/investor-detail-pages";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return investorServicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getInvestorServicePage(slug);
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (!page || site.slug !== "investor") {
    return {};
  }

  const canonicalUrl = `https://${site.primaryDomain}${investorServicesBasePath}/${page.slug}`;
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

export default async function ServicePage({ params }: ServicePageProps) {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const { slug } = await params;
  const page = getInvestorServicePage(slug);

  if (site.slug !== "investor" || !page) {
    notFound();
  }

  return (
    <InvestorDetailView
      activePath="/services"
      ctaEyebrow="Acquisition Brief"
      page={page}
      site={site}
    />
  );
}
