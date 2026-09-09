import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PricingPageClient } from "@/components/PricingPageClient";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { ProductOffersSchema } from "@/components/schema/ProductOffersSchema";
import { FaqSchema } from "@/components/schema/FaqSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans & Pricing | IPTV USA Pro",
  description:
    "Compare official IPTV USA subscription packages starting at $14.95/mo. Access 24,000+ live channels, 110,000+ VOD in 4K FHD with 7-day money-back guarantee.",
  alternates: {
    canonical: "https://www.iptvusa-pro.com/pricing",
  },
  openGraph: {
    title: "IPTV Subscription Plans & Pricing | IPTV USA Pro",
    description:
      "Compare official IPTV USA subscription packages starting at $14.95/mo. Access 24,000+ live channels, 110,000+ VOD in 4K FHD with 7-day money-back guarantee.",
    url: "https://www.iptvusa-pro.com/pricing",
    siteName: siteConfig.shortName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IPTV USA Subscription Plans and Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Subscription Plans & Pricing | IPTV USA Pro",
    description:
      "Compare official IPTV USA subscription packages starting at $14.95/mo. Access 24,000+ live channels, 110,000+ VOD in 4K FHD with 7-day money-back guarantee.",
    images: ["/og-image.png"],
  },
};

export default function PricingPage() {
  return (
    <>
      <WebPageSchema
        title="IPTV Subscription Plans & Pricing | IPTV USA Pro"
        description="Compare official IPTV USA subscription packages starting at $14.95/mo. Access 24,000+ live channels, 110,000+ VOD in 4K FHD with 7-day money-back guarantee."
        url="https://www.iptvusa-pro.com/pricing"
        pageType="ItemPage"
      />
      <ProductOffersSchema />
      <FaqSchema pageUrl="https://www.iptvusa-pro.com/pricing" />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.iptvusa-pro.com/" },
          { name: "Pricing", url: "https://www.iptvusa-pro.com/pricing" },
        ]}
      />
      <PricingPageClient />
    </>
  );
}
