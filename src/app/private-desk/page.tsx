import type { Metadata } from "next";
import Link from "next/link";

import { CapitalForm } from "@/components/capital-form";
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

        <section className="capital-section">
          <div className="capital-two-paths capital-two-paths--three">
            {[
              ["Deploy Capital", "For principals and advisers with a clear capital mandate.", "#deploy"],
              ["Discuss A Transaction", "For owners, developers and authorised representatives.", "#transaction"],
              ["Request Memorandum", "For qualified recipients referencing a private transaction.", "#memorandum"],
            ].map(([title, copy, href], index) => (
              <Link key={title} href={href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="capital-form-section" id="deploy">
          <CapitalForm site={site} kind="deploy" />
        </section>

        <section className="capital-form-section" id="transaction">
          <CapitalForm site={site} kind="transaction" />
        </section>

        <section className="capital-form-section" id="memorandum">
          <CapitalForm site={site} kind="memorandum" />
        </section>

        <CapitalFooter site={site} />
      </div>
    </main>
  );
}
