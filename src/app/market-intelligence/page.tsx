import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { investorBlogPosts, investorInsightsBasePath } from "@/lib/blog";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  return {
    title: `Market Intelligence | ${site.brand.name}`,
    description:
      "Hacoco real estate intelligence covering South Delhi property, Delhi NCR, Dubai, Goa and North India land acquisition.",
    alternates: {
      canonical: `https://${site.primaryDomain}${investorInsightsBasePath}`,
    },
  };
}

export default async function MarketIntelligencePage() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const [featuredPost, ...otherPosts] = investorBlogPosts;
  const categories = [
    "South Delhi",
    "NCR",
    "Dubai",
    "Goa",
    "Land",
    "Portfolio Strategy",
  ];

  if (site.slug !== "investor") {
    notFound();
  }

  return (
    <main className="investor-site investor-inner min-h-screen">
      <div className="investor-container">
        <SiteHeader site={site} activePath="/market-intelligence" />

        <section className="intelligence-index-hero">
          <p className="investor-eyebrow">Hacoco Intelligence</p>
          <h1>
            See the market
            <br />
            behind the listing.
          </h1>
          <p>
            Field notes and investment analysis for buyers reviewing South
            Delhi, NCR, Dubai, Goa and North India land.
          </p>
        </section>

        <section className="intelligence-publication">
          <div>
            <p className="investor-eyebrow">Latest Analysis</p>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.description}</p>
            <Link
              className="investor-text-link"
              href={`${investorInsightsBasePath}/${featuredPost.slug}`}
            >
              Read featured analysis
            </Link>
          </div>
          <div>
            <p className="investor-eyebrow">Research Areas</p>
            <div className="intelligence-publication__categories">
              {categories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="intelligence-index">
          {otherPosts.map((post, index) => (
            <article className="intelligence-index__article" key={post.slug}>
              <Link
                className="intelligence-index__image"
                href={`${investorInsightsBasePath}/${post.slug}`}
              >
                <Image
                  alt={post.image.alt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 900px) 100vw, 48vw"
                  src={post.image.src}
                />
              </Link>
              <div>
                <p className="investor-eyebrow">
                  0{index + 2} / {post.readTime}
                </p>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <Link
                  href={`${investorInsightsBasePath}/${post.slug}`}
                  className="investor-text-link"
                >
                  Read the analysis
                </Link>
              </div>
            </article>
          ))}
        </section>

        <SiteFooter site={site} />
      </div>
    </main>
  );
}
