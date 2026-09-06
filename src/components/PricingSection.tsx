"use client";

import React, { useState } from "react";
import { pricingPlans, PricingPlan } from "@/data/pricing";
import { siteConfig } from "@/config/site";
import { Check, ShieldCheck, Zap, Sparkles, Tv, Clock, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  onSelectPlan?: (plan: PricingPlan, connections: number) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [connections, setConnections] = useState<number>(1);

  const handleBuyNow = (plan: PricingPlan) => {
    if (onSelectPlan) {
      onSelectPlan(plan, connections);
    } else {
      const price = plan.prices[connections].current;
      const text = encodeURIComponent(
        `Hello IPTV USA Pro! I would like to buy the ${plan.name} subscription ($${price}) with instant activation.`
      );
      window.open(`https://wa.me/${siteConfig.whatsappNumber.replace(/[^0-9]/g, "")}?text=${text}`, "_blank");
    }
  };

  return (
    <section id="pricing" className="section">
      <div className="container">
        {/* Section Header matching iptvusaofficial.com */}
        <div className="section-header">
          <h2 className="section-title">
            <span className="text-blue">IPTV USA</span> Subscription Pricing
          </h2>
          <p className="section-subtitle">
            Get instant access to the best IPTV USA service with over 24,000 live IPTV USA channels and 110,000+ VOD movies with high speed streaming and zero freezing.
          </p>

          {/* Connection Switcher */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "6px",
              padding: "4px",
              background: "rgba(14, 20, 36, 0.8)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "var(--radius-full)",
              marginTop: "20px",
              maxWidth: "100%",
            }}
          >
            {[1, 2, 3].map((conn) => (
              <button
                key={conn}
                onClick={() => setConnections(conn)}
                style={{
                  padding: "8px 16px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  background:
                    connections === conn
                      ? "var(--color-blue)"
                      : "transparent",
                  color: connections === conn ? "#ffffff" : "var(--text-secondary)",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
              >
                <Tv size={14} />
                <span>{conn} {conn === 1 ? "Device" : "Devices"}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 4 Pricing Cards (Exact iptvusaofficial.com 1, 3, 6, 12 Month columns) */}
        <div className="grid-4" style={{ alignItems: "stretch" }}>
          {pricingPlans.map((plan) => {
            const priceData = plan.prices[connections];
            const isFeatured = plan.isPopular;

            return (
              <div
                key={plan.id}
                className="card-glass"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                  padding: "30px 20px",
                  borderColor: isFeatured ? "var(--color-green)" : "var(--border-subtle)",
                  boxShadow: isFeatured ? "var(--shadow-green), var(--shadow-md)" : "var(--shadow-sm)",
                  background: isFeatured
                    ? "linear-gradient(180deg, rgba(14, 28, 48, 0.9) 0%, rgba(8, 14, 24, 0.95) 100%)"
                    : "var(--bg-card)",
                }}
              >
                <div>
                  {/* Plan Name */}
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: 800,
                      color: "#ffffff",
                      marginBottom: "10px",
                    }}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 900,
                      color: isFeatured ? "var(--color-green)" : "#ffffff",
                      marginBottom: "6px",
                    }}
                  >
                    ${priceData.current}
                  </div>

                  {/* Discount Badge */}
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      color: isFeatured ? "var(--color-green)" : "var(--color-blue-bright)",
                      textDecoration: "underline",
                      marginBottom: "24px",
                    }}
                  >
                    {plan.badge}
                  </div>

                  {/* Checklist matching iptvusaofficial.com */}
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      textAlign: "left",
                      padding: "16px 0",
                      borderTop: "1px solid var(--border-subtle)",
                      borderBottom: "1px solid var(--border-subtle)",
                      marginBottom: "24px",
                    }}
                  >
                    {plan.features.map((feat, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--text-secondary)",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                        }}
                      >
                        <Check size={16} color="var(--color-green)" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buy Now Button */}
                <button
                  onClick={() => handleBuyNow(plan)}
                  className={`btn ${isFeatured ? "btn-green" : "btn-primary"}`}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "6px",
                    fontWeight: 800,
                    letterSpacing: "0.02em",
                  }}
                >
                  <Zap size={16} />
                  <span>Buy Now</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Compatibility for All Devices banner */}
        <div
          style={{
            marginTop: "40px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              padding: "12px 20px",
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid var(--border-subtle)",
              borderRadius: "12px",
              fontSize: "0.875rem",
              color: "var(--text-main)",
              maxWidth: "100%",
              lineHeight: 1.5,
              textAlign: "center",
            }}
          >
            <Tv size={18} color="var(--color-green)" style={{ flexShrink: 0 }} />
            <span>Compatibility for All Devices: Best IPTV USA for Firestick, Android TV, Smart TV, Apple TV, PC and Mac</span>
          </div>
        </div>
      </div>
    </section>
  );
};
