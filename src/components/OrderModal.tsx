"use client";

import React, { useState } from "react";
import { pricingPlans, PricingPlan } from "@/data/pricing";
import { siteConfig } from "@/config/site";
import { X, Check, Mail, Zap, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPlan?: PricingPlan | null;
  initialConnections?: number;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  initialPlan,
  initialConnections = 1,
}) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(
    initialPlan ? initialPlan.id : pricingPlans[3].id // Default to 12m
  );
  const [connections, setConnections] = useState<number>(initialConnections);
  const [deviceType, setDeviceType] = useState<string>("Amazon Firestick");

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentPlan = pricingPlans.find((p) => p.id === selectedPlanId) || pricingPlans[3];
  const totalPrice = currentPlan.prices[connections].current;

  const handleTelegramCheckout = () => {
    window.open(siteConfig.links.telegram, "_blank");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(3, 6, 13, 0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        zIndex: 999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        overflowY: "auto",
      }}
    >
      <div
        className="card-glass"
        style={{
          background: "#ffffff",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          padding: "28px 24px",
          maxWidth: "540px",
          width: "100%",
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
          position: "relative",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close Order Modal"
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "#1e293b",
            border: "1px solid #334155",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            cursor: "pointer",
            zIndex: 10,
          }}
        >
          <X size={20} />
        </button>

        <div>
          <div style={{ marginBottom: "20px" }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.75rem",
                  color: "var(--color-green)",
                  fontWeight: 700,
                  marginBottom: "8px",
                }}
              >
                <span className="pulse-dot" /> Instant Auto Setup Available
              </div>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#000000" }}>
                Complete Your Subscription Order
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                Select your package, device, and get your activation details instantly.
              </p>
            </div>

            {/* Plan selection */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#000000", display: "block", marginBottom: "8px" }}>
                Select Duration:
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
                {pricingPlans.map((p) => {
                  const isSelected = selectedPlanId === p.id;
                  const borderColors: Record<string, { border: string; bg: string; shadow: string; text: string }> = {
                    "plan-1m": { border: "#0055ff", bg: "rgba(0, 85, 255, 0.08)", shadow: "0 0 0 2px rgba(0, 85, 255, 0.2)", text: "#0055ff" },
                    "plan-3m": { border: "#8b5cf6", bg: "rgba(139, 92, 246, 0.08)", shadow: "0 0 0 2px rgba(139, 92, 246, 0.2)", text: "#7c3aed" },
                    "plan-6m": { border: "#ea580c", bg: "rgba(234, 88, 12, 0.08)", shadow: "0 0 0 2px rgba(234, 88, 12, 0.2)", text: "#ea580c" },
                    "plan-12m": { border: "#059669", bg: "rgba(5, 150, 105, 0.08)", shadow: "0 0 0 2px rgba(5, 150, 105, 0.2)", text: "#059669" },
                  };
                  const colorConfig = borderColors[p.id] || borderColors["plan-1m"];

                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setSelectedPlanId(p.id)}
                      style={{
                        padding: "10px 12px",
                        borderRadius: "10px",
                        background: isSelected ? colorConfig.bg : "#f8fafc",
                        border: isSelected ? `2px solid ${colorConfig.border}` : "1.5px solid var(--border-subtle)",
                        boxShadow: isSelected ? colorConfig.shadow : "none",
                        color: "#000000",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        textAlign: "left",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <span>{p.name}</span>
                      <span style={{ color: colorConfig.text, fontWeight: 800 }}>
                        ${p.prices[connections].current}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Number of screens */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#000000", display: "block", marginBottom: "8px" }}>
                Simultaneous Devices / Connections:
              </label>
              <div style={{ display: "flex", gap: "8px" }}>
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setConnections(num)}
                    style={{
                      flex: 1,
                      padding: "10px 8px",
                      borderRadius: "8px",
                      background: connections === num ? "var(--color-blue)" : "#f8fafc",
                      color: connections === num ? "#ffffff" : "#000000",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      border: "1.5px solid",
                      borderColor: connections === num ? "var(--color-blue)" : "var(--border-subtle)",
                      cursor: "pointer",
                    }}
                  >
                    {num} {num === 1 ? "Screen" : "Screens"}
                  </button>
                ))}
              </div>
            </div>

            {/* Hardware selection */}
            <div style={{ marginBottom: "20px" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#000000", display: "block", marginBottom: "8px" }}>
                Primary Device Hardware:
              </label>
              <select
                value={deviceType}
                onChange={(e) => setDeviceType(e.target.value)}
                style={{
                  width: "100%",
                  padding: "11px 14px",
                  background: "#ffffff",
                  border: "1px solid var(--border-medium)",
                  borderRadius: "8px",
                  color: "#000000",
                  fontSize: "0.9rem",
                  outline: "none",
                }}
              >
                <option value="Amazon Firestick / Fire TV">Amazon Firestick / Fire TV (Downloader)</option>
                <option value="Android TV / Nvidia Shield">Android TV / Nvidia Shield / Google TV (TiviMate)</option>
                <option value="Samsung / LG Smart TV">Samsung or LG Smart TV (IBO Player / Smart IPTV)</option>
                <option value="Apple TV / iPhone / iPad">Apple TV / iPhone / iPad (IPTVX / Smarters)</option>
                <option value="Windows PC / Mac">Windows PC / macOS (VLC / Smarters Desktop)</option>
                <option value="MAG / Formuler Box">MAG / Formuler Box (Stalker Portal)</option>
              </select>
            </div>

            {/* Total Price Callout */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 18px",
                background: "#f8fafc",
                border: "1px solid var(--border-subtle)",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "0.95rem", color: "#000000", fontWeight: 700 }}>
                Total One-Time Payment:
              </span>
              <span style={{ fontSize: "1.6rem", fontWeight: 900, color: "var(--color-green)" }}>
                ${totalPrice}
              </span>
            </div>

            {/* Action buttons */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href={currentPlan.checkoutUrl}
                className="btn btn-green"
                style={{ width: "100%", justifyContent: "center", padding: "14px", fontSize: "0.95rem", textDecoration: "none" }}
              >
                <Zap size={18} />
                Order Now - Instant Online Checkout
              </a>

              <a
                href={`mailto:${siteConfig.supportEmail}?subject=${encodeURIComponent(`Order Inquiry - ${currentPlan.name}`)}`}
                className="btn btn-secondary"
                style={{ width: "100%", justifyContent: "center", padding: "12px", fontSize: "0.9rem", textDecoration: "none" }}
              >
                <Mail size={16} />
                Order via Email Support
              </a>

              <button
                onClick={handleTelegramCheckout}
                className="btn btn-telegram"
                style={{ width: "100%", justifyContent: "center", padding: "12px", fontSize: "0.9rem" }}
              >
                <Zap size={16} />
                Order via Telegram Support
              </button>
            </div>

            <div style={{ textAlign: "center", marginTop: "14px", fontSize: "0.75rem", color: "var(--text-muted)" }}>
              🔒 256 bit SSL Encrypted | 7 Day Money Back Guarantee
            </div>
          </div>
        </div>
      </div>
  );
};
