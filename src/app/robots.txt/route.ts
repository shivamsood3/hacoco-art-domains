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
      "User-agent: Googlebot-Image",
      "Allow: /favicon.ico",
      "Allow: /icon",
      "Allow: /apple-icon",
      "Allow: /images/",
      "",
      "User-agent: OAI-SearchBot",
      "Allow: /",
      "Disallow: /api/",
      "",
      "User-agent: ChatGPT-User",
      "Allow: /",
      "Disallow: /api/",
      "",
      "User-agent: ClaudeBot",
      "Allow: /",
      "Disallow: /api/",
      "",
      "User-agent: Claude-SearchBot",
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
