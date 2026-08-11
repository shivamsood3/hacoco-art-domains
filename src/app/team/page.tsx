import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  CommodityFooter,
  CommodityNavbar,
} from "@/components/commodity-site-renderer";
import { getSiteConfigFromHeaders } from "@/lib/hostname";
import { hacocoTeam } from "@/lib/team-content";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (site.slug !== "advisory") {
    return {};
  }

  const title = "Leadership Team | Hacoco Advisory";
  const description =
    "Meet the director-led team responsible for commodity mandate review, transaction structuring, origination and counterparty development at Hacoco Advisory.";

  return {
    title,
    description,
    alternates: { canonical: `https://${site.primaryDomain}/team` },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${site.primaryDomain}/team`,
      images: site.seo.ogImage ? [{ url: site.seo.ogImage }] : undefined,
    },
  };
}

export default async function TeamPage() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (site.slug !== "advisory") {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Hacoco Advisory Leadership Team",
    url: `https://${site.primaryDomain}/team`,
    about: {
      "@type": "Organization",
      name: "Hacoco Advisory",
      url: `https://${site.primaryDomain}`,
      employee: hacocoTeam.map((person) => ({
        "@type": "Person",
        name: person.name,
        jobTitle: person.role,
        sameAs: person.linkedIn ? [person.linkedIn] : undefined,
      })),
    },
  };

  return (
    <main className="commodity-page commodity-team-page overflow-x-hidden">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
      <div className="mx-auto max-w-[90rem] px-4 pb-6 sm:px-6 lg:px-8">
        <CommodityNavbar site={site} />

        <section className="commodity-team-hero">
          <p className="commodity-eyebrow">Leadership</p>
          <h1>The desk is run by its directors.</h1>
          <p>
            Hacoco Advisory is deliberately director-led. Qualified mandates are
            reviewed, structured and progressed by accountable people with a
            clear view of the counterparty, procedure and commercial risk.
          </p>
        </section>

        <section className="commodity-team-profiles" aria-label="Hacoco Advisory directors">
          {hacocoTeam.map((person, index) => (
            <article key={person.name}>
              <div>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{person.role}</p>
              </div>
              <h2>{person.name}</h2>
              <p>{person.advisoryFocus}</p>
              {person.linkedIn ? (
                <a href={person.linkedIn} rel="noopener noreferrer" target="_blank">
                  LinkedIn profile
                </a>
              ) : null}
            </article>
          ))}
        </section>

        <section className="commodity-team-operating">
          <div>
            <p className="commodity-eyebrow">How Clients Work With Us</p>
            <h2>Senior involvement from the first review.</h2>
          </div>
          <div>
            <p>
              Every mandate is handled directly by a director. There is no
              anonymous intake layer between a serious requirement and the person
              responsible for assessing whether Hacoco can support it.
            </p>
            <p>
              We work with end buyers, refiners, producers, sellers, authorised
              mandate holders, trading houses, storage operators and terminal
              counterparties. A first review produces a substantive next step or
              a clear decision that the requirement is outside our scope.
            </p>
          </div>
        </section>

        <section className="commodity-team-principles">
          {[
            {
              title: "Mandate first",
              copy: "Product, specification, volume, route, client role and commercial terms are defined before sourcing begins.",
            },
            {
              title: "Authority before circulation",
              copy: "We do not circulate unverified offers or distribute transaction documents without appropriate consent.",
            },
            {
              title: "A clear answer",
              copy: "If a mandate, procedure or counterparty is not suitable for support, we aim to say so at the first review.",
            },
          ].map((principle, index) => (
            <article key={principle.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </section>

        <section className="commodity-cta commodity-team-cta">
          <div>
            <p className="commodity-eyebrow">Trade Desk</p>
            <h2>Bring the mandate, not a chain of forwarded documents.</h2>
          </div>
          <div>
            <p>
              Share the product, specification, volume, frequency, origin,
              destination, delivery basis, timeline, payment terms and your role.
            </p>
            <Link className="commodity-button" href="/#lead-form">
              Submit a trade requirement
            </Link>
          </div>
        </section>

        <CommodityFooter site={site} />
      </div>
    </main>
  );
}
