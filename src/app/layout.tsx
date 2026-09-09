import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SiteSchema } from "@/components/schema/SiteSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.iptvusa-pro.com"),
  title: {
    default: "IPTV USA | The Official IPTV Subscription Service",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "IPTV USA",
    "IPTV subscription",
    "IPTV USA subscription",
    "IPTV service USA",
    "IPTV plans",
    "IPTV channels",
    "best IPTV USA",
    "IPTV USA provider",
    "buy IPTV USA",
    "IPTV USA Firestick",
    "IPTV USA Smart TV",
    "IPTV USA live sports",
    "IPTV USA 4K",
    "IPTV USA reseller",
  ],
  authors: [{ name: siteConfig.shortName, url: siteConfig.url }],
  creator: siteConfig.shortName,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "IPTV USA Pro",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "IPTV USA | The Official IPTV Subscription Service",
    description: siteConfig.description,
    siteName: siteConfig.shortName,
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
    title: "IPTV USA | The Official IPTV Subscription Service",
    description: siteConfig.description,
    images: ["/og-image.png"],
  },
  other: {
    "msapplication-TileColor": "#07090f",
    "msapplication-TileImage": "/mstile-150x150.png",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#0055ff",
  },
  verification: {
    google: "9hVbuN1WeHJ3wZbAurex67uyWuD45Q98vnrzJTXLueg",
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
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="9hVbuN1WeHJ3wZbAurex67uyWuD45Q98vnrzJTXLueg" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="msapplication-TileColor" content="#07090f" />
        <meta name="theme-color" content="#0055ff" />
        <SiteSchema />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
