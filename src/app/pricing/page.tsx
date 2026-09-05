"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PricingSection } from "@/components/PricingSection";
import { FaqAccordion } from "@/components/FaqAccordion";
import { OrderModal } from "@/components/OrderModal";
import { PricingPlan } from "@/data/pricing";
import { ShieldCheck, Zap, Sparkles, Check, HelpCircle, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function PricingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [selectedConnections, setSelectedConnections] = useState(1);

  const handlePlanSelect = (plan: PricingPlan, connections: number) => {
    setSelectedPlan(plan);
    setSelectedConnections(connections);
    setModalOpen(true);
  };

  return (
    <div style={{ paddingTop: "40px", paddingBottom: "80px" }}>
      <div className="container">
        {/* Page Header */}
        <div className="section-header" style={{ marginBottom: "20px" }}>
          <span className="section-tag">
            <Zap size={14} /> Official Pricing & Discounts
          </span>
          <h1 className="section-title">
            Choose Your <span className="text-blue">IPTV USA Pro</span> Plan
          </h1>
          <p className="section-subtitle">
            All plans include full access to 24,000+ live 4K FHD channels, 110,000+ VODs, all live sports & PPVs, Anti Freeze 9.3, and 24/7 dedicated support.
          </p>
        </div>

        {/* Pricing Component */}
        <PricingSection onSelectPlan={handlePlanSelect} />

        {/* Comparison Matrix */}
        <div style={{ marginTop: "60px", marginBottom: "60px" }}>
          <div className="section-header" style={{ marginBottom: "30px" }}>
            <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
              What&apos;s Included in <span className="text-blue">Every Subscription</span>
            </h2>
            <p className="section-subtitle">
              We never restrict channels or charge extra for sports packages or 4K streams.
            </p>
          </div>

          <div className="grid-3">
            <div className="card-glass">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(0,85,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-blue-bright)" }}>
                  <Zap size={18} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>Anti Freeze 9.3</h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Guaranteed zero stuttering during major live sporting events like Super Bowl, UEFA Finals, and UFC PPV.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(28,231,131,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-green)" }}>
                  <ShieldCheck size={18} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>7 Day Money Back</h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Try our 6 month or 12 month packages completely risk free. If you are not satisfied, request a full refund.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#f59e0b" }}>
                  <Sparkles size={18} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff" }}>Instant Auto Delivery</h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Receive your Xtream Codes API and M3U playlist link in your email inbox within 5 minutes of checkout.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <FaqAccordion />

        <OrderModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialPlan={selectedPlan}
          initialConnections={selectedConnections}
        />
      </div>
    </div>
  );
}
