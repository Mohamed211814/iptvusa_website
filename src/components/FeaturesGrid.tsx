import React from "react";
import { Zap, ShieldCheck, Server, Headphones } from "lucide-react";

export const FeaturesGrid: React.FC = () => {
  return (
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
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#000000", marginBottom: "10px" }}>
                IPTV USA Anti Freeze
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Experience 99.9% freeze free IPTV USA streaming during major championship matches, tournament finals, and live title fights.
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
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#000000", marginBottom: "10px" }}>
                IPTV USA 10Gbps Network
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Ultra fast load times with IPTV USA load balanced servers located right across major USA metropolitan nodes.
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
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#000000", marginBottom: "10px" }}>
                IPTV USA 99% Stability
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Industry leading uptime guarantee with IPTV USA automatic failover backup clusters for uninterrupted playback.
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
              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#000000", marginBottom: "10px" }}>
                IPTV USA 24/7 Support
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                The dedicated IPTV USA support team is available 24/7, providing reliable assistance whenever you need help.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};
