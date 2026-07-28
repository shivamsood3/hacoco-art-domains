import { headers } from "next/headers";

import { getSiteConfigFromHeaders } from "@/lib/hostname";

export async function GET() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const sitemapUrl = `https://${site.primaryDomain}/sitemap.xml`;

  return new Response(
    [
      "User-agent: *",
      "Allow: /",
      "Disallow: /api/",
      "",
      `Sitemap: ${sitemapUrl}`,
      "",
    ].join("\n"),
    {
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=3600",
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
