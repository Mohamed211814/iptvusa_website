import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { EmailSupportButton } from "@/components/EmailSupportButton";
import { ContactForm } from "@/components/ContactForm";
import { Zap, Mail, Clock, ShieldCheck, HelpCircle, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact IPTV USA Support | Buyer Help Desk & Technical Issue Form",
  description:
    "Have an issue or question before buying? Submit an inquiry ticket to official IPTV USA customer support or reach our team directly via Telegram and Email.",
};

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: "36px" }}>
          <span className="section-tag">
            <Clock size={14} /> 24/7 Live IPTV USA Assistance
          </span>
          <h1 className="section-title">
            Contact Us <span className="text-blue">IPTV USA</span>
          </h1>
          <p className="section-subtitle">
            Need help with your current subscription, experiencing an issue, or have a question before purchasing? Send us a message below.
          </p>
        </div>

        {/* Contact Form Container */}
        <div style={{ maxWidth: "860px", margin: "0 auto 50px auto" }}>
          <ContactForm />
        </div>

        {/* Direct Fast-Track Channels */}
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#000000", marginBottom: "6px" }}>
              Prefer Direct Messaging or Instant Chat?
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              You can also contact our specialists directly through our dedicated Telegram channel or email helpdesk.
            </p>
          </div>

          <div className="grid-2" style={{ gap: "20px" }}>
            {/* Telegram Card */}
            <div
              className="card-glass"
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px 20px",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "rgba(34, 158, 217, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#229ed9",
                  marginBottom: "14px",
                }}
              >
                <Zap size={26} />
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#000000", marginBottom: "6px" }}>
                Telegram Live Agent
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "18px", flex: 1 }}>
                Instant replies for urgent server checks, sports schedules, and fast activation assistance.
              </p>
              <a
                href={siteConfig.links.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-telegram"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Chat on Telegram (@contactexe)
              </a>
            </div>

            {/* Email Support */}
            <div
              className="card-glass"
              style={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "24px 20px",
              }}
            >
              <div
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  background: "rgba(0, 229, 255, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--primary)",
                  marginBottom: "14px",
                }}
              >
                <Mail size={26} />
              </div>
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#000000", marginBottom: "6px" }}>
                Direct Email Helpdesk
              </h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", marginBottom: "18px", flex: 1 }}>
                Send playlist queries, reseller quotes, or billing receipts directly to our team.
              </p>
              <EmailSupportButton
                subject="IPTV USA Buyer Support Inquiry"
              />
            </div>
          </div>

          {/* Setup Guide Callout Banner */}
          <div
            className="card-glass"
            style={{
              marginTop: "24px",
              padding: "16px 20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <BookOpen size={22} color="var(--primary)" />
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#000000" }}>
                  Need Device Installation Instructions?
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Step-by-step tutorials for Firestick, Android TV, Smart TV, and Apple TV.
                </div>
              </div>
            </div>
            <Link
              href="/setup-guide"
              className="btn btn-secondary"
              style={{ fontSize: "0.85rem", padding: "8px 16px" }}
            >
              View Setup Guides
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
