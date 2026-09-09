import React from "react";
import { siteConfig } from "@/config/site";

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  pageType?: "WebPage" | "ContactPage" | "CollectionPage" | "ItemPage" | "AboutPage";
}

export const WebPageSchema: React.FC<WebPageSchemaProps> = ({
  title,
  description,
  url,
  pageType = "WebPage",
}) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": `${url}/#webpage`,
    url: url,
    name: title,
    description: description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
    },
    about: {
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
