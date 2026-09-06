import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Tv, MessageSquare, Mail, Phone, ShieldCheck, Zap } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border-subtle)",
        paddingTop: "60px",
        paddingBottom: "35px",
        marginTop: "auto",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "clamp(24px, 4vw, 40px)",
            marginBottom: "40px",
          }}
        >
          {/* Brand Col */}
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "linear-gradient(135deg, #0055ff 0%, #1ce783 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Tv size={22} color="#050811" />
              </div>
              <span style={{ fontSize: "1.3rem", fontWeight: 900, color: "#fff" }}>
                IPTV <span className="text-blue">USA</span>{" "}
                <span style={{ color: "var(--color-green)", fontSize: "0.85rem" }}>PRO</span>
              </span>
            </Link>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6, marginBottom: "16px" }}>
              Official IPTV USA subscription service offering over 24,000 live channels, 110,000+ movies, and premium sports feeds. High speed IPTV USA servers with Anti Freeze 9.3 for uninterrupted entertainment across North America.
            </p>
            <div style={{ fontSize: "0.85rem", color: "var(--color-green)", display: "flex", alignItems: "center", gap: "8px" }}>
              <span className="pulse-dot" />
              <span>Domain: {siteConfig.domain}</span>
            </div>
          </div>

          {/* Col 2: | Services (exact heading from iptvusaofficial.com) */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "18px", color: "#fff" }}>
              | Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/pricing" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/channels" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Channels list
                </Link>
              </li>
              <li>
                <Link href="/reseller" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Reseller
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: | Other Pages (exact heading from iptvusaofficial.com) */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "18px", color: "#fff" }}>
              | Other Pages
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              <li>
                <Link href="/pricing" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Refund and Returns Policy
                </Link>
              </li>
              <li>
                <Link href="/pricing" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/setup-guide" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  Installation Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: 24/7 Support */}
          <div>
            <h4 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: "18px", color: "#fff" }}>
              24/7 Support
            </h4>
            <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "16px" }}>
              Contact our live support team directly on WhatsApp or Telegram for immediate activation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: "9px 16px", fontSize: "0.85rem", width: "fit-content" }}
              >
                <MessageSquare size={16} />
                WhatsApp Live Help
              </a>
              <a
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-telegram"
                style={{ padding: "9px 16px", fontSize: "0.85rem", width: "fit-content" }}
              >
                <Zap size={16} />
                Telegram Channel
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            paddingTop: "24px",
            borderTop: "1px solid var(--border-subtle)",
            fontSize: "0.85rem",
            color: "var(--text-muted)",
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} {siteConfig.domain}. All Rights Reserved. Official IPTV USA Subscription Service.
          </div>
          <div style={{ display: "flex", gap: "18px" }}>
            <Link href="/pricing" style={{ color: "var(--text-muted)" }}>Refund Policy</Link>
            <Link href="/pricing" style={{ color: "var(--text-muted)" }}>Privacy</Link>
            <Link href="/contact" style={{ color: "var(--text-muted)" }}>Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
