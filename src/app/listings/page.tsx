import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getSiteConfigFromHeaders } from "@/lib/hostname";
import { investorListings } from "@/lib/listings";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  return {
    title: `Curated Property Listings | ${site.brand.name}`,
    description:
      "Curated property listings across South Delhi, Goa, Dubai, Hyderabad, Jaipur, Neemrana and North India land corridors.",
    alternates: {
      canonical: `https://${site.primaryDomain}/listings`,
    },
    openGraph: {
      title: `Curated Property Listings | ${site.brand.name}`,
      description:
        "Review selected real estate and land opportunities with Hacoco's private acquisition desk.",
      url: `https://${site.primaryDomain}/listings`,
      images: [
        {
          url: `https://${site.primaryDomain}/og-investwithhacoco.png`,
          width: 1200,
          height: 630,
          type: "image/png",
        },
      ],
    },
  };
}

export default async function ListingsPage() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (site.slug !== "investor") {
    notFound();
  }

  return (
    <main className="page-shell min-h-screen">
      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <SiteHeader site={site} activePath="/listings" />

        <section className="py-14 text-center">
          <p className="eyebrow">Curated Listings</p>
          <h1 className="font-display copy-balance mx-auto mt-5 max-w-5xl text-[3.6rem] leading-[0.88] text-[var(--textStrong)] md:text-[6.2rem]">
            Private property opportunities, edited for serious buyers.
          </h1>
          <p className="lede mx-auto mt-6 max-w-3xl">
            A selected view of residential, commercial, villa, plot and land
            mandates across India and Dubai. Availability, pricing and diligence
            are confirmed through direct inquiry.
          </p>
        </section>

        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {investorListings.map((listing) => (
            <article key={listing.slug} className="surface-card group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bgTint)]">
                <Image
                  alt={`${listing.title}, ${listing.location}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  src={listing.image}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-[var(--textSoft)]">
                    {listing.category}
                  </p>
                  <span className="rounded-full bg-[var(--bgTint)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--textStrong)]">
                    {listing.badge}
                  </span>
                </div>
                <h2 className="font-display mt-4 text-[2.15rem] leading-none text-[var(--textStrong)]">
                  {listing.title}
                </h2>
                <p className="mt-2 text-sm font-medium text-[var(--textStrong)]">
                  {listing.location}
                </p>
                <p className="mt-4 text-sm leading-7 text-[var(--textMuted)]">
                  {listing.summary}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-[var(--textMuted)]">
                  <span className="surface-chip px-3 py-1">{listing.price}</span>
                  {listing.size ? <span className="surface-chip px-3 py-1">{listing.size}</span> : null}
                  {listing.bedrooms ? <span className="surface-chip px-3 py-1">{listing.bedrooms}</span> : null}
                  {listing.bathrooms ? <span className="surface-chip px-3 py-1">{listing.bathrooms}</span> : null}
                </div>
                <Link href={`/contact?listing=${listing.slug}`} className="secondary-button mt-6">
                  Request Details
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="section-band section-band--elevated mt-14 flex flex-col gap-5 p-6 md:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Private Inventory</p>
            <h2 className="font-display mt-3 max-w-3xl text-4xl leading-none text-[var(--textStrong)] md:text-5xl">
              Not every mandate is shown publicly.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--textMuted)]">
              Share your buying brief if you are looking for a specific colony,
              ticket size, land parcel, villa profile or Dubai allocation.
            </p>
          </div>
          <Link href="/contact" className="primary-button">
            Share Brief
          </Link>
        </section>

        <SiteFooter site={site} />
      </div>
    </main>
  );
}
