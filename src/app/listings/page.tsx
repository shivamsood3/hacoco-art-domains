import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

import { OpportunityIndex } from "@/components/opportunity-index";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  return {
    title: `Land Acquisition Mandates & Private Opportunities | ${site.brand.name}`,
    description:
      "Strategic land acquisition mandates across Baghpat, North India and growth corridors, followed by selected residential and commercial opportunities sourced through Hacoco.",
    alternates: {
      canonical: `https://${site.primaryDomain}/listings`,
    },
    openGraph: {
      title: `Land Acquisition Mandates & Private Opportunities | ${site.brand.name}`,
      description:
        "Review strategic land mandates and selected private real estate opportunities with Hacoco's acquisition desk.",
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
    <main className="investor-site investor-inner min-h-screen">
      <div className="investor-container">
        <SiteHeader site={site} activePath="/listings" />

        <section className="opportunity-index-hero">
          <p className="investor-eyebrow">Land &amp; Private Opportunity Book</p>
          <h1>
            Land mandates first.
            <br />
            Private real estate next.
          </h1>
          <p>
            Hacoco originates strategic land for companies, developers,
            institutions and private capital. Current land mandates appear
            first, followed by selected residential and commercial inventory.
            Sensitive records remain available only to qualified parties.
          </p>
        </section>

        <section className="opportunity-index-section">
          <OpportunityIndex />
        </section>

        <section className="opportunity-private-cta">
          <div>
            <p className="investor-eyebrow">Private Inventory</p>
            <h2>
              Not every mandate is shown publicly.
            </h2>
            <p>
              Share your buying requirement for access to relevant private
              opportunities and owner-led conversations.
            </p>
          </div>
          <Link href="/contact" className="investor-button">
            Speak to Hacoco
          </Link>
        </section>

        <SiteFooter site={site} />
      </div>
    </main>
  );
}
