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
    title: `Private Real Estate Opportunities | ${site.brand.name}`,
    description:
      "Selected residential, commercial and land opportunities sourced through Hacoco across Delhi, NCR, Dubai, Goa and North India.",
    alternates: {
      canonical: `https://${site.primaryDomain}/listings`,
    },
    openGraph: {
      title: `Private Real Estate Opportunities | ${site.brand.name}`,
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
    <main className="investor-site investor-inner min-h-screen">
      <div className="investor-container">
        <SiteHeader site={site} activePath="/listings" />

        <section className="opportunity-index-hero">
          <p className="investor-eyebrow">Private Opportunity Book</p>
          <h1>
            Opportunities worth
            <br />
            a closer look.
          </h1>
          <p>
            A selection of residential, commercial and land opportunities
            sourced through Hacoco. Some mandates remain private and are shared
            only after a direct buyer conversation.
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
