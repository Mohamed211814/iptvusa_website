"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { ChannelExplorer } from "@/components/ChannelExplorer";
import { DeviceCompatibility } from "@/components/DeviceCompatibility";
import { PricingSection } from "@/components/PricingSection";
import { Testimonials } from "@/components/Testimonials";
import { FaqAccordion } from "@/components/FaqAccordion";
import { OrderModal } from "@/components/OrderModal";
import { PricingPlan } from "@/data/pricing";
import { Sparkles, ShieldCheck, Zap, ArrowRight, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);
  const [selectedConnections, setSelectedConnections] = useState(1);

  const handlePlanSelect = (plan: PricingPlan, connections: number) => {
    setSelectedPlan(plan);
    setSelectedConnections(connections);
    setModalOpen(true);
  };

  return (
    <>
      {/* 1. Hero Section & 3 Core Pillar Cards */}
      <HeroSection />

      {/* 2. Subscription Pricing Plans (Placed right above for maximum conversion) */}
      <PricingSection onSelectPlan={handlePlanSelect} />

      {/* 3. Why IPTV USA Is The Best */}
      <FeaturesGrid />

      {/* 5. Live Channel & VOD Explorer */}
      <ChannelExplorer />

      {/* 6. Device Compatibility Matrix */}
      <DeviceCompatibility />

      {/* 7. Real Customer Testimonials (What Say IPTV USA Clients ?) */}
      <Testimonials />

      {/* 8. Frequently Asked Questions (IPTV USA FAQs) */}
      <FaqAccordion />

      {/* 9. Final High-Conversion Call To Action Banner */}
      <section
        className="section"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, rgba(8, 12, 22, 0.4) 0%, rgba(13, 23, 44, 0.8) 100%)",
        }}
      >
        <div className="container">
          <div
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              background: "linear-gradient(135deg, rgba(16, 28, 54, 0.9) 0%, rgba(10, 16, 32, 0.95) 100%)",
              border: "1px solid rgba(0, 229, 255, 0.3)",
              borderRadius: "var(--radius-xl)",
              padding: "clamp(28px, 6vw, 50px) clamp(16px, 4vw, 30px)",
              textAlign: "center",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 229, 255, 0.15)",
              position: "relative",
            }}
          >
            <span className="section-tag" style={{ marginBottom: "16px" }}>
              <Sparkles size={14} /> Ready to Experience IPTV USA?
            </span>
            <h2
              style={{
                fontSize: "clamp(1.7rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                color: "#fff",
                marginBottom: "16px",
                wordBreak: "break-word",
              }}
            >
              Start Streaming IPTV USA Today with a Risk Free 24h Pass
            </h2>
            <p
              style={{
                fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
                color: "var(--text-secondary)",
                maxWidth: "680px",
                margin: "0 auto 32px auto",
                lineHeight: 1.6,
              }}
            >
              Join over 48,500 IPTV USA subscribers who eliminated overpriced cable bills. Instant activation within 5 minutes on your Firestick, Smart TV, or phone.
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                gap: "14px",
              }}
            >
              <button
                onClick={() => {
                  setSelectedPlan(null);
                  setModalOpen(true);
                }}
                className="btn btn-primary"
                style={{ padding: "14px 30px", fontSize: "1rem", flex: "1 1 240px" }}
              >
                <Zap size={18} />
                Get Your IPTV USA Subscription Now
              </button>

              <Link
                href="/free-trial"
                className="btn btn-secondary"
                style={{ padding: "14px 26px", fontSize: "1rem", flex: "1 1 220px" }}
              >
                <Sparkles size={18} color="var(--primary)" />
                Claim Free IPTV USA 24h Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Order & Lead Modal */}
      <OrderModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialPlan={selectedPlan}
        initialConnections={selectedConnections}
      />
    </>
  );
}
