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

            const planConfig: Record<
              string,
              {
                className: string;
                borderColor: string;
                badgeBg: string;
                badgeColor: string;
                priceColor: string;
                btnClass: string;
                btnStyle?: React.CSSProperties;
              }
            > = {
              "plan-1m": {
                className: "pricing-card-1m",
                borderColor: "#0055ff",
                badgeBg: "rgba(0, 85, 255, 0.1)",
                badgeColor: "#0055ff",
                priceColor: "#0055ff",
                btnClass: "btn-primary",
              },
              "plan-3m": {
                className: "pricing-card-3m",
                borderColor: "#8b5cf6",
                badgeBg: "rgba(139, 92, 246, 0.12)",
                badgeColor: "#7c3aed",
                priceColor: "#7c3aed",
                btnClass: "btn",
                btnStyle: {
                  background: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
                  color: "#ffffff",
                  boxShadow: "0 4px 18px rgba(124, 58, 237, 0.35)",
                },
              },
              "plan-6m": {
                className: "pricing-card-6m",
                borderColor: "#ea580c",
                badgeBg: "rgba(234, 88, 12, 0.12)",
                badgeColor: "#c2410c",
                priceColor: "#ea580c",
                btnClass: "btn",
                btnStyle: {
                  background: "linear-gradient(135deg, #ea580c 0%, #c2410c 100%)",
                  color: "#ffffff",
                  boxShadow: "0 4px 18px rgba(234, 88, 12, 0.35)",
                },
              },
              "plan-12m": {
                className: "pricing-card-12m",
                borderColor: "#059669",
                badgeBg: "#059669",
                badgeColor: "#ffffff",
                priceColor: "#059669",
                btnClass: "btn-green",
              },
            };

            const config = planConfig[plan.id] || planConfig["plan-1m"];

            return (
              <div
                key={plan.id}
                className={`card-glass ${config.className}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                  padding: "34px 20px 26px 20px",
                  position: "relative",
                  borderRadius: "var(--radius-md)",
                  background: "#ffffff",
                }}
              >
                {isFeatured && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
                      color: "#ffffff",
                      padding: "5px 16px",
                      borderRadius: "var(--radius-full)",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      boxShadow: "0 4px 14px rgba(5, 150, 105, 0.4)",
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
                      color: "#000000",
                      marginBottom: "10px",
                    }}
                  >
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div
                    style={{
                      fontSize: "2.6rem",
                      fontWeight: 900,
                      color: config.priceColor,
                      marginBottom: "6px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    ${priceData.current}
                  </div>

                  {/* Discount Badge */}
                  <div style={{ marginBottom: "22px" }}>
                    <span
                      style={{
                        display: "inline-block",
                        fontSize: "0.825rem",
                        fontWeight: 800,
                        background: config.badgeBg,
                        color: config.badgeColor,
                        padding: "5px 14px",
                        borderRadius: "var(--radius-full)",
                        border: `1px solid ${config.borderColor}35`,
                      }}
                    >
                      {plan.badge}
                    </span>
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
                          color: "#000000",
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          lineHeight: 1.4,
                        }}
                      >
                        <Check size={16} color="var(--color-green)" style={{ flexShrink: 0 }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Order Now Button */}
                <a
                  href={plan.checkoutUrl}
                  className={`btn ${config.btnClass}`}
                  style={{
                    width: "100%",
                    padding: "12px",
                    borderRadius: "6px",
                    fontWeight: 800,
                    letterSpacing: "0.02em",
                    textDecoration: "none",
                    ...config.btnStyle,
                  }}
                >
                  <Zap size={16} />
                  <span>Order Now</span>
                </a>
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
              padding: "14px 24px",
              background: "#ffffff",
              border: "1px solid var(--border-subtle)",
              boxShadow: "var(--shadow-sm)",
              borderRadius: "12px",
              fontSize: "0.9rem",
              color: "#000000",
              fontWeight: 500,
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
