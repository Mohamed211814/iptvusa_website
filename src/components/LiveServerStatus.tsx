"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Server, Activity, ShieldCheck, Wifi } from "lucide-react";

export const LiveServerStatus: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      style={{
        background: "rgba(11, 16, 30, 0.7)",
        border: "1px solid rgba(0, 229, 255, 0.2)",
        borderRadius: "var(--radius-lg)",
        padding: "24px",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "12px",
          marginBottom: "18px",
          paddingBottom: "14px",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "8px",
              background: "rgba(16, 185, 129, 0.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#10b981",
            }}
          >
            <Activity size={20} />
          </div>
          <div>
            <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "#fff" }}>
              Live Anti-Freeze™ 9.3 Cluster
            </h4>
            <span style={{ fontSize: "0.75rem", color: "#10b981", display: "flex", alignItems: "center", gap: "6px" }}>
              <span className="pulse-dot" /> All USA Nodes 100% Online
            </span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span
            style={{
              fontSize: "0.75rem",
              background: "rgba(255, 255, 255, 0.05)",
              padding: "4px 10px",
              borderRadius: "6px",
              color: "var(--text-secondary)",
            }}
          >
            Avg Latency: <strong style={{ color: "var(--primary)" }}>15ms</strong>
          </span>
          <span
            style={{
              fontSize: "0.75rem",
              background: "rgba(255, 255, 255, 0.05)",
              padding: "4px 10px",
              borderRadius: "6px",
              color: "var(--text-secondary)",
            }}
          >
            Uptime: <strong style={{ color: "#10b981" }}>99.99%</strong>
          </span>
        </div>
      </div>

      {/* Server list */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: "12px",
        }}
      >
        {siteConfig.serverLocations.slice(0, 4).map((server, idx) => (
          <div
            key={server.city}
            style={{
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "10px",
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontSize: "0.825rem", fontWeight: 600, color: "#fff" }}>
                {server.city}
              </div>
              <div style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                Load: 24%
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--primary)" }}>
                {server.ping}
              </div>
              <span style={{ fontSize: "0.65rem", color: "#10b981" }}>Active</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
