"use client";

import React, { useState } from "react";
import { Mail, Check, Copy, ExternalLink } from "lucide-react";
import { siteConfig } from "@/config/site";

interface EmailSupportButtonProps {
  subject?: string;
  body?: string;
  label?: string;
  variant?: "primary" | "secondary" | "green";
  showQuickLinks?: boolean;
  lightText?: boolean;
}

export const EmailSupportButton: React.FC<EmailSupportButtonProps> = ({
  subject = "IPTV USA Support",
  body = "",
  label,
  variant = "secondary",
  showQuickLinks = true,
  lightText = false,
}) => {
  const [copied, setCopied] = useState(false);
  const email = siteConfig.supportEmail;

  const encodedSubject = subject ? encodeURIComponent(subject) : "";
  const encodedBody = body ? encodeURIComponent(body) : "";

  const mailtoParams: string[] = [];
  if (encodedSubject) mailtoParams.push(`subject=${encodedSubject}`);
  if (encodedBody) mailtoParams.push(`body=${encodedBody}`);
  const mailtoQuery = mailtoParams.length > 0 ? `?${mailtoParams.join("&")}` : "";

  const gmailParams: string[] = [];
  if (encodedSubject) gmailParams.push(`su=${encodedSubject}`);
  if (encodedBody) gmailParams.push(`body=${encodedBody}`);
  const gmailQuery = gmailParams.length > 0 ? `&${gmailParams.join("&")}` : "";

  const mailtoUrl = `mailto:${email}${mailtoQuery}`;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}${gmailQuery}`;

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrimaryClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // 1. Copy to clipboard automatically for convenience
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);

    // 2. Open Gmail compose in a new tab (works reliably across all desktop browsers)
    const newWindow = window.open(gmailUrl, "_blank", "noopener,noreferrer");

    // 3. Also trigger mailto as fallback
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = mailtoUrl;
    }
  };

  const btnClass =
    variant === "green"
      ? "btn btn-green"
      : variant === "primary"
      ? "btn btn-primary"
      : "btn btn-secondary";

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "8px" }}>
      <button
        type="button"
        onClick={handlePrimaryClick}
        className={btnClass}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          cursor: "pointer",
          padding: "12px 16px",
          fontSize: "0.92rem",
          fontWeight: 700,
        }}
        title="Click to open email or copy address"
      >
        <Mail size={16} />
        <span>{label || email}</span>
      </button>

      {/* Copy notification badge */}
      {copied && (
        <div
          style={{
            fontSize: "0.78rem",
            color: "var(--color-green)",
            background: "rgba(28, 231, 131, 0.12)",
            border: "1px solid rgba(28, 231, 131, 0.3)",
            borderRadius: "6px",
            padding: "4px 8px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "6px",
            animation: "fadeIn 0.2s ease",
          }}
        >
          <Check size={13} />
          <span>Email copied to clipboard ({email})!</span>
        </div>
      )}

      {/* Quick convenience options */}
      {showQuickLinks && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            fontSize: "0.75rem",
            color: lightText ? "rgba(255, 255, 255, 0.75)" : "var(--text-muted)",
            marginTop: "2px",
          }}
        >
          <a
            href={gmailUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: lightText ? "#93c5fd" : "var(--color-blue-bright)",
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
              textDecoration: "underline",
            }}
          >
            <span>Open in Gmail</span>
            <ExternalLink size={11} />
          </a>
          <span>•</span>
          <a
            href={mailtoUrl}
            style={{
              color: lightText ? "#ffffff" : "var(--text-secondary)",
              textDecoration: "underline",
              fontWeight: lightText ? 600 : "normal",
            }}
          >
            <span>Mail App</span>
          </a>
          <span>•</span>
          <button
            type="button"
            onClick={handleCopy}
            style={{
              background: "none",
              border: "none",
              color: lightText ? "#34d399" : "var(--color-green)",
              cursor: "pointer",
              padding: 0,
              fontSize: "0.75rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "3px",
              textDecoration: "underline",
            }}
          >
            <Copy size={11} />
            <span>{copied ? "Copied!" : "Copy"}</span>
          </button>
        </div>
      )}
    </div>
  );
};
