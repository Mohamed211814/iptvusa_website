import React from "react";
import { siteConfig } from "@/config/site";
import { BlogPost } from "@/data/blog";

interface ArticleSchemaProps {
  post: BlogPost;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({ post }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}/#webpage`,
    },
    author: {
      "@type": "Person",
      name: post.author || siteConfig.shortName,
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
    image: post.coverImage || `${siteConfig.url}/og-image.png`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
