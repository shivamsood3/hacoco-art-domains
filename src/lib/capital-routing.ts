import { headers } from "next/headers";
import { notFound } from "next/navigation";

import { getSiteConfigFromHeaders } from "./hostname";

export async function getCapitalSiteOrNotFound() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  if (site.slug !== "capital") {
    notFound();
  }

  return site;
}
