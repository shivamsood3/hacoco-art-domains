import { headers } from "next/headers";

import { capitalInsights, transactionStrategies } from "@/lib/capital-content";
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
    "## Director-led team",
    "",
    "- Narinder K Sood, Director: governance, commercial review and counterparty acceptance.",
    "- Abhiroop Bhattacharjee, Director: transaction structuring, documentation sequence, inspection provisions and payment-procedure alignment.",
    "- Shivam Sood, Director: origination, requirement qualification and counterparty development.",
    "",
    "## Official pages",
    "",
    `- Home: ${baseUrl}`,
    `- About Us: ${baseUrl}/about`,
    `- Leadership Team: ${baseUrl}/team`,
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
      "",
      "## What Invest With Hacoco does",
      "",
      "Invest With Hacoco is a private property brokerage, sourcing and acquisition advisory desk. It helps qualified buyers define a mandate, compare opportunities, assess market and transaction context, and coordinate the path toward professional diligence and acquisition.",
      "",
      "## Family office acquisition mandates",
      "",
      "Hacoco supports family offices, principals and appointed advisers with mandate-led sourcing across strategic land, prime residential, income property and selected cross-border real estate. Hacoco does not manage or take custody of client capital.",
      "",
      "## South Delhi local coverage",
      "",
      "Hacoco serves buyers reviewing builder floors, bungalows, redevelopment assets and select plots across Defence Colony, Greater Kailash, Vasant Vihar, Panchsheel Park, Anand Niketan, Jor Bagh, Sunder Nagar, Golf Links and other established South Delhi colonies.",
      "",
      "Hacoco is a service-area acquisition desk. The website does not publish a physical walk-in office address. Meetings and property reviews are arranged directly for qualified mandates.",
      "",
      "## Direct answers",
      "",
      "- Does Hacoco work as a South Delhi property broker? Yes. Hacoco acts as a private property broker and acquisition advisor for qualified buyer mandates.",
      "- Does Hacoco provide legal or tax advice? No. Hacoco coordinates the transaction process, while qualified professionals appointed by the buyer provide legal, tax, technical and regulatory advice.",
      "- What should a property brief include? Preferred location, budget, property type, intended use, timing and any non-negotiable requirements.",
      "",
      `- Opportunities: ${baseUrl}/listings`,
      `- Family Office Acquisition: ${baseUrl}/family-offices`,
      ...investorListings.map(
        (listing) =>
          `- Opportunity: ${listing.title}: ${baseUrl}/opportunities/${listing.slug}`,
      ),
      `- Services: ${baseUrl}${investorServicesBasePath}`,
      `- Markets: ${baseUrl}${investorMarketsBasePath}`,
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
      `- Contact: mailto:${site.footer.email}`,
    );
  }

  if (site.slug === "capital") {
    lines.push(
      "",
      "## What Hacoco Capital does",
      "",
      "Hacoco Capital is a private real estate capital and transaction advisory desk. It supports two sides of a private transaction: capital seeking opportunity, and opportunity seeking capital.",
      "",
      "The desk supports transaction advisory, opportunity assessment, private acquisitions, disposition advisory, capital introductions, sourcing and execution support. Hacoco Capital is not a fund manager, lender or regulated investment adviser.",
      "",
      "Hacoco Capital works across New Delhi, South Delhi, Delhi NCR and selected Indian private real estate markets. It is designed for larger or more complex mandates rather than high-volume residential brokerage.",
      "",
      "## Family office mandates",
      "",
      "Hacoco Capital supports family offices, founders, principals and appointed advisers with mandate definition, private origination, opportunity qualification, underwriting organisation, counterparty access and transaction progression. It does not take custody of assets, manage a pooled fund, provide lending decisions or replace independent professional advice.",
      "",
      "## Official Capital pages",
      "",
      `- Deploy Capital: ${baseUrl}/capital`,
      `- Family Office Mandates: ${baseUrl}/family-offices`,
      `- Private Transactions: ${baseUrl}/transactions`,
      `- Private Desk: ${baseUrl}/private-desk`,
      `- Disclaimer: ${baseUrl}/disclaimer`,
      `- Strategies: ${baseUrl}/strategies`,
      `- Insights: ${baseUrl}/insights`,
      ...transactionStrategies.map(
        (strategy) => `- Strategy: ${strategy.title}: ${baseUrl}/strategies/${strategy.slug}`,
      ),
      ...capitalInsights.map(
        (insight) => `- Insight: ${insight.title}: ${baseUrl}/insights/${insight.slug}`,
      ),
      `- Contact: mailto:${site.footer.email}`,
    );
  }

  return [...lines, ""].join("\n");
}
