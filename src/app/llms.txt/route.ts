import { headers } from "next/headers";

import { investorBlogPosts, investorInsightsBasePath } from "@/lib/blog";
import { getSiteConfigFromHeaders } from "@/lib/hostname";
import {
  investorMarketPages,
  investorMarketsBasePath,
  investorServicePages,
  investorServicesBasePath,
} from "@/lib/investor-detail-pages";
import { investorListings } from "@/lib/listings";

export async function GET() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const baseUrl = `https://${site.primaryDomain}`;

  const content =
    site.vertical === "commodities" && site.commodities
      ? buildCommodityContent(site, baseUrl)
      : buildRealEstateContent(site, baseUrl);

  return new Response(content, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

function buildCommodityContent(
  site: ReturnType<typeof getSiteConfigFromHeaders>,
  baseUrl: string,
) {
  return [
    `# ${site.brand.name}`,
    "",
    `> ${site.seo.description}`,
    "",
    "## What Hacoco Advisory does",
    "",
    "Hacoco Advisory operates through two distinct commodity trade models:",
    "",
    "- Direct trading: Hacoco may act as principal for selected food grains such as rice, subject to product, volume, route, compliance, and commercial acceptance.",
    "- Sourcing and trade facilitation: Hacoco qualifies requirements, sources suitable counterparties, and supports transaction progression without acting as principal. This is the primary model for crude oil and refined products, fertilizers, pesticides, and complex cross-border mandates.",
    "",
    "## Commodities covered",
    "",
    "- Crude Oil and Refined Products: sourcing and trade facilitation",
    "- Food Grains: direct trading may be available",
    "- Fertilizers: sourcing and trade facilitation",
    "- Pesticides: sourcing and trade facilitation",
    "",
    "## Trade requirements",
    "",
    "A useful brief includes product specifications, volume and frequency, origin and destination, delivery basis, timeline, counterparty role, and proposed payment terms. Introductions remain subject to contract, due diligence, compliance, documentation, and performance by the buyer and seller.",
    "",
    "## Official pages",
    "",
    `- Home: ${baseUrl}`,
    `- About Us: ${baseUrl}/about`,
    `- Contact Us: ${baseUrl}/contact`,
    `- Privacy Policy: ${baseUrl}/privacy`,
    `- Terms of Use: ${baseUrl}/terms`,
    `- Contact: mailto:${site.footer.email}`,
    "",
  ].join("\n");
}

function buildRealEstateContent(
  site: ReturnType<typeof getSiteConfigFromHeaders>,
  baseUrl: string,
) {
  const lines = [
    `# ${site.brand.name}`,
    "",
    `> ${site.seo.description}`,
    "",
    "## Official pages",
    "",
    `- Home: ${baseUrl}`,
    `- About Us: ${baseUrl}/about`,
    `- Contact Us: ${baseUrl}/contact`,
    `- Privacy Policy: ${baseUrl}/privacy`,
    `- Terms of Use: ${baseUrl}/terms`,
  ];

  if (site.slug === "investor") {
    lines.push(
      `- Opportunities: ${baseUrl}/listings`,
      ...investorListings.map(
        (listing) =>
          `- Opportunity: ${listing.title}: ${baseUrl}/opportunities/${listing.slug}`,
      ),
      `- Market Intelligence: ${baseUrl}${investorInsightsBasePath}`,
      ...investorBlogPosts.map(
        (post) => `- ${post.title}: ${baseUrl}${investorInsightsBasePath}/${post.slug}`,
      ),
      ...investorServicePages.map(
        (page) => `- Service: ${page.title}: ${baseUrl}${investorServicesBasePath}/${page.slug}`,
      ),
      ...investorMarketPages.map(
        (page) => `- Market: ${page.title}: ${baseUrl}${investorMarketsBasePath}/${page.slug}`,
      ),
    );
  }

  return [...lines, ""].join("\n");
}
