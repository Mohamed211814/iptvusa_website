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
          background: "linear-gradient(180deg, #10172b 0%, #090e1a 100%)",
          border: "1px solid rgba(0, 229, 255, 0.3)",
          borderRadius: "var(--radius-lg)",
          padding: "24px 20px",
          maxWidth: "540px",
          width: "100%",
          maxHeight: "92vh",
          overflowY: "auto",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9), 0 0 35px rgba(0, 229, 255, 0.2)",
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
            background: "rgba(255, 255, 255, 0.08)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
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
                  color: "#10b981",
                  fontWeight: 600,
                  marginBottom: "8px",
                }}
              >
                <span className="pulse-dot" /> Instant Auto Setup Available
              </div>
              <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#fff" }}>
                Complete Your Subscription Order
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                Select your package, device, and get your activation details instantly.
              </p>
            </div>

            {/* Plan selection */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff", display: "block", marginBottom: "8px" }}>
                Select Duration:
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "8px" }}>
                {pricingPlans.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPlanId(p.id)}
                    style={{
                      padding: "10px 12px",
                      borderRadius: "10px",
                      background: selectedPlanId === p.id ? "rgba(0, 229, 255, 0.15)" : "rgba(255, 255, 255, 0.04)",
                      border: "1px solid",
                      borderColor: selectedPlanId === p.id ? "var(--primary)" : "var(--border-subtle)",
                      color: selectedPlanId === p.id ? "#fff" : "var(--text-secondary)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      textAlign: "left",
                      cursor: "pointer",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span>{p.name}</span>
                    <span style={{ color: "var(--primary)", fontWeight: 700 }}>
                      ${p.prices[connections].current}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Number of screens */}
            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff", display: "block", marginBottom: "8px" }}>
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
                      padding: "8px",
                      borderRadius: "8px",
                      background: connections === num ? "var(--primary)" : "rgba(255, 255, 255, 0.04)",
                      color: connections === num ? "#030712" : "var(--text-secondary)",
                      fontWeight: 700,
                      fontSize: "0.85rem",
                      border: "1px solid",
                      borderColor: connections === num ? "var(--primary)" : "var(--border-subtle)",
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
              <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "#fff", display: "block", marginBottom: "8px" }}>
                Primary Device Hardware:
              </label>
              <select
                value={deviceType}
                onChange={(e) => setDeviceType(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  background: "rgba(6, 9, 17, 0.8)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "8px",
                  color: "#fff",
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
                padding: "12px 16px",
                background: "rgba(0, 229, 255, 0.06)",
                border: "1px solid rgba(0, 229, 255, 0.2)",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <span style={{ fontSize: "0.9rem", color: "#fff", fontWeight: 600 }}>
                Total One-Time Payment:
              </span>
              <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--primary)" }}>
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
