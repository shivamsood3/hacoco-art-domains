import type { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
import { JsonLd } from "@/components/seo-structured-data";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import {
  capitalCommitteeOutputs,
  capitalGovernancePrinciples,
  capitalMandateArchitecture,
  familyOfficeFaq,
  investorFamilyOfficeWorkstreams,
} from "@/lib/family-office-content";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

export async function generateMetadata(): Promise<Metadata> {
  const site = getSiteConfigFromHeaders(await headers());

  if (site.slug === "advisory") return {};

  const capital = site.slug === "capital";
  const title = capital
    ? "Family Office Real Estate Mandates | Hacoco Capital"
    : "Family Office Property Acquisition | Invest With Hacoco";
  const description = capital
    ? "Private real estate origination and transaction advisory for family offices reviewing acquisitions, income assets, land, development and special situations in India."
    : "Mandate-led property and land acquisition support for family offices seeking private opportunities across Delhi, North India, Dubai and selected markets.";
  const url = `https://${site.primaryDomain}/family-offices`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: [{ url: `https://${site.primaryDomain}${site.seo.ogImage}` }],
    },
  };
}

export default async function FamilyOfficesPage() {
  const site = getSiteConfigFromHeaders(await headers());

  if (site.slug === "advisory") notFound();

  const url = `https://${site.primaryDomain}/family-offices`;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name:
                site.slug === "capital"
                  ? "Family Office Real Estate Transaction Advisory"
                  : "Family Office Property Acquisition Support",
              url,
              provider: {
                "@type": "Organization",
                name: site.brand.name,
                url: `https://${site.primaryDomain}`,
              },
              audience: {
                "@type": "BusinessAudience",
                audienceType:
                  "Family offices, principals, investment teams and appointed advisers",
              },
            },
            {
              "@type": "FAQPage",
              mainEntity: familyOfficeFaq.map((item) => ({
                "@type": "Question",
                name: item.question,
                acceptedAnswer: { "@type": "Answer", text: item.answer },
              })),
            },
          ],
        }}
      />
      {site.slug === "capital" ? (
        <CapitalFamilyOfficePage site={site} />
      ) : (
        <InvestorFamilyOfficePage site={site} />
      )}
    </>
  );
}

function CapitalFamilyOfficePage({ site }: { site: ReturnType<typeof getSiteConfigFromHeaders> }) {
  return (
    <main className="capital-site capital-inner">
      <div className="capital-shell">
        <CapitalHeader activePath="/family-offices" site={site} />

        <section className="capital-page-hero">
          <p className="capital-eyebrow">Family Office Mandates</p>
          <h1>Private real estate decisions, organised for principal-level scrutiny.</h1>
          <p>
            Hacoco Capital supports family offices, founders and appointed advisers on larger or complex real estate mandates where origination, downside review, information control and execution discipline matter.
          </p>
        </section>

        <section className="capital-section capital-split">
          <div>
            <p className="capital-eyebrow">Mandate Before Market</p>
            <h2>Allocation intent determines what deserves attention.</h2>
          </div>
          <div className="capital-copy-stack">
            <p>
              A family office may be seeking contracted income, inflation-sensitive real assets, strategic land, development upside, legacy ownership or a specific solution for an existing property. Those objectives require different sourcing filters and different downside tests.
            </p>
            <p>
              We begin by documenting the role real estate is expected to play, the capital and time available, the risks the family will not accept and who has authority to advance a transaction. Only then does origination become useful.
            </p>
          </div>
        </section>

        <section className="capital-section">
          <div className="capital-section__head">
            <p className="capital-eyebrow">Mandate Architecture</p>
            <h2>A controlled sequence from objective to execution.</h2>
          </div>
          <div className="capital-strategy-grid capital-strategy-grid--compact">
            {capitalMandateArchitecture.map((item, index) => (
              <article className="capital-strategy-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="capital-section capital-underwriting">
          <div>
            <p className="capital-eyebrow">Investment Committee Readiness</p>
            <h2>Decision material should separate evidence from assertion.</h2>
            <p>
              Hacoco organises transaction information so principals and advisers can see what is known, what is assumed, what remains unresolved and which specialist conclusions are still required.
            </p>
          </div>
          <div className="capital-underwriting__grid">
            {capitalCommitteeOutputs.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="capital-section">
          <div className="capital-section__head">
            <p className="capital-eyebrow">Governance</p>
            <h2>Clear roles protect both discretion and decision quality.</h2>
          </div>
          <div className="capital-two-paths capital-two-paths--three">
            {capitalGovernancePrinciples.map(([title, copy]) => (
              <article key={title}>
                <span>Principle</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <FamilyOfficeFaq className="capital" />

        <section className="capital-final-cta">
          <div>
            <p className="capital-eyebrow">Private Conversation</p>
            <h2>Define the mandate before reviewing the market.</h2>
          </div>
          <Link className="capital-button" href="/capital">
            Submit Capital Mandate
          </Link>
        </section>

        <CapitalFooter site={site} />
      </div>
    </main>
  );
}

function InvestorFamilyOfficePage({ site }: { site: ReturnType<typeof getSiteConfigFromHeaders> }) {
  return (
    <main className="investor-site investor-inner">
      <div className="investor-container">
        <SiteHeader activePath="/family-offices" site={site} />

        <section className="opportunity-index-hero">
          <p className="investor-eyebrow">Family Office Acquisition Desk</p>
          <h1>Property sourcing with a mandate, not a feed.</h1>
          <p>
            Hacoco helps family offices and principals source, compare and progress private real estate and land acquisitions across Delhi, North India, Dubai and selected markets.
          </p>
        </section>

        <section className="investor-section">
          <div className="investor-section-heading">
            <div>
              <p className="investor-eyebrow">Acquisition Workstreams</p>
              <h2>Different assets require different fieldwork.</h2>
            </div>
            <p>
              We narrow the market around the family&apos;s objective, decision process, holding horizon and practical execution constraints.
            </p>
          </div>
          <div className="investor-family-office-grid">
            {investorFamilyOfficeWorkstreams.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="investor-section investor-family-office-model">
          <div>
            <p className="investor-eyebrow">Operating Model</p>
            <h2>One mandate, a controlled opportunity set.</h2>
          </div>
          <div>
            {[
              ["Frame", "Define purpose, market, ticket, hold period, income requirement, exclusions and decision authority."],
              ["Originate", "Source public, private, owner-led and relationship-led opportunities relevant to the mandate."],
              ["Screen", "Test location, ownership context, pricing, documentation readiness, use case and future buyer logic."],
              ["Coordinate", "Organise site review, specialist diligence, counterparty questions, negotiation and next-step responsibilities."],
              ["Report", "Maintain a concise view of opportunities considered, reasons to reject, open issues and decisions required."],
            ].map(([title, copy], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="investor-section investor-family-office-fit">
          <div>
            <p className="investor-eyebrow">Where We Add Value</p>
            <h2>Useful when local detail can change the investment outcome.</h2>
          </div>
          <div className="investor-family-office-grid">
            {[
              ["North India land", "Parcel access, ownership fragmentation, revenue records, land use, infrastructure relevance and future use require field-level review."],
              ["South Delhi", "Block, lane, land share, parking, redevelopment history, title and seller context can matter more than finish."],
              ["Income assets", "Lease quality, tenant durability, operating costs, building condition and exit depth determine whether yield is durable."],
              ["Remote mandates", "Overseas principals need a local process that compresses options, records open questions and coordinates appointed specialists."],
            ].map(([title, copy]) => (
              <article key={title}>
                <span>Context</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <FamilyOfficeFaq className="investor" />

        <section className="opportunity-private-cta">
          <div>
            <p className="investor-eyebrow">Begin With A Brief</p>
            <h2>Tell us what the family wants real estate to achieve.</h2>
            <p>
              A useful first note covers objective, geography, ticket range, asset type, hold period, timing and decision authority.
            </p>
          </div>
          <Link className="investor-button" href="/contact">
            Discuss A Mandate
          </Link>
        </section>

        <SiteFooter site={site} />
      </div>
    </main>
  );
}

function FamilyOfficeFaq({ className }: { className: "capital" | "investor" }) {
  return (
    <section className={className === "capital" ? "capital-section" : "investor-section"}>
      <div className={className === "capital" ? "capital-section__head" : "investor-section-heading"}>
        <div>
          <p className={className === "capital" ? "capital-eyebrow" : "investor-eyebrow"}>Direct Answers</p>
          <h2>Questions family offices ask before engagement.</h2>
        </div>
      </div>
      <div className={className === "capital" ? "capital-faq-list" : "investor-family-office-faq"}>
        {familyOfficeFaq.map((item) => (
          <details key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
