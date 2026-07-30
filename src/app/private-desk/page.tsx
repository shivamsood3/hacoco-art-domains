import type { Metadata } from "next";
import { Suspense } from "react";

import { CapitalPrivateDesk } from "@/components/capital-private-desk";
import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
import { getCapitalSiteOrNotFound } from "@/lib/capital-routing";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCapitalSiteOrNotFound();

  return {
    title: `Private Desk | ${site.brand.name}`,
    description:
      "Submit a capital mandate, confidential transaction brief or memorandum request to Hacoco Capital's private real estate desk.",
    alternates: { canonical: `https://${site.primaryDomain}/private-desk` },
  };
}

export default async function PrivateDeskPage() {
  const site = await getCapitalSiteOrNotFound();

  return (
    <main className="capital-site capital-inner">
      <div className="capital-shell">
        <CapitalHeader activePath="/private-desk" site={site} />

        <section className="capital-page-hero">
          <p className="capital-eyebrow">Private Desk</p>
          <h1>Choose the right route for a confidential real estate conversation.</h1>
          <p>
            The private desk is intentionally structured by role. Capital, owners, developers and advisers need different intake paths.
          </p>
        </section>

        <Suspense fallback={<div className="capital-private-selector" />}>
          <CapitalPrivateDesk site={site} />
        </Suspense>

        <CapitalFooter site={site} />
      </div>
    </main>
  );
}
