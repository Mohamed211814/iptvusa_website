import React from "react";
import Link from "next/link";
import { Zap, ShieldCheck, Tv, Server, Headphones, RefreshCw, CheckCircle2 } from "lucide-react";

export const FeaturesGrid: React.FC = () => {
  return (
    <>
      {/* 1. Stream On Any Device Showcase (from iptvusaofficial.com) */}
      <section className="section" style={{ backgroundColor: "rgba(10, 14, 24, 0.6)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px",
              alignItems: "center",
            }}
          >
            <div>
              <span className="section-tag">
                <Tv size={14} /> Universal Streaming
              </span>
              <h2 className="section-title" style={{ textAlign: "left" }}>
                Stream Live TV, Movies, and TV Shows on <span className="text-blue">Any Device</span> with IPTV USA
              </h2>
              <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "24px" }}>
                Enjoy seamless streaming of live TV, movies, and TV shows with IPTV USA on any device: smartphones, tablets, smart TVs, and more. Access thousands of channels and an extensive library of on demand content with crystal clear quality and no buffering. Affordable plans and easy setup make IPTV USA the perfect choice for your entertainment needs anytime, anywhere.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "30px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={18} color="var(--color-green)" />
                  <span style={{ color: "#fff", fontWeight: 600 }}>Zero Satellite Dish or Cable Box Required</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={18} color="var(--color-green)" />
                  <span style={{ color: "#fff", fontWeight: 600 }}>Instant Setup within 5 Minutes</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle2 size={18} color="var(--color-green)" />
                  <span style={{ color: "#fff", fontWeight: 600 }}>4K & FHD High Bitrate Quality</span>
                </div>
              </div>

              <Link href="/pricing" className="btn btn-green">
                <Zap size={16} />
                Get Started Today
              </Link>
            </div>

            <div
              className="card-glass"
              style={{
                background: "linear-gradient(135deg, rgba(14, 22, 42, 0.9) 0%, rgba(7, 10, 18, 0.95) 100%)",
                border: "1px solid rgba(0, 85, 255, 0.3)",
                padding: "36px",
              }}
            >
              <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#fff", marginBottom: "16px" }}>
                Supported Streaming Hardware:
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-secondary)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-green)" }} />
                  <span><strong>Amazon Fire TV & Firestick</strong> (Downloader, Smarters, TiviMate)</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-secondary)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-green)" }} />
                  <span><strong>Smart TVs</strong> (Samsung Tizen, LG webOS, Android TV)</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-secondary)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-green)" }} />
                  <span><strong>Apple TV, iPhone & iPad</strong> (IPTVX, GSE Smart IPTV)</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-secondary)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-green)" }} />
                  <span><strong>Android Boxes</strong> (Nvidia Shield, Chromecast with Google TV)</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-secondary)" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "var(--color-green)" }} />
                  <span><strong>Windows PC & Mac</strong> (VLC Media Player, IPTV Smarters)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why IPTV USA Is The Best ? (from iptvusaofficial.com) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Why <span className="text-blue">IPTV USA</span> Is The Best ?
            </h2>
            <p className="section-subtitle">
              IPTV USA offers over 110,000 live channels, movies, shows, and sports with smooth, buffer free streaming on any device, anytime, at affordable prices.
            </p>
          </div>

          <div className="grid-4">
            <div className="card-glass" style={{ textAlign: "center", padding: "30px 20px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(0, 85, 255, 0.12)",
                  color: "var(--color-blue-bright)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px auto",
                }}
              >
                <Zap size={28} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                Anti Freeze Technology
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Experience 99.9% freeze free streaming during major football, basketball, and UFC PPV fights.
              </p>
            </div>

            <div className="card-glass" style={{ textAlign: "center", padding: "30px 20px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(28, 231, 131, 0.12)",
                  color: "var(--color-green)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px auto",
                }}
              >
                <Server size={28} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                10Gbps Server Network
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Ultra-fast load times with load-balanced servers located right across major USA metropolitan nodes.
              </p>
            </div>

            <div className="card-glass" style={{ textAlign: "center", padding: "30px 20px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(0, 85, 255, 0.12)",
                  color: "var(--color-blue-bright)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px auto",
                }}
              >
                <ShieldCheck size={28} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                Server Stability 99%
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Industry-leading uptime guarantee with automatic failover backup clusters for uninterrupted playback.
              </p>
            </div>

            <div className="card-glass" style={{ textAlign: "center", padding: "30px 20px" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  background: "rgba(28, 231, 131, 0.12)",
                  color: "var(--color-green)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 18px auto",
                }}
              >
                <Headphones size={28} />
              </div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginBottom: "10px" }}>
                24/7 Dedicated Support
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                IPTV USA support team is available 24/7, providing reliable assistance whenever you need help.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
