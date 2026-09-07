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
