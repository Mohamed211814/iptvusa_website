import type { Metadata } from "next";
import Link from "next/link";
import { channelCategories } from "@/data/channels";
import { siteConfig } from "@/config/site";
import { Tv, Trophy, Film, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Complete 24,000+ Live Channel Lineup & VOD Catalog (4K FHD)",
  description:
    "Explore our complete IPTV USA channel list: All major live sports leagues, championship combat PPVs, premium cinema networks, regional state news affiliates, and 110,000+ VOD movies.",
  keywords: [
    "IPTV USA channel list",
    "IPTV sports channels",
    "live sports streaming IPTV",
    "championship PPV IPTV",
    "4K cinema IPTV",
    "US local channels IPTV",
    "IPTV Canada UK channels",
  ],
};

export default function ChannelsPage() {
  return (
    <div style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header">
          <span className="section-tag">
            <Tv size={14} /> Official IPTV USA Channel Directory
          </span>
          <h1 className="section-title">
            Official <span className="text-blue">IPTV USA</span> Channel List & VOD Library
          </h1>
          <p className="section-subtitle">
            Explore the complete IPTV USA channel lineup with over 24,000 live IPTV USA channels and 110,000+ movies on demand in full 4K and FHD 60FPS. All major live sports, pay per view championship fights, local regional stations, and international packages included.
          </p>
        </div>

        {/* Categories Breakdown */}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
          {channelCategories.map((category) => (
            <div
              key={category.id}
              className="card-glass"
              style={{
                border: "1px solid var(--border-subtle)",
                padding: "clamp(20px, 4vw, 32px)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "16px",
                  paddingBottom: "16px",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <div>
                  <h2 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#000000" }}>
                    {category.name}
                  </h2>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                    {category.description}
                  </p>
                </div>
                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: "var(--radius-full)",
                    background: "rgba(0, 85, 255, 0.1)",
                    border: "1px solid rgba(0, 85, 255, 0.25)",
                    color: "var(--primary)",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  {category.count}
                </div>
              </div>

              {/* Channels Table Grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                {category.sampleChannels.map((channel, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#f8fafc",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.875rem",
                      color: "#000000",
                      fontWeight: 500,
                    }}
                  >
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--primary)", flexShrink: 0 }} />
                    <span>{channel}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                  paddingTop: "14px",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {category.features.map((feat, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--color-green)",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        fontWeight: 600,
                      }}
                    >
                      <CheckCircle2 size={14} /> {feat}
                    </span>
                  ))}
                </div>

                <Link
                  href="/pricing"
                  className="btn btn-primary"
                  style={{ padding: "8px 18px", fontSize: "0.85rem" }}
                >
                  <span>Stream This Category</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
            padding: "clamp(28px, 5vw, 44px)",
            background: "#ffffff",
            border: "1px solid var(--border-subtle)",
            boxShadow: "var(--shadow-sm)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#000000", marginBottom: "12px" }}>
            Ready to Experience IPTV USA Channels on Your TV?
          </h3>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 24px auto" }}>
            Get instant access to over 24,000+ live 4K channels, all major sports leagues, PPV events, and 110,000+ VOD titles backed by Anti Freeze 9.3 stability.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/pricing" className="btn btn-primary">
              <Zap size={16} />
              View Pricing & Order Now
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
