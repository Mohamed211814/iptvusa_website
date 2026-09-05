import type { Metadata } from "next";
import Link from "next/link";
import { channelCategories } from "@/data/channels";
import { siteConfig } from "@/config/site";
import { Tv, Trophy, Film, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Complete 25,000+ Live Channel Lineup & VOD Catalog (4K/FHD)",
  description:
    "Explore our complete IPTV USA channel list: All major US sports (NFL, NBA, MLB, NHL, UFC PPV), premium movie networks (HBO, Cinemax, Showtime), local news affiliates, and 120k+ VOD movies.",
  keywords: [
    "IPTV USA channel list",
    "IPTV sports channels",
    "NFL Sunday Ticket IPTV",
    "NBA League Pass IPTV",
    "UFC Fight Night PPV IPTV",
    "HBO 4K IPTV",
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
            <Tv size={14} /> Official 2026 Channel Directory
          </span>
          <h1 className="section-title">
            Over <span className="highlight">25,000+ Live Channels</span> & 120,000+ Movies
          </h1>
          <p className="section-subtitle">
            Stream your favorite live television networks in full 4K and FHD 60FPS. All major sports leagues, pay-per-view events, local US regional broadcasts, and international packages included.
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
                padding: "32px",
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
                  <h2 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#fff" }}>
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
                    background: "rgba(0, 229, 255, 0.12)",
                    border: "1px solid rgba(0, 229, 255, 0.3)",
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
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "12px",
                  marginBottom: "20px",
                }}
              >
                {category.sampleChannels.map((channel, i) => (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid rgba(255, 255, 255, 0.06)",
                      borderRadius: "8px",
                      padding: "10px 14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontSize: "0.875rem",
                      color: "#fff",
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
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                }}
              >
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {category.features.map((feat, i) => (
                    <span
                      key={i}
                      style={{
                        fontSize: "0.8rem",
                        color: "#10b981",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
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
            padding: "40px",
            background: "linear-gradient(135deg, rgba(16, 28, 54, 0.9) 0%, rgba(10, 16, 32, 0.95) 100%)",
            border: "1px solid rgba(0, 229, 255, 0.3)",
            borderRadius: "var(--radius-xl)",
          }}
        >
          <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
            Want to Test the Channels on Your TV Right Now?
          </h3>
          <p style={{ fontSize: "1rem", color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto 24px auto" }}>
            Request our 24-hour instant test pass and experience the Anti-Freeze 9.3 quality before purchasing a full subscription.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href="/free-trial" className="btn btn-primary">
              <Sparkles size={16} />
              Request 24h Free Trial
            </Link>
            <Link href="/pricing" className="btn btn-secondary">
              View Pricing & Multi-Screen Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
