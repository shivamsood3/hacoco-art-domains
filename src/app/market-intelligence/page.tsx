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
      "Institutional real estate intelligence for South Delhi, Dubai, Goa, Dubai free zone setup and North India land acquisition.",
    alternates: {
      canonical: `https://${site.primaryDomain}${investorInsightsBasePath}`,
    },
  };
}

export default async function MarketIntelligencePage() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (site.slug !== "investor") {
    notFound();
  }

  return (
    <main className="page-shell min-h-screen">
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-6 lg:px-8">
        <SiteHeader site={site} activePath="/market-intelligence" />

        <section className="py-16">
          <p className="eyebrow">Market Intelligence</p>
          <h1 className="font-display copy-balance mt-5 max-w-5xl text-[3.4rem] leading-[0.92] text-[var(--textStrong)] md:text-[5.2rem]">
            Research for property, land and Dubai market entry decisions.
          </h1>
          <p className="lede mt-6 max-w-3xl">
            Long-form acquisition notes for Indian family capital reviewing
            South Delhi, Dubai, Goa and North India land corridors.
          </p>
        </section>

        <section className="grid gap-5 pb-16 md:grid-cols-2">
          {investorBlogPosts.map((post) => (
            <article key={post.slug} className="surface-card overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bgTint)]">
                <Image
                  alt={post.image.alt}
                  className="h-full w-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  src={post.image.src}
                />
              </div>
              <div className="p-6">
                <p className="eyebrow">{post.readTime}</p>
                <h2 className="font-display mt-4 text-4xl leading-none text-[var(--textStrong)]">
                  {post.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-[var(--textMuted)]">
                  {post.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {post.keywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="rounded-full border border-subtle bg-[var(--bgSurface)] px-3 py-1 text-xs text-[var(--textMuted)]"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                <Link
                  href={`${investorInsightsBasePath}/${post.slug}`}
                  className="secondary-button mt-6"
                >
                  Read Intelligence
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
