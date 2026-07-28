import { headers } from "next/headers";

import { getSiteConfigFromHeaders } from "@/lib/hostname";

export async function GET() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const commoditySite = site.vertical === "commodities";

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
          src: "/icon",
          sizes: "64x64",
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
