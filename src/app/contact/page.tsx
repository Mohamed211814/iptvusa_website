import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MessageSquare, Zap, Mail, Phone, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact 24/7 VIP Customer Support & Technical Assistance",
  description:
    "Get in touch with StreamPulse IPTV support via WhatsApp, Telegram, or Email for instant activation, device configuration, or subscription queries.",
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Clock size={14} /> 24/7 Live Technical Assistance
          </span>
          <h1 className="section-title">
            We Are Always Here to <span className="highlight">Help You Stream</span>
          </h1>
          <p className="section-subtitle">
            Have questions before ordering or need help installing your playlist on your device? Our team is online 24/7.
          </p>
        </div>

        <div className="grid-3" style={{ maxWidth: "1020px", margin: "0 auto 50px auto" }}>
          {/* WhatsApp Card */}
          <div className="card-glass" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(37, 211, 102, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#25d366",
                marginBottom: "16px",
              }}
            >
              <MessageSquare size={28} />
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
              WhatsApp Live Chat
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "20px", flex: 1 }}>
              Fastest response for instant orders, free trial requests, and real-time setup guidance.
            </p>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ width: "100%" }}
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Telegram Card */}
          <div className="card-glass" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(34, 158, 217, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#229ed9",
                marginBottom: "16px",
              }}
            >
              <Zap size={28} />
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
              Telegram Support & News
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "20px", flex: 1 }}>
              Join our Telegram channel for server status announcements, sports schedules, and direct agent support.
            </p>
            <a
              href={siteConfig.links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-telegram"
              style={{ width: "100%" }}
            >
              Join Telegram Support
            </a>
          </div>

          {/* Email Support */}
          <div className="card-glass" style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(0, 229, 255, 0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--primary)",
                marginBottom: "16px",
              }}
            >
              <Mail size={28} />
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
              Email Helpdesk
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "20px", flex: 1 }}>
              Send us inquiries, billing questions, or renewal requests. We reply within 2 hours.
            </p>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="btn btn-secondary"
              style={{ width: "100%" }}
            >
              {siteConfig.supportEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
