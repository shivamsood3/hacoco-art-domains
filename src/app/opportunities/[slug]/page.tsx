import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo-structured-data";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getSiteConfigFromHeaders } from "@/lib/hostname";
import { getInvestorListing, investorListings } from "@/lib/listings";

type OpportunityPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return investorListings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({
  params,
}: OpportunityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = getInvestorListing(slug);
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (!listing || site.slug !== "investor") {
    return {};
  }

  const canonicalUrl = `https://${site.primaryDomain}/opportunities/${listing.slug}`;
  const imageUrl = new URL(listing.image, canonicalUrl).toString();

  return {
    title: `${listing.title}, ${listing.location} | Hacoco`,
    description: listing.summary,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${listing.title} | Invest With Hacoco`,
      description: listing.summary,
      type: "article",
      url: canonicalUrl,
      images: [{ url: imageUrl, alt: listing.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${listing.title} | Invest With Hacoco`,
      description: listing.summary,
      images: [imageUrl],
    },
  };
}

export default async function OpportunityPage({
  params,
}: OpportunityPageProps) {
  const { slug } = await params;
  const listing = getInvestorListing(slug);
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (!listing || site.slug !== "investor") {
    notFound();
  }

  const url = `https://${site.primaryDomain}/opportunities/${listing.slug}`;

  return (
    <main className="investor-site investor-inner">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Offer",
          name: listing.title,
          description: listing.summary,
          url,
          availability:
            listing.status === "Sold"
              ? "https://schema.org/SoldOut"
              : "https://schema.org/InStock",
          itemOffered: {
            "@type": "Place",
            name: listing.title,
            address: listing.location,
            image: new URL(listing.image, url).toString(),
          },
          seller: {
            "@type": "Organization",
            name: site.brand.name,
            url: `https://${site.primaryDomain}`,
          },
        }}
      />

      <div className="investor-container">
        <SiteHeader site={site} activePath="/listings" />

        <article className="opportunity-detail">
          <div className="opportunity-detail__intro">
            <div>
              <p className="investor-eyebrow">{listing.location}</p>
              <h1>{listing.title}</h1>
            </div>
            <div className="opportunity-detail__intro-meta">
              <p>{listing.price}</p>
              <span>{listing.status}</span>
            </div>
          </div>

          <div className="opportunity-detail__image">
            <Image
              alt={listing.imageAlt}
              className="object-cover"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 1440px"
              src={listing.image}
            />
          </div>

          <div className="opportunity-detail__facts">
            <Fact label="Asset class" value={listing.category} />
            <Fact label="Price" value={listing.price} />
            {listing.size ? <Fact label="Area" value={listing.size} /> : null}
            {listing.bedrooms ? <Fact label="Bedrooms" value={listing.bedrooms} /> : null}
            <Fact label="Status" value={listing.status} />
          </div>

          <div className="opportunity-detail__body">
            <section>
              <p className="investor-eyebrow">Overview</p>
              <h2>A closer look at the opportunity.</h2>
              <p>{listing.summary}</p>
              <p>
                Detailed property information, ownership documents and the
                current transaction position are shared directly with qualified
                buyers. No assumption should replace independent legal,
                technical and tax advice.
              </p>
            </section>

            <aside>
              <p className="investor-eyebrow">Investment Review</p>
              {listing.considerations.map((consideration) => (
                <p key={consideration}>{consideration}</p>
              ))}
            </aside>
          </div>

          <section className="opportunity-detail__cta">
            <div>
              <p className="investor-eyebrow">Private Enquiry</p>
              <h2>Request the property brief.</h2>
              <p>
                Speak to Hacoco for availability, transaction context and the
                next diligence step.
              </p>
            </div>
            <Link
              className="investor-button"
              href={`/contact?listing=${listing.slug}`}
            >
              Speak to Hacoco
            </Link>
          </section>

          <Link className="investor-text-link opportunity-detail__back" href="/listings">
            Return to Opportunities
          </Link>
        </article>

        <SiteFooter site={site} />
      </div>
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span>{label}</span>
      <p>{value}</p>
    </div>
  );
}
