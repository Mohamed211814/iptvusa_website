import React from "react";
import { siteConfig } from "@/config/site";
import { faqs as defaultFaqs, FAQItem } from "@/data/faqs";

export interface FaqEntry {
  question: string;
  answer: string;
  category?: string;
}

interface FaqSchemaProps {
  items?: FaqEntry[];
  pageUrl?: string;
}

export const FaqSchema: React.FC<FaqSchemaProps> = ({
  items = defaultFaqs,
  pageUrl = siteConfig.url,
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}/#faq`,
    isPartOf: {
      "@id": `${pageUrl}/#webpage`,
    },
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/\n/g, " "),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
