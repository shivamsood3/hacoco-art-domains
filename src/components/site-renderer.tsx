import Image from "next/image";
import Link from "next/link";

import type {
  ContentCard,
  FaqItem,
  ProcessStep,
  SiteConfig,
  ShowcaseArtwork,
} from "@/lib/site-config";

import { LeadForm } from "./lead-form";

type SiteRendererProps = {
  site: SiteConfig;
};

export function SiteRenderer({ site }: SiteRendererProps) {
  return (
    <main className="overflow-x-hidden">
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-6 lg:px-8">
        <Navbar site={site} />
        <Hero site={site} />
        <TrustStrip site={site} />

        {site.sections.collectWhy ? (
          <SectionCards
            id="why-collect"
            eyebrow={site.sections.collectWhy.eyebrow}
            title={site.sections.collectWhy.title}
            description={site.sections.collectWhy.description}
            items={site.sections.collectWhy.items}
          />
        ) : null}

        {site.sections.themes ? (
          <SectionCards
            id="themes"
            eyebrow={site.sections.themes.eyebrow}
            title={site.sections.themes.title}
            description={site.sections.themes.description}
            items={site.sections.themes.items}
          />
        ) : null}

        {site.sections.acquisitionFocus ? (
          <SectionCards
            id="acquire"
            eyebrow={site.sections.acquisitionFocus.eyebrow}
            title={site.sections.acquisitionFocus.title}
            description={site.sections.acquisitionFocus.description}
            items={site.sections.acquisitionFocus.items}
          />
        ) : null}

        {site.sections.showcase ? (
          <ArtworkShowcase
            id="featured-works"
            eyebrow={site.sections.showcase.eyebrow}
            title={site.sections.showcase.title}
            description={site.sections.showcase.description}
            artworks={site.sections.showcase.artworks}
          />
        ) : null}

        {site.sections.whyHacoco ? (
          <EditorialSection
            eyebrow={site.sections.whyHacoco.eyebrow}
            title={site.sections.whyHacoco.title}
            paragraphs={site.sections.whyHacoco.paragraphs}
            aside={site.sections.whyHacoco.aside}
          />
        ) : null}

        {site.sections.audience ? (
          <BulletColumns
            id={site.slug === "advisory" ? "who-we-work-with" : undefined}
            eyebrow={site.sections.audience.eyebrow}
            title={site.sections.audience.title}
            items={site.sections.audience.items}
          />
        ) : null}

        {site.sections.advisoryAreas ? (
          <SectionCards
            id="advisory-areas"
            eyebrow={site.sections.advisoryAreas.eyebrow}
            title={site.sections.advisoryAreas.title}
            description={site.sections.advisoryAreas.description}
            items={site.sections.advisoryAreas.items}
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

        <section
          className="section-shell grid gap-8 py-16 lg:grid-cols-[1.05fr_0.95fr]"
          id="lead-form"
        >
          <div className="pt-2">
            <p className="gold-label text-[11px]">{site.formSection.eyebrow}</p>
            <h2 className="font-display mt-4 max-w-2xl text-4xl leading-none text-white md:text-5xl">
              {site.formSection.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/68">
              {site.formSection.description}
            </p>

            {site.calendly ? (
              <div className="glass-panel mt-8 rounded-[2rem] p-6">
                <p className="gold-label text-[11px]">Private Scheduling</p>
                <h3 className="font-display mt-3 text-3xl text-white">
                  Book a discreet conversation.
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  If you prefer a scheduled advisory call, use the private
                  consultation calendar below.
                </p>
                <div className="mt-5 overflow-hidden rounded-[1.4rem] border border-white/10">
                  <iframe
                    className="min-h-[700px] w-full bg-white"
                    src={site.calendly.url}
                    title="Calendly"
                  />
                </div>
              </div>
            ) : null}
          </div>

          <LeadForm site={site} compact={site.slug === "investor"} />
        </section>

        <Footer site={site} />
      </div>
    </main>
  );
}

function Navbar({ site }: { site: SiteConfig }) {
  return (
    <header className="flex items-center justify-between py-6">
      <div>
        <p className="text-sm uppercase tracking-[0.32em] text-white/52">
          {site.brand.eyebrow}
        </p>
        <p className="font-display mt-1 text-2xl text-white">{site.brand.name}</p>
      </div>

      <nav className="hidden items-center gap-8 text-sm text-white/58 md:flex">
        {site.navigation.map((item) => (
          <a key={item.href} href={item.href} className="hover:text-white">
            {item.label}
          </a>
        ))}
      </nav>

      <a
        className="rounded-full border border-white/12 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/76 hover:border-[var(--color-gold)] hover:text-white"
        href="#lead-form"
      >
        {site.navCtaLabel}
      </a>
    </header>
  );
}

function Hero({ site }: { site: SiteConfig }) {
  return (
    <section className="grid min-h-[76vh] items-end gap-10 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-14">
      <div>
        <p className="gold-label text-[11px]">{site.hero.eyebrow}</p>
        <h1 className="font-display mt-5 max-w-4xl text-[3.4rem] leading-[0.92] text-white md:text-[5rem]">
          {site.hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
          {site.hero.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          {site.hero.ctas.map((cta) => (
            <a
              key={cta.label}
              className={
                cta.variant === "primary"
                  ? "rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black hover:bg-[var(--color-gold-soft)]"
                  : "rounded-full border border-white/14 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:border-white/28"
              }
              href={cta.href}
            >
              {cta.label}
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {site.hero.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5"
            >
              <p className="font-display text-4xl text-white">{metric.value}</p>
              <p className="mt-2 text-sm leading-6 text-white/56">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {site.hero.formAboveFold ? (
        <LeadForm site={site} className="self-center" compact />
      ) : (
        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/8">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          <Image
            alt={site.hero.image.alt}
            className="h-full w-full object-cover"
            height={900}
            priority
            src={site.hero.image.src}
            width={720}
          />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
            <p className="gold-label text-[11px]">Curated Preview</p>
            <div className="mt-3 flex items-end justify-between gap-6">
              <div>
                <p className="font-display text-3xl text-white">
                  {site.hero.image.captionTitle}
                </p>
                <p className="mt-2 text-sm text-white/62">
                  {site.hero.image.captionText}
                </p>
              </div>
              <div className="hidden rounded-full border border-white/12 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/72 md:block">
                Private Access
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function TrustStrip({ site }: { site: SiteConfig }) {
  return (
    <section className="section-shell py-8">
      <div className="grid gap-4 md:grid-cols-3">
        {site.trustStrip.map((item) => (
          <div
            key={item.title}
            className="rounded-[1.4rem] border border-white/8 bg-white/[0.03] px-5 py-5"
          >
            <p className="gold-label text-[10px]">{item.kicker}</p>
            <h2 className="mt-3 text-base font-semibold text-white">{item.title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/58">{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionCards({
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
    <section className="section-shell py-16" id={id}>
      <p className="gold-label text-[11px]">{eyebrow}</p>
      <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-display max-w-3xl text-4xl leading-none text-white md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-white/64">{description}</p>
        ) : null}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="glass-panel rounded-[1.8rem] p-6 md:min-h-72"
          >
            <p className="gold-label text-[10px]">{item.kicker}</p>
            <h3 className="font-display mt-4 text-3xl leading-none text-white">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/66">{item.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ArtworkShowcase({
  id,
  eyebrow,
  title,
  description,
  artworks,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
  artworks: ShowcaseArtwork[];
}) {
  return (
    <section className="section-shell py-16" id={id}>
      <p className="gold-label text-[11px]">{eyebrow}</p>
      <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-display max-w-3xl text-4xl leading-none text-white md:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-7 text-white/64">{description}</p>
        ) : null}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {artworks.map((artwork, index) => (
          <article
            key={`${artwork.artist}-${artwork.title}-${index}`}
            className="overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/[0.03]"
          >
            {artwork.image ? (
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  alt={`${artwork.title} by ${artwork.artist}`}
                  className="h-full w-full object-cover"
                  fill
                  src={artwork.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/20 to-transparent" />
              </div>
            ) : (
              <div className="flex aspect-[4/5] items-end bg-[radial-gradient(circle_at_top,_rgba(182,155,99,0.22),_transparent_35%),linear-gradient(180deg,_rgba(255,255,255,0.02),_rgba(255,255,255,0.01))] p-6">
                <div>
                  <p className="gold-label text-[10px]">{artwork.medium}</p>
                  <p className="font-display mt-3 text-4xl text-white/92">
                    {artwork.artist}
                  </p>
                </div>
              </div>
            )}

            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl text-white">{artwork.title}</h3>
                  <p className="mt-2 text-sm text-white/56">
                    {artwork.artist} • {artwork.medium}
                  </p>
                </div>
                {artwork.priceBand ? (
                  <span className="rounded-full border border-[var(--color-line-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold-soft)]">
                    {artwork.priceBand}
                  </span>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function EditorialSection({
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
    <section className="section-shell grid gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr]">
      <div>
        <p className="gold-label text-[11px]">{eyebrow}</p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-none text-white md:text-5xl">
          {title}
        </h2>
      </div>

      <div className="space-y-5 text-base leading-8 text-white/68">
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        {aside ? (
          <div className="rounded-[1.6rem] border border-[var(--color-line-soft)] bg-[rgba(182,155,99,0.06)] p-5 text-sm leading-7 text-white/72">
            {aside}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function BulletColumns({
  id,
  eyebrow,
  title,
  items,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  items: string[];
}) {
  return (
    <section className="section-shell py-16" id={id}>
      <p className="gold-label text-[11px]">{eyebrow}</p>
      <h2 className="font-display mt-4 max-w-3xl text-4xl leading-none text-white md:text-5xl">
        {title}
      </h2>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] px-5 py-5 text-sm leading-7 text-white/70"
          >
            {item}
          </div>
        ))}
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
    <section className="section-shell py-16" id={id}>
      <p className="gold-label text-[11px]">{eyebrow}</p>
      <h2 className="font-display mt-4 max-w-3xl text-4xl leading-none text-white md:text-5xl">
        {title}
      </h2>

      <div className="mt-10 grid gap-5 lg:grid-cols-4">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="glass-panel rounded-[1.8rem] p-6"
          >
            <p className="text-sm text-[var(--color-gold-soft)]">
              0{index + 1}
            </p>
            <h3 className="font-display mt-4 text-3xl leading-none text-white">
              {step.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/66">{step.copy}</p>
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
    <section className="section-shell py-16" id={id}>
      <p className="gold-label text-[11px]">{eyebrow}</p>
      <h2 className="font-display mt-4 max-w-3xl text-4xl leading-none text-white md:text-5xl">
        {title}
      </h2>

      <div className="mt-10 space-y-4">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-[1.6rem] border border-white/8 bg-white/[0.03] p-6"
          >
            <summary className="cursor-pointer list-none text-lg font-medium text-white">
              {item.question}
            </summary>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66">
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
    <section className="section-shell py-16">
      <div className="rounded-[2rem] border border-[var(--color-line-soft)] bg-[radial-gradient(circle_at_top,_rgba(182,155,99,0.14),_transparent_40%),linear-gradient(180deg,_rgba(255,255,255,0.04),_rgba(255,255,255,0.02))] px-6 py-10 md:px-10">
        <p className="gold-label text-[11px]">{site.ctaBand.eyebrow}</p>
        <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="font-display max-w-3xl text-4xl leading-none text-white md:text-5xl">
              {site.ctaBand.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/66">
              {site.ctaBand.description}
            </p>
          </div>

          <a
            className="rounded-full border border-[var(--color-gold)] bg-[var(--color-gold)] px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-black hover:bg-[var(--color-gold-soft)]"
            href="#lead-form"
          >
            {site.ctaBand.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer({ site }: { site: SiteConfig }) {
  return (
    <footer className="section-shell py-8">
      <div className="flex flex-col gap-6 border-t border-white/8 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-white/42">
            {site.brand.eyebrow}
          </p>
          <p className="font-display mt-2 text-2xl text-white">{site.brand.name}</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/56">
            {site.footer.copy}
          </p>
        </div>

        <div className="space-y-2 text-sm text-white/48">
          <p>{site.footer.contactLabel}</p>
          <Link href={`mailto:${site.footer.email}`} className="block hover:text-white">
            {site.footer.email}
          </Link>
          <p>{site.primaryDomain}</p>
        </div>
      </div>
    </footer>
  );
}
