"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  Film,
  Globe,
  PlayCircle,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Tv,
  ArrowRight,
  Headphones,
  Sparkles,
} from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        position: "relative",
        paddingTop: "35px",
        paddingBottom: "60px",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Top 2-Column Hero: Text on Left, Visual Showcase on Right (exact iptvusaofficial.com layout) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "36px",
            alignItems: "center",
            marginBottom: "60px",
          }}
        >
          {/* Left Column */}
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 14px",
                background: "rgba(0, 85, 255, 0.1)",
                border: "1px solid rgba(0, 85, 255, 0.3)",
                borderRadius: "var(--radius-full)",
                fontSize: "0.825rem",
                color: "var(--color-blue-bright)",
                fontWeight: 700,
                marginBottom: "20px",
                maxWidth: "100%",
              }}
            >
              <span className="pulse-dot" style={{ flexShrink: 0 }} />
              <span>Official IPTV USA Provider | Premium IPTV USA Service</span>
            </div>

            {/* Headline matching iptvusaofficial.com */}
            <h1
              style={{
                fontSize: "clamp(2.1rem, 4.8vw, 3.8rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: "20px",
                wordBreak: "break-word",
              }}
            >
              <span className="text-blue">IPTV USA</span> <br />
              The Official IPTV Subscription
            </h1>

            {/* Subtitle matching iptvusaofficial.com */}
            <p
              style={{
                fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                color: "var(--text-secondary)",
                lineHeight: 1.7,
                marginBottom: "32px",
                maxWidth: "540px",
              }}
            >
              Get the best IPTV USA subscription with reliable high quality streaming of live TV, sports, movies, and more. Affordable IPTV USA plans, easy setup, and 24/7 support. Enjoy over 24,000 IPTV USA channels on any device.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "14px",
                marginBottom: "32px",
              }}
            >
              <Link
                href="/pricing"
                className="btn btn-green"
                style={{
                  fontSize: "1rem",
                  padding: "14px 28px",
                  flex: "1 1 auto",
                  minWidth: "220px",
                }}
              >
                <Zap size={18} />
                Get IPTV USA Subscription Now
              </Link>

              <Link
                href="/contact"
                className="btn btn-secondary"
                style={{
                  fontSize: "1rem",
                  padding: "14px 24px",
                  flex: "1 1 auto",
                }}
              >
                <Headphones size={18} />
                Contact Us
              </Link>
            </div>

            {/* Feature Bullets */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                fontSize: "0.85rem",
                color: "var(--text-secondary)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={16} color="var(--color-green)" />
                <span>+24,000 Live IPTV USA Channels</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={16} color="var(--color-green)" />
                <span>+110,000 VOD Movies</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <CheckCircle2 size={16} color="var(--color-green)" />
                <span>IPTV USA Zero Buffering</span>
              </div>
            </div>
          </div>

          {/* Right Column: Device Streaming Preview Mockup */}
          <div
            style={{
              position: "relative",
              background: "linear-gradient(135deg, rgba(14, 20, 36, 0.95) 0%, rgba(7, 10, 18, 0.98) 100%)",
              border: "1px solid rgba(0, 85, 255, 0.3)",
              borderRadius: "var(--radius-xl)",
              padding: "24px",
              boxShadow: "var(--shadow-lg), 0 0 35px rgba(0, 85, 255, 0.2)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                paddingBottom: "16px",
                borderBottom: "1px solid var(--border-subtle)",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ef4444" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#f59e0b" }} />
                <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginLeft: "8px" }}>
                  IPTV USA Player 4K UHD 60FPS
                </span>
              </div>
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  background: "var(--color-green)",
                  color: "#050811",
                  padding: "3px 10px",
                  borderRadius: "4px",
                }}
              >
                LIVE
              </span>
            </div>

            {/* Mockup screen */}
            <div
              style={{
                borderRadius: "10px",
                background: "radial-gradient(ellipse at center, #0f1c38 0%, #060a14 100%)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "28px 24px",
                minHeight: "240px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--color-blue-bright)", fontWeight: 700 }}>
                  USA LIVE SPORTS & PPV
                </span>
                <span style={{ fontSize: "0.75rem", color: "#10b981" }}>Anti Freeze Active</span>
              </div>

              <div style={{ margin: "20px 0" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
                  Live Football, Basketball, Baseball, Hockey & Title Fights
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                  Crystal clear 4K UHD resolution with no blackouts or lag on any device.
                </p>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", borderTop: "1px solid var(--border-subtle)" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                  Compatibility for All Devices
                </span>
                <Link
                  href="/channels"
                  style={{ fontSize: "0.85rem", color: "var(--color-green)", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}
                >
                  View Lineup <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Quick stats ribbon */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                marginTop: "20px",
                textAlign: "center",
              }}
            >
              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-blue-bright)" }}>
                  +24.000
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Channels</div>
              </div>

              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--color-green)" }}>
                  +110.000
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>VOD Movies</div>
              </div>

              <div style={{ background: "rgba(255, 255, 255, 0.03)", padding: "10px", borderRadius: "8px" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff" }}>
                  99.9%
                </div>
                <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>Uptime</div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillar Cards (Exact iptvusaofficial.com structure) */}
        <div className="grid-3" style={{ marginTop: "20px" }}>
          {/* Pillar 1 */}
          <div className="card-glass" style={{ padding: "32px 24px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "10px",
                background: "rgba(0, 85, 255, 0.12)",
                color: "var(--color-blue-bright)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <Film size={26} />
            </div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
              Streaming IPTV USA
            </h2>
            <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Experience seamless lag free IPTV USA streaming powered by powerful servers, delivering instant access to the newest movies, shows, and live channels.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="card-glass" style={{ padding: "32px 24px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "10px",
                background: "rgba(28, 231, 131, 0.12)",
                color: "var(--color-green)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <Globe size={26} />
            </div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
              Live IPTV USA TV
            </h2>
            <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Access over 24,000 IPTV USA channels, featuring a vast selection of global content from nearly every country around the world.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="card-glass" style={{ padding: "32px 24px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "10px",
                background: "rgba(0, 85, 255, 0.12)",
                color: "var(--color-blue-bright)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <PlayCircle size={26} />
            </div>
            <h2 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "12px" }}>
              IPTV USA Movies & Series
            </h2>
            <p style={{ fontSize: "0.925rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              IPTV USA offers more than 110,000 daily updated VOD titles, neatly categorized by country and language for effortless browsing and instant streaming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
