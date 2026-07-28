import Link from "next/link";

import type { SiteConfig } from "@/lib/site-config";

type SiteChromeProps = {
  site: SiteConfig;
  activePath?: string;
};

const investorMenu = [
  { label: "Buy", href: "/#markets" },
  { label: "Listings", href: "/listings" },
  { label: "Markets", href: "/#markets" },
  { label: "Services", href: "/#focus" },
  { label: "Intelligence", href: "/market-intelligence" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function menuForSite(site: SiteConfig) {
  if (site.slug === "investor") {
    return investorMenu;
  }

  return [
    { label: "Home", href: "/" },
    ...site.navigation
      .filter((item) => item.href !== "#lead-form")
      .slice(0, 4)
      .map((item) => ({
        ...item,
        href: item.href.startsWith("#") ? `/${item.href}` : item.href,
      })),
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
}

export function SiteHeader({ site, activePath }: SiteChromeProps) {
  const menu = menuForSite(site);

  return (
    <header className="site-header">
      <div className="flex items-center justify-between gap-5 border-b border-subtle py-5">
        <Link href="/" className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.32em] text-[var(--textSoft)]">
            {site.brand.eyebrow}
          </p>
          <p className="font-display mt-1 text-[1.65rem] leading-none text-[var(--textStrong)] sm:text-[1.9rem]">
            {site.brand.name}
          </p>
        </Link>

        <nav className="hidden items-center justify-center gap-7 text-[0.78rem] font-medium uppercase tracking-[0.16em] text-[var(--textMuted)] lg:flex">
          {menu.map((item) => {
            const isActive =
              activePath === item.href ||
              (activePath && item.href !== "/" && activePath.startsWith(item.href));

            return (
              <Link
                key={`${item.label}-${item.href}`}
                href={item.href}
                className={isActive ? "text-[var(--textStrong)]" : "hover:text-[var(--textStrong)]"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="primary-button hidden sm:inline-flex" href="/contact">
          {site.slug === "advisory" ? "Trade Desk" : site.navCtaLabel}
        </Link>
      </div>

      <nav className="flex gap-4 overflow-x-auto border-b border-subtle py-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[var(--textMuted)] lg:hidden">
        {menu.map((item) => (
          <Link
            key={`${item.label}-${item.href}-mobile`}
            href={item.href}
            className="shrink-0 hover:text-[var(--textStrong)]"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter({ site }: { site: SiteConfig }) {
  const investorLinks =
    site.slug === "investor"
      ? [
          { label: "Listings", href: "/listings" },
          { label: "Market Intelligence", href: "/market-intelligence" },
          { label: "Services", href: "/#focus" },
          { label: "Markets", href: "/#markets" },
        ]
      : site.navigation.slice(0, 4);

  return (
    <footer className="section-shell py-10">
      <div className="grid gap-8 border-t border-subtle pt-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--textSoft)]">
            {site.brand.eyebrow}
          </p>
          <p className="font-display mt-2 text-[2rem] leading-none text-[var(--textStrong)]">
            {site.brand.name}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--textMuted)]">
            {site.footer.copy}
          </p>
        </div>

        <div>
          <p className="eyebrow">Navigate</p>
          <div className="mt-4 grid gap-2 text-sm text-[var(--textMuted)]">
            {investorLinks.map((item) => (
              <Link key={item.label} href={item.href} className="hover:text-[var(--textStrong)]">
                {item.label}
              </Link>
            ))}
            <Link href="/about" className="hover:text-[var(--textStrong)]">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-[var(--textStrong)]">
              Contact Us
            </Link>
          </div>
        </div>

        <div>
          <p className="eyebrow">{site.footer.contactLabel}</p>
          <div className="mt-4 space-y-2 text-sm text-[var(--textMuted)]">
            <Link href={`mailto:${site.footer.email}`} className="block text-[var(--textStrong)] hover:opacity-70">
              {site.footer.email}
            </Link>
            <p>{site.primaryDomain}</p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/terms" className="hover:text-[var(--textStrong)]">
                Terms
              </Link>
              <Link href="/privacy" className="hover:text-[var(--textStrong)]">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
