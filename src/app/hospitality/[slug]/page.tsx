import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HospitalityPage } from "@/components/hospitality-page";
import { getCapitalSiteOrNotFound } from "@/lib/capital-routing";
import { getHospitalityService, hospitalityServices } from "@/lib/hospitality-content";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return hospitalityServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const site = await getCapitalSiteOrNotFound();
  const { slug } = await params;
  const service = getHospitalityService(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.title, "hotel advisory India", "hospitality transactions", service.eyebrow],
    alternates: { canonical: `https://${site.primaryDomain}/hospitality/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://${site.primaryDomain}/hospitality/${service.slug}`,
      siteName: site.brand.name,
      locale: "en_IN",
      type: "website",
    },
  };
}

export default async function HospitalityDetailRoute({ params }: PageProps) {
  const site = await getCapitalSiteOrNotFound();
  const { slug } = await params;
  const service = getHospitalityService(slug);

  if (!service) {
    notFound();
  }

  return <HospitalityPage site={site} service={service} />;
}

