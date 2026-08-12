"use client";

import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useState } from "react";

import {
  investorListings,
  isLandListing,
  landListings,
  nonLandListings,
} from "@/lib/listings";

const markets = [
  "All markets",
  ...Array.from(
    new Set(
      investorListings.map((listing) => {
        if (listing.location.includes("Delhi")) return "Delhi";
        if (listing.location.includes("Goa")) return "Goa";
        if (listing.location.includes("Dubai")) return "Dubai";
        if (
          listing.location.includes("Rajasthan") ||
          listing.location.includes("Expressway") ||
          listing.location.includes("NCR")
        ) {
          return "Growth corridors";
        }
        return "Other";
      }),
    ),
  ),
];

const assetClasses = [
  "All asset classes",
  ...Array.from(new Set(investorListings.map((listing) => listing.category))),
];

export function OpportunityIndex() {
  const [market, setMarket] = useState(markets[0]);
  const [assetClass, setAssetClass] = useState(assetClasses[0]);
  const deferredMarket = useDeferredValue(market);
  const deferredAssetClass = useDeferredValue(assetClass);

  const listings = investorListings.filter((listing) => {
    const listingMarket = getMarket(listing.location);
    const matchesMarket =
      deferredMarket === "All markets" || listingMarket === deferredMarket;
    const matchesClass =
      deferredAssetClass === "All asset classes" ||
      listing.category === deferredAssetClass;

    return matchesMarket && matchesClass;
  });

  return (
    <>
      <div className="opportunity-filters" aria-label="Opportunity filters">
        <label>
          <span>Market</span>
          <select value={market} onChange={(event) => setMarket(event.target.value)}>
            {markets.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <label>
          <span>Asset class</span>
          <select
            value={assetClass}
            onChange={(event) => setAssetClass(event.target.value)}
          >
            {assetClasses.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </label>

        <p aria-live="polite">
          {listings.length} {listings.length === 1 ? "opportunity" : "opportunities"}
        </p>
      </div>

      {listings.length ? (
        <div className="opportunity-groups">
          <OpportunityGroup
            eyebrow="Land Acquisition"
            title="Strategic land mandates"
            copy="Land opportunities are shown first for corporate, institutional, development and long-duration acquisition mandates. Detailed site material is released after qualification."
            listings={listings.filter(isLandListing)}
          />
          <OpportunityGroup
            eyebrow="Private Real Estate"
            title="Residential and commercial opportunities"
            copy="Selected prime residential, income, lifestyle and global property mandates."
            listings={listings.filter((listing) => !isLandListing(listing))}
          />
        </div>
      ) : (
        <div className="opportunity-empty">
          <h2>No public opportunities match this view.</h2>
          <p>
            Speak to Hacoco about private inventory or reset the filters to
            review the full opportunity book.
          </p>
        </div>
      )}
    </>
  );
}

function OpportunityGroup({
  eyebrow,
  title,
  copy,
  listings,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  listings: typeof landListings | typeof nonLandListings;
}) {
  if (!listings.length) return null;

  return (
    <section className="opportunity-group">
      <div className="opportunity-group__heading">
        <div>
          <p className="investor-eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>
        <p>{copy}</p>
      </div>
      <div className="opportunity-grid">
        {listings.map((listing) => (
          <Link
            className="opportunity-card"
            href={`/opportunities/${listing.slug}`}
            key={listing.slug}
          >
            <div className="opportunity-card__image">
              <Image
                alt={listing.imageAlt}
                className="object-cover"
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                src={listing.image}
              />
            </div>
            <div className="opportunity-card__meta">
              <p>{listing.location}</p>
              <span>{listing.status}</span>
            </div>
            <h2>{listing.title}</h2>
            <div className="opportunity-card__facts">
              <span>{listing.category}</span>
              {listing.size ? <span>{listing.size}</span> : null}
              <strong>{listing.price}</strong>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function getMarket(location: string) {
  if (location.includes("Delhi")) return "Delhi";
  if (location.includes("Goa")) return "Goa";
  if (location.includes("Dubai")) return "Dubai";
  if (
    location.includes("Baghpat") ||
    location.includes("Khekra") ||
    location.includes("Haridwar") ||
    location.includes("Neemrana") ||
    location.includes("Jaipur") ||
    location.includes("Rajasthan") ||
    location.includes("Expressway") ||
    location.includes("NCR")
  ) {
    return "Growth corridors";
  }
  return "Other";
}
