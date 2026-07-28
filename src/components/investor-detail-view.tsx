import Image from "next/image";
import Link from "next/link";

import type { InvestorDetailPage } from "@/lib/investor-detail-pages";
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
              <section key={section.heading}>
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
