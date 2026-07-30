import type { Metadata } from "next";
import Link from "next/link";

import { CapitalForm } from "@/components/capital-form";
import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
import { transactionDesk, transactionStrategies } from "@/lib/capital-content";
import { getCapitalSiteOrNotFound } from "@/lib/capital-routing";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCapitalSiteOrNotFound();

  return {
    title: `Private Transactions | ${site.brand.name}`,
    description:
      "Discuss a private real estate sale, capital partner, partial exit, joint development, land or special situation with Hacoco Capital.",
    alternates: { canonical: `https://${site.primaryDomain}/transactions` },
  };
}

export default async function TransactionsPage() {
  const site = await getCapitalSiteOrNotFound();

  return (
    <main className="capital-site capital-inner">
      <div className="capital-shell">
        <CapitalHeader activePath="/transactions" site={site} />

        <section className="capital-page-hero">
          <p className="capital-eyebrow">Transactions</p>
          <h1>Bring a real estate transaction to the desk before it becomes market noise.</h1>
          <p>
            For owners, developers, family representatives, corporates and authorised advisers who need qualified capital, controlled positioning or a discreet transaction path.
          </p>
        </section>

        <section className="capital-section capital-split">
          <div>
            <p className="capital-eyebrow">Private Transaction Preparation</p>
            <h2>Strong transactions are prepared before they are circulated.</h2>
          </div>
          <div className="capital-copy-stack">
            <p>
              A private real estate transaction can lose leverage if the wrong buyers see weak information too early. Hacoco Capital helps frame the opportunity, identify what must be clarified and decide whether a controlled capital conversation is appropriate.
            </p>
            <p>
              We support transaction advisory, opportunity assessment, sourcing, counterparty introductions and execution coordination. We do not act as a lender, fund manager or regulated investment adviser.
            </p>
          </div>
        </section>

        <section className="capital-section capital-desk">
          <div>
            <p className="capital-eyebrow">Current Desk</p>
            <h2>{transactionDesk.title}</h2>
            <p>{transactionDesk.description}</p>
          </div>
          <div className="capital-empty-state">
            <span>Controlled Circulation</span>
            <h3>No public transaction examples are fabricated here.</h3>
            <p>{transactionDesk.emptyState}</p>
            <Link className="capital-button capital-button--ghost" href="/private-desk#memorandum">
              Request memorandum route
            </Link>
          </div>
        </section>

        <section className="capital-section">
          <div className="capital-section__head">
            <p className="capital-eyebrow">Transaction Types</p>
            <h2>Where opportunity may need capital or confidential preparation.</h2>
          </div>
          <div className="capital-strategy-grid capital-strategy-grid--compact">
            {transactionStrategies.map((strategy) => (
              <Link key={strategy.slug} className="capital-strategy-card" href={`/strategies/${strategy.slug}`}>
                <span>{strategy.eyebrow}</span>
                <h3>{strategy.title}</h3>
                <p>{strategy.focus}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="capital-form-section" id="transaction-brief">
          <CapitalForm site={site} kind="transaction" />
        </section>

        <CapitalFooter site={site} />
      </div>
    </main>
  );
}
