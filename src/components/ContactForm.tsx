"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Send, AlertCircle, RefreshCw } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!name.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setErrorMsg("Please enter your email address.");
      return;
    }
    if (!message.trim()) {
      setErrorMsg("Please enter your message.");
      return;
    }

    setLoading(true);

    try {
      await fetch(`https://formsubmit.co/ajax/${siteConfig.supportEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          _subject: subject.trim()
            ? `[IPTV USA Contact] ${subject.trim()}`
            : `[IPTV USA Contact] Inquiry from ${name.trim()}`,
          message: message.trim(),
          _replyto: email.trim(),
          _template: "table",
        }),
      });
    } catch {
      // Fallback gracefully
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div
      className="card-glass"
      style={{
        padding: "clamp(20px, 4vw, 36px)",
        borderRadius: "var(--radius-lg)",
        border: "1px solid rgba(0, 229, 255, 0.25)",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 229, 255, 0.1)",
      }}
    >
      {submitted ? (
        <div style={{ padding: "8px 0" }}>
          <div
            style={{
              backgroundColor: "#dcfce7",
              border: "1px solid #86efac",
              color: "#166534",
              padding: "16px 20px",
              borderRadius: "4px",
              fontSize: "0.95rem",
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            Thanks for contacting us! We will be in touch with you shortly.
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: "22px" }}>
            <h2 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#000000", marginBottom: "6px" }}>
              Send a Message
            </h2>
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)" }}>
              Fill in your details below and our support team will get in touch with you shortly.
            </p>
          </div>

          {errorMsg && (
            <div
              style={{
                background: "rgba(239, 68, 68, 0.12)",
                border: "1px solid rgba(239, 68, 68, 0.3)",
                borderRadius: "8px",
                padding: "10px 14px",
                color: "#dc2626",
                fontSize: "0.85rem",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "18px",
              }}
            >
              <AlertCircle size={16} />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Name & Email Fields */}
          <div className="grid-2" style={{ gap: "16px", marginBottom: "16px" }}>
            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#000000",
                  marginBottom: "6px",
                }}
              >
                Your Name <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  background: "#ffffff",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "8px",
                  color: "#000000",
                  outline: "none",
                }}
              />
            </div>

            <div>
              <label
                style={{
                  display: "block",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#000000",
                  marginBottom: "6px",
                }}
              >
                Your Email <span style={{ color: "#ef4444" }}>*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  background: "#ffffff",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "8px",
                  color: "#000000",
                  outline: "none",
                }}
              />
            </div>
          </div>

          {/* Subject Field */}
          <div style={{ marginBottom: "16px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#000000",
                marginBottom: "6px",
              }}
            >
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={{
                width: "100%",
                padding: "11px 14px",
                background: "#ffffff",
                border: "1px solid var(--border-medium)",
                borderRadius: "8px",
                color: "#000000",
                outline: "none",
              }}
            />
          </div>

          {/* Message Field */}
          <div style={{ marginBottom: "22px" }}>
            <label
              style={{
                display: "block",
                fontSize: "0.85rem",
                fontWeight: 600,
                color: "#000000",
                marginBottom: "6px",
              }}
            >
              Message <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              required
              style={{
                width: "100%",
                padding: "12px 14px",
                background: "#ffffff",
                border: "1px solid var(--border-medium)",
                borderRadius: "8px",
                color: "#000000",
                lineHeight: 1.5,
                outline: "none",
                resize: "vertical",
              }}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{
              width: "100%",
              justifyContent: "center",
              padding: "13px",
              fontSize: "0.95rem",
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.75 : 1,
            }}
          >
            {loading ? (
              <>
                <RefreshCw size={16} className="spin-animation" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send size={16} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
