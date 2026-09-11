import React from "react";
import { siteConfig } from "@/config/site";
import { BlogPost } from "@/data/blog";

interface ArticleSchemaProps {
  post: BlogPost;
}

export const ArticleSchema: React.FC<ArticleSchemaProps> = ({ post }) => {
  const publishedDate = post.date.includes("2026") ? "2026-09-11T08:00:00+00:00" : new Date().toISOString();
  const modifiedDate = post.dateModified?.includes("2026") ? "2026-09-11T08:00:00+00:00" : publishedDate;
  
  const coverUrl = post.coverImage
    ? post.coverImage.startsWith("http")
      ? post.coverImage
      : `${siteConfig.url}${post.coverImage}`
    : `${siteConfig.url}/og-image.png`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteConfig.url}/blog/${post.slug}/#article`,
    headline: post.title,
    description: post.excerpt,
    url: `${siteConfig.url}/blog/${post.slug}`,
    datePublished: publishedDate,
    dateModified: modifiedDate,
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    author: {
      "@type": "Person",
      name: post.author || siteConfig.shortName,
      jobTitle: post.authorRole || "Digital Media Research Specialist",
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    image: [coverUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

