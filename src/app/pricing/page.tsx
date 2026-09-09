import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PricingSection } from "@/components/PricingSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { ProductOffersSchema } from "@/components/schema/ProductOffersSchema";
import { FaqSchema } from "@/components/schema/FaqSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { ShieldCheck, Zap, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "IPTV Subscription Plans & Pricing | IPTV USA Pro",
  description:
    "Compare official IPTV USA subscription packages starting at $14.95/mo. Access 24,000+ live channels, 110,000+ VOD in 4K FHD with 7-day money-back guarantee.",
  keywords: [
    "IPTV USA pricing",
    "IPTV USA plans",
    "buy IPTV USA",
    "IPTV USA pro subscription",
    "cheap IPTV USA",
    "affordable IPTV USA",
    "IPTV subscription USA cost",
    "best IPTV USA deals",
    "IPTV USA 1 month",
    "IPTV USA 12 months",
  ],
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

      <div style={{ paddingTop: "40px", paddingBottom: "80px" }}>
        <div className="container">
          {/* Pricing Component (Server Component) */}
          <PricingSection isH1 />

          {/* Comparison Matrix (Server Component) */}
          <div style={{ marginTop: "60px", marginBottom: "60px" }}>
            <div className="section-header" style={{ marginBottom: "30px" }}>
              <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
                What is Included in Every <span className="text-blue">IPTV USA</span> Subscription
              </h2>
              <p className="section-subtitle">
                IPTV USA never restricts channels or charges extra fees for live sports feeds or 4K streams.
              </p>
            </div>

            <div className="grid-3">
              <div className="card-glass">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(0,85,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-blue-bright)" }}>
                    <Zap size={18} />
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#000000" }}>IPTV USA Anti Freeze 9.3</h3>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  Guaranteed zero stuttering during major live sporting events, tournament finals, and championship PPV fights with IPTV USA proprietary load balancing.
                </p>
              </div>

              <div className="card-glass">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(28,231,131,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-green)" }}>
                    <ShieldCheck size={18} />
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#000000" }}>IPTV USA 7 Day Guarantee</h3>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  Try our 6 month or 12 month IPTV USA packages completely risk free. If you are not satisfied, request a prompt full refund.
                </p>
              </div>

              <div className="card-glass">
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#f59e0b" }}>
                    <Sparkles size={18} />
                  </div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#000000" }}>Instant IPTV USA Activation</h3>
                </div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                  Receive your IPTV USA Xtream Codes API and M3U playlist link directly in your email inbox within 5 minutes of checkout.
                </p>
              </div>
            </div>
          </div>

          {/* FAQs (Interactive Client Component) */}
          <FaqAccordion />
        </div>
      </div>
    </>
  );
}
