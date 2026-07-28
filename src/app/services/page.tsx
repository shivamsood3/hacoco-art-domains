import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getSiteConfigFromHeaders } from "@/lib/hostname";
import { investorServicePages, investorServicesBasePath } from "@/lib/investor-detail-pages";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const canonical = `https://${site.primaryDomain}${investorServicesBasePath}`;

  return {
    title: `Real Estate Investment Services | ${site.brand.name}`,
    description:
      "Hacoco real estate investment services across South Delhi homes, Delhi NCR off plan, Dubai property, Dubai free zone setup, Goa villas, North India land and selected international diversification.",
    alternates: { canonical },
    openGraph: {
      title: `Real Estate Investment Services | ${site.brand.name}`,
      description:
        "Private real estate acquisition, land sourcing, Dubai property and company setup support for serious buyers.",
      url: canonical,
      type: "website",
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

export default async function ServicesPage() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (site.slug !== "investor") {
    notFound();
  }

  return (
    <main className="investor-site investor-inner min-h-screen">
      <div className="investor-container">
        <SiteHeader site={site} activePath="/services" />

        <section className="investor-index-hero">
          <p className="investor-eyebrow">Services</p>
          <h1>
            Structured acquisition support for serious property capital.
          </h1>
          <p>
            Hacoco helps buyers move from broad market interest to a sharper
            mandate, a cleaner shortlist and a more controlled execution path
            across India, Dubai and selected diversification markets.
          </p>
        </section>

        <section className="investor-service-index" aria-label="Hacoco services">
          {investorServicePages.map((service, index) => (
            <article className="investor-service-index__card" key={service.slug}>
              <Link
                aria-label={`Read more about ${service.title}`}
                className="investor-service-index__image"
                href={`${investorServicesBasePath}/${service.slug}`}
              >
                <Image
                  alt={service.image.alt}
                  className="object-cover"
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  src={service.image.src}
                />
              </Link>
              <div>
                <p className="investor-eyebrow">
                  0{index + 1} / {service.eyebrow}
                </p>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <Link
                  className="investor-text-link"
                  href={`${investorServicesBasePath}/${service.slug}`}
                >
                  Read service detail
                </Link>
              </div>
            </article>
          ))}
        </section>

        <section className="opportunity-private-cta">
          <div>
            <p className="investor-eyebrow">Mandate Led</p>
            <h2>Start with the requirement, then choose the market.</h2>
            <p>
              The better conversation is rarely just location. It is budget,
              use case, liquidity, documentation comfort, hold period and what
              must be true for the investment to deserve capital.
            </p>
          </div>
          <Link className="investor-button" href="/contact">
            Share Your Brief
          </Link>
        </section>

        <SiteFooter site={site} />
      </div>
    </main>
  );
}
