import type { Metadata } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  return {
    title: `About Us | ${site.brand.name}`,
    description:
      site.slug === "investor"
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
                copy: "The work is led through Hacoco's private network and Shivam Sood's direct client relationships. Additional team information should remain real and verifiable before being published.",
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
