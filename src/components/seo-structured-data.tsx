import type { SiteConfig } from "@/lib/site-config";

type JsonLdValue = Record<string, unknown>;

export function SeoStructuredData({ site }: { site: SiteConfig }) {
  const baseUrl = `https://${site.primaryDomain}`;
  const organizationId = `${baseUrl}/#organization`;
  const websiteId = `${baseUrl}/#website`;
  const imageUrl = site.seo.ogImage
    ? new URL(site.seo.ogImage, baseUrl).toString()
    : undefined;

  const graph: JsonLdValue[] = [
    {
      "@type": "Organization",
      "@id": organizationId,
      name: site.brand.name,
      url: baseUrl,
      email: site.footer.email,
      description: site.seo.description,
      knowsAbout: site.seo.keywords,
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/apple-icon`,
        width: 180,
        height: 180,
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType:
          site.slug === "advisory"
            ? "commodity trade enquiries"
            : site.slug === "capital"
              ? "private real estate mandates"
              : "property acquisition enquiries",
        email: site.footer.email,
        availableLanguage: ["English"],
      },
      areaServed: buildAreaServed(site),
      ...(imageUrl ? { image: imageUrl } : {}),
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      name: site.brand.name,
      url: baseUrl,
      description: site.seo.description,
      publisher: {
        "@id": organizationId,
      },
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${baseUrl}/#webpage`,
      url: baseUrl,
      name: site.seo.title,
      description: site.seo.description,
      isPartOf: { "@id": websiteId },
      about: { "@id": organizationId },
      primaryImageOfPage: imageUrl
        ? {
            "@type": "ImageObject",
            url: imageUrl,
          }
        : undefined,
      inLanguage: "en-IN",
    },
    buildServiceSchema(site, baseUrl, organizationId),
  ];

  if (site.sections.faq) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${baseUrl}/#faq`,
      mainEntity: site.sections.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": graph,
      }}
    />
  );
}

export function JsonLd({ data }: { data: JsonLdValue }) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
      type="application/ld+json"
    />
  );
}

function buildServiceSchema(
  site: SiteConfig,
  baseUrl: string,
  organizationId: string,
): JsonLdValue {
  if (site.vertical === "commodities" && site.commodities) {
    return {
      "@type": "Service",
      "@id": `${baseUrl}/#commodity-trade-service`,
      name: "Commodity Trading, Sourcing and Trade Facilitation",
      serviceType: "Commodity trading, sourcing and trade facilitation",
      description: site.seo.description,
      url: baseUrl,
      areaServed: buildAreaServed(site),
      audience: {
        "@type": "BusinessAudience",
        audienceType: "Qualified commodity buyers, sellers and authorised mandates",
      },
      provider: {
        "@id": organizationId,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Commodities We Cover",
        itemListElement: site.commodities.categories.map((category) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: category.title,
            serviceType: category.mode,
            description: category.description,
          },
        })),
      },
    };
  }

  return {
    "@type": "Service",
    "@id": `${baseUrl}/#real-estate-service`,
    name: site.brand.name,
    serviceType:
      site.slug === "capital"
        ? "Private real estate capital and transaction advisory"
        : site.slug === "investor"
        ? "Private real estate investment and acquisition"
        : "Private real estate investment access",
    description: site.seo.description,
    url: baseUrl,
    areaServed: buildAreaServed(site),
    audience: {
      "@type": "Audience",
      audienceType:
        site.slug === "capital"
          ? "Investors, owners, developers and family offices"
          : "Property buyers, HNIs, NRIs and private real estate investors",
    },
    provider: {
      "@id": organizationId,
    },
  };
}

function buildAreaServed(site: SiteConfig) {
  return (site.seo.serviceAreas ?? []).map((area) => ({
    "@type": "Place",
    name: area,
  }));
}
