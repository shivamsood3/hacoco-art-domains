import { readFile } from "node:fs/promises";
import path from "node:path";

import { headers } from "next/headers";

import { getSiteConfigFromHeaders } from "@/lib/hostname";

export const runtime = "nodejs";

const icons = {
  advisory: "hacoco-advisory-96.png",
  capital: "hacoco-capital-96.png",
  investor: "invest-with-hacoco-96.png",
} as const;

export async function GET() {
  const site = getSiteConfigFromHeaders(await headers());
  const icon = await readFile(
    path.join(process.cwd(), "public", "icons", icons[site.slug]),
  );

  return new Response(icon, {
    headers: {
      "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=2592000",
      "Content-Type": "image/png",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
