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
I would like to request a 24 Hour Free Trial.
Device: ${device}
Email: ${email || "Provided upon request"}
Please send me a test playlist to verify buffer free streaming quality.`
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
              Request Your <span className="text-blue">24 Hour Free Trial</span>
            </h1>
            <p className="section-subtitle">
              Test our 24,000+ live channels, 4K sports feeds, and Anti Freeze 9.3 stability on your Firestick or Smart TV before spending a single dollar.
            </p>
          </div>

          {/* Form Card */}
          <div
            className="card-glass"
            style={{
              padding: "36px",
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
                      Request 24 Hour Free Pass
                    </button>

                    <button
                      type="button"
                      onClick={handleInstantWhatsApp}
                      className="btn btn-whatsapp"
                      style={{ width: "100%", padding: "14px", fontSize: "1rem" }}
                    >
                      <MessageSquare size={18} />
                      Fast Track: Get Trial Instantly on WhatsApp
                    </button>
                  </div>

                  <div style={{ display: "flex", justifyContent: "center", gap: "20px", fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "8px" }}>
                    <span>✓ No Credit Card</span>
                    <span>✓ Auto Expires in 24h</span>
                    <span>✓ Full 4K Access</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
