import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { DM_Sans, Newsreader } from "next/font/google";

import { AnalyticsProvider } from "@/components/analytics-provider";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const canonicalUrl = `https://${site.primaryDomain}`;
  const ogImage = site.seo.ogImage;
  const ogImageUrl = site.seo.ogImage
    ? new URL(site.seo.ogImage, canonicalUrl).toString()
    : undefined;
  const googleVerification = getVerificationToken("GOOGLE", site.slug);
  const bingVerification = getVerificationToken("BING", site.slug);

  return {
    applicationName: site.brand.name,
    metadataBase: new URL(canonicalUrl),
    title: site.seo.title,
    description: site.seo.description,
    keywords: site.seo.keywords,
    authors: [{ name: site.brand.name }],
    creator: site.brand.name,
    publisher: site.brand.name,
    manifest: "/manifest.webmanifest",
    formatDetection: {
      address: false,
      email: false,
      telephone: false,
    },
    icons: {
      icon: "/icon",
      apple: "/apple-icon",
    },
    category:
      site.vertical === "commodities"
        ? "Commodity Trading and Sourcing"
        : "Real Estate",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: site.seo.title,
      description: site.seo.description,
      url: canonicalUrl,
      siteName: site.brand.name,
      type: "website",
      locale: "en_IN",
      images: ogImageUrl
        ? [
            {
              url: ogImageUrl,
              alt: site.seo.title,
              ...(ogImage?.startsWith("/")
                ? {
                    width: 1200,
                    height: 630,
                    type: ogImage.endsWith(".png") ? "image/png" : "image/jpeg",
                  }
                : {}),
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: site.seo.title,
      description: site.seo.description,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
    verification:
      googleVerification || bingVerification
        ? {
            ...(googleVerification ? { google: googleVerification } : {}),
            ...(bingVerification
              ? { other: { "msvalidate.01": bingVerification } }
              : {}),
          }
        : undefined,
  };
}

function getVerificationToken(
  provider: "GOOGLE" | "BING",
  slug: "capital" | "investor" | "advisory",
) {
  return process.env[`${provider}_SITE_VERIFICATION_${slug.toUpperCase()}`]?.trim();
}

export async function generateViewport(): Promise<Viewport> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);

  return {
    colorScheme: "light",
    themeColor: site.vertical === "commodities" ? "#082c3a" : "#f7f4ee",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="antialiased">
        <AnalyticsProvider />
        {children}
      </body>
    </html>
  );
}
