import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo-structured-data";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import {
  getInvestorBlogPost,
  investorBlogPosts,
  investorInsightsBasePath,
} from "@/lib/blog";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

type InsightPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return investorBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInvestorBlogPost(slug);
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (!post || site.slug !== "investor") {
    return {};
  }

  const canonicalUrl = `https://${site.primaryDomain}${investorInsightsBasePath}/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: canonicalUrl,
      publishedTime: post.publishedAt,
      images: [
        {
          url: post.image.src,
          alt: post.image.alt,
        },
      ],
    },
  };
}

export default async function MarketIntelligenceArticlePage({
  params,
}: InsightPageProps) {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const { slug } = await params;
  const post = getInvestorBlogPost(slug);

  if (site.slug !== "investor" || !post) {
    notFound();
  }

  const baseUrl = `https://${site.primaryDomain}`;
  const canonicalUrl = `${baseUrl}${investorInsightsBasePath}/${post.slug}`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.publishedAt,
          dateModified: post.publishedAt,
          mainEntityOfPage: canonicalUrl,
          url: canonicalUrl,
          image: post.image.src,
          author: {
            "@type": "Organization",
            name: site.brand.name,
            url: baseUrl,
          },
          publisher: {
            "@type": "Organization",
            name: site.brand.name,
            url: baseUrl,
          },
          inLanguage: "en",
        }}
      />
      <main className="investor-site investor-inner min-h-screen">
        <div className="investor-container">
          <SiteHeader site={site} activePath="/market-intelligence" />

          <article className="intelligence-article">
            <header>
              <p className="investor-eyebrow">
                Hacoco Intelligence / {post.readTime}
              </p>
              <h1>{post.title}</h1>
              <p>{post.description}</p>
            </header>

            <div className="intelligence-article__image">
              <Image
                alt={post.image.alt}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 1440px"
                src={post.image.src}
              />
            </div>

            <div className="intelligence-article__meta">
              <span>Published</span>
              <p>
                {new Intl.DateTimeFormat("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                }).format(new Date(post.publishedAt))}
              </p>
              <span>Focus</span>
              <p>{post.keywords.slice(0, 3).join(" / ")}</p>
            </div>

            <section className="intelligence-article__summary">
              <div>
                <p className="investor-eyebrow">Executive Summary</p>
                <h2>The investment question this note answers.</h2>
              </div>
              <div>
                {getArticleSummary(post).map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </section>

            <div className="intelligence-article__body">
              {post.sections.map((section, index) => (
                <section key={section.heading}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2>{section.heading}</h2>
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <section className="intelligence-article__toolkit">
              <div>
                <p className="investor-eyebrow">Buyer Checklist</p>
                <h2>Questions to resolve before capital moves.</h2>
              </div>
              <div className="intelligence-article__checklist">
                {getArticleChecklist(post).map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
              <div>
                <p className="investor-eyebrow">Related Pages</p>
                {getArticleLinks(post).map((item) => (
                  <Link href={item.href} key={item.href}>
                    <span>{item.type}</span>
                    <strong>{item.label}</strong>
                  </Link>
                ))}
              </div>
            </section>

            <section className="intelligence-article__cta">
              <div>
                <p className="investor-eyebrow">Investor Brief</p>
                <h2>Turn research into a live shortlist.</h2>
                <p>Discuss your market, budget and objective directly with Hacoco.</p>
              </div>
              <Link href="/contact" className="investor-button">
                Speak to Hacoco
              </Link>
            </section>
          </article>

          <SiteFooter site={site} />
        </div>
      </main>
    </>
  );
}

function getArticleSummary(post: NonNullable<ReturnType<typeof getInvestorBlogPost>>) {
  const tag = `${post.slug} ${post.title}`.toLowerCase();

  if (tag.includes("dubai")) {
    return [
      "Dubai can be useful for Indian and NRI buyers when the property, business purpose, currency exposure and hold period are planned together.",
      "The correct comparison is not the loudest launch versus another launch. It is whether the completed asset can compete for tenants or resale buyers after service charges, furnishing, vacancy and transaction costs.",
      "Free zone setup should follow the operating model, not the cheapest package. Activity fit, visa requirement, banking readiness and documentation need to be sequenced before commitments are made.",
    ];
  }

  if (tag.includes("goa")) {
    return [
      "Goa is a micro-market and operating-asset decision, not a simple second-home purchase.",
      "The strongest opportunities combine title comfort, village quality, access, management capability, realistic owner use and a rental model that survives conservative assumptions.",
      "Emotional appeal is useful only when the legal, operating and resale logic also works.",
    ];
  }

  if (tag.includes("land")) {
    return [
      "North India land can create meaningful optionality, but only when title, access, land use and future buyer logic are visible before purchase.",
      "Corridor narratives are not enough. The parcel must be assessed by exact location, road approach, mutation, conversion path, ownership structure and realistic holding period.",
      "Land suits patient capital. It is not the right asset for buyers seeking predictable income or quick liquidity.",
    ];
  }

  if (tag.includes("south-delhi")) {
    return [
      "South Delhi is a capital preservation and address-quality market where the durable value sits in plot, block, land share, parking, title and resale depth.",
      "Finish can mislead buyers. The best shortlist separates cosmetic value from structural value before site visits begin.",
      "A serious buyer should compare builder floors, resale assets and redevelopment situations through documentation and micro-location, not only colony name.",
    ];
  }

  if (tag.includes("off-plan") || tag.includes("primary")) {
    return [
      "Primary property can work when the buyer is paid for accepting construction, delivery and market-cycle risk.",
      "The handover-year test matters: the completed asset must compete against future ready stock, not just look attractive at launch.",
      "Developer selection, registration comfort, payment discipline and exit depth are part of the asset, not administrative afterthoughts.",
    ];
  }

  return [
    "Real estate should be allocated by role: preservation, income, growth, lifestyle, currency exposure or long-duration optionality.",
    "South Delhi, Dubai, Goa, primary property, land and vineyards do not solve the same portfolio problem.",
    "Hacoco's job is to compress the market into fewer, better-understood acquisition choices before capital is committed.",
  ];
}

function getArticleChecklist(post: NonNullable<ReturnType<typeof getInvestorBlogPost>>) {
  const tag = `${post.slug} ${post.title}`.toLowerCase();

  if (tag.includes("dubai")) {
    return [
      "Is the mandate ready income, off plan growth, family use, business presence or residency relevance?",
      "What are the service charges, expected net yield, furnishing cost, vacancy assumption and property management plan?",
      "Does the developer or building have enough resale credibility after handover?",
      "Has the buyer aligned banking, source of funds, remittance, tax advice and company setup timing where relevant?",
    ];
  }

  if (tag.includes("goa")) {
    return [
      "Is the asset being bought for personal use, managed rental, hybrid use, hospitality or land banking?",
      "Are title, conversion, construction permissions, access, water and power reviewable by professionals?",
      "Who will manage the property, and what does net owner income look like after realistic costs?",
      "Would the asset still be attractive in a weaker travel season or slower resale market?",
    ];
  }

  if (tag.includes("land")) {
    return [
      "Is the exact parcel identifiable by survey, khasra or title details?",
      "Is access legal, practical and wide enough for the intended use?",
      "What land use, conversion, mutation, ownership and encumbrance checks are required?",
      "Who is the future buyer or user, and why would they pay more later?",
    ];
  }

  if (tag.includes("south-delhi")) {
    return [
      "What is the colony, block, plot size, road width, floor level, parking and land share?",
      "Does the pricing reflect durable land and address value or only expensive finishes?",
      "Are title chain, collaboration, sanctioned plan, completion comfort and parking allocation reviewable?",
      "Would the future resale buyer trust this lane and building?",
    ];
  }

  return [
    "What role does the asset play in the wider portfolio?",
    "What are the liquidity, title, income, execution and exit risks?",
    "What has to be verified before a site visit or payment?",
    "What would make Hacoco reject the opportunity despite attractive surface features?",
  ];
}

function getArticleLinks(post: NonNullable<ReturnType<typeof getInvestorBlogPost>>) {
  const tag = `${post.slug} ${post.title}`.toLowerCase();

  if (tag.includes("dubai")) {
    return [
      { type: "Market", label: "Dubai Property", href: "/markets/dubai-property" },
      { type: "Service", label: "Dubai Property Investment", href: "/services/dubai-property-investment" },
      { type: "Service", label: "Dubai Free Zone Company Setup", href: "/services/dubai-free-zone-company-setup" },
    ];
  }

  if (tag.includes("goa")) {
    return [
      { type: "Market", label: "Goa Villas", href: "/markets/goa-villas" },
      { type: "Service", label: "Goa Villas and Second Homes", href: "/services/goa-villas-second-homes" },
      { type: "Opportunities", label: "Private Opportunities", href: "/listings" },
    ];
  }

  if (tag.includes("land")) {
    return [
      { type: "Service", label: "North India Land Acquisition", href: "/services/north-india-land-acquisition" },
      { type: "Market", label: "Baghpat and Haridwar Belt", href: "/markets/baghpat-haridwar-belt" },
      { type: "Market", label: "Neemrana and DMIC", href: "/markets/neemrana-dmic" },
    ];
  }

  if (tag.includes("south-delhi")) {
    return [
      { type: "Market", label: "South Delhi Homes", href: "/markets/south-delhi-homes" },
      { type: "Service", label: "Prime Homes and Builder Floors", href: "/services/south-delhi-prime-homes-builder-floors" },
      { type: "Opportunities", label: "Private Opportunities", href: "/listings" },
    ];
  }

  return [
    { type: "Services", label: "Real Estate Investment Services", href: "/services" },
    { type: "Markets", label: "Market Dossiers", href: "/markets" },
    { type: "Contact", label: "Share Your Brief", href: "/contact" },
  ];
}
