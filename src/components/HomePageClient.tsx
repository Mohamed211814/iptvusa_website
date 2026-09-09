"use client";

import React, { useState } from "react";
import { HeroSection } from "@/components/HeroSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { ChannelExplorer } from "@/components/ChannelExplorer";
import { DeviceCompatibility } from "@/components/DeviceCompatibility";
import { PricingSection } from "@/components/PricingSection";
import { Testimonials } from "@/components/Testimonials";
import { FaqAccordion } from "@/components/FaqAccordion";
import { OrderModal } from "@/components/OrderModal";
import { PricingPlan } from "@/data/pricing";

export const HomePageClient: React.FC = () => {
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
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Subscription Pricing Plans */}
      <PricingSection onSelectPlan={handlePlanSelect} />

      {/* 3. Why IPTV USA Is The Best */}
      <FeaturesGrid />

      {/* 4. Live Channel & VOD Explorer */}
      <ChannelExplorer />

      {/* 5. Device Compatibility Matrix */}
      <DeviceCompatibility />

      {/* 6. Customer Testimonials */}
      <Testimonials />

      {/* 7. Frequently Asked Questions */}
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
};
