import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
      images: [{ url: "/og-investwithhacoco.png", width: 1200, height: 630, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${site.brand.name}`,
      description: page.description,
      images: ["/og-investwithhacoco.png"],
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
    <main className="page-shell min-h-screen">
      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between border-b border-subtle pb-8">
          <Link href="/" className="font-display text-3xl text-[var(--textStrong)]">
            {site.brand.name}
          </Link>
          <Link href="/#lead-form" className="primary-button">
            Start Brief
          </Link>
        </header>

        <article className="py-14">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="font-display copy-balance mt-5 max-w-5xl text-[3.3rem] leading-[0.92] text-[var(--textStrong)] md:text-[5rem]">
            {page.title}
          </h1>
          <p className="lede mt-6 max-w-3xl">{page.description}</p>

          <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-[1.4rem] border border-subtle bg-[var(--bgTint)]">
            <Image
              alt={page.image.alt}
              className="h-full w-full object-cover"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1100px"
              src={page.image.src}
            />
          </div>

          <section className="mt-8 grid gap-3 md:grid-cols-4">
            {page.highlights.map((highlight) => (
              <div key={highlight} className="surface-card-soft p-4">
                <p className="text-sm font-medium leading-6 text-[var(--textStrong)]">
                  {highlight}
                </p>
              </div>
            ))}
          </section>

          <div className="mt-12 grid gap-5">
            {page.sections.map((section) => (
              <section key={section.heading} className="surface-card p-6 md:p-8">
                <h2 className="font-display text-4xl leading-none text-[var(--textStrong)]">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-[var(--textMuted)]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="section-band section-band--elevated mt-12 flex flex-col gap-5 p-6 md:p-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="eyebrow">Market Brief</p>
              <h2 className="font-display mt-3 text-4xl leading-none text-[var(--textStrong)]">
                Want a shortlist in this market?
              </h2>
            </div>
            <Link href="/#lead-form" className="primary-button">
              Share Your Brief
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}
