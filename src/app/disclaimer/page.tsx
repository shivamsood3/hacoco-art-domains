import type { Metadata } from "next";

import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
import { getCapitalSiteOrNotFound } from "@/lib/capital-routing";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCapitalSiteOrNotFound();

  return {
    title: `Disclaimer | ${site.brand.name}`,
    description:
      "Legal and regulatory disclaimer for Hacoco Capital private real estate transaction advisory services.",
    alternates: { canonical: `https://${site.primaryDomain}/disclaimer` },
  };
}

export default async function CapitalDisclaimerPage() {
  const site = await getCapitalSiteOrNotFound();

  return (
    <main className="capital-site capital-inner">
      <div className="capital-shell">
        <CapitalHeader activePath="/about" site={site} />

        <article className="capital-article">
          <p className="capital-eyebrow">Disclaimer</p>
          <h1>Legal and regulatory status.</h1>
          <p className="capital-article__lede">
            This page explains the public limitations of Hacoco Capital&apos;s private real estate transaction advisory work.
          </p>

          <section>
            <h2>No regulated investment advice</h2>
            <p>
              Hacoco Capital provides real estate transaction advisory, origination, sourcing, preparation, opportunity assessment and counterparty introduction support. It does not operate as a fund manager, lender, portfolio manager or regulated investment adviser.
            </p>
          </section>

          <section>
            <h2>No guarantees</h2>
            <p>
              Hacoco Capital does not guarantee capital, introductions, transaction closure, returns, yield, appreciation, liquidity, permissions, approvals or financing outcomes.
            </p>
          </section>

          <section>
            <h2>Independent professional review</h2>
            <p>
              Real estate transactions may require independent legal, tax, technical, valuation, financial, regulatory and other professional advice. Hacoco Capital may help coordinate a process, but it does not replace independent specialist review.
            </p>
          </section>

          <section>
            <h2>Confidential information</h2>
            <p>
              Public website forms should not be used to submit sensitive documents. Transaction materials, if any, are shared only after fit, permission and confidentiality expectations are clear.
            </p>
          </section>
        </article>

        <CapitalFooter site={site} />
      </div>
    </main>
  );
}
