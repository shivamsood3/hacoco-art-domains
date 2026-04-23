import { headers } from "next/headers";

import { SiteRenderer } from "@/components/site-renderer";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

export default async function HomePage() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  return <SiteRenderer site={site} />;
}
