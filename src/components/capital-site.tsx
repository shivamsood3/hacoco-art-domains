import Image from "next/image";
import Link from "next/link";

import {
  activeCapitalMandates,
  capitalImages,
  capitalContextImages,
  capitalInsights,
  capitalNav,
  howCapitalWorks,
  leadership,
  transactionDesk,
  transactionStrategies,
  underwritingFramework,
  underwritingPillars,
} from "@/lib/capital-content";
import { hospitalityServices } from "@/lib/hospitality-content";
import {
  capitalCommitteeOutputs,
  capitalGovernancePrinciples,
  capitalMandateArchitecture,
} from "@/lib/family-office-content";
import type { SiteConfig } from "@/lib/site-config";

export function CapitalSite({ site }: { site: SiteConfig }) {
  return (
    <main className="capital-site">
      <div className="capital-shell">
        <CapitalHeader activePath="/" site={site} />
        <CapitalHero site={site} />
        <TwoSidedProposition />
        <FamilyOfficeMandates />
        <StrategyGrid />
        <MarketContextSection />
        <HospitalitySection />
        <UnderwritingApproach />
        <PrivateDeskSection />
        <CapitalProcess />
        <SelectedInsight />
        <LeadershipSection />
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
        <small>Real Estate &amp; Hotel Transactions</small>
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
        <h2>Private real estate and hotel capital advisory.</h2>
        <p>
          A discreet desk for capital seeking real estate opportunity and real estate opportunity seeking qualified capital.
        </p>
        <p className="capital-footer__notice">
          Hacoco Capital does not manage funds, lend, or act as a regulated investment adviser.
        </p>
      </div>

      <div>
        <p className="capital-footer__label">Desk</p>
        <Link href="/transactions">Transactions</Link>
        <Link href="/capital">Deploy Capital</Link>
        <Link href="/family-offices">Family Offices</Link>
        <Link href="/hospitality">Hotel & Hospitality</Link>
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
        <Link href="/disclaimer">Disclaimer</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>
    </footer>
  );
}

function FamilyOfficeMandates() {
  return (
    <section className="capital-section capital-family-office">
      <div className="capital-section__head capital-section__head--wide">
        <div className="capital-section__head-copy">
          <p className="capital-eyebrow">Family Office Mandates</p>
          <h2>Real estate exposure should begin with allocation intent.</h2>
        </div>
        <Link href="/family-offices">Family office framework</Link>
      </div>

      <div className="capital-family-office__intro">
        <p>
          Hacoco Capital works with family offices, founders, principals and appointed advisers where real estate is being evaluated as income, strategic ownership, development exposure, land optionality or a solution to a specific transaction problem.
        </p>
        <p>
          The desk does not manage capital. It helps define the mandate, originate relevant situations, organise underwriting questions, control information flow and support transaction progression alongside the client&apos;s professional advisers.
        </p>
      </div>

      <div className="capital-family-office__framework">
        {capitalMandateArchitecture.slice(0, 3).map((item, index) => (
          <article key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.copy}</p>
          </article>
        ))}
      </div>

      <div className="capital-family-office__outputs">
        <div>
          <p className="capital-eyebrow">Decision Support</p>
          <h3>What a prepared review can include.</h3>
        </div>
        <div>
          {capitalCommitteeOutputs.map((item) => (
            <article key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="capital-family-office__governance">
        {capitalGovernancePrinciples.slice(0, 3).map(([title, copy]) => (
          <article key={title}>
            <span>{title}</span>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CapitalHero({ site }: { site: SiteConfig }) {
  return (
    <section className="capital-hero capital-hero--dark">
      <div className="capital-hero__copy">
        <h1>Private capital for real estate and hotels that warrant discretion.</h1>
        <p>
          Hacoco Capital works on larger real estate and hotel mandates where operating context, counterparty quality, underwriting discipline and process control matter before capital moves.
        </p>
        <div className="capital-hero__actions">
          <Link className="capital-button capital-button--brass" href="/capital">
            Deploy Capital
          </Link>
          <Link className="capital-button capital-button--ghost" href="/transactions">
            Discuss A Transaction
          </Link>
        </div>
        <div className="capital-hero__notice">
          <span>Notice</span>
          <p>Hacoco Capital does not manage funds, lend, or act as a regulated investment adviser.</p>
        </div>
      </div>

      <div className="capital-hero__visual">
        <Image
          alt="Contemporary hotel exterior with a landscaped arrival court"
          className="object-cover"
          fill
          priority
          sizes="(max-width: 900px) 100vw, 48vw"
          src={capitalImages.hero}
        />
        <div className="capital-hero__panel">
          <span>Hotel &amp; Hospitality Desk</span>
          <p>Acquisitions, dispositions, greenfield and brownfield development, M&amp;A, valuation and on-ground advisory.</p>
        </div>
      </div>

      <div className="capital-hero__bar" aria-label="Capital desk focus">
        {[
          ["Larger mandates", "Private or complex real estate transactions"],
          ["Two-sided desk", "Capital mandates and transaction mandates"],
          ["Hospitality lens", "Operating, asset and transaction context"],
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
    <section className="capital-section capital-split capital-split--desk">
      <div>
        <p className="capital-eyebrow">Two-Sided Desk</p>
        <h2>Built for capital mandates and transaction mandates.</h2>
      </div>
      <div className="capital-two-paths">
        <article>
          <span>01</span>
          <h3>Capital mandates</h3>
          <p>
            For principals, family offices, founders, UHNI buyers and NRI capital that need disciplined origination rather than a broad feed of available properties.
          </p>
          <Link className="capital-card-link" href="/capital">Submit capital mandate</Link>
        </article>
        <article>
          <span>02</span>
          <h3>Transaction mandates</h3>
          <p>
            For owners, developers, corporates and authorised advisers who need transaction preparation, qualified capital or private buyer introductions.
          </p>
          <Link className="capital-card-link" href="/transactions">Share transaction brief</Link>
        </article>
      </div>
    </section>
  );
}

function StrategyGrid() {
  return (
    <section className="capital-section" id="strategies">
      <div className="capital-section__head capital-section__head--wide">
        <div className="capital-section__head-copy">
          <p className="capital-eyebrow">Transaction Strategies</p>
          <h2>Different transactions require different underwriting.</h2>
        </div>
        <Link href="/strategies">View all strategies</Link>
      </div>
      <div className="capital-strategy-ledger">
        {transactionStrategies.map((strategy, index) => (
          <Link key={strategy.slug} className="capital-strategy-row" href={`/strategies/${strategy.slug}`}>
            <span className="capital-strategy-row__number">{String(index + 1).padStart(2, "0")}</span>
            <span className="capital-strategy-row__eyebrow">{strategy.eyebrow}</span>
            <h3>{strategy.title}</h3>
            <p>{strategy.summary}</p>
            <span className="capital-strategy-row__arrow" aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function MarketContextSection() {
  return (
    <section className="capital-section capital-context" aria-labelledby="capital-context-title">
      <div className="capital-section__head capital-section__head--wide">
        <div className="capital-section__head-copy">
          <p className="capital-eyebrow">Market Context</p>
          <h2 id="capital-context-title">The work starts with the place, not the brochure.</h2>
        </div>
        <p className="capital-context__intro">
          Real estate decisions become clearer when location, asset condition and future liquidity are visible together.
        </p>
      </div>
      <div className="capital-context__grid">
        {capitalContextImages.map((item, index) => (
          <figure className={`capital-context-card capital-context-card--${index + 1}`} key={item.src}>
            <Image alt={item.alt} className="object-cover" fill sizes="(max-width: 672px) 100vw, 40vw" src={item.src} />
            <figcaption>
              <span>{item.eyebrow}</span>
              <strong>{item.title}</strong>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function HospitalitySection() {
  return (
    <section className="capital-section capital-hospitality" id="hospitality">
      <div className="capital-hospitality__grid">
        <div className="capital-hospitality__visual capital-hospitality__visual--tall">
          <Image
            alt="Contemporary hotel exterior with a landscaped arrival court"
            className="object-cover"
            fill
            sizes="(max-width: 1088px) 100vw, 42vw"
            src={capitalImages.hero}
          />
        </div>
        <div className="capital-hospitality__copy">
          <p className="capital-eyebrow">Hospitality practice</p>
          <h2>Hotels, advised as a specialist discipline.</h2>
          <p className="capital-hospitality__lede">
            Hotel transactions turn on operators, brands and keys as much as on real estate. The practice is built around that.
          </p>
          <div className="capital-hospitality-links">
            {hospitalityServices.slice(0, 4).map((service) => (
              <Link key={service.slug} href={`/hospitality/${service.slug}`}>
                <strong>{service.title}</strong>
                <small>{service.summary}</small>
              </Link>
            ))}
          </div>
          <Link className="capital-button capital-button--brass" href="/hospitality">
            View Hospitality Practice
          </Link>
        </div>
      </div>
      <div className="capital-hospitality__visual capital-hospitality__visual--wide">
        <Image
          alt="Contemporary hotel lobby with reception and lounge spaces"
          className="object-cover"
          fill
          sizes="(max-width: 1088px) 100vw, 100vw"
          src={capitalImages.hospitalityLobby}
        />
      </div>
      <div className="capital-hospitality__index" aria-label="Hospitality service categories">
        <span>Buy-side</span>
        <span>Sell-side</span>
        <span>Greenfield &amp; brownfield</span>
        <span>M&amp;A and valuation</span>
      </div>
    </section>
  );
}

function PrivateDeskSection() {
  return (
    <section className="capital-section capital-private-desk" id="private-desk">
      <div>
        <p className="capital-eyebrow">The Private Desk</p>
        <h2>A controlled desk for private real estate conversations.</h2>
        <p>
          Confidential mandates are not displayed as public inventory. Details are shared only where Hacoco has an active mandate, permission to disclose and a suitably relevant counterparty.
        </p>
      </div>
      <div className="capital-private-desk__columns">
        <article>
          <span>Transaction Mandates</span>
          <h3>No public transaction memoranda are currently open.</h3>
          <p>{transactionDesk.emptyState}</p>
          <Link className="capital-button capital-button--ghost" href="/transactions">
            Discuss A Transaction
          </Link>
        </article>
        <article>
          <span>Capital Mandates</span>
          <h3>Capital requirements are selectively disclosed.</h3>
          <p>{activeCapitalMandates.emptyState}</p>
          <Link className="capital-button capital-button--ghost" href="/capital">
            Deploy Capital
          </Link>
        </article>
      </div>
    </section>
  );
}

function UnderwritingApproach() {
  return (
    <section className="capital-section capital-underwriting">
      <div>
        <p className="capital-eyebrow">Underwriting</p>
        <h2>We start with the numbers.</h2>
        <p>
          Risk is not avoided by language. It is reduced by process. Hacoco Capital provides real estate transaction advisory, origination and introduction support. It does not operate as a fund manager, lender or regulated investment adviser.
        </p>
      </div>
      <div className="capital-underwriting__stack">
        <div className="capital-underwriting__grid">
          {underwritingPillars.map((pillar, index) => (
            <article key={pillar.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.copy}</p>
            </article>
          ))}
        </div>
        <div className="capital-framework-grid">
          {underwritingFramework.map((framework) => (
            <article key={framework.title}>
              <h3>{framework.title}</h3>
              <ul>
                {framework.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapitalProcess() {
  return (
    <section className="capital-section">
      <div className="capital-section__head">
        <p className="capital-eyebrow">How Hacoco Capital Works</p>
        <h2>Originate. Assess. Prepare. Match. Execute.</h2>
      </div>
      <div className="capital-process">
        {howCapitalWorks.map((step, index) => (
          <article key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </article>
        ))}
      </div>
      <p className="capital-process-note">
        Legal, tax, technical, valuation and financial specialists may be involved depending on the transaction. Hacoco does not replace independent specialist review.
      </p>
    </section>
  );
}

function SelectedInsight() {
  const insight = capitalInsights[0];

  return (
    <section className="capital-section capital-insight">
      <div className="capital-insight__copy">
        <p className="capital-eyebrow">Selected Insight</p>
        <h2>{insight.title}</h2>
        <Link className="capital-text-link" href={`/insights/${insight.slug}`}>
          Read Note
        </Link>
      </div>
      <Link className="capital-insight__note" href={`/insights/${insight.slug}`}>
        <span>Featured note</span>
        <p>{insight.description}</p>
      </Link>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="capital-section capital-leadership">
      <div className="capital-leadership__copy">
        <p className="capital-eyebrow">Judgement</p>
        <h2>Private transactions are built on judgement and trust.</h2>
        <p>
          The desk is led through direct client relationships, mandate discipline and senior involvement in the conversations that matter.
        </p>
      </div>
      <div className="capital-leadership__founder">
        <div className="capital-leadership__portrait">
          <Image
            alt="Shivam Sood, founder of Hacoco Capital"
            fill
            sizes="(max-width: 672px) 13rem, 24vw"
            src={capitalImages.portrait}
          />
        </div>
        <div className="capital-leadership__founder-card">
          {leadership.map((person) => (
            <article key={person.name}>
              <span>{person.role}</span>
              <h3>{person.name}</h3>
              <p>{person.focus}</p>
              <Link
                className="capital-profile-link"
                href={person.linkedIn}
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn Profile
              </Link>
            </article>
          ))}
          <Link className="capital-button capital-button--ghost" href="/about">
            Read About Hacoco Capital
          </Link>
        </div>
      </div>
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
