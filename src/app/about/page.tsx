import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import { CapitalFooter, CapitalHeader } from "@/components/capital-site";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import {
  howCapitalWorks,
  leadership,
  transactionStrategies,
  underwritingPillars,
} from "@/lib/capital-content";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  return {
    title: `About Us | ${site.brand.name}`,
    description:
      site.slug === "capital"
        ? "About Hacoco Capital, the private real estate transaction and capital advisory arm of Hacoco."
        : site.slug === "investor"
        ? "About Hacoco, a private real estate investment and acquisition desk sourcing residential, land and investment opportunities."
        : `About ${site.brand.name}.`,
    alternates: {
      canonical: `https://${site.primaryDomain}/about`,
    },
  };
}

export default async function AboutPage() {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const isInvestor = site.slug === "investor";

  if (site.slug === "capital") {
    return (
      <main className="capital-site capital-inner">
        <div className="capital-shell">
          <CapitalHeader activePath="/about" site={site} />

          <section className="capital-page-hero">
            <p className="capital-eyebrow">About Hacoco Capital</p>
            <h1>The private transaction and capital advisory arm of Hacoco.</h1>
            <p>
              Hacoco Capital works selectively with investors, owners, developers and family offices on large or complex real estate mandates.
            </p>
          </section>

          <section className="capital-section capital-split">
            <div>
              <p className="capital-eyebrow">Positioning</p>
              <h2>We sit between serious capital and serious opportunity.</h2>
            </div>
            <div className="capital-copy-stack">
              <p>
                Hacoco Capital exists because large private real estate transactions rarely progress through exposure alone. They need origination, underwriting, preparation, counterparty access and execution discipline.
              </p>
              <p>
                The desk supports private acquisitions, income assets, land, development, redevelopment, special situations and discreet sell-side conversations. The work is practical: mandate framing, opportunity assessment, sourcing, preparation and counterparty introductions.
              </p>
            </div>
          </section>

          <section className="capital-section">
            <div className="capital-section__head">
              <p className="capital-eyebrow">Two Hacoco Businesses</p>
              <h2>Hacoco Capital and Invest With Hacoco are complementary.</h2>
            </div>
            <div className="capital-comparison-cards">
              <article>
                <span>Hacoco Capital</span>
                <h3>Private transactions</h3>
                <ul>
                  <li>Capital mandates</li>
                  <li>Income assets</li>
                  <li>Development and redevelopment</li>
                  <li>Dispositions</li>
                  <li>Special situations</li>
                </ul>
              </article>
              <article>
                <span>Invest With Hacoco</span>
                <h3>Property acquisition</h3>
                <ul>
                  <li>Market discovery</li>
                  <li>Residential and land opportunities</li>
                  <li>Buyer requirements</li>
                  <li>Market intelligence</li>
                  <li>Shortlisted acquisition support</li>
                </ul>
                <Link className="capital-text-link" href="https://www.investwithhacoco.com">
                  Visit Invest With Hacoco
                </Link>
              </article>
            </div>
          </section>

          <section className="capital-section capital-split">
            <div>
              <p className="capital-eyebrow">Broker Difference</p>
              <h2>Not a listing desk. Not a public circulation machine.</h2>
            </div>
            <div className="capital-copy-stack">
              <p>
                A traditional brokerage process often begins with available supply. Hacoco Capital begins with the transaction problem: what the capital wants, what the owner needs, what the asset can support and which counterparties are worth approaching.
              </p>
              <p>
                Large transactions do not close simply because more people see them. They close when the opportunity is properly prepared and reaches the right counterparty.
              </p>
            </div>
          </section>

          <section className="capital-section">
            <div className="capital-section__head">
              <p className="capital-eyebrow">Who We Work With</p>
              <h2>Clients and counterparties who value fewer, better conversations.</h2>
            </div>
            <div className="capital-strategy-grid capital-strategy-grid--compact">
              {[
                {
                  title: "Family offices and UHNI principals",
                  copy: "Useful where capital needs fewer opportunities, clearer downside review and a private path to suitable counterparties.",
                },
                {
                  title: "Founders and private company owners",
                  copy: "Useful where real estate decisions sit alongside liquidity events, operating businesses, family requirements or long-hold capital planning.",
                },
                {
                  title: "NRI capital seeking India exposure",
                  copy: "Useful where local context, documentation sequence, counterparty quality and remote coordination matter before travel or commitment.",
                },
                {
                  title: "Large owners and family-held real estate",
                  copy: "Useful where a sale, partial exit or capital partner should be prepared before the asset is discussed widely.",
                },
                {
                  title: "Developers and redevelopment partners",
                  copy: "Useful where land, permissions, residual value, partner capability and capital route need to be assessed together.",
                },
                {
                  title: "Professional intermediaries with real mandates",
                  copy: "Useful where an adviser has authority, reliable facts and a transaction that needs disciplined counterparty access.",
                },
              ].map((item) => (
                <article key={item.title} className="capital-strategy-card">
                  <span>Counterparty</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="capital-section capital-leadership">
            <div>
              <p className="capital-eyebrow">Leadership</p>
              <h2>Transaction judgement is personal.</h2>
              <p>
                Hacoco Capital is led through direct relationships, selective mandates and senior involvement in private transaction conversations.
              </p>
            </div>
            <div className="capital-leadership__cards">
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
            </div>
          </section>

          <section className="capital-section">
            <div className="capital-section__head">
              <p className="capital-eyebrow">Operating Principles</p>
              <h2>What guides the desk.</h2>
            </div>
            <div className="capital-underwriting__grid">
              {underwritingPillars.map((pillar) => (
                <article key={pillar.title}>
                  <span>{pillar.title}</span>
                  <p>{pillar.copy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="capital-section">
            <div className="capital-section__head">
              <p className="capital-eyebrow">How The Desk Works</p>
              <h2>From origin to execution support.</h2>
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
          </section>

          <section className="capital-section capital-split">
            <div>
              <p className="capital-eyebrow">Commercial Terms</p>
              <h2>Fees depend on the mandate.</h2>
            </div>
            <div className="capital-copy-stack">
              <p>
                Commercial arrangements vary by mandate. Hacoco Capital may work on advisory, brokerage, retainer or success-fee terms depending on the nature of the transaction.
              </p>
              <p>
                Commercial terms and potential conflicts are discussed before substantive work begins.
              </p>
            </div>
          </section>

          <section className="capital-section capital-split">
            <div>
              <p className="capital-eyebrow">Confidentiality & Status</p>
              <h2>Disclosure is limited by design.</h2>
            </div>
            <div className="capital-copy-stack">
              <p>
                Transaction details are shared only where Hacoco has a genuine mandate, appropriate permission and a suitably relevant counterparty.
              </p>
              <p>
                Hacoco Capital is not a fund, lender or regulated investment adviser. It does not promise returns, guarantee capital, provide lending decisions or replace legal, tax, valuation, technical or regulatory advice.
              </p>
            </div>
          </section>

          <section className="capital-section">
            <div className="capital-section__head">
              <p className="capital-eyebrow">Scope</p>
              <h2>Where we are most relevant.</h2>
            </div>
            <div className="capital-insight-list">
              {transactionStrategies.map((strategy) => (
                <Link key={strategy.slug} href={`/strategies/${strategy.slug}`}>
                  <span>{strategy.eyebrow}</span>
                  <h3>{strategy.title}</h3>
                  <p>{strategy.summary}</p>
                </Link>
              ))}
            </div>
          </section>

          <CapitalFooter site={site} />
        </div>
      </main>
    );
  }

  if (isInvestor) {
    return (
      <main className="investor-site investor-inner">
        <div className="investor-container">
          <SiteHeader site={site} activePath="/about" />

          <section className="investor-about-hero">
            <p className="investor-eyebrow">About Hacoco</p>
            <h1>A private acquisition desk built around judgement.</h1>
            <p>
              Hacoco sources, evaluates and helps execute residential, land,
              commercial and select investment opportunities across Delhi, NCR,
              Dubai and selected markets.
            </p>
          </section>

          <section className="investor-about-statement">
            <div className="investor-about-statement__image">
              <Image
                alt="South Delhi residence sourced through Hacoco"
                className="object-cover"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
                src="/images/investor/jor-bagh.jpeg"
              />
            </div>
            <div>
              <p className="investor-eyebrow">What We Do</p>
              <h2>Access is useful. Filtering makes it valuable.</h2>
              <p>
                The market is not short of property. It is short of clear
                information, credible sellers and opportunities that make sense
                at the quoted price.
              </p>
              <p>
                Hacoco begins with the buyer&apos;s requirement, then screens the
                property, counterparty, pricing and documentation before asking
                the buyer to spend time.
              </p>
            </div>
          </section>

          <section className="investor-about-principles">
            <div>
              <p className="investor-eyebrow">The Hacoco Approach</p>
              <h2>Access. Intelligence. Judgement. Execution.</h2>
            </div>
            <div>
              <article>
                <span>01</span>
                <h3>Private acquisition</h3>
                <p>
                  Owner, developer and intermediary relationships used to find
                  property beyond a standard portal search.
                </p>
              </article>
              <article>
                <span>02</span>
                <h3>Investment analysis</h3>
                <p>
                  Pricing evidence, property economics, future demand and exit
                  depth examined before a case is made.
                </p>
              </article>
              <article>
                <span>03</span>
                <h3>Transaction execution</h3>
                <p>
                  Negotiation and diligence coordination with the qualified
                  legal, tax and technical specialists a transaction requires.
                </p>
              </article>
            </div>
          </section>

          <section className="investor-about-framework">
            <div>
              <p className="investor-eyebrow">How We Work</p>
              <h2>Hacoco is not a portal and not a volume brokerage desk.</h2>
            </div>
            <div>
              <p>
                A portal starts with supply. Hacoco starts with the buyer&apos;s
                mandate. We want to know the market, budget, use case, hold
                period, liquidity need, documentation comfort and what would
                make the investment unacceptable.
              </p>
              <p>
                From there, we source and compare opportunities across owner
                conversations, developers, private inventory, local
                intermediaries and Hacoco&apos;s own market work. The result should
                be a smaller shortlist with clearer reasoning, not a feed of
                every property available.
              </p>
            </div>
          </section>

          <section className="investor-about-table">
            {[
              {
                label: "Who We Work With",
                copy: "HNIs, NRIs, founders, family buyers and private investors who value discretion, market context and a disciplined route to acquisition.",
              },
              {
                label: "Markets We Cover",
                copy: "South Delhi homes, Delhi NCR primary property, Dubai real estate, Dubai company setup coordination, Goa villas, North India land and selected diversification opportunities.",
              },
              {
                label: "What Intelligence Means",
                copy: "Local pricing context, seller quality, developer assessment, title sensitivity, exit-buyer logic, service-charge review, rental realism and risks that should be visible before negotiation.",
              },
              {
                label: "How Hacoco Gets Paid",
                copy: "Commercial terms depend on the mandate and transaction route. Fees or success economics are discussed transparently before active work begins.",
              },
              {
                label: "What We Do Not Do",
                copy: "We do not provide legal, tax, mortgage or regulatory advice. We coordinate with qualified professionals where the transaction requires independent specialist review.",
              },
              {
                label: "Who Is Behind Hacoco",
                copy: "The work is led through Hacoco's private network and Shivam Sood's direct client relationships, with a preference for senior involvement over anonymous volume-led circulation.",
              },
            ].map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <p>{item.copy}</p>
              </article>
            ))}
          </section>

          <section className="investor-about-relationship">
            <p className="investor-eyebrow">A Direct Relationship</p>
            <h2>Built around relationships, not lead volume.</h2>
            <p>
              Hacoco works directly with buyers, property owners, developers and
              local specialists. We are not building a high-volume listing
              portal. We are building a more useful path from requirement to
              acquisition.
            </p>
            <Link className="investor-button" href="/contact">
              Speak to Hacoco
            </Link>
          </section>

          <SiteFooter site={site} />
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell min-h-screen">
      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <SiteHeader site={site} activePath="/about" />

        <section className="grid gap-10 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="eyebrow">About Us</p>
            <h1 className="font-display copy-balance mt-5 max-w-5xl text-[3.6rem] leading-[0.88] text-[var(--textStrong)] md:text-[6rem]">
              {isInvestor
                ? "A private acquisition desk for serious real estate capital."
                : "A focused desk for private, high-trust mandates."}
            </h1>
          </div>
          <p className="lede">
            {isInvestor
              ? "Invest With Hacoco helps buyers move from broad interest to a disciplined shortlist across prime homes, land parcels, off plan property, Dubai/UAE market entry and selective international diversification."
              : `${site.brand.name} exists for clients who need discretion, clarity and a more qualified path to counterparties, assets or opportunities.`}
          </p>
        </section>

        <section className="section-band section-band--elevated grid gap-8 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <p className="eyebrow">What We Believe</p>
            <h2 className="font-display mt-4 text-4xl leading-none text-[var(--textStrong)] md:text-5xl">
              Access is only valuable when it is filtered.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[var(--textMuted)]">
            <p>
              The best opportunities are rarely solved by more browsing. They
              require a clear mandate, local context, documentation discipline,
              seller quality and a practical path to execution.
            </p>
            <p>
              Hacoco works as a high-touch acquisition partner. We help frame
              the requirement, qualify what deserves attention and coordinate
              the next serious conversation.
            </p>
            <p>
              We are not trying to become a high-volume listing portal. The
              value is in fewer irrelevant options, better market judgment and
              stronger control before capital is committed.
            </p>
          </div>
        </section>

        {isInvestor ? (
          <section className="section-shell py-14">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Prime residential",
                  copy: "South Delhi homes, builder floors, bungalows, Goa villas and lifestyle-led residential acquisitions.",
                },
                {
                  title: "Land acquisition",
                  copy: "North India corridors including Baghpat, Haridwar, Neemrana, Jewar, Dehradun foothills, Kotabagh and Bejunia.",
                },
                {
                  title: "Global routes",
                  copy: "Dubai property, UAE company setup support and selective France vineyard opportunities for diversification.",
                },
              ].map((item) => (
                <article key={item.title} className="surface-card p-6">
                  <h3 className="text-lg font-semibold text-[var(--textStrong)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--textMuted)]">
                    {item.copy}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="section-band section-band--tint flex flex-col gap-5 p-6 md:p-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="eyebrow">Next Step</p>
            <h2 className="font-display mt-3 text-4xl leading-none text-[var(--textStrong)] md:text-5xl">
              Start with the brief.
            </h2>
          </div>
          <Link href="/contact" className="primary-button">
            Contact Us
          </Link>
        </section>

        <SiteFooter site={site} />
      </div>
    </main>
  );
}
