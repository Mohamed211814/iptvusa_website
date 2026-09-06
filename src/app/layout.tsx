import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "IPTV USA The Official IPTV Subscription Service",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "IPTV USA",
    "IPTV USA subscription",
    "best IPTV USA",
    "IPTV USA provider",
    "IPTV USA channels",
    "IPTV USA pricing",
    "buy IPTV USA",
    "IPTV USA free trial",
    "IPTV USA Firestick",
    "IPTV USA Smart TV",
    "IPTV USA live sports",
    "IPTV USA 4K",
    "IPTV USA reseller",
    "The Official IPTV Subscription",
    "iptvusa pro",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "IPTV USA The Official IPTV Subscription Service",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IPTV USA The Official IPTV Subscription Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV USA The Official IPTV Subscription Service",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: "IPTV USA Pro",
        description: siteConfig.description,
      },
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: "IPTV USA Pro",
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
      },
      {
        "@type": "Product",
        "@id": `${siteConfig.url}/#product`,
        name: "IPTV USA Official Subscription",
        description:
          "The leading IPTV USA provider offering 24,000+ live IPTV USA channels and 110,000+ movies on demand with 99.9% uptime and anti freeze servers.",
        brand: {
          "@type": "Brand",
          name: "IPTV USA",
        },
        offers: {
          "@type": "AggregateOffer",
          lowPrice: "14.95",
          highPrice: "59.95",
          priceCurrency: "USD",
          offerCount: "4",
          availability: "https://schema.org/InStock",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "2150",
          bestRating: "5",
          worstRating: "1",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
