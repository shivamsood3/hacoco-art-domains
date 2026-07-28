import Image from "next/image";
import Link from "next/link";

import type {
  ContentCard,
  FaqItem,
  ProcessStep,
  SiteConfig,
  ShowcaseItem,
} from "@/lib/site-config";

import { CommoditySiteRenderer } from "./commodity-site-renderer";
import { LeadForm } from "./lead-form";

type SiteRendererProps = {
  site: SiteConfig;
};

export function SiteRenderer({ site }: SiteRendererProps) {
  if (site.vertical === "commodities") {
    return <CommoditySiteRenderer site={site} />;
  }

  const focusSection =
    site.sections.acquisitionFocus ??
    site.sections.advisoryAreas ??
    site.sections.themes ??
    site.sections.collectWhy;

  return (
    <main className="page-shell overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-6 lg:px-8">
        <Navbar site={site} />
        <Hero site={site} />
        <TrustStrip site={site} />

        {site.sections.showcase ? (
          <ShowcaseSection
            id={site.slug === "investor" ? "markets" : "featured-works"}
            eyebrow={site.sections.showcase.eyebrow}
            title={site.sections.showcase.title}
            description={site.sections.showcase.description}
            items={site.sections.showcase.items}
          />
        ) : null}

        {focusSection ? (
          <QuickCards
            id="focus"
            eyebrow={focusSection.eyebrow}
            title={focusSection.title}
            description={focusSection.description}
            items={focusSection.items}
          />
        ) : null}

        {site.sections.whyHacoco ? (
          <NarrativeSection
            eyebrow={site.sections.whyHacoco.eyebrow}
            title={site.sections.whyHacoco.title}
            paragraphs={site.sections.whyHacoco.paragraphs}
            aside={site.sections.whyHacoco.aside}
          />
        ) : null}

        {site.sections.process ? (
          <ProcessSection
            id="process"
            eyebrow={site.sections.process.eyebrow}
            title={site.sections.process.title}
            steps={site.sections.process.steps}
          />
        ) : null}

        {site.sections.faq ? (
          <FaqSection
            id="faq"
            eyebrow={site.sections.faq.eyebrow}
            title={site.sections.faq.title}
            items={site.sections.faq.items}
          />
        ) : null}

        <CtaBand site={site} />

        <section className="section-shell py-16" id="lead-form">
          <div className="section-band section-band--tint grid gap-10 p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div className="max-w-xl">
            <p className="eyebrow">{site.formSection.eyebrow}</p>
            <h2 className="font-display mt-4 text-4xl leading-[0.95] text-[var(--textStrong)] md:text-5xl">
              {site.formSection.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--textMuted)]">
              {site.formSection.description}
            </p>

            <div className="mt-8 space-y-3">
              {site.trustStrip.slice(0, 2).map((item) => (
                <div key={item.title} className="surface-card px-5 py-4">
                  <p className="text-sm font-semibold text-[var(--textStrong)]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[var(--textMuted)]">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>

            {site.calendly ? (
              <div className="surface-card mt-8 p-5">
                <p className="eyebrow">Optional Scheduling</p>
                <p className="mt-3 text-sm leading-6 text-[var(--textMuted)]">
                  Prefer a scheduled call? Use the calendar below after sharing
                  your brief.
                </p>
                <div className="mt-4 overflow-hidden rounded-[1.4rem] border border-subtle">
                  <iframe
                    className="min-h-[680px] w-full bg-[var(--bgElevated)]"
                    src={site.calendly.url}
                    title="Calendly"
                  />
                </div>
              </div>
            ) : null}
          </div>

          <LeadForm site={site} compact={site.slug === "investor"} />
          </div>
        </section>

        <Footer site={site} />
      </div>
    </main>
  );
}

function Navbar({ site }: { site: SiteConfig }) {
  return (
    <header className="flex items-center justify-between py-6 md:py-8">
      <div>
        <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--textSoft)]">
          {site.brand.eyebrow}
        </p>
        <p className="font-display mt-1 text-[1.8rem] leading-none text-[var(--textStrong)]">
          {site.brand.name}
        </p>
      </div>

      <nav className="hidden items-center gap-7 text-sm text-[var(--textMuted)] md:flex">
        {site.navigation.slice(0, 3).map((item) => (
          <a
            key={`${item.label}-${item.href}`}
            href={item.href}
            className="hover:text-[var(--textStrong)]"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a className="primary-button" href="#lead-form">
        {site.navCtaLabel}
      </a>
    </header>
  );
}

function Hero({ site }: { site: SiteConfig }) {
  return (
    <section className="grid gap-10 py-8 md:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div className="pt-6 md:pt-10">
        <p className="eyebrow">{site.hero.eyebrow}</p>
        <h1 className="font-display copy-balance mt-5 max-w-3xl text-[3.5rem] leading-[0.88] text-[var(--textStrong)] md:text-[5.75rem]">
          {site.hero.title}
        </h1>
        <p className="lede mt-5 max-w-xl">
          {site.hero.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          {site.hero.ctas.map((cta) => (
            <a
              key={cta.label}
              className={cta.variant === "primary" ? "primary-button" : "secondary-button"}
              href={cta.href}
            >
              {cta.label}
            </a>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {site.hero.metrics.map((metric) => (
            <div key={metric.label} className="surface-card-soft px-4 py-4">
              <p className="font-display text-[2.2rem] leading-none text-[var(--textStrong)]">
                {metric.value}
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--textMuted)]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {site.hero.formAboveFold ? (
        <div className="space-y-5">
          <FeatureHeroCard site={site} />
          <LeadForm site={site} compact />
        </div>
      ) : (
        <FeatureHeroCard site={site} />
      )}
    </section>
  );
}

function FeatureHeroCard({ site }: { site: SiteConfig }) {
  return (
    <div className="section-band section-band--elevated grid gap-4 p-4 md:grid-cols-[1.2fr_0.8fr] md:p-5">
      <div className="gallery-frame relative aspect-[4/5] md:aspect-auto">
        <Image
          alt={site.hero.image.alt}
          className="h-full w-full object-cover"
          height={920}
          priority
          sizes="(max-width: 768px) 100vw, 58vw"
          src={site.hero.image.src}
          width={760}
        />
      </div>

      <div className="flex flex-col justify-between gap-4">
        <div className="surface-card-tint p-6">
          <p className="eyebrow">{site.hero.image.eyebrow}</p>
          <h2 className="font-display copy-balance mt-4 text-[2.55rem] leading-[0.92] text-[var(--textStrong)]">
            {site.hero.image.captionTitle}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[var(--textMuted)]">
            {site.hero.image.captionText}
          </p>
        </div>

        <div className="surface-card p-6">
          <p className="eyebrow">What Happens Next</p>
          <p className="mt-3 text-sm leading-6 text-[var(--textMuted)]">
            Share a brief. We return with a tighter, more relevant next step.
          </p>
        </div>
      </div>
    </div>
  );
}

function TrustStrip({ site }: { site: SiteConfig }) {
  return (
    <section className="section-shell py-8">
      <div className="flex flex-wrap gap-3">
        {site.trustStrip.map((item) => (
          <div key={item.title} className="surface-chip px-4 py-2 text-sm">
            <span className="font-medium text-[var(--textStrong)]">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShowcaseSection({
  id,
  eyebrow,
  title,
  description,
  items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: ShowcaseItem[];
}) {
  return (
    <section className="section-shell py-14" id={id}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <article
            key={`${item.subtitle}-${item.title}-${index}`}
            className="surface-card overflow-hidden"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[#efe7d8]">
              {item.image ? (
                <Image
                  alt={`${item.title}, ${item.subtitle}`}
                  className="h-full w-full object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  src={item.image}
                />
              ) : null}
            </div>
            <div className="space-y-2 p-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[0.18em] text-[var(--textSoft)]">
                  {item.category}
                </p>
                {item.badge ? (
                  <span className="rounded-full bg-[var(--bgTint)] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--textStrong)]">
                    {item.badge}
                  </span>
                ) : null}
              </div>
              <h3 className="font-display text-[1.9rem] leading-none text-[var(--textStrong)]">
                {item.title}
              </h3>
              <p className="text-sm leading-6 text-[var(--textMuted)]">
                {item.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function QuickCards({
  id,
  eyebrow,
  title,
  description,
  items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  items: ContentCard[];
}) {
  return (
    <section className="section-shell py-14" id={id}>
      <SectionHeader eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.slice(0, 8).map((item) => (
          <article key={item.title} className="surface-card p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--textSoft)]">
              {item.kicker}
            </p>
            <h3 className="mt-4 text-lg font-semibold text-[var(--textStrong)]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--textMuted)]">
              {item.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function NarrativeSection({
  eyebrow,
  title,
  paragraphs,
  aside,
}: {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  aside?: string;
}) {
  return (
    <section className="section-shell py-14">
      <div className="section-band section-band--elevated grid gap-8 p-6 md:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="font-display copy-balance mt-4 max-w-3xl text-4xl leading-[0.95] text-[var(--textStrong)] md:text-5xl">
            {title}
          </h2>
        </div>

        <div className="space-y-5">
          {paragraphs.slice(0, 2).map((paragraph) => (
            <p key={paragraph} className="text-base leading-8 text-[var(--textMuted)] md:text-[1.02rem]">
              {paragraph}
            </p>
          ))}
          {aside ? (
            <div className="surface-card-tint p-5">
              <p className="text-sm leading-7 text-[var(--textStrong)]">{aside}</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({
  id,
  eyebrow,
  title,
  steps,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  steps: ProcessStep[];
}) {
  return (
    <section className="section-shell py-14" id={id}>
      <SectionHeader eyebrow={eyebrow} title={title} />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.slice(0, 3).map((step, index) => (
          <article key={step.title} className="surface-card-soft p-6">
            <p className="text-sm text-[var(--textSoft)]">0{index + 1}</p>
            <h3 className="mt-3 text-lg font-semibold text-[var(--textStrong)]">
              {step.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[var(--textMuted)]">
              {step.copy}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FaqSection({
  id,
  eyebrow,
  title,
  items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  items: FaqItem[];
}) {
  return (
    <section className="section-shell py-14" id={id}>
      <SectionHeader eyebrow={eyebrow} title={title} />

      <div className="mt-8 space-y-3">
        {items.slice(0, 3).map((item) => (
          <details key={item.question} className="surface-card px-5 py-4">
            <summary className="cursor-pointer list-none text-base font-medium text-[var(--textStrong)]">
              {item.question}
            </summary>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--textMuted)]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function CtaBand({ site }: { site: SiteConfig }) {
  return (
    <section className="section-shell py-14">
      <div className="section-band section-band--elevated flex flex-col gap-6 p-6 md:p-8 lg:flex-row lg:items-end lg:justify-between lg:p-10">
        <div className="max-w-3xl">
          <p className="eyebrow">{site.ctaBand.eyebrow}</p>
          <h2 className="font-display copy-balance mt-4 text-4xl leading-[0.95] text-[var(--textStrong)] md:text-5xl">
            {site.ctaBand.title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--textMuted)]">
            {site.ctaBand.description}
          </p>
        </div>

        <a className="primary-button" href="#lead-form">
          {site.ctaBand.buttonLabel}
        </a>
      </div>
    </section>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="font-display copy-balance mt-4 max-w-3xl text-4xl leading-[0.95] text-[var(--textStrong)] md:text-5xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-xl text-base leading-7 text-[var(--textMuted)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Footer({ site }: { site: SiteConfig }) {
  return (
    <footer className="section-shell py-8">
      <div className="flex flex-col gap-5 border-t border-subtle pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--textSoft)]">
            {site.brand.eyebrow}
          </p>
          <p className="font-display mt-2 text-[1.9rem] text-[var(--textStrong)]">
            {site.brand.name}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--textMuted)]">
            {site.footer.copy}
          </p>
        </div>

        <div className="space-y-2 text-sm text-[var(--textMuted)]">
          <p>{site.footer.contactLabel}</p>
          <Link
            href={`mailto:${site.footer.email}`}
            className="block text-[var(--textStrong)] hover:opacity-70"
          >
            {site.footer.email}
          </Link>
          <p>{site.primaryDomain}</p>
          <div className="flex gap-4 pt-2">
            <Link href="/terms" className="hover:text-[var(--textStrong)]">
              Terms of Use
            </Link>
            <Link href="/privacy" className="hover:text-[var(--textStrong)]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
