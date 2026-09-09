import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { HomePageClient } from "@/components/HomePageClient";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { ProductOffersSchema } from "@/components/schema/ProductOffersSchema";
import { FaqSchema } from "@/components/schema/FaqSchema";

export const metadata: Metadata = {
  title: "IPTV USA | The Official IPTV Subscription Service in USA",
  description:
    "Official IPTV USA subscription with 24,000+ live channels, 110,000+ VOD movies, and 4K sports. Anti Freeze 9.3 servers, instant activation, and 24/7 support.",
  alternates: {
    canonical: "https://www.iptvusa-pro.com/",
  },
  openGraph: {
    title: "IPTV USA | The Official IPTV Subscription Service in USA",
    description:
      "Official IPTV USA subscription with 24,000+ live channels, 110,000+ VOD movies, and 4K sports. Anti Freeze 9.3 servers, instant activation, and 24/7 support.",
    url: "https://www.iptvusa-pro.com/",
    siteName: siteConfig.shortName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IPTV USA Official Subscription Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV USA | The Official IPTV Subscription Service in USA",
    description:
      "Official IPTV USA subscription with 24,000+ live channels, 110,000+ VOD movies, and 4K sports. Anti Freeze 9.3 servers, instant activation, and 24/7 support.",
    images: ["/og-image.png"],
  },
};

export default function HomePage() {
  return (
    <>
      <WebPageSchema
        title="IPTV USA | The Official IPTV Subscription Service in USA"
        description="Official IPTV USA subscription with 24,000+ live channels, 110,000+ VOD movies, and 4K sports. Anti Freeze 9.3 servers, instant activation, and 24/7 support."
        url="https://www.iptvusa-pro.com/"
      />
      <ProductOffersSchema />
      <FaqSchema pageUrl="https://www.iptvusa-pro.com" />
      <HomePageClient />
    </>
  );
}
