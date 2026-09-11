import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { WebPageSchema } from "@/components/schema/WebPageSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  FileText,
  Clock,
  CheckCircle2,
  Zap,
  Mail,
  UserCheck,
  Globe,
  Database,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | IPTV USA",
  description:
    "Learn how IPTV USA protects your personal data, ensures zero streaming activity logging, and maintains end-to-end encryption across all services.",
  alternates: {
    canonical: "https://www.iptvusa-pro.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | IPTV USA",
    description:
      "Our commitment to your privacy: zero activity logging, 256-bit encryption, and strict data protection standards.",
    url: "https://www.iptvusa-pro.com/privacy-policy",
    siteName: siteConfig.shortName,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IPTV USA Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | IPTV USA",
    description:
      "Our commitment to your privacy: zero activity logging, 256-bit encryption, and strict data protection standards.",
    images: ["/og-image.png"],
  },
  keywords: [
    "IPTV USA privacy policy",
    "IPTV USA data protection",
    "no-log IPTV service",
    "secure IPTV streaming",
    "IPTV USA customer privacy",
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ paddingTop: "40px", paddingBottom: "90px" }}>
      <WebPageSchema
        title="Privacy Policy | IPTV USA"
        description="Learn how IPTV USA protects your personal data, ensures zero streaming activity logging, and maintains end-to-end encryption across all services."
        url="https://www.iptvusa-pro.com/privacy-policy"
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://www.iptvusa-pro.com/" },
          { name: "Privacy Policy", url: "https://www.iptvusa-pro.com/privacy-policy" },
        ]}
      />
      <div className="container" style={{ maxWidth: "960px" }}>
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: "40px" }}>
          <span className="section-tag">
            <Lock size={14} /> Official Data Protection & Privacy Notice
          </span>
          <h1 className="section-title">
            Privacy <span className="text-blue">Policy</span>
          </h1>
          <p className="section-subtitle">
            Your privacy and digital security are our top priorities. Discover how IPTV USA Pro collects, handles, and safeguards your personal data with zero streaming activity logging.
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
            <span>Effective Date: September 2026 • Applies to {siteConfig.domain}</span>
          </div>
        </div>

        {/* Privacy Guarantees Highlight Card */}
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
                background: "rgba(0, 85, 255, 0.15)",
                border: "1px solid rgba(0, 85, 255, 0.35)",
                color: "var(--color-blue-bright)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <ShieldCheck size={28} />
            </div>

            <div style={{ flex: 1, minWidth: "260px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px", flexWrap: "wrap" }}>
                <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#ffffff", margin: 0 }}>
                  Our Core Privacy Principles
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
                  Strictly Enforced
                </span>
              </div>
              <p style={{ fontSize: "0.95rem", color: "rgba(255, 255, 255, 0.9)", lineHeight: 1.65, margin: 0 }}>
                We believe in total transparency. We enforce a strict <strong>Zero-Log Streaming Policy</strong>, maintain 256-bit SSL encryption across all data channels, and never sell, rent, or trade your personal information with third-party advertisers.
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
              <EyeOff size={18} color="var(--color-green)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", color: "#ffffff", fontWeight: 700 }}>Zero Activity Logging</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Lock size={18} color="var(--color-green)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", color: "#ffffff", fontWeight: 700 }}>256-Bit SSL/TLS Security</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <UserCheck size={18} color="var(--color-green)" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: "0.875rem", color: "#ffffff", fontWeight: 700 }}>GDPR & CCPA Compliant</span>
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
                1. Information We Collect
              </h2>
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "16px" }}>
              We collect only the minimal amount of information strictly necessary to activate and support your IPTV USA subscription:
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", margin: 0, padding: 0 }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span><strong>Contact Information:</strong> Email address and Telegram handle provided during order placement to deliver your playlist URL and login credentials.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span><strong>Device & Configuration Details:</strong> Preferred device hardware (e.g. Firestick, Smart TV, Apple TV) and application type to ensure optimal playlist formatting and codec compatibility.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span><strong>Billing & Payment Metadata:</strong> Transaction IDs, timestamp, and payment status handled via secure third-party payment gateways. <em>We never store or have access to full credit card numbers or security CVV codes.</em></span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span><strong>Technical Routing Data:</strong> Basic server diagnostic metrics (such as geographical ping and node load) utilized temporarily to connect your player to the nearest low-latency server cluster.</span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="card-glass" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(28, 231, 131, 0.15)", color: "var(--color-green)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <EyeOff size={20} />
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#000000", margin: 0 }}>
                2. Zero-Log Streaming Activity Policy
              </h2>
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "14px" }}>
              We strongly believe that your viewing habits are your private business. Under our strict operational guidelines:
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", margin: 0, padding: 0 }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span>We <strong>do not record</strong> which live channels, sports streams, or VOD titles you watch.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span>We <strong>do not store</strong> playback duration, channel search history, or personal viewing preferences.</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                <CheckCircle2 size={18} color="var(--color-green)" style={{ flexShrink: 0, marginTop: "3px" }} />
                <span>Stream requests are routed in-memory via edge load-balancers and discarded immediately after playback begins.</span>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="card-glass" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(0, 85, 255, 0.15)", color: "var(--color-blue-bright)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Zap size={20} />
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#000000", margin: 0 }}>
                3. How We Use Collected Information
              </h2>
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "14px" }}>
              The information we collect is used solely for legitimate business operations:
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", margin: 0, padding: 0 }}>
              <li style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                • <strong>Service Provisioning:</strong> Generating, configuring, and renewing your M3U / Xtream Codes subscription credentials.
              </li>
              <li style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                • <strong>24/7 Technical Support:</strong> Diagnosing buffering, assisting with device setup, and resolving EPG guide sync issues.
              </li>
              <li style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                • <strong>System Integrity:</strong> Preventing unauthorized simultaneous connection abuse, DDoS attacks, and unauthorized playlist scraping.
              </li>
              <li style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                • <strong>Service Notifications:</strong> Sending essential server maintenance alerts or expiration notifications.
              </li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="card-glass" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(0, 85, 255, 0.15)", color: "var(--color-blue-bright)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Database size={20} />
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#000000", margin: 0 }}>
                4. Cookies & Web Technologies
              </h2>
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "12px" }}>
              Our website uses essential session cookies to enhance site navigation, remember your preferred language/currency display, and maintain order state in the checkout modal.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
              We do not employ intrusive tracking pixels, behavioral retargeting cookies, or third-party advertising networks. You can configure your browser to decline all cookies at any time; however, some site features (such as direct checkout) may require cookies to function correctly.
            </p>
          </div>

          {/* Section 5 */}
          <div className="card-glass" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(28, 231, 131, 0.15)", color: "var(--color-green)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <UserCheck size={20} />
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#000000", margin: 0 }}>
                5. Your Privacy Rights (GDPR & CCPA)
              </h2>
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "14px" }}>
              Regardless of your geographic location, IPTV USA extends global privacy rights to all clients:
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "14px",
              }}
            >
              <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#000000", marginBottom: "6px" }}>Right to Access</h3>
                <p style={{ fontSize: "0.825rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>Request a full copy of the contact data associated with your subscription account.</p>
              </div>
              <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#000000", marginBottom: "6px" }}>Right to Erasure</h3>
                <p style={{ fontSize: "0.825rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>Request permanent deletion of your email, chat records, and account logs upon plan expiration.</p>
              </div>
              <div style={{ background: "#f8fafc", padding: "16px", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)" }}>
                <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#000000", marginBottom: "6px" }}>Right to Rectification</h3>
                <p style={{ fontSize: "0.825rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.5 }}>Update or correct your registered email or delivery destination at any time via 24/7 support.</p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className="card-glass" style={{ padding: "30px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "rgba(0, 85, 255, 0.15)", color: "var(--color-blue-bright)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Globe size={20} />
              </div>
              <h2 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#000000", margin: 0 }}>
                6. Data Retention and Security
              </h2>
            </div>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", marginBottom: "12px" }}>
              All client communications, credentials, and configuration files are stored on isolated, encrypted database clusters protected behind enterprise cloud firewalls.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.7, fontSize: "0.95rem", margin: 0 }}>
              Expired account records are automatically purged from our active authentication servers after 90 days of inactivity unless the customer chooses to renew.
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
            <Lock size={26} />
          </div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#000000", marginBottom: "10px" }}>
            Questions About Your Privacy or Data?
          </h2>
          <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 24px auto", fontSize: "0.95rem", lineHeight: 1.65 }}>
            Our Data Protection Officer and customer care team are available 24/7 to answer questions, handle data deletion requests, or provide security clarifications.
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
              rel="noopener noreferrer nofollow"
              className="btn btn-telegram"
            >
              <Zap size={16} />
              Contact Privacy Team on Telegram
            </a>
            <Link href="/contact" className="btn btn-secondary">
              <Mail size={16} />
              Submit Privacy Request
            </Link>
            <Link href="/refund-and-returns-policy" className="btn btn-primary">
              <ShieldCheck size={16} />
              Refund & Returns Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
