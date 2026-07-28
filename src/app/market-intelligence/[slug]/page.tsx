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
