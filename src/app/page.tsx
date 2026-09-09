import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { ChannelExplorer } from "@/components/ChannelExplorer";
import { DeviceCompatibility } from "@/components/DeviceCompatibility";
import { Testimonials } from "@/components/Testimonials";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { ProductOffersSchema } from "@/components/schema/ProductOffersSchema";
import { FaqSchema } from "@/components/schema/FaqSchema";

export const metadata: Metadata = {
  verification: {
    google: "9hVbuN1WeHJ3wZbAurex67uyWuD45Q98vnrzJTXLueg",
  },
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

      {/* 1. Hero Section (Server Component with preloaded LCP Image) */}
      <HeroSection />

      {/* 2. Subscription Pricing Plans (Server Component) */}
      <PricingSection />

      {/* 3. Why IPTV USA Is The Best (Server Component) */}
      <FeaturesGrid />

      {/* 4. Live Channel & VOD Explorer (Interactive Client Component) */}
      <ChannelExplorer />

      {/* 5. Universal Device Compatibility (Server Component) */}
      <DeviceCompatibility />

      {/* 6. Customer Testimonials (Server Component) */}
      <Testimonials />

      {/* 7. Frequently Asked Questions (Interactive Client Component) */}
      <FaqAccordion />
    </>
  );
}
