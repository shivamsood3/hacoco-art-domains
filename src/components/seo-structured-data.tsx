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
      areaServed: "International markets",
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
      site.slug === "investor"
        ? "Private real estate investment and acquisition"
        : "Private real estate investment access",
    description: site.seo.description,
    url: baseUrl,
    areaServed: site.slug === "investor" ? "Delhi, NCR, Dubai and selected markets" : "Delhi NCR",
    provider: {
      "@id": organizationId,
    },
  };
}
