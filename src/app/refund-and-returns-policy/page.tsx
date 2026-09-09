import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import {
  ShieldCheck,
  RotateCcw,
  Clock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  MessageSquare,
  Zap,
  CreditCard,
  FileText,
  Mail,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Refund and Returns Policy | IPTV USA",
  description:
    "Review our transparent 7-Day Money-Back Guarantee and Refund & Returns Policy for IPTV USA subscriptions. Fast processing and 24/7 dedicated customer assistance.",
  alternates: {
    canonical: "https://www.iptvusa-pro.com/refund-and-returns-policy",
  },
  openGraph: {
    title: "Refund and Returns Policy | IPTV USA",
    description:
      "Transparent 7-day money-back guarantee and hassle-free refund policy for IPTV USA subscriptions.",
    url: "https://www.iptvusa-pro.com/refund-and-returns-policy",
    siteName: siteConfig.shortName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IPTV USA Refund and Returns Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund and Returns Policy | IPTV USA",
    description:
      "Transparent 7-day money-back guarantee and hassle-free refund policy for IPTV USA subscriptions.",
    images: ["/og-image.png"],
  },
  keywords: [
    "IPTV USA refund policy",
    "IPTV USA returns policy",
    "IPTV USA money back guarantee",
    "IPTV USA customer satisfaction",
    "IPTV USA cancellation policy",
  ],
};

export default function RefundPolicyPage() {
  return (
    <div style={{ paddingTop: "40px", paddingBottom: "90px" }}>
      <WebPageSchema
        title="Refund and Returns Policy | IPTV USA"
        description="Review our transparent 7-Day Money-Back Guarantee and Refund & Returns Policy for IPTV USA subscriptions. Fast processing and 24/7 dedicated customer assistance."
        url="https://www.iptvusa-pro.com/refund-and-returns-policy"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.iptvusa-pro.com/" },
          { name: "Refund Policy", url: "https://www.iptvusa-pro.com/refund-and-returns-policy" },
        ]}
      />
      <div className="container" style={{ maxWidth: "960px" }}>
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: "40px" }}>
          <span className="section-tag">
            <ShieldCheck size={14} /> Official Customer Protection Policy
          </span>
          <h1 className="section-title">
            Refund & <span className="text-blue">Returns Policy</span>
          </h1>
          <p className="section-subtitle">
            At IPTV USA, we stand behind the stability of our 4K FHD streaming service with a transparent, customer-first 7-day money-back guarantee.
          </p>
          <div
            style={{
              fontSize: "0.85rem",
              color: "var(--text-muted)",
              marginTop: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            <Clock size={14} />
            <span>Last Updated: September 2026 • Valid for all active IPTV USA subscriptions</span>
          </div>
        </div>

        {/* 7-Day Guarantee Banner */}
        <div
          className="card-glass"
          style={{
            background: "linear-gradient(135deg, rgba(14, 28, 54, 0.9) 0%, rgba(7, 12, 22, 0.95) 100%)",
            border: "1.5px solid rgba(41, 121, 255, 0.45)",
            boxShadow: "0 0 30px rgba(0, 85, 255, 0.18), var(--shadow-md)",
            padding: "clamp(24px, 4vw, 36px)",
            borderRadius: "var(--radius-lg)",
            marginBottom: "40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "rgba(28, 231, 131, 0.15)",
                border: "1px solid rgba(28, 231, 131, 0.35)",
                color: "var(--color-green)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <RotateCcw size={28} />
            </div>

            <div style={{ flex: 1, minWidth: "260px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>
                  7-Day 100% Money-Back Guarantee
                </h2>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 800,
                    background: "var(--color-green)",
                    color: "#ffffff",
                    padding: "3px 10px",
                    borderRadius: "var(--radius-full)",
                    textTransform: "uppercase",
                  }}
                >
                  Verified Guarantee
                </span>
              </div>
              <p style={{ fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.65, margin: 0 }}>
                If you encounter unresolved technical issues, server disruptions, or channel compatibility problems that our 24/7 technical team cannot solve within the first <strong>7 days of your purchase</strong>, you are entitled to a full refund. No questions asked and no hidden cancellation fees.
              </p>
            </div>
          </div>

          {/* Quick Pillars */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px",
              marginTop: "24px",
              paddingTop: "20px",
              borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", color: "#ffffff", fontWeight: 700 }}>24-48h Refund Processing</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", color: "#ffffff", fontWeight: 700 }}>Direct Credit Card Reversal</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", color: "#ffffff", fontWeight: 700 }}>Zero Cancellation Penalties</span>
            </div>
          </div>
        </div>

        {/* Policy Sections */}
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          {/* Section 1 */}
          <div className="card-glass" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(0, 85, 255, 0.15)", color: "var(--color-blue-bright)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <FileText size={20} />
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#000000", margin: 0 }}>
                1. Nature of Our Digital Subscription Service
              </h2>
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "14px" }}>
              IPTV USA provides digital streaming subscriptions delivered electronically via M3U playlist URLs, Xtream Codes API credentials, and dedicated portal configurations. Because access credentials are systematically generated and delivered instantly after payment confirmation, the service is considered activated immediately upon delivery.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
              Before requesting a refund, we strongly encourage clients to reach out to our 24/7 technical team on Telegram or Email. Over 95% of reported streaming issues (such as audio sync, local ISP throttling, or player cache) can be resolved in under 5 minutes with simple configuration assistance.
            </p>
          </div>

          {/* Section 2 */}
          <div className="card-glass" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(28, 231, 131, 0.15)", color: "var(--color-green)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CheckCircle2 size={20} />
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#000000", margin: 0 }}>
                2. Conditions Eligible for a Full Refund
              </h2>
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "16px" }}>
              You are eligible for a 100% refund of your initial subscription fee under any of the following verified conditions:
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", margin: 0, padding: 0 }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span><strong>Unresolvable Technical Failure:</strong> Server downtime or streaming unavailability persisting for more than 48 continuous hours without resolution by our engineering team.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span><strong>7-Day Initial Guarantee Window:</strong> You submitted your refund claim within 7 calendar days from the initial payment timestamp and technical support was unable to provide a functional playlist for your registered hardware.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span><strong>Duplicate Inadvertent Billing:</strong> You were charged multiple times for the same subscription order due to a payment gateway timeout or checkout error.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span><strong>Incomplete Activation Delivery:</strong> If subscription login credentials failed to be generated or delivered within 24 hours of successful payment confirmation.</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="card-glass" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(239, 68, 68, 0.15)", color: "#ef4444", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <AlertCircle size={20} />
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#000000", margin: 0 }}>
                3. Non-Refundable Circumstances
              </h2>
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "16px" }}>
              To safeguard our infrastructure and maintain sustainable high bitrate streams for all members, refunds cannot be granted in the following scenarios:
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", margin: 0, padding: 0 }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <span style={{ color: "#ef4444", fontWeight: 700, minWidth: "18px" }}>✕</span>
                <span><strong>Claims Filed After 7 Days:</strong> Refund requests submitted more than 7 days following the subscription purchase date are ineligible.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <span style={{ color: "#ef4444", fontWeight: 700, minWidth: "18px" }}>✕</span>
                <span><strong>Insufficient Local Bandwidth:</strong> Buffering caused by client internet speeds below the recommended minimums (25 Mbps for HD, 50+ Mbps for 4K UHD), or localized Wi-Fi signal degradation.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <span style={{ color: "#ef4444", fontWeight: 700, minWidth: "18px" }}>✕</span>
                <span><strong>Uncooperative Troubleshooting:</strong> If the client refuses to test our recommended DNS changes, alternative player apps, or VPN guidance to bypass local ISP throttling.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <span style={{ color: "#ef4444", fontWeight: 700, minWidth: "18px" }}>✕</span>
                <span><strong>Account Sharing Violations:</strong> Attempting to stream simultaneously across more devices than the allowed concurrent connection limit.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <span style={{ color: "#ef4444", fontWeight: 700, minWidth: "18px" }}>✕</span>
                <span><strong>Event-Specific Purchases:</strong> Purchasing an IPTV USA plan solely to watch a specific one-off PPV or tournament final and requesting a refund immediately following the event.</span>
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="card-glass" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(0, 85, 255, 0.15)", color: "var(--color-blue-bright)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <CreditCard size={20} />
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#000000", margin: 0 }}>
                4. Step-by-Step Refund Process
              </h2>
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "20px" }}>
              Requesting a refund is simple and handled directly by our dedicated customer care specialists:
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "18px",
              }}
            >
              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "18px",
                }}
              >
                <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--color-blue-bright)", marginBottom: "6px" }}>
                  STEP 01
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#000000", marginBottom: "8px" }}>
                  Submit Request
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                  Contact us via Telegram or email with your Order ID, registered email address, and a brief description of the issue.
                </p>
              </div>

              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "18px",
                }}
              >
                <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--color-blue-bright)", marginBottom: "6px" }}>
                  STEP 02
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#000000", marginBottom: "8px" }}>
                  Technical Verification
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                  Our technical engineers check your stream logs and node connectivity to attempt a fast resolution within 2 hours.
                </p>
              </div>

              <div
                style={{
                  background: "#f8fafc",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  padding: "18px",
                }}
              >
                <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--color-green)", marginBottom: "6px" }}>
                  STEP 03
                </div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#000000", marginBottom: "8px" }}>
                  Refund Reversal
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                  Upon approval, funds are refunded to your original payment method within 24-48 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="card-glass" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(0, 85, 255, 0.15)", color: "var(--color-blue-bright)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <RotateCcw size={20} />
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#000000", margin: 0 }}>
                5. Returns Policy for Hardware Devices
              </h2>
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "12px" }}>
              Because IPTV USA subscriptions are purely digital services delivered over the internet, no physical shipping or merchandise return is required.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
              If you purchased pre-configured streaming hardware (such as an Android TV Box or Firestick) directly as a physical bundle, hardware returns are accepted within <strong>14 calendar days</strong> of parcel delivery provided the device remains in its original packaging with all included cables, power adapters, and remote controls. Return shipping costs for non-defective hardware are the customer&apos;s responsibility.
            </p>
          </div>

          {/* Section 6 */}
          <div className="card-glass" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(28, 231, 131, 0.15)", color: "var(--color-green)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <ShieldCheck size={20} />
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#000000", margin: 0 }}>
                6. Avoid Bank Disputes & Chargebacks
              </h2>
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "14px" }}>
              We encourage you to contact us directly rather than initiating a credit card chargeback or bank dispute. Bank disputes can take anywhere from 30 to 90 days to resolve, freezing your funds during the investigation period.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
              By contacting our support team directly via Telegram or email, eligible refunds are reviewed and initiated within <strong>24 to 48 hours</strong>, saving you time and avoiding dispute processing fees.
            </p>
          </div>
        </div>

        {/* Live Support Callout */}
        <div
          className="card-glass"
          style={{
            marginTop: "50px",
            textAlign: "center",
            padding: "clamp(30px, 5vw, 44px)",
            background: "#ffffff",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <div
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "50%",
              background: "rgba(0, 85, 255, 0.12)",
              color: "var(--color-blue-bright)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px auto",
            }}
          >
            <HelpCircle size={26} />
          </div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#000000", marginBottom: "10px" }}>
            Need Assistance or Have Questions About Your Plan?
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 24px auto", fontSize: "0.95rem", lineHeight: 1.65 }}>
            Our 24/7 dedicated support staff is here to help you configure your playlist, test alternative server ports, or process your refund request swiftly.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href={siteConfig.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-telegram"
            >
              <Zap size={16} />
              Telegram Support (@{siteConfig.telegramUsername})
            </a>
            <Link href="/contact" className="btn btn-secondary">
              <Mail size={16} />
              Contact Support Form
            </Link>
            <Link href="/pricing" className="btn btn-primary">
              <Zap size={16} />
              View Pricing Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
