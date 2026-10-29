import type { Metadata } from "next";

import { HospitalityPage } from "@/components/hospitality-page";
import { getCapitalSiteOrNotFound } from "@/lib/capital-routing";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCapitalSiteOrNotFound();

  return {
    title: `Hotel & Hospitality Advisory | ${site.brand.name}`,
    description:
      "Hotel acquisition, sale, greenfield and brownfield development, M&A, valuation and on-ground advisory for selected hospitality mandates in India.",
    keywords: [
      "hotel acquisition advisory",
      "hotel sale advisory",
      "hotel development advisory",
      "hotel M&A advisory",
      "hotel valuation",
      "hospitality advisory India",
    ],
    alternates: { canonical: `https://${site.primaryDomain}/hospitality` },
    openGraph: {
      title: `Hotel & Hospitality Advisory | ${site.brand.name}`,
      description:
        "Hotel acquisition, sale, greenfield and brownfield development, M&A, valuation and on-ground advisory for selected hospitality mandates in India.",
      url: `https://${site.primaryDomain}/hospitality`,
      siteName: site.brand.name,
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function HospitalityPageRoute() {
  const site = await getCapitalSiteOrNotFound();
  return <HospitalityPage site={site} />;
}

