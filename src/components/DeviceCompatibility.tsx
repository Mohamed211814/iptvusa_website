import React from "react";
import Link from "next/link";
import { Tv, Smartphone, Monitor, HardDrive, Laptop, ArrowRight } from "lucide-react";

export const DeviceCompatibility: React.FC = () => {
  const devices = [
    {
      name: "Amazon Firestick & Fire TV",
      description: "Downloader, IPTV Smarters Pro, TiviMate, XCIPTV",
      icon: <Tv size={28} color="#fb923c" />,
      badge: "Most Popular",
    },
    {
      name: "Android TV & Google TV",
      description: "Nvidia Shield, Chromecast 4K, Xiaomi Mi Box",
      icon: <Tv size={28} color="#10b981" />,
      badge: "Google Play",
    },
    {
      name: "Samsung & LG Smart TVs",
      description: "IBO Player, Smart IPTV, Nanomid, SS IPTV",
      icon: <Tv size={28} color="#00e5ff" />,
      badge: "No Box Needed",
    },
    {
      name: "Apple TV, iPhone & iPad",
      description: "IPTVX, Smarters Player Lite, GSE Smart IPTV",
      icon: <Smartphone size={28} color="#a855f7" />,
      badge: "iOS & tvOS",
    },
    {
      name: "Windows PC & Mac",
      description: "IPTV Smarters Desktop, VLC Media Player",
      icon: <Laptop size={28} color="#3b82f6" />,
      badge: "Desktop",
    },
    {
      name: "MAG & Formuler Boxes",
      description: "Portal URL Stalker Middleware, MYTVOnline 1 & 2",
      icon: <HardDrive size={28} color="#f43f5e" />,
      badge: "Hardware Box",
    },
  ];

  return (
    <section className="section" style={{ backgroundColor: "rgba(11, 16, 30, 0.4)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Monitor size={14} /> Universal Compatibility
          </span>
          <h2 className="section-title">
            Watch on <span className="highlight">Any Device</span>, Anywhere
          </h2>
          <p className="section-subtitle">
            One subscription works across all your household devices. Stream on your living room 4K TV or take your favorite sports on the road with your mobile phone or tablet.
          </p>
        </div>

        <div className="grid-3">
          {devices.map((device, idx) => (
            <div key={idx} className="card-glass" style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid var(--border-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {device.icon}
              </div>

              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff" }}>
                    {device.name}
                  </h3>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      padding: "2px 8px",
                      borderRadius: "4px",
                      background: "rgba(255, 255, 255, 0.08)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {device.badge}
                  </span>
                </div>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  {device.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <Link
            href="/setup-guide"
            className="btn btn-secondary"
            style={{ display: "inline-flex" }}
          >
            <span>View Step by Step Installation Guides</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
