import Link from "next/link";

import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
import { JsonLd } from "@/components/seo-structured-data";
import {
  hospitalityAssetTypes,
  hospitalityFaq,
  hospitalityServices,
  type HospitalityService,
} from "@/lib/hospitality-content";
import type { SiteConfig } from "@/lib/site-config";

export function HospitalityPage({
  site,
  service,
}: {
  site: SiteConfig;
  service?: HospitalityService;
}) {
  const path = service ? `/hospitality/${service.slug}` : "/hospitality";
  const title = service?.title ?? "Hotel & Hospitality Advisory";
  const description =
    service?.metaDescription ??
    "Hacoco Capital advises hotel buyers, sellers, developers, investors and owners on acquisitions, dispositions, greenfield and brownfield projects, M&A, valuation and on-ground execution.";
  const faqs = service?.faq ?? hospitalityFaq;
  const baseUrl = `https://${site.primaryDomain}`;

  return (
    <main className="capital-site capital-inner">
      <div className="capital-shell">
        <CapitalHeader activePath="/hospitality" site={site} />
        <JsonLd data={buildHospitalitySchema({ baseUrl, path, title, description, faqs, service })} />
        {service ? <HospitalityDetail service={service} /> : <HospitalityHub />}
        <CapitalFooter site={site} />
      </div>
    </main>
  );
}

function HospitalityHub() {
  return (
    <>
      <section className="capital-page-hero">
        <p className="capital-eyebrow">Hotel & Hospitality Practice</p>
        <h1>Hotel transactions need both capital judgement and operating context.</h1>
        <p>
          Hacoco Capital advises hotel buyers, sellers, developers, owners and investors across the full transaction lifecycle: acquisition, disposition, greenfield and brownfield development, M&A, valuation and on-ground execution.
        </p>
        <div className="capital-hero__actions">
          <Link className="capital-button" href="/private-desk">
            Discuss A Hotel Mandate
          </Link>
          <Link className="capital-button capital-button--ghost" href="/transactions">
            Bring A Transaction
          </Link>
        </div>
      </section>

      <section className="capital-section capital-split">
        <div>
          <p className="capital-eyebrow">Two-Sided Hospitality Desk</p>
          <h2>Support for the party buying, and the party preparing to sell.</h2>
        </div>
        <div className="capital-two-paths">
          <article>
            <span>Buy-side</span>
            <h3>Acquire with a clearer view of the hotel business.</h3>
            <p>
              Define the thesis, screen opportunities, test operating assumptions, organise diligence and move toward a qualified bid or acquisition decision.
            </p>
            <Link href="/hospitality/hotel-acquisitions">Explore hotel acquisitions</Link>
          </article>
          <article>
            <span>Sell-side</span>
            <h3>Prepare the asset before the buyer arrives.</h3>
            <p>
              Clarify the sale objective, prepare the information, frame value, identify credible counterparties and control the process through diligence.
            </p>
            <Link href="/hospitality/hotel-sales">Explore hotel sales</Link>
          </article>
        </div>
      </section>

      <section className="capital-section">
        <div className="capital-section__head">
          <p className="capital-eyebrow">Hospitality Services</p>
          <h2>One practice for the decisions that shape hotel value.</h2>
        </div>
        <div className="capital-strategy-grid">
          {hospitalityServices.map((item) => (
            <Link key={item.slug} className="capital-strategy-card" href={`/hospitality/${item.slug}`}>
              <span>{item.eyebrow}</span>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="capital-section capital-split">
        <div>
          <p className="capital-eyebrow">Asset Coverage</p>
          <h2>Hotels of different formats, sizes and stages.</h2>
        </div>
        <div className="capital-copy-stack">
          <p>
            The mandate is defined by the transaction case, not by a single key-count threshold. We can review operating hotels, resorts, boutique assets, serviced apartments, incomplete projects and hospitality-led mixed-use opportunities when the information and counterparty are credible.
          </p>
          <ul className="capital-article__checklist">
            {hospitalityAssetTypes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Coverage is selective and geography is mandate-dependent. Hacoco coordinates with independent legal, tax, technical, valuation and hospitality specialists where the decision requires specialist sign-off.
          </p>
        </div>
      </section>

      <section className="capital-section">
        <div className="capital-section__head">
          <p className="capital-eyebrow">How We Work</p>
          <h2>From hotel brief to a decision that can withstand questions.</h2>
        </div>
        <div className="capital-process">
          {[
            ["01", "Define", "Clarify whether the mandate is acquisition, sale, development, M&A, valuation or execution support."],
            ["02", "Screen", "Test the asset, business, counterparty, market and information quality before wider circulation."],
            ["03", "Underwrite", "Organise commercial, real estate and operating questions with the right independent specialists."],
            ["04", "Progress", "Support qualified conversations, diligence, negotiation and the next decision point."],
          ].map(([number, heading, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{heading}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <HospitalityFaq />
      <HospitalityCta />
    </>
  );
}

function HospitalityDetail({ service }: { service: HospitalityService }) {
  return (
    <article className="capital-article">
      <Link className="capital-text-link" href="/hospitality">
        Back to hotel & hospitality
      </Link>
      <p className="capital-eyebrow">{service.eyebrow}</p>
      <h1>{service.title}</h1>
      <p className="capital-article__lede">{service.intro}</p>

      <section>
        <h2>Who this is for</h2>
        <p>{service.idealFor}</p>
      </section>

      <section>
        <h2>What the advisory can cover</h2>
        <ul className="capital-article__checklist">
          {service.scope.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Questions that matter</h2>
        <ul className="capital-article__checklist">
          {service.diligence.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>What a prepared mandate can produce</h2>
        <ul className="capital-article__checklist">
          {service.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Independent review still matters</h2>
        <p>
          Hacoco Capital provides commercial, transaction and execution support. It does not replace independent legal, tax, technical, statutory valuation, lender or hospitality-operating advice. The right specialists are brought into the process as the mandate requires.
        </p>
      </section>

      <div className="capital-article__cta">
        <Link className="capital-button" href="/private-desk">
          Discuss This Hospitality Mandate
        </Link>
        <Link className="capital-button capital-button--ghost" href="/hospitality">
          View Hospitality Practice
        </Link>
      </div>
      <HospitalityFaq items={service.faq} />
    </article>
  );
}

function HospitalityFaq({ items = hospitalityFaq }: { items?: typeof hospitalityFaq }) {
  return (
    <section className="capital-section">
      <div className="capital-section__head">
        <p className="capital-eyebrow">Common Questions</p>
        <h2>Clear scope makes a better first conversation.</h2>
      </div>
      <div className="capital-copy-stack">
        {items.map((item) => (
          <details key={item.question} className="capital-faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function HospitalityCta() {
  return (
    <section className="capital-final-cta">
      <div>
        <p className="capital-eyebrow">Private Hospitality Desk</p>
        <h2>Bring the hotel decision that needs sharper context.</h2>
      </div>
      <div>
        <Link className="capital-button" href="/private-desk">
          Start A Conversation
        </Link>
      </div>
    </section>
  );
}

function buildHospitalitySchema({
  baseUrl,
  path,
  title,
  description,
  faqs,
  service,
}: {
  baseUrl: string;
  path: string;
  title: string;
  description: string;
  faqs: typeof hospitalityFaq;
  service?: HospitalityService;
}) {
  const pageUrl = `${baseUrl}${path}`;
  const organizationId = `${baseUrl}/#organization`;
  const pageId = `${pageUrl}#webpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": pageId,
        url: pageUrl,
        name: title,
        description,
        about: { "@id": organizationId },
        isPartOf: { "@id": `${baseUrl}/#website` },
        inLanguage: "en-IN",
      },
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: title,
        serviceType: service?.eyebrow ?? "Hotel and hospitality advisory",
        description,
        url: pageUrl,
        provider: { "@id": organizationId },
        areaServed: ["India", "Delhi NCR", "Selected Indian markets"],
        audience: {
          "@type": "BusinessAudience",
          audienceType: "Hotel buyers, sellers, developers, owners, operators and investors",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
          { "@type": "ListItem", position: 2, name: "Hospitality", item: `${baseUrl}/hospitality` },
          ...(service
            ? [{ "@type": "ListItem", position: 3, name: service.title, item: pageUrl }]
            : []),
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

