import { headers } from "next/headers";

import { getSiteConfigFromHeaders } from "@/lib/hostname";

export async function GET() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const commoditySite = site.vertical === "commodities";
  const favicon = {
    capital: "hacoco-capital-96.png",
    investor: "invest-with-hacoco-96.png",
    advisory: "hacoco-advisory-96.png",
  }[site.slug];

  return Response.json(
    {
      name: site.brand.name,
      short_name: site.brand.name,
      description: site.seo.description,
      start_url: "/",
      display: "standalone",
      background_color: commoditySite ? "#f2f4f0" : "#f7f4ee",
      theme_color: commoditySite ? "#082c3a" : "#f7f4ee",
      icons: [
        {
          src: `/icons/${favicon}`,
          sizes: "96x96",
          type: "image/png",
        },
        {
          src: "/apple-icon",
          sizes: "180x180",
          type: "image/png",
        },
      ],
    },
    {
      headers: {
        "Cache-Control": "public, max-age=0, s-maxage=3600",
      },
    },
  );
}
