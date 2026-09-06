import type { Metadata } from "next";
import Link from "next/link";
import { setupGuides } from "@/data/guides";
import { siteConfig } from "@/config/site";
import { Tv, Terminal, CheckCircle2, AlertCircle, HelpCircle, ArrowRight, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Step by Step IPTV USA Installation and Setup Guides (Firestick, Smart TV, Apple TV)",
  description:
    "Easy step by step setup guides to install IPTV USA Pro on Amazon Firestick, Android TV, Smart TV (Samsung and LG), Apple TV, and Windows or Mac in less than 5 minutes.",
  keywords: [
    "IPTV USA setup",
    "install IPTV USA on Firestick",
    "IPTV USA Smart TV",
    "IPTV USA Apple TV",
    "IPTV USA Android TV",
    "IPTV USA subscription guide",
    "how to install IPTV USA",
  ],
};

export default function SetupGuidePage() {
  return (
    <div style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <Terminal size={14} /> Official IPTV USA Setup Tutorials
          </span>
          <h1 className="section-title">
            How to Install and Setup <span className="text-blue">IPTV USA</span> on Any Device
          </h1>
          <p className="section-subtitle">
            Follow our verified step by step IPTV USA setup instructions to configure your IPTV USA subscription on Amazon Firestick, Android TV, Samsung or LG Smart TV, Apple TV, or computer.
          </p>
        </div>

        {/* Guides List */}
        <div style={{ display: "flex", flexDirection: "column", gap: "36px", maxWidth: "920px", margin: "0 auto" }}>
          {setupGuides.map((guide) => (
            <div
              key={guide.id}
              id={guide.id}
              className="card-glass"
              style={{
                border: "1px solid var(--border-subtle)",
                padding: "clamp(20px, 4vw, 36px)",
              }}
            >
              {/* Guide Header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "12px",
                  marginBottom: "24px",
                  paddingBottom: "18px",
                  borderBottom: "1px solid var(--border-subtle)",
                }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px", flexWrap: "wrap" }}>
                    <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff" }}>
                      {guide.device}
                    </h2>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        padding: "2px 8px",
                        borderRadius: "4px",
                        background: "rgba(0, 85, 255, 0.15)",
                        color: "var(--color-blue-bright)",
                        fontWeight: 600,
                      }}
                    >
                      {guide.badge}
                    </span>
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                    Recommended App: <strong style={{ color: "#fff" }}>{guide.recommendedApp}</strong> | Setup time: ~{guide.timeMinutes} mins
                  </p>
                </div>

                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-green)",
                    background: "rgba(28, 231, 131, 0.1)",
                    border: "1px solid rgba(28, 231, 131, 0.25)",
                    padding: "4px 12px",
                    borderRadius: "var(--radius-full)",
                    fontWeight: 600,
                  }}
                >
                  Difficulty: {guide.difficulty}
                </div>
              </div>

              {/* Steps */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {guide.steps.map((step, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "16px",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "var(--color-blue)",
                        color: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.9rem",
                        flexShrink: 0,
                      }}
                    >
                      {idx + 1}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>
                        {step.title}
                      </h3>
                      <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                        {step.description}
                      </p>

                      {step.code && (
                        <div
                          style={{
                            marginTop: "10px",
                            padding: "10px 16px",
                            background: "rgba(0, 0, 0, 0.5)",
                            border: "1px dashed rgba(0, 85, 255, 0.4)",
                            borderRadius: "8px",
                            fontFamily: "monospace",
                            fontSize: "0.95rem",
                            color: "var(--color-blue-bright)",
                            display: "inline-block",
                            maxWidth: "100%",
                            wordBreak: "break-all",
                          }}
                        >
                          {step.code}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Support Help Card */}
        <div
          style={{
            maxWidth: "920px",
            margin: "50px auto 0 auto",
            padding: "clamp(20px, 4vw, 32px)",
            background: "rgba(14, 22, 42, 0.8)",
            border: "1px solid rgba(0, 85, 255, 0.25)",
            borderRadius: "var(--radius-lg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#fff", marginBottom: "6px" }}>
              Need Help Setting Up Your Device?
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              Our 24/7 technical team can guide you step by step or activate your TV app remotely via WhatsApp.
            </p>
          </div>

          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <MessageSquare size={18} />
            Chat with Setup Specialist
          </a>
        </div>
      </div>
    </div>
  );
}
