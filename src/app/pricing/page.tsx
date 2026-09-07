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
        {/* Pricing Component */}
        <PricingSection onSelectPlan={handlePlanSelect} isH1 />

        {/* Comparison Matrix */}
        <div style={{ marginTop: "60px", marginBottom: "60px" }}>
          <div className="section-header" style={{ marginBottom: "30px" }}>
            <h2 className="section-title" style={{ fontSize: "1.8rem" }}>
              What is Included in Every <span className="text-blue">IPTV USA</span> Subscription
            </h2>
            <p className="section-subtitle">
              IPTV USA never restricts channels or charges extra fees for live sports feeds or 4K streams.
            </p>
          </div>

          <div className="grid-3">
            <div className="card-glass">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(0,85,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-blue-bright)" }}>
                  <Zap size={18} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#000000" }}>IPTV USA Anti Freeze 9.3</h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Guaranteed zero stuttering during major live sporting events, tournament finals, and championship PPV fights with IPTV USA proprietary load balancing.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(28,231,131,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-green)" }}>
                  <ShieldCheck size={18} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#000000" }}>IPTV USA 7 Day Guarantee</h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Try our 6 month or 12 month IPTV USA packages completely risk free. If you are not satisfied, request a prompt full refund.
              </p>
            </div>

            <div className="card-glass">
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "rgba(245,158,11,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#f59e0b" }}>
                  <Sparkles size={18} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#000000" }}>Instant IPTV USA Activation</h3>
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                Receive your IPTV USA Xtream Codes API and M3U playlist link directly in your email inbox within 5 minutes of checkout.
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
