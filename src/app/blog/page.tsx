import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

import { investorBlogPosts } from "@/lib/blog";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  return {
    title: `South Delhi Real Estate Guides | ${site.brand.name}`,
    description:
      "Practical South Delhi real estate guides for buyers reviewing Greater Kailash, Defence Colony, Vasant Vihar, Panchsheel Park, Hauz Khas, and nearby prime colonies.",
  };
}

export default async function BlogIndexPage() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (site.slug !== "investor") {
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
            Get Options
          </Link>
        </header>

        <section className="py-16">
          <p className="eyebrow">South Delhi Real Estate Blog</p>
          <h1 className="font-display copy-balance mt-5 max-w-4xl text-[3.6rem] leading-[0.9] text-[var(--textStrong)] md:text-[5.4rem]">
            Clear property guides for better South Delhi buying decisions.
          </h1>
          <p className="lede mt-6 max-w-2xl">
            Practical guides for buyers, investors, founders, families, and NRIs
            reviewing prime South Delhi property.
          </p>
        </section>

        <section className="grid gap-5 pb-16 md:grid-cols-2">
          {investorBlogPosts.map((post) => (
            <article key={post.slug} className="surface-card p-6">
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
                href={`/blog/${post.slug}`}
                className="secondary-button mt-6"
              >
                Read Guide
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
