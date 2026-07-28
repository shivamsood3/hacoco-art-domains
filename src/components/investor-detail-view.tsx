import Image from "next/image";
import Link from "next/link";

import type { InvestorDetailPage } from "@/lib/investor-detail-pages";
import { investorInsightsBasePath, investorBlogPosts } from "@/lib/blog";
import { investorListings } from "@/lib/listings";
import type { SiteConfig } from "@/lib/site-config";

import { SiteFooter, SiteHeader } from "./site-chrome";

export function InvestorDetailView({
  activePath,
  ctaEyebrow,
  page,
  site,
}: {
  activePath: string;
  ctaEyebrow: string;
  page: InvestorDetailPage;
  site: SiteConfig;
}) {
  return (
    <main className="investor-site investor-inner">
      <div className="investor-container">
        <SiteHeader site={site} activePath={activePath} />

        <article className="investor-detail">
          <header className="investor-detail__hero">
            <div>
              <p className="investor-eyebrow">{page.eyebrow}</p>
              <h1>{page.title}</h1>
              <p>{page.description}</p>
            </div>
            <div className="investor-detail__hero-image">
              <Image
                alt={page.image.alt}
                className="object-cover"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
                src={page.image.src}
              />
            </div>
          </header>

          <section className="investor-detail__highlights">
            {page.highlights.map((highlight, index) => (
              <div key={highlight}>
                <span>0{index + 1}</span>
                <p>{highlight}</p>
              </div>
            ))}
          </section>

          <div className="investor-detail__sections">
            {page.sections.map((section, index) => (
              <section
                className={
                  section.heading.toLowerCase().includes("hacoco")
                    ? "investor-detail__section--view"
                    : undefined
                }
                key={section.heading}
              >
                <span>0{index + 1}</span>
                <div>
                  <h2>{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <RelatedDossier page={page} />

          <section className="investor-detail__cta">
            <div>
              <p className="investor-eyebrow">{ctaEyebrow}</p>
              <h2>Discuss this with Hacoco.</h2>
              <p>
                Share your market, budget and objective. We will respond with
                the next useful question or opportunity.
              </p>
            </div>
            <Link className="investor-button" href="/contact">
              Speak to Hacoco
            </Link>
          </section>
        </article>

        <SiteFooter site={site} />
      </div>
    </main>
  );
}

function RelatedDossier({ page }: { page: InvestorDetailPage }) {
  const relatedListings = getRelatedListings(page);
  const relatedPosts = getRelatedPosts(page);
  const relatedPages = getRelatedPages(page);

  if (!relatedListings.length && !relatedPosts.length && !relatedPages.length) {
    return null;
  }

  return (
    <section className="investor-detail__related" aria-label="Related information">
      <div>
        <p className="investor-eyebrow">Next Reading</p>
        <h2>Build the market picture before the site visit.</h2>
      </div>

      {relatedListings.length ? (
        <div>
          <p className="investor-detail__related-label">Relevant Opportunities</p>
          {relatedListings.map((listing) => (
            <Link href={`/opportunities/${listing.slug}`} key={listing.slug}>
              <span>{listing.location}</span>
              <strong>{listing.title}</strong>
              <small>{listing.price}</small>
            </Link>
          ))}
        </div>
      ) : null}

      {relatedPosts.length ? (
        <div>
          <p className="investor-detail__related-label">Related Intelligence</p>
          {relatedPosts.map((post) => (
            <Link href={`${investorInsightsBasePath}/${post.slug}`} key={post.slug}>
              <span>{post.readTime}</span>
              <strong>{post.title}</strong>
              <small>{post.publishedAt}</small>
            </Link>
          ))}
        </div>
      ) : null}

      {relatedPages.length ? (
        <div>
          <p className="investor-detail__related-label">Useful Next Pages</p>
          {relatedPages.map((item) => (
            <Link href={item.href} key={item.href}>
              <span>{item.type}</span>
              <strong>{item.label}</strong>
              <small>{item.note}</small>
            </Link>
          ))}
        </div>
      ) : null}
    </section>
  );
}

function getRelatedListings(page: InvestorDetailPage) {
  const slug = page.slug;
  const title = page.title.toLowerCase();

  return investorListings
    .filter((listing) => {
      const haystack = `${listing.title} ${listing.location} ${listing.category}`.toLowerCase();

      if (slug.includes("dubai") || title.includes("dubai")) return haystack.includes("dubai");
      if (slug.includes("goa") || title.includes("goa")) return haystack.includes("goa");
      if (slug.includes("south-delhi") || title.includes("south delhi") || title.includes("builder")) {
        return haystack.includes("delhi") || haystack.includes("jor bagh") || haystack.includes("sunder");
      }
      if (slug.includes("land") || slug.includes("jewar") || slug.includes("haridwar") || slug.includes("neemrana") || slug.includes("foothills")) {
        return haystack.includes("land") || haystack.includes("corridor") || haystack.includes("rajasthan");
      }

      return false;
    })
    .slice(0, 3);
}

function getRelatedPosts(page: InvestorDetailPage) {
  const haystack = `${page.slug} ${page.title} ${page.description} ${page.keywords.join(" ")}`.toLowerCase();

  return investorBlogPosts
    .filter((post) => {
      const postText = `${post.slug} ${post.title} ${post.description} ${post.keywords.join(" ")}`.toLowerCase();

      if (haystack.includes("dubai")) return postText.includes("dubai");
      if (haystack.includes("goa")) return postText.includes("goa");
      if (haystack.includes("south delhi") || haystack.includes("builder")) {
        return postText.includes("south delhi") || postText.includes("defence colony");
      }
      if (haystack.includes("land") || haystack.includes("jewar") || haystack.includes("haridwar") || haystack.includes("neemrana")) {
        return postText.includes("land") || postText.includes("corridor");
      }
      if (haystack.includes("off plan") || haystack.includes("primary")) {
        return postText.includes("off plan") || postText.includes("primary");
      }

      return postText.includes("allocation");
    })
    .slice(0, 3);
}

function getRelatedPages(page: InvestorDetailPage) {
  const slug = page.slug;
  const pages = [];

  if (slug.includes("dubai")) {
    pages.push(
      { type: "Service", label: "Dubai Property Investment", href: "/services/dubai-property-investment", note: "Property shortlist and diligence" },
      { type: "Service", label: "Dubai Free Zone Company Setup", href: "/services/dubai-free-zone-company-setup", note: "Company setup coordination" },
    );
  }

  if (slug.includes("south-delhi") || slug.includes("builder")) {
    pages.push(
      { type: "Market", label: "South Delhi Homes", href: "/markets/south-delhi-homes", note: "Prime residential dossier" },
      { type: "Opportunities", label: "Private Opportunities", href: "/listings", note: "Selected public inventory" },
    );
  }

  if (slug.includes("land") || slug.includes("jewar") || slug.includes("haridwar") || slug.includes("neemrana") || slug.includes("foothills")) {
    pages.push(
      { type: "Service", label: "North India Land Acquisition", href: "/services/north-india-land-acquisition", note: "Land sourcing process" },
      { type: "Market", label: "Baghpat and Haridwar Belt", href: "/markets/baghpat-haridwar-belt", note: "Expressway-linked land" },
    );
  }

  if (slug.includes("goa")) {
    pages.push(
      { type: "Service", label: "Goa Villas and Second Homes", href: "/services/goa-villas-second-homes", note: "Villa acquisition process" },
      { type: "Opportunities", label: "Goa Opportunities", href: "/listings", note: "Selected villa inventory" },
    );
  }

  return pages.slice(0, 3);
}
