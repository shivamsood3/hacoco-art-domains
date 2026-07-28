import { headers } from "next/headers";

import { investorBlogPosts, investorInsightsBasePath } from "@/lib/blog";
import { getSiteConfigFromHeaders } from "@/lib/hostname";
import {
  investorMarketPages,
  investorMarketsBasePath,
  investorServicePages,
  investorServicesBasePath,
} from "@/lib/investor-detail-pages";

export async function GET() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const baseUrl = `https://${site.primaryDomain}`;
  const paths = ["", "/privacy", "/terms"];

  if (site.slug === "investor") {
    paths.push(
      investorInsightsBasePath,
      ...investorBlogPosts.map((post) => `${investorInsightsBasePath}/${post.slug}`),
      ...investorServicePages.map((page) => `${investorServicesBasePath}/${page.slug}`),
      ...investorMarketPages.map((page) => `${investorMarketsBasePath}/${page.slug}`),
    );
  }

  const urls = paths
    .map((path) => {
      const priority = path === "" ? "1.0" : path === investorInsightsBasePath ? "0.8" : "0.6";

      return [
        "  <url>",
        `    <loc>${escapeXml(`${baseUrl}${path}`)}</loc>`,
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n");
    })
    .join("\n");

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Cache-Control": "public, max-age=0, s-maxage=3600",
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}
