"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Sparkles, CheckCircle2, MessageSquare, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function FreeTrialPage() {
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [device, setDevice] = useState("Amazon Firestick");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleInstantWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello IPTV USA Pro!
I would like to request an IPTV USA 24 Hour Free Trial.
Device: ${device}
Email: ${email || "Provided upon request"}
Please send me an IPTV USA test playlist to verify buffer free streaming quality.`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}?text=${text}`, "_blank");
  };

  return (
    <div style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      <div className="container">
        <div style={{ maxWidth: "680px", margin: "0 auto" }}>
          {/* Header */}
          <div className="section-header" style={{ marginBottom: "32px" }}>
            <span className="section-tag">
              <Sparkles size={14} /> 100% Free | No Credit Card Required
            </span>
            <h1 className="section-title">
              Request Your <span className="text-blue">IPTV USA</span> 24 Hour Free Trial
            </h1>
            <p className="section-subtitle">
              Test our IPTV USA 24,000+ live channels, 4K sports feeds, and Anti Freeze 9.3 stability on your Firestick or Smart TV before spending a single dollar.
            </p>
          </div>

          {/* Form Card */}
          <div
            className="card-glass"
            style={{
              padding: "clamp(20px, 5vw, 36px)",
              border: "1px solid rgba(0, 85, 255, 0.3)",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 85, 255, 0.15)",
            }}
          >
            {isSubmitted ? (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    borderRadius: "50%",
                    background: "rgba(28, 231, 131, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px auto",
                  }}
                >
                  <CheckCircle2 size={36} color="var(--color-green)" />
                </div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: "10px" }}>
                  Trial Request Received!
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", marginBottom: "24px", lineHeight: 1.6 }}>
                  We are generating your test playlist credentials for <strong>{email}</strong>. For instant delivery in under 3 minutes, confirm with our team on WhatsApp:
                </p>
                <button
                  onClick={handleInstantWhatsApp}
                  className="btn btn-whatsapp"
                  style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: "1rem" }}
                >
                  <MessageSquare size={18} />
                  Get Trial Link via WhatsApp Now
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {/* Email */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
                      Your Email Address (For Credentials Delivery)
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "13px 16px",
                        background: "rgba(7, 9, 15, 0.8)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
                      WhatsApp Number (For Instant Activation, Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +1 555 123 4567"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "13px 16px",
                        background: "rgba(7, 9, 15, 0.8)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    />
                  </div>

                  {/* Device */}
                  <div>
                    <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: "#fff", marginBottom: "8px" }}>
                      Primary Streaming Device
                    </label>
                    <select
                      value={device}
                      onChange={(e) => setDevice(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "13px 16px",
                        background: "rgba(7, 9, 15, 0.8)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "8px",
                        color: "#fff",
                        fontSize: "0.95rem",
                        outline: "none",
                      }}
                    >
                      <option value="Amazon Firestick">Amazon Firestick / Fire TV Cube</option>
                      <option value="Android TV / Nvidia Shield">Android TV / Google TV / Nvidia Shield</option>
                      <option value="Samsung or LG Smart TV">Samsung or LG Smart TV (IBO Player)</option>
                      <option value="Apple TV / iPhone">Apple TV / iPhone / iPad</option>
                      <option value="Windows PC or Mac">Windows PC / Mac (VLC / Smarters)</option>
                      <option value="MAG Box">MAG Box / Formuler (Stalker)</option>
                    </select>
                  </div>

                  {/* Submit buttons */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "10px" }}>
                    <button
                      type="submit"
                      className="btn btn-green"
                      style={{ width: "100%", padding: "14px", fontSize: "1rem" }}
                    >
                      <Zap size={18} />
                      Request IPTV USA 24 Hour Free Pass
                    </button>

                    <button
                      type="button"
                      onClick={handleInstantWhatsApp}
                      className="btn btn-whatsapp"
                      style={{ width: "100%", padding: "14px", fontSize: "1rem" }}
                    >
                      <MessageSquare size={18} />
                      Fast Track: Get IPTV USA Trial Instantly on WhatsApp
                    </button>
                  </div>

                  <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px 20px", fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "8px" }}>
                    <span>✓ No Credit Card</span>
                    <span>✓ Auto Expires in 24h</span>
                    <span>✓ Full IPTV USA 4K Access</span>
                  </div>
                </div>
              </form>
            )}
          </div>

          {/* IPTV USA Free Trial Features & SEO Details */}
          <div style={{ marginTop: "50px", textAlign: "center" }}>
            <h2 style={{ fontSize: "1.4rem", fontWeight: 800, color: "#fff", marginBottom: "14px" }}>
              Why Test <span className="text-blue">IPTV USA</span> Before You Buy?
            </h2>
            <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "28px" }}>
              Our IPTV USA free trial provides complete access to all live channels, premium sports networks, local USA regional broadcasts, and high bitrate 4K video on demand. Experience genuine zero buffer playback powered by Anti Freeze 9.3 on your favorite player app.
            </p>

            <div className="grid-3" style={{ textAlign: "left" }}>
              <div className="card-glass" style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                  1. Instant IPTV USA Setup
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Receive your M3U link and Xtream Codes login in minutes with simple configuration instructions.
                </p>
              </div>

              <div className="card-glass" style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                  2. All Devices Supported
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  Compatible with Firestick, Smart TVs, Android TV, Apple TV, iPhone, and PC with no extra hardware needed.
                </p>
              </div>

              <div className="card-glass" style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>
                  3. 100% Risk Free
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                  No payment method required to start. Your IPTV USA test line simply expires after 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
