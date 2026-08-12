import Image from "next/image";
import Link from "next/link";

import { investorBlogPosts, investorInsightsBasePath } from "@/lib/blog";
import { investorListings } from "@/lib/listings";
import type { SiteConfig } from "@/lib/site-config";

import { LeadForm } from "./lead-form";
import { SiteFooter, SiteHeader } from "./site-chrome";

function getListingForShowcase(slug: string) {
  const listing = investorListings.find((item) => item.slug === slug);

  if (!listing) {
    throw new Error(`Missing investor listing: ${slug}`);
  }

  return listing;
}

const featuredListings = [
  getListingForShowcase("baghpat-khekra-50-acre-mixed-use-land"),
  getListingForShowcase("haridwar-dehradun-expressway-land"),
  getListingForShowcase("neemrana-rajasthan-land"),
];

const marketFeatures = [
  {
    eyebrow: "Land Acquisition",
    title: "Northern India is where fieldwork matters most.",
    description:
      "We originate and screen strategic land across Baghpat, Haridwar, Neemrana, Jewar and the Dehradun foothills for corporate, institutional and private-capital mandates. Parcel-level work covers ownership, access, use, planning context and credible execution routes.",
    places: "Baghpat / Haridwar / Neemrana / Jewar / Dehradun",
    href: "/services/north-india-land-acquisition",
    image: "/images/investor/haridwar-land.jpg",
    alt: "Large land parcel on the Delhi-Dehradun growth corridor",
  },
  {
    eyebrow: "South Delhi",
    title: "Land-backed homes in established neighbourhoods.",
    description:
      "Builder floors, bungalows and redevelopment properties across Defence Colony, Greater Kailash, Jor Bagh, Golf Links, Sunder Nagar and other prime residential pockets.",
    places: "Defence Colony / Greater Kailash / Jor Bagh / Sunder Nagar",
    href: "/markets/south-delhi-homes",
    image: "/images/investor/jor-bagh.jpeg",
    alt: "Residential street and villa in Jor Bagh, New Delhi",
  },
  {
    eyebrow: "NCR",
    title: "Primary projects and growth corridors.",
    description:
      "Off plan residences and land opportunities assessed through developer record, infrastructure delivery, competing supply, payment structure and exit demand.",
    places: "Gurugram / Dwarka Expressway / Noida / YEIDA",
    href: "/markets/delhi-ncr-off-plan",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    alt: "Contemporary towers representing Delhi NCR primary property",
  },
  {
    eyebrow: "Dubai",
    title: "A global market, approached with local discipline.",
    description:
      "Ready and off plan property selected around developer delivery, community depth, service charges, rental demand and the likely resale buyer.",
    places: "Ready / Off plan / Income / Family use",
    href: "/markets/dubai-property",
    image: "/images/investor/dubai-marina.jpg",
    alt: "View across Dubai Marina from a Hacoco opportunity",
  },
];

const acquisitionSteps = [
  ["01", "Source", "Public, private and owner-led opportunities."],
  ["02", "Screen", "Property, seller, pricing and paperwork."],
  ["03", "Value", "Comparable evidence and investment logic."],
  ["04", "Diligence", "Specialist legal and technical review."],
  ["05", "Execute", "Negotiation, coordination and closure."],
];

const intelligenceRows = [
  ["Transaction evidence", "What has actually traded, not only what is being asked."],
  ["Property economics", "Land value, buildability, rent, holding cost and exit depth."],
  ["Counterparty quality", "Seller intent, authority, documentation and ability to close."],
  ["Market structure", "Supply, infrastructure, tenant demand and the future buyer pool."],
];

export function InvestorSite({ site }: { site: SiteConfig }) {
  return (
    <main className="investor-site">
      <div className="investor-container">
        <SiteHeader site={site} activePath="/" />
      </div>

      <InvestorHero />

      <div className="investor-container">
        <SelectedOpportunities />
      </div>

      <AcquisitionProposition />

      <div className="investor-container">
        <Markets />
        <Intelligence />
        <MarketActivity />
        <HumanSection />
        <InvestmentRequirement site={site} />
        <SiteFooter site={site} />
      </div>
    </main>
  );
}

function InvestorHero() {
  return (
    <section className="investor-hero">
      <div className="investor-hero__copy">
        <div>
          <p className="investor-eyebrow">Land Acquisition &amp; Private Real Estate</p>
          <h1>Land worth acquiring.</h1>
          <p className="investor-hero__lede">
            Hacoco originates and evaluates strategic land for companies,
            developers, institutions and private capital across North India,
            alongside selected residential and global property mandates.
          </p>
        </div>

        <div>
          <div className="investor-actions">
            <Link className="investor-button" href="/contact">
              Discuss a Land Mandate
            </Link>
            <Link className="investor-text-link" href="/listings">
              View Opportunities
            </Link>
          </div>
          <p className="investor-hero__markets">
            Baghpat <span /> Haridwar <span /> Neemrana <span /> Jewar <span /> Dehradun
          </p>
        </div>
      </div>

      <div className="investor-hero__image">
        <Image
          alt="Strategic land acquisition corridor in North India"
          className="object-cover"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 54vw"
          src="/images/investor/haridwar-land.jpg"
        />
        <p>Land acquisition / North India growth corridors</p>
      </div>
    </section>
  );
}

function SelectedOpportunities() {
  const [primary, ...secondary] = featuredListings;

  return (
    <section className="investor-section investor-opportunities" id="opportunities">
      <div className="investor-section-heading">
        <div>
          <p className="investor-eyebrow">Featured Land Mandates</p>
          <h2>Scale, access and a credible use case.</h2>
        </div>
        <div>
          <p>
            Current land opportunities for corporate occupiers, developers,
            institutions and private capital. Detailed records are shared only
            after mandate and counterparty qualification.
          </p>
          <Link className="investor-text-link" href="/listings">
            View all opportunities
          </Link>
        </div>
      </div>

      <div className="investor-opportunity-layout">
        <OpportunityFeature listing={primary} />
        <div className="investor-opportunity-layout__secondary">
          {secondary.map((listing) => (
            <OpportunityRow key={listing.slug} listing={listing} />
          ))}
        </div>
      </div>
    </section>
  );
}

function OpportunityFeature({
  listing,
}: {
  listing: (typeof investorListings)[number];
}) {
  return (
    <Link
      className="investor-opportunity-feature"
      href={`/opportunities/${listing.slug}`}
    >
      <div className="investor-opportunity-feature__image">
        <Image
          alt={listing.imageAlt}
          className="object-cover"
          fill
          sizes="(max-width: 900px) 100vw, 62vw"
          src={listing.image}
        />
      </div>
      <div className="investor-opportunity-feature__meta">
        <p>{listing.location}</p>
        <span>{listing.status}</span>
      </div>
      <h3>{listing.title}</h3>
      <div className="investor-opportunity-feature__price">
        <span>{listing.summary}</span>
        <strong>{listing.price}</strong>
      </div>
    </Link>
  );
}

function OpportunityRow({
  listing,
}: {
  listing: (typeof investorListings)[number];
}) {
  return (
    <Link className="investor-opportunity-row" href={`/opportunities/${listing.slug}`}>
      <div className="investor-opportunity-row__image">
        <Image
          alt={listing.imageAlt}
          className="object-cover"
          fill
          sizes="(max-width: 900px) 44vw, 22vw"
          src={listing.image}
        />
      </div>
      <div>
        <p>{listing.location}</p>
        <h3>{listing.title}</h3>
        <span>{listing.size ?? listing.category}</span>
        <strong>{listing.price}</strong>
      </div>
    </Link>
  );
}

function AcquisitionProposition() {
  return (
    <section className="investor-proposition" id="approach">
      <div className="investor-container">
        <div className="investor-proposition__lead">
          <p className="investor-eyebrow">Private Acquisition</p>
          <h2>
            We don&apos;t send lists.
            <br />
            We build shortlists.
          </h2>
          <p>
            Tell us what you are looking for. We find it, verify the opportunity
            and help determine whether the numbers make sense.
          </p>
        </div>

        <div className="investor-process">
          {acquisitionSteps.map(([number, title, copy]) => (
            <div key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Markets() {
  return (
    <section className="investor-section investor-markets" id="markets">
      <div className="investor-section-heading investor-section-heading--compact">
        <div>
          <p className="investor-eyebrow">Primary Markets</p>
          <h2>Markets we know.</h2>
        </div>
        <p>
          Focused local knowledge, applied to property selection and execution.
        </p>
      </div>

      <div className="investor-market-list">
        {marketFeatures.map((market, index) => (
          <article
            className={`investor-market ${index % 2 ? "investor-market--reverse" : ""}`}
            key={market.title}
          >
            <div className="investor-market__image">
              <Image
                alt={market.alt}
                className="object-cover"
                fill
                sizes="(max-width: 900px) 100vw, 56vw"
                src={market.image}
              />
            </div>
            <div className="investor-market__copy">
              <p className="investor-eyebrow">{market.eyebrow}</p>
              <h3>{market.title}</h3>
              <p>{market.description}</p>
              <small>{market.places}</small>
              <Link className="investor-text-link" href={market.href}>
                Explore {market.eyebrow}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Intelligence() {
  const featuredPost = investorBlogPosts[0];

  return (
    <section className="investor-section investor-intelligence">
      <div className="investor-intelligence__heading">
        <p className="investor-eyebrow">Hacoco Intelligence</p>
        <h2>See the market behind the listing.</h2>
        <p>
          Asking prices tell only part of the story. We examine transaction
          evidence, property economics, counterparties and exit demand before
          making an investment case.
        </p>
        <Link className="investor-text-link" href={investorInsightsBasePath}>
          Explore Market Intelligence
        </Link>
      </div>

      <div className="investor-intelligence__table">
        {intelligenceRows.map(([title, copy]) => (
          <div key={title}>
            <h3>{title}</h3>
            <p>{copy}</p>
          </div>
        ))}
        {featuredPost ? (
          <Link
            className="investor-intelligence__article"
            href={`${investorInsightsBasePath}/${featuredPost.slug}`}
          >
            <span>Latest field guide</span>
            <strong>{featuredPost.title}</strong>
            <small>Read the analysis</small>
          </Link>
        ) : null}
      </div>
    </section>
  );
}

function MarketActivity() {
  const activity = [
    getListingForShowcase("defence-colony-b-block-bungalow"),
    getListingForShowcase("golf-links-freehold-plot"),
    getListingForShowcase("janpath-connaught-place-commercial-building"),
  ];

  return (
    <section className="investor-section investor-activity">
      <div>
        <p className="investor-eyebrow">Hacoco In The Market</p>
        <h2>Current and recent mandates.</h2>
        <p>
          We only publish property information already cleared for public view.
          Further details are shared directly after buyer qualification.
        </p>
      </div>

      <div className="investor-activity__rows">
        {activity.map((listing) => (
          <Link href={`/opportunities/${listing.slug}`} key={listing.slug}>
            <span>{listing.location}</span>
            <strong>{listing.title}</strong>
            <small>{listing.status}</small>
          </Link>
        ))}
      </div>
    </section>
  );
}

function HumanSection() {
  return (
    <section className="investor-human">
      <div className="investor-human__image">
        <Image
          alt="Quiet architectural workspace for private client conversations"
          className="object-cover"
          fill
          sizes="(max-width: 900px) 100vw, 46vw"
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1500&q=85"
        />
      </div>
      <div>
        <p className="investor-eyebrow">How We Work</p>
        <h2>Built around relationships, not lead forms.</h2>
        <p>
          Hacoco works directly with buyers, owners, developers and local
          specialists. The conversation begins with your requirement, not a
          property feed.
        </p>
        <p>
          Some opportunities never reach a portal. Others are public but badly
          understood. Our job is to know the difference and bring you only what
          deserves a closer look.
        </p>
        <Link className="investor-text-link" href="/about">
          About Hacoco
        </Link>
      </div>
    </section>
  );
}

function InvestmentRequirement({ site }: { site: SiteConfig }) {
  return (
    <section className="investor-requirement" id="lead-form">
      <div className="investor-requirement__copy">
        <p className="investor-eyebrow">Investment Requirement</p>
        <h2>Tell us what you are looking for.</h2>
        <p>
          Share the market, budget and property type. You will speak directly
          with Hacoco about the next useful step.
        </p>
        <Link href={`mailto:${site.footer.email}`}>{site.footer.email}</Link>
      </div>
      <LeadForm className="investor-form" compact site={site} />
    </section>
  );
}
