import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo-structured-data";
import { getInvestorBlogPost, investorBlogPosts } from "@/lib/blog";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

type BlogPostPageProps = {
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
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getInvestorBlogPost(slug);
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (!post || site.slug !== "investor") {
    return {};
  }

  const canonicalUrl = `https://${site.primaryDomain}/blog/${post.slug}`;

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
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const { slug } = await params;
  const post = getInvestorBlogPost(slug);

  if (site.slug !== "investor" || !post) {
    notFound();
  }

  const baseUrl = `https://${site.primaryDomain}`;
  const canonicalUrl = `${baseUrl}/blog/${post.slug}`;

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
      <main className="page-shell min-h-screen">
        <div className="mx-auto max-w-4xl px-5 py-8 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between border-b border-subtle pb-8">
          <Link href="/blog" className="text-sm text-[var(--textMuted)] hover:text-[var(--textStrong)]">
            Back to guides
          </Link>
          <Link href="/#lead-form" className="primary-button">
            Get Options
          </Link>
        </header>

        <article className="py-14">
          <p className="eyebrow">{post.readTime}</p>
          <h1 className="font-display copy-balance mt-5 text-[3.4rem] leading-[0.9] text-[var(--textStrong)] md:text-[5rem]">
            {post.title}
          </h1>
          <p className="lede mt-6">{post.description}</p>

          <div className="mt-7 flex flex-wrap gap-2">
            {post.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-subtle bg-[var(--bgSurface)] px-3 py-1 text-xs text-[var(--textMuted)]"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="mt-12 space-y-10">
            {post.sections.map((section) => (
              <section key={section.heading} className="surface-card p-6 md:p-8">
                <h2 className="font-display text-4xl leading-none text-[var(--textStrong)]">
                  {section.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-8 text-[var(--textMuted)]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
        </div>
      </main>
    </>
  );
}
