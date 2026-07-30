import Image from "next/image";
import Link from "next/link";

import {
  activeCapitalMandates,
  capitalImages,
  capitalInsights,
  capitalNav,
  transactionDesk,
  transactionStrategies,
  underwritingPillars,
} from "@/lib/capital-content";
import type { SiteConfig } from "@/lib/site-config";

import { CapitalForm } from "./capital-form";

export function CapitalSite({ site }: { site: SiteConfig }) {
  return (
    <main className="capital-site">
      <div className="capital-shell">
        <CapitalHeader activePath="/" site={site} />
        <CapitalHero site={site} />
        <TwoSidedProposition />
        <StrategyGrid />
        <TransactionDesk site={site} />
        <UnderwritingApproach />
        <CapitalMandates site={site} />
        <CapitalProcess />
        <SelectedInsight />
        <DiscretionStatement />
        <FinalCta />
        <CapitalFooter site={site} />
      </div>
    </main>
  );
}

export function CapitalHeader({
  site,
  activePath,
}: {
  site: SiteConfig;
  activePath?: string;
}) {
  return (
    <header className="capital-header">
      <Link href="/" className="capital-wordmark" aria-label="Hacoco Capital home">
        <span>Hacoco Capital</span>
        <small>Private Real Estate Transactions</small>
      </Link>

      <nav className="capital-nav" aria-label="Primary navigation">
        {capitalNav.map((item) => {
          const isActive =
            activePath === item.href ||
            (activePath ? activePath.startsWith(item.href) : false);

          return (
            <Link key={item.href} aria-current={isActive ? "page" : undefined} href={item.href}>
              {item.label}
            </Link>
          );
        })}
      </nav>

      <Link className="capital-button capital-button--small" href="/private-desk">
        Private Desk
      </Link>

      <details className="capital-mobile-menu">
        <summary aria-label="Open navigation">
          <span />
          <span />
        </summary>
        <nav aria-label="Mobile navigation">
          {capitalNav.map((item) => (
            <Link key={`${item.href}-mobile`} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/private-desk">Private Desk</Link>
        </nav>
      </details>
    </header>
  );
}

export function CapitalFooter({ site }: { site: SiteConfig }) {
  return (
    <footer className="capital-footer">
      <div className="capital-footer__brand">
        <p className="capital-eyebrow">Hacoco Capital</p>
        <h2>Private real estate capital and transaction advisory.</h2>
        <p>
          A discreet desk for capital seeking real estate opportunity and real estate opportunity seeking qualified capital.
        </p>
      </div>

      <div>
        <p className="capital-footer__label">Desk</p>
        <Link href="/transactions">Transactions</Link>
        <Link href="/capital">Deploy Capital</Link>
        <Link href="/private-desk">Private Desk</Link>
        <Link href="/about">About</Link>
      </div>

      <div>
        <p className="capital-footer__label">Strategies</p>
        {transactionStrategies.slice(0, 4).map((strategy) => (
          <Link key={strategy.slug} href={`/strategies/${strategy.slug}`}>
            {strategy.title}
          </Link>
        ))}
      </div>

      <div>
        <p className="capital-footer__label">Contact</p>
        <Link href={`mailto:${site.footer.email}`}>{site.footer.email}</Link>
        <Link href="https://www.investwithhacoco.com">Invest With Hacoco</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </footer>
  );
}

function CapitalHero({ site }: { site: SiteConfig }) {
  return (
    <section className="capital-hero">
      <div className="capital-hero__copy">
        <p className="capital-eyebrow">Private Real Estate Capital</p>
        <h1>Capital seeking opportunity. Opportunity seeking capital.</h1>
        <p>
          Hacoco Capital supports private real estate transactions where discretion, counterparty quality, documentation discipline and senior judgement matter before capital moves.
        </p>
        <div className="capital-hero__actions">
          <Link className="capital-button" href="/capital">
            Deploy Capital
          </Link>
          <Link className="capital-button capital-button--ghost" href="/transactions">
            Discuss A Transaction
          </Link>
        </div>
      </div>

      <div className="capital-hero__visual">
        <Image
          alt="Prime Delhi commercial real estate corridor"
          className="object-cover"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 48vw"
          src={capitalImages.hero}
        />
        <div className="capital-hero__panel">
          <span>Transaction Desk</span>
          <p>Private acquisitions, income assets, land, development, special situations and discreet dispositions.</p>
        </div>
      </div>

      <div className="capital-hero__bar" aria-label="Capital desk focus">
        {[
          ["INR 25 Cr+", "Indicative private transaction context"],
          ["Two-sided", "Capital and opportunity mandates"],
          ["Confidential", "Controlled introductions and review"],
        ].map(([value, label]) => (
          <article key={value}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function TwoSidedProposition() {
  return (
    <section className="capital-section capital-split">
      <div>
        <p className="capital-eyebrow">Two-Sided Desk</p>
        <h2>Built for both sides of a private real estate transaction.</h2>
      </div>
      <div className="capital-two-paths">
        <article>
          <span>01</span>
          <h3>Capital seeking opportunity</h3>
          <p>
            For principals, family offices, founders, UHNI buyers and NRI capital that want a disciplined path to larger real estate opportunities.
          </p>
          <Link href="/capital">Submit capital mandate</Link>
        </article>
        <article>
          <span>02</span>
          <h3>Opportunity seeking capital</h3>
          <p>
            For owners, developers, corporates and authorised advisers who need qualified capital, transaction preparation or private buyer introductions.
          </p>
          <Link href="/transactions">Share transaction brief</Link>
        </article>
      </div>
    </section>
  );
}

function StrategyGrid() {
  return (
    <section className="capital-section" id="strategies">
      <div className="capital-section__head">
        <p className="capital-eyebrow">Transaction Strategies</p>
        <h2>Strategies where private real estate capital requires sharper filtering.</h2>
        <Link href="/strategies">View all strategies</Link>
      </div>
      <div className="capital-strategy-grid">
        {transactionStrategies.map((strategy) => (
          <Link key={strategy.slug} className="capital-strategy-card" href={`/strategies/${strategy.slug}`}>
            <span>{strategy.eyebrow}</span>
            <h3>{strategy.title}</h3>
            <p>{strategy.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function TransactionDesk({ site }: { site: SiteConfig }) {
  return (
    <section className="capital-section capital-desk" id="transactions">
      <div>
        <p className="capital-eyebrow">Private Desk</p>
        <h2>{transactionDesk.title}</h2>
        <p>{transactionDesk.description}</p>
      </div>
      <div className="capital-empty-state">
        <span>Confidential</span>
        <h3>No public memoranda open today.</h3>
        <p>{transactionDesk.emptyState}</p>
        <Link className="capital-button capital-button--ghost" href="/private-desk#memorandum">
          Request Memorandum Access
        </Link>
      </div>
      <CapitalForm site={site} kind="transaction" compact />
    </section>
  );
}

function UnderwritingApproach() {
  return (
    <section className="capital-section capital-underwriting">
      <div>
        <p className="capital-eyebrow">Underwriting Approach</p>
        <h2>Risk is not avoided by language. It is reduced by process.</h2>
        <p>
          Hacoco Capital is not a regulated investment adviser, lender or fund manager. Our work is transaction advisory, opportunity assessment, sourcing, preparation and counterparty introduction support.
        </p>
      </div>
      <div className="capital-underwriting__grid">
        {underwritingPillars.map((pillar, index) => (
          <article key={pillar.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CapitalMandates({ site }: { site: SiteConfig }) {
  return (
    <section className="capital-section capital-mandates" id="capital">
      <div>
        <p className="capital-eyebrow">Active Capital Mandates</p>
        <h2>{activeCapitalMandates.title}</h2>
        <p>{activeCapitalMandates.description}</p>
      </div>
      <div className="capital-empty-state capital-empty-state--dark">
        <span>Private</span>
        <h3>Capital mandates are held off-page.</h3>
        <p>{activeCapitalMandates.emptyState}</p>
      </div>
      <CapitalForm site={site} kind="deploy" compact />
    </section>
  );
}

function CapitalProcess() {
  return (
    <section className="capital-section">
      <div className="capital-section__head">
        <p className="capital-eyebrow">How Hacoco Capital Works</p>
        <h2>A controlled path from brief to qualified conversation.</h2>
      </div>
      <div className="capital-process">
        {[
          ["Consult", "We clarify mandate, role, confidentiality, ticket size, asset class and what would make the transaction unacceptable."],
          ["Frame", "We shape the opportunity or capital requirement into a serious decision package before introductions begin."],
          ["Source", "We identify suitable counterparties, manage controlled conversations and support the path toward professional diligence."],
        ].map(([title, copy], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function SelectedInsight() {
  const insight = capitalInsights[0];

  return (
    <section className="capital-section capital-insight">
      <div>
        <p className="capital-eyebrow">Selected Insight</p>
        <h2>{insight.title}</h2>
        <p>{insight.description}</p>
      </div>
      <Link className="capital-button capital-button--ghost" href={`/insights/${insight.slug}`}>
        Read Note
      </Link>
    </section>
  );
}

function DiscretionStatement() {
  return (
    <section className="capital-section capital-discretion">
      <p className="capital-eyebrow">Discretion & Trust</p>
      <h2>Confidentiality is not a design feature. It is part of the operating model.</h2>
      <p>
        Hacoco Capital does not publish fabricated transactions, fake client outcomes or artificial deal flow. Private mandates are handled selectively, with controlled information sharing and clear limits on what is discussed publicly.
      </p>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="capital-final-cta">
      <div>
        <p className="capital-eyebrow">Start With The Right Path</p>
        <h2>Deploy capital, or bring a transaction to the desk.</h2>
      </div>
      <div>
        <Link className="capital-button" href="/capital">
          Deploy Capital
        </Link>
        <Link className="capital-button capital-button--ghost" href="/transactions">
          Discuss A Transaction
        </Link>
      </div>
    </section>
  );
}
