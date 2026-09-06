"use client";

import React from "react";
import { pricingPlans, PricingPlan } from "@/data/pricing";
import { siteConfig } from "@/config/site";
import { Check, ShieldCheck, Zap, Sparkles, Tv, Clock, ArrowRight } from "lucide-react";

interface PricingSectionProps {
  onSelectPlan?: (plan: PricingPlan, connections: number) => void;
  isH1?: boolean;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan, isH1 = false }) => {
  const connections = 1;

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
          {isH1 ? (
            <h1 className="section-title">
              <span className="text-blue">IPTV USA</span> Subscription Pricing
            </h1>
          ) : (
            <h2 className="section-title">
              <span className="text-blue">IPTV USA</span> Subscription Pricing
            </h2>
          )}
          <p className="section-subtitle">
            Get instant access to the best IPTV USA service with over 24,000 live IPTV USA channels and 110,000+ VOD movies with high speed streaming and zero freezing.
          </p>
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
                  padding: "32px 20px 26px 20px",
                  position: "relative",
                  border: isFeatured
                    ? "2px solid var(--color-green)"
                    : "1.5px solid rgba(41, 121, 255, 0.45)",
                  borderRadius: "var(--radius-md)",
                  boxShadow: isFeatured
                    ? "0 0 30px rgba(28, 231, 131, 0.3), var(--shadow-md)"
                    : "0 0 20px rgba(0, 85, 255, 0.15), var(--shadow-sm)",
                  background: isFeatured
                    ? "linear-gradient(180deg, rgba(14, 28, 48, 0.95) 0%, rgba(8, 14, 24, 0.98) 100%)"
                    : "linear-gradient(180deg, rgba(12, 19, 34, 0.88) 0%, rgba(7, 11, 20, 0.92) 100%)",
                }}
              >
                {isFeatured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-13px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "var(--color-green)",
                      color: "#050811",
                      padding: "4px 14px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      boxShadow: "0 4px 14px rgba(28, 231, 131, 0.45)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    ★ Most Popular Choice
                  </div>
                )}
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
                      borderTop: isFeatured
                        ? "1px solid rgba(28, 231, 131, 0.25)"
                        : "1px solid rgba(41, 121, 255, 0.22)",
                      borderBottom: isFeatured
                        ? "1px solid rgba(28, 231, 131, 0.25)"
                        : "1px solid rgba(41, 121, 255, 0.22)",
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
