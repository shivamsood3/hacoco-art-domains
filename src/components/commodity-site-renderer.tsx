import Image from "next/image";
import Link from "next/link";

import type {
  CommodityCategory,
  ProcessStep,
  SiteConfig,
  TradeRiskControl,
  TradeServiceModel,
} from "@/lib/site-config";

import { LeadForm } from "./lead-form";

export function CommoditySiteRenderer({ site }: { site: SiteConfig }) {
  const trade = site.commodities;

  if (!trade) {
    return null;
  }

  return (
    <main className="commodity-page overflow-x-hidden">
      <div className="mx-auto max-w-[90rem] px-4 pb-6 sm:px-6 lg:px-8">
        <CommodityNavbar site={site} />
        <CommodityHero site={site} />
        <CommodityTrustStrip site={site} />
        <CommodityGrid categories={trade.categories} />
        <OperatingModels models={trade.serviceModels} />
        <RiskControl controls={trade.riskControls} site={site} />
        {site.sections.process ? (
          <TradeProcess
            eyebrow={site.sections.process.eyebrow}
            steps={site.sections.process.steps}
            title={site.sections.process.title}
          />
        ) : null}
        {site.sections.faq ? (
          <CommodityFaq
            eyebrow={site.sections.faq.eyebrow}
            items={site.sections.faq.items}
            title={site.sections.faq.title}
          />
        ) : null}
        <CommodityCta site={site} />
        <CommodityLeadSection site={site} />
        <CommodityFooter site={site} />
      </div>
    </main>
  );
}

function CommodityNavbar({ site }: { site: SiteConfig }) {
  return (
    <header className="flex items-center justify-between py-5 md:py-7">
      <Link href="/" className="group flex items-center gap-3" aria-label="Hacoco Advisory home">
        <span className="grid size-10 place-items-center rounded-full bg-[var(--commodityInk)] text-[11px] font-bold tracking-[0.12em] text-white">
          HC
        </span>
        <span>
          <span className="block text-[0.64rem] font-semibold uppercase tracking-[0.28em] text-[var(--commodityMuted)]">
            Global Commodity Trade
          </span>
          <span className="mt-0.5 block text-lg font-semibold tracking-[-0.03em] text-[var(--commodityInk)]">
            Hacoco Advisory
          </span>
        </span>
      </Link>

      <nav className="hidden items-center gap-7 text-[0.78rem] font-medium text-[var(--commodityMuted)] lg:flex">
        {site.navigation.slice(0, 4).map((item) => (
          <a key={item.href} href={item.href} className="hover:text-[var(--commodityInk)]">
            {item.label}
          </a>
        ))}
      </nav>

      <a className="commodity-button commodity-button--compact" href="#lead-form">
        {site.navCtaLabel}
      </a>
    </header>
  );
}

function CommodityHero({ site }: { site: SiteConfig }) {
  return (
    <section className="commodity-hero">
      <div className="commodity-hero__copy">
        <div>
          <p className="commodity-eyebrow">{site.hero.eyebrow}</p>
          <h1>{site.hero.title}</h1>
          <p className="commodity-lede">{site.hero.description}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {site.hero.ctas.map((cta) => (
              <a
                key={cta.label}
                className={
                  cta.variant === "primary"
                    ? "commodity-button"
                    : "commodity-button commodity-button--secondary"
                }
                href={cta.href}
              >
                {cta.label}
              </a>
            ))}
          </div>
        </div>

        <div className="commodity-metrics">
          {site.hero.metrics.map((metric) => (
            <div key={metric.label}>
              <p>{metric.value}</p>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="commodity-hero__visual">
        <Image
          alt={site.hero.image.alt}
          className="object-cover"
          fill
          loading="eager"
          sizes="(max-width: 1024px) 100vw, 48vw"
          src={site.hero.image.src}
        />
        <div className="commodity-image-index" aria-hidden="true">
          01 / 04
        </div>
        <div className="commodity-hero__caption">
          <p>{site.hero.image.eyebrow}</p>
          <h2>{site.hero.image.captionTitle}</h2>
          <span>{site.hero.image.captionText}</span>
        </div>
      </div>
    </section>
  );
}

function CommodityTrustStrip({ site }: { site: SiteConfig }) {
  return (
    <section className="commodity-trust" aria-label="Trade principles">
      {site.trustStrip.map((item, index) => (
        <article key={item.title}>
          <span>0{index + 1}</span>
          <div>
            <p>{item.kicker}</p>
            <h2>{item.title}</h2>
            <small>{item.copy}</small>
          </div>
        </article>
      ))}
    </section>
  );
}

function CommodityGrid({ categories }: { categories: CommodityCategory[] }) {
  return (
    <section className="commodity-section" id="commodities">
      <CommoditySectionHeading
        eyebrow="Commodities We Cover"
        title="Four categories. One clear operating model for each."
        description="We lead with energy mandates and selectively extend our trading and sourcing network across essential agricultural inputs and food supply."
      />

      <div className="commodity-grid">
        {categories.map((category) => (
          <article
            key={category.title}
            className={category.featured ? "commodity-card commodity-card--featured" : "commodity-card"}
          >
            <div className="commodity-card__image">
              <Image
                alt={category.title}
                className="object-cover"
                fill
                sizes={
                  category.featured
                    ? "(max-width: 1024px) 100vw, 58vw"
                    : "(max-width: 768px) 100vw, 32vw"
                }
                src={category.image}
              />
              <span>{category.number}</span>
            </div>
            <div className="commodity-card__body">
              <p className="commodity-mode">{category.mode}</p>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function OperatingModels({ models }: { models: TradeServiceModel[] }) {
  return (
    <section className="commodity-section" id="operating-models">
      <CommoditySectionHeading
        eyebrow="How We Operate"
        title="Principal in one model. Facilitator in the other."
        description="The distinction is explicit from the start because it determines who contracts, who performs, and how the trade progresses."
      />

      <div className="trade-models">
        {models.map((model) => (
          <article key={model.title} className="trade-model">
            <div className="trade-model__topline">
              <span>{model.number}</span>
              <p>{model.eyebrow}</p>
            </div>
            <h3>{model.title}</h3>
            <p className="trade-model__description">{model.description}</p>
            <dl>
              <div>
                <dt>Typically applies to</dt>
                <dd>{model.appliesTo}</dd>
              </div>
              <div>
                <dt>Contracting relationship</dt>
                <dd>{model.relationship}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}

function RiskControl({
  controls,
  site,
}: {
  controls: TradeRiskControl[];
  site: SiteConfig;
}) {
  const narrative = site.sections.whyHacoco;

  if (!narrative) {
    return null;
  }

  return (
    <section className="commodity-risk" id="risk-control">
      <div className="commodity-risk__intro">
        <p className="commodity-eyebrow">{narrative.eyebrow}</p>
        <h2>{narrative.title}</h2>
        <div className="commodity-risk__copy">
          {narrative.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="commodity-risk__controls">
        {controls.map((control) => (
          <article key={control.number}>
            <span>{control.number}</span>
            <div>
              <h3>{control.title}</h3>
              <p>{control.description}</p>
            </div>
          </article>
        ))}
      </div>

      {narrative.aside ? <p className="commodity-risk__note">{narrative.aside}</p> : null}
    </section>
  );
}

function TradeProcess({
  eyebrow,
  title,
  steps,
}: {
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
}) {
  return (
    <section className="commodity-section" id="process">
      <CommoditySectionHeading eyebrow={eyebrow} title={title} />
      <div className="trade-process">
        {steps.map((step, index) => (
          <article key={step.title}>
            <div className="trade-process__marker">
              <span>0{index + 1}</span>
            </div>
            <p>Step {index + 1}</p>
            <h3>{step.title}</h3>
            <small>{step.copy}</small>
          </article>
        ))}
      </div>
    </section>
  );
}

function CommodityCta({ site }: { site: SiteConfig }) {
  return (
    <section className="commodity-cta">
      <div>
        <p className="commodity-eyebrow">{site.ctaBand.eyebrow}</p>
        <h2>{site.ctaBand.title}</h2>
      </div>
      <div>
        <p>{site.ctaBand.description}</p>
        <a className="commodity-button" href="#lead-form">
          {site.ctaBand.buttonLabel}
        </a>
      </div>
    </section>
  );
}

function CommodityFaq({
  eyebrow,
  items,
  title,
}: {
  eyebrow: string;
  items: NonNullable<SiteConfig["sections"]["faq"]>["items"];
  title: string;
}) {
  return (
    <section className="commodity-section" id="faq">
      <CommoditySectionHeading eyebrow={eyebrow} title={title} />
      <div className="commodity-faq">
        {items.map((item, index) => (
          <details key={item.question}>
            <summary>
              <span>0{index + 1}</span>
              <h3>{item.question}</h3>
              <i aria-hidden="true">+</i>
            </summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CommodityLeadSection({ site }: { site: SiteConfig }) {
  return (
    <section className="commodity-lead" id="lead-form">
      <div className="commodity-lead__intro">
        <p className="commodity-eyebrow">{site.formSection.eyebrow}</p>
        <h2>{site.formSection.title}</h2>
        <p>{site.formSection.description}</p>

        <div className="commodity-lead__checklist">
          <p>Include these details</p>
          <span>Product and specification</span>
          <span>Volume and frequency</span>
          <span>Origin and destination</span>
          <span>Delivery basis and timeline</span>
        </div>

        <a href={`mailto:${site.footer.email}`}>{site.footer.email}</a>
      </div>

      <LeadForm site={site} className="commodity-form" />
    </section>
  );
}

function CommoditySectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="commodity-section-heading">
      <div>
        <p className="commodity-eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function CommodityFooter({ site }: { site: SiteConfig }) {
  return (
    <footer className="commodity-footer">
      <div>
        <p>Hacoco Advisory</p>
        <span>{site.footer.copy}</span>
      </div>
      <div>
        <a href={`mailto:${site.footer.email}`}>{site.footer.email}</a>
        <Link href="/terms">Terms of Use</Link>
        <Link href="/privacy">Privacy Policy</Link>
      </div>
      <p>Direct trading | Sourcing | Trade facilitation</p>
    </footer>
  );
}
