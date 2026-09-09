import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { EmailSupportButton } from "@/components/EmailSupportButton";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { Zap, Users, CheckCircle2, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "IPTV USA Reseller Panel & Wholesale Credits Program | IPTV USA",
  description:
    "Become an official IPTV USA reseller. Get full access to our IPTV USA Xtream Codes Reseller Panel with 10Gbps anti freeze servers, 24,000+ channels, and high profit margins.",
  alternates: {
    canonical: "https://www.iptvusa-pro.com/reseller",
  },
  openGraph: {
    title: "IPTV USA Reseller Panel & Wholesale Credits Program | IPTV USA",
    description:
      "Become an official IPTV USA reseller. Get full access to our IPTV USA Xtream Codes Reseller Panel with 10Gbps anti freeze servers, 24,000+ channels, and high profit margins.",
    url: "https://www.iptvusa-pro.com/reseller",
    siteName: siteConfig.shortName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IPTV USA Reseller Program",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV USA Reseller Panel & Wholesale Credits Program | IPTV USA",
    description:
      "Become an official IPTV USA reseller. Get full access to our IPTV USA Xtream Codes Reseller Panel with 10Gbps anti freeze servers, 24,000+ channels, and high profit margins.",
    images: ["/og-image.png"],
  },
  keywords: [
    "IPTV USA reseller",
    "IPTV USA reseller panel",
    "buy IPTV USA credits",
    "IPTV USA business",
    "IPTV USA Xtream panel",
    "best IPTV USA reseller program",
  ],
};

export default function ResellerPage() {
  const resellerTiers = [
    {
      name: "Starter IPTV USA Reseller",
      credits: "120 Credits",
      price: "$250",
      perCredit: "$2.08 / credit",
      features: [
        "120 IPTV USA Credits Included",
        "Official IPTV USA Panel Access",
        "Create 1, 3, 6, and 12 Month Accounts",
        "Generate Instant IPTV USA Subscriptions",
        "Full Sub-Reseller Control",
        "99.9% Anti Freeze 9.3 Server Speed",
        "24/7 VIP Tech Support",
      ],
    },
    {
      name: "Pro IPTV USA Reseller",
      credits: "240 Credits",
      price: "$450",
      perCredit: "$1.87 / credit",
      isPopular: true,
      features: [
        "240 IPTV USA Credits Included",
        "Full IPTV USA Web Control Panel",
        "Unlimited Sub-Account Creation",
        "Automated M3U and Portal Generation",
        "Brandable DNS and Custom Portal URL",
        "Priority Tier 1 IPTV USA Server Stream Access",
        "Dedicated VIP Account Manager",
      ],
    },
  ];

  return (
    <div style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      <WebPageSchema
        title="IPTV USA Reseller Panel & Wholesale Credits Program | IPTV USA"
        description="Become an official IPTV USA reseller. Get full access to our IPTV USA Xtream Codes Reseller Panel with 10Gbps anti freeze servers, 24,000+ channels, and high profit margins."
        url="https://www.iptvusa-pro.com/reseller"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.iptvusa-pro.com/" },
          { name: "Reseller", url: "https://www.iptvusa-pro.com/reseller" },
        ]}
      />
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Users size={14} /> Official IPTV USA Reseller Program
          </span>
          <h1 className="section-title">
            Start Your Own <span className="text-blue">IPTV USA Business</span> Today
          </h1>
          <p className="section-subtitle">
            Join thousands of successful partners selling the highest rated IPTV USA service in the United States and Canada. Get access to an intuitive IPTV USA control panel and keep up to 80% profit margins.
          </p>
        </div>

        {/* Reseller Plans Grid */}
        <div className="grid-2" style={{ maxWidth: "860px", margin: "0 auto 60px auto" }}>
          {resellerTiers.map((tier, idx) => (
            <div
              key={idx}
              className="card-glass"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                borderColor: tier.isPopular ? "var(--color-green)" : "var(--border-subtle)",
                boxShadow: tier.isPopular ? "var(--shadow-green), var(--shadow-md)" : "var(--shadow-sm)",
              }}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#000000" }}>
                    {tier.name}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "6px",
                      background: tier.isPopular ? "var(--color-green)" : "#f1f5f9",
                      color: tier.isPopular ? "#ffffff" : "#000000",
                    }}
                  >
                    {tier.credits}
                  </span>
                </div>

                <div style={{ padding: "16px 0", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)", marginBottom: "20px" }}>
                  <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#000000" }}>
                    {tier.price}
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--color-green)", fontWeight: 600 }}>
                    {tier.perCredit}
                  </div>
                </div>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                  {tier.features.map((feat, i) => (
                    <li key={i} style={{ fontSize: "0.875rem", color: "var(--text-secondary)", display: "flex", alignItems: "center", gap: "8px" }}>
                      <CheckCircle2 size={16} color="var(--color-green)" style={{ flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "auto" }}>
                <EmailSupportButton
                  variant={tier.isPopular ? "green" : "primary"}
                  label="Order Panel via Email"
                  subject={`Order IPTV USA Reseller Panel - ${tier.name} (${tier.credits})`}
                  body={`Hello IPTV USA Reseller Desk,\n\nI want to order the ${tier.name} package (${tier.credits} at ${tier.price}).\n\nPlease provide payment details and panel setup instructions.`}
                  showQuickLinks={false}
                />
                <a
                  href={siteConfig.links.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: "100%", justifyContent: "center", fontSize: "0.85rem", padding: "10px" }}
                >
                  <Zap size={15} />
                  Order via Telegram (@{siteConfig.telegramUsername})
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* How to Order Reseller Panel via Email Guide Box */}
        <div
          className="card-glass"
          style={{
            background: "linear-gradient(135deg, rgba(14, 28, 54, 0.95) 0%, rgba(7, 12, 22, 0.98) 100%)",
            border: "1.5px solid rgba(41, 121, 255, 0.45)",
            boxShadow: "0 0 35px rgba(0, 85, 255, 0.18), var(--shadow-md)",
            padding: "clamp(24px, 4vw, 36px)",
            borderRadius: "var(--radius-lg)",
            marginBottom: "50px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "16px", flexWrap: "wrap" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(0, 85, 255, 0.15)",
                border: "1px solid rgba(0, 85, 255, 0.35)",
                color: "var(--color-blue-bright)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Mail size={24} />
            </div>
            <div>
              <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>
                How to Order Your IPTV USA Reseller Panel via Email
              </h2>
              <p style={{ fontSize: "0.875rem", color: "rgba(255, 255, 255, 0.9)", margin: "4px 0 0 0" }}>
                Direct onboarding via our priority dealer desk at <strong style={{ color: "var(--color-green)" }}>{siteConfig.supportEmail}</strong>
              </p>
            </div>
          </div>

          <p style={{ color: "rgba(255, 255, 255, 0.9)", fontSize: "0.95rem", lineHeight: 1.65, marginBottom: "20px" }}>
            Prefer to handle your reseller account setup and invoicing over email? Follow these 3 simple steps to get your Master Xtream Codes panel credentials within 2 hours:
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              marginBottom: "24px",
            }}
          >
            <div style={{ background: "#f8fafc", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "18px" }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--color-blue-bright)", marginBottom: "6px" }}>
                STEP 01: SEND EMAIL
              </div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#000000", marginBottom: "8px" }}>
                Submit Your Request
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                Send an email to <strong>{siteConfig.supportEmail}</strong> specifying your chosen tier (120 or 240 Credits).
              </p>
            </div>

            <div style={{ background: "#f8fafc", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "18px" }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--color-blue-bright)", marginBottom: "6px" }}>
                STEP 02: INVOICING
              </div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#000000", marginBottom: "8px" }}>
                Select Payment Method
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                Our team sends a secure payment invoice (Credit Card, PayPal, or Crypto USDT/BTC) with wholesale pricing.
              </p>
            </div>

            <div style={{ background: "#f8fafc", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "18px" }}>
              <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "var(--color-green)", marginBottom: "6px" }}>
                STEP 03: PANEL DELIVERY
              </div>
              <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#000000", marginBottom: "8px" }}>
                Instant Access & Training
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                Receive your Master Panel URL, login credentials, loaded credit balance, and complete sub-reseller tutorials.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: "440px", margin: "0 auto" }}>
            <EmailSupportButton
              variant="green"
              label="📧 Click Here to Email Us for Reseller Panel"
              subject="Order IPTV USA Reseller Panel Inquiry"
              body={`Hello IPTV USA Reseller Desk,\n\nI want to order an IPTV USA Reseller Panel.\n\nPackage Interest: (Starter 120 Credits / Pro 240 Credits)\nPreferred Payment Method:\nMy Name/Company:\n\nPlease send me payment instructions and panel setup details.`}
              showQuickLinks={true}
              lightText={true}
            />
          </div>
        </div>

        {/* Reseller Benefits Section */}
        <div style={{ marginTop: "40px" }}>
          <div className="section-header" style={{ marginBottom: "30px" }}>
            <h2 className="section-title" style={{ fontSize: "1.7rem" }}>
              Why Choose the <span className="text-blue">IPTV USA</span> Reseller Program?
            </h2>
            <p className="section-subtitle">
              IPTV USA provides resellers with cutting edge streaming infrastructure and complete independence to grow a recurring income stream.
            </p>
          </div>

          <div className="grid-3">
            <div className="card-glass">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#000000", marginBottom: "10px" }}>
                High Profit Margin
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Buy IPTV USA credits at wholesale rates starting from $1.87 and sell subscriptions at retail prices to make substantial profit on every customer.
              </p>
            </div>

            <div className="card-glass">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#000000", marginBottom: "10px" }}>
                Zero Maintenance Overhead
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Our engineers manage server uptime, feed updates, EPG electronic program guides, and VOD uploads so you can focus entirely on customer acquisition.
              </p>
            </div>

            <div className="card-glass">
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#000000", marginBottom: "10px" }}>
                Credits Never Expire
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                Your purchased IPTV USA credits remain in your balance indefinitely until you allocate them to new or renewing subscriber accounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
