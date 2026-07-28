import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import { Commissioner, Cormorant_Garamond } from "next/font/google";

import { AnalyticsProvider } from "@/components/analytics-provider";
import { getSiteConfigFromHeaders } from "@/lib/hostname";

import "./globals.css";

const sans = Commissioner({
  subsets: ["latin"],
  variable: "--font-commissioner",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const headerStore = await headers();
  const site = getSiteConfigFromHeaders(headerStore);
  const canonicalUrl = `https://${site.primaryDomain}`;

  return {
    metadataBase: new URL(canonicalUrl),
    title: site.seo.title,
    description: site.seo.description,
    keywords: site.seo.keywords,
    authors: [{ name: site.brand.name }],
    creator: site.brand.name,
    publisher: site.brand.name,
    manifest: "/manifest.webmanifest",
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
      images: site.seo.ogImage
        ? [
            {
              url: site.seo.ogImage,
              alt: site.seo.title,
              ...(site.seo.ogImage.startsWith("/")
                ? {
                    width: 1200,
                    height: 630,
                    type: site.seo.ogImage.endsWith(".png") ? "image/png" : "image/jpeg",
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
      images: site.seo.ogImage ? [site.seo.ogImage] : undefined,
    },
  };
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
