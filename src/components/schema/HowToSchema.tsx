import React from "react";
import { siteConfig } from "@/config/site";
import { setupGuides } from "@/data/guides";

export const HowToSchema: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": setupGuides.map((guide) => ({
      "@type": "HowTo",
      "@id": `${siteConfig.url}/setup-guide/#${guide.id}`,
      name: `How to Install IPTV USA on ${guide.device}`,
      description: `Step-by-step tutorial to install and configure IPTV USA on ${guide.device} using ${guide.recommendedApp} in ${guide.timeMinutes} minutes.`,
      totalTime: `PT${guide.timeMinutes}M`,
      estimatedCost: {
        "@type": "MonetaryAmount",
        currency: "USD",
        value: "0",
      },
      tool: [
        {
          "@type": "HowToTool",
          name: guide.device,
        },
        {
          "@type": "HowToTool",
          name: guide.recommendedApp,
        },
      ],
      step: guide.steps.map((step, index) => ({
        "@type": "HowToStep",
        position: index + 1,
        name: step.title,
        text: step.code ? `${step.description} (Code: ${step.code})` : step.description,
        url: `${siteConfig.url}/setup-guide/#${guide.id}`,
      })),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
