import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import { BlogPost, initialBlogPosts } from "@/data/blog";
import { siteConfig } from "@/config/site";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { BreadcrumbSchema } from "@/components/schema/BreadcrumbSchema";
import { FaqSchema } from "@/components/schema/FaqSchema";
import {
  ArrowLeft,
  Clock,
  Calendar,
  Tag,
  Zap,
  ShieldCheck,
  AlertTriangle,
  Info,
  CheckCircle2,
  Tv,
} from "lucide-react";

async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "blog-posts.json");
    const data = await fs.readFile(filePath, "utf-8");
    const posts: BlogPost[] = JSON.parse(data);
    const found = posts.find((p) => p.slug === slug);
    if (found) return found;
  } catch {
    // fallback to initial posts
  }
  return initialBlogPosts.find((p) => p.slug === slug) || null;
}

export async function generateStaticParams() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "blog-posts.json");
    const data = await fs.readFile(filePath, "utf-8");
    const posts: BlogPost[] = JSON.parse(data);
    return posts.filter((p) => p.status === "published").map((p) => ({ slug: p.slug }));
  } catch {
    return initialBlogPosts.filter((p) => p.status === "published").map((p) => ({ slug: p.slug }));
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found - IPTV USA" };
  }

  const pageTitle = post.metaTitle || `${post.title} | IPTV USA Blog`;
  const pageDescription = post.metaDescription || post.excerpt;
  const canonicalUrl = post.canonicalUrl || `${siteConfig.url}/blog/${post.slug}/`;
  const coverImage = post.coverImage?.startsWith("http")
    ? post.coverImage
    : `${siteConfig.url}${post.coverImage || "/og-image.png"}`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: siteConfig.shortName,
      locale: "en_US",
      type: "article",
      publishedTime: post.date.includes("2026")
        ? "2026-09-11T08:00:00+00:00"
        : new Date().toISOString(),
      modifiedTime: post.dateModified?.includes("2026")
        ? "2026-09-11T08:00:00+00:00"
        : new Date().toISOString(),
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [coverImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

// Helper: parse inline markdown (bold, italic, links, code)
function renderInlineText(text: string): React.ReactNode[] {
  const elements: React.ReactNode[] = [];
  // Tokenize regex matching [link](url), **bold**, *italic*, `code`
  const regex = /(!?\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    const [fullMatch, isLinkOrImg, linkText, linkUrl, boldText, italicText, codeText] = match;

    if (boldText) {
      elements.push(
        <strong key={key++} style={{ fontWeight: 800, color: "#0f172a" }}>
          {boldText}
        </strong>
      );
    } else if (italicText) {
      elements.push(
        <em key={key++} style={{ fontStyle: "italic" }}>
          {italicText}
        </em>
      );
    } else if (codeText) {
      elements.push(
        <code
          key={key++}
          style={{
            background: "#f1f5f9",
            padding: "2px 6px",
            borderRadius: "4px",
            fontSize: "0.9em",
            color: "#0f172a",
            fontFamily: "monospace",
          }}
        >
          {codeText}
        </code>
      );
    } else if (linkText && linkUrl) {
      const isInternal =
        linkUrl.startsWith("/") ||
        linkUrl.startsWith("#") ||
        linkUrl.includes("iptvusa-pro.com");

      if (isInternal) {
        const cleanHref = linkUrl.replace(/^https?:\/\/(www\.)?iptvusa-pro\.com/, "") || "/";
        elements.push(
          <Link
            key={key++}
            href={cleanHref}
            style={{
              color: "var(--color-blue)",
              fontWeight: 600,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            {linkText}
          </Link>
        );
      } else {
        // External references stay on the page as styled text without taking user away
        elements.push(
          <strong
            key={key++}
            style={{
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            {linkText}
          </strong>
        );
      }
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements.length > 0 ? elements : [text];
}

// Helper: parse full markdown content into rich structured JSX
function renderMarkdownContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let keyIndex = 0;
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (!trimmed) {
      i++;
      continue;
    }

    // Horizontal rule
    if (trimmed === "---" || trimmed === "***") {
      elements.push(
        <hr
          key={keyIndex++}
          style={{
            margin: "40px 0",
            border: "none",
            borderTop: "1px solid var(--border-subtle)",
          }}
        />
      );
      i++;
      continue;
    }

    // H2 Headings
    if (line.startsWith("## ")) {
      const title = line.replace("## ", "").trim();
      const slugId = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      elements.push(
        <h2
          key={keyIndex++}
          id={slugId}
          style={{
            fontSize: "clamp(1.35rem, 2.8vw, 1.75rem)",
            fontWeight: 900,
            color: "#000000",
            marginTop: "44px",
            marginBottom: "18px",
            borderBottom: "2px solid rgba(0, 85, 255, 0.15)",
            paddingBottom: "10px",
            letterSpacing: "-0.01em",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span>{renderInlineText(title)}</span>
        </h2>
      );
      i++;
      continue;
    }

    // H3 Headings
    if (line.startsWith("### ")) {
      const title = line.replace("### ", "").trim();
      const slugId = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      elements.push(
        <h3
          key={keyIndex++}
          id={slugId}
          style={{
            fontSize: "1.25rem",
            fontWeight: 800,
            color: "#0f172a",
            marginTop: "30px",
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "4px",
              height: "18px",
              backgroundColor: "var(--color-blue)",
              borderRadius: "2px",
            }}
          />
          <span>{renderInlineText(title)}</span>
        </h3>
      );
      i++;
      continue;
    }

    // Blockquote / Legal Callout
    if (line.startsWith("> ")) {
      const quoteContent = line.replace(/^>\s*/, "").trim();
      const isLegalDisclaimer =
        quoteContent.toLowerCase().includes("legal disclaimer") ||
        quoteContent.toLowerCase().includes("not legal advice");

      elements.push(
        <div
          key={keyIndex++}
          style={{
            margin: "28px 0",
            padding: "20px 24px",
            borderRadius: "12px",
            background: isLegalDisclaimer ? "#f0fdf4" : "#f8fafc",
            border: isLegalDisclaimer ? "1.5px solid #86efac" : "1.5px solid #cbd5e1",
            borderLeft: isLegalDisclaimer ? "5px solid #16a34a" : "5px solid var(--color-blue)",
            display: "flex",
            gap: "16px",
            alignItems: "flex-start",
          }}
        >
          <div style={{ color: isLegalDisclaimer ? "#16a34a" : "var(--color-blue)", marginTop: "2px", flexShrink: 0 }}>
            {isLegalDisclaimer ? <ShieldCheck size={24} /> : <Info size={24} />}
          </div>
          <div style={{ fontSize: "0.95rem", color: "#1e293b", lineHeight: 1.7 }}>
            {renderInlineText(quoteContent)}
          </div>
        </div>
      );
      i++;
      continue;
    }

    // Markdown Table Parser
    if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        tableLines.push(lines[i].trim());
        i++;
      }

      if (tableLines.length >= 2) {
        const headerRow = tableLines[0]
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim());
        // tableLines[1] is separator row |---|---|
        const bodyRows = tableLines.slice(2).map((r) =>
          r
            .split("|")
            .slice(1, -1)
            .map((c) => c.trim())
        );

        elements.push(
          <div
            key={keyIndex++}
            style={{
              overflowX: "auto",
              margin: "32px 0",
              borderRadius: "12px",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
              background: "#ffffff",
            }}
          >
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                textAlign: "left",
                fontSize: "0.92rem",
                minWidth: "580px",
              }}
            >
              <thead>
                <tr style={{ background: "#f8fafc", borderBottom: "2px solid #e2e8f0" }}>
                  {headerRow.map((h, colIdx) => (
                    <th
                      key={colIdx}
                      style={{
                        padding: "14px 18px",
                        fontWeight: 800,
                        color: "#0f172a",
                        fontSize: "0.88rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {renderInlineText(h)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    style={{
                      borderBottom: "1px solid #f1f5f9",
                      background: rowIdx % 2 === 1 ? "#fafbfc" : "#ffffff",
                    }}
                  >
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        style={{
                          padding: "13px 18px",
                          color: "#334155",
                          lineHeight: 1.6,
                          fontWeight: cellIdx === 0 ? 600 : 400,
                        }}
                      >
                        {renderInlineText(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        continue;
      }
    }

    // Markdown Image Parser: ![alt](src "title")
    if (line.startsWith("![")) {
      const match = line.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"([^"]*)")?\)/);
      if (match) {
        const [, alt, src, title] = match;
        // Check if next line is a caption (*Figure ...*)
        let caption = title || "";
        if (i + 1 < lines.length && lines[i + 1].trim().startsWith("*Figure")) {
          caption = lines[i + 1].trim().replace(/^\*|\*$/g, "");
          i++;
        }

        elements.push(
          <figure
            key={keyIndex++}
            style={{
              margin: "36px 0",
              borderRadius: "14px",
              overflow: "hidden",
              border: "1px solid var(--border-subtle)",
              boxShadow: "0 6px 24px rgba(0, 0, 0, 0.06)",
              background: "#080c16",
            }}
          >
            <img
              src={src}
              alt={alt}
              title={title || alt}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
            />
            {caption && (
              <figcaption
                style={{
                  padding: "12px 18px",
                  background: "#ffffff",
                  fontSize: "0.85rem",
                  color: "#64748b",
                  textAlign: "center",
                  fontStyle: "italic",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                {caption}
              </figcaption>
            )}
          </figure>
        );
        i++;
        continue;
      }
    }

    // Unordered list item
    if (line.startsWith("- ") || line.startsWith("* ")) {
      elements.push(
        <li
          key={keyIndex++}
          style={{
            fontSize: "1rem",
            color: "#1e293b",
            lineHeight: 1.75,
            marginLeft: "24px",
            marginBottom: "8px",
            listStyleType: "disc",
          }}
        >
          {renderInlineText(line.substring(2))}
        </li>
      );
      i++;
      continue;
    }

    // Numbered list item
    if (/^\d+\.\s/.test(line)) {
      const contentText = line.replace(/^\d+\.\s/, "");
      elements.push(
        <li
          key={keyIndex++}
          style={{
            fontSize: "1rem",
            color: "#1e293b",
            lineHeight: 1.75,
            marginLeft: "24px",
            marginBottom: "8px",
            listStyleType: "decimal",
          }}
        >
          {renderInlineText(contentText)}
        </li>
      );
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p
        key={keyIndex++}
        style={{
          fontSize: "1.05rem",
          color: "#1e293b",
          lineHeight: 1.85,
          marginBottom: "20px",
        }}
      >
        {renderInlineText(line)}
      </p>
    );
    i++;
  }

  return elements;
}

export default async function SingleBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl = post.canonicalUrl || `${siteConfig.url}/blog/${post.slug}/`;

  return (
    <article style={{ paddingTop: "40px", paddingBottom: "100px", minHeight: "100vh" }}>
      {/* Schema Structured Data */}
      <ArticleSchema post={post} />
      <BreadcrumbSchema
        items={[
          { name: "Home", url: `${siteConfig.url}/` },
          { name: "Blog", url: `${siteConfig.url}/blog/` },
          { name: post.title, url: postUrl },
        ]}
      />
      {post.faqs && post.faqs.length > 0 && (
        <FaqSchema
          items={post.faqs.map((f) => ({ question: f.question, answer: f.answer }))}
          pageUrl={postUrl}
        />
      )}

      <div className="container" style={{ maxWidth: "880px" }}>
        {/* Back Link */}
        <div style={{ marginBottom: "28px" }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "0.875rem",
              fontWeight: 700,
              color: "var(--color-blue)",
              textDecoration: "none",
              padding: "6px 14px",
              borderRadius: "8px",
              background: "rgba(0, 85, 255, 0.06)",
              border: "1px solid rgba(0, 85, 255, 0.15)",
              transition: "all 0.2s ease",
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Post Header */}
        <header style={{ marginBottom: "36px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "16px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                background: "rgba(0, 85, 255, 0.1)",
                color: "var(--color-blue)",
                padding: "4px 12px",
                borderRadius: "var(--radius-full)",
                border: "1px solid rgba(0, 85, 255, 0.25)",
              }}
            >
              {post.category}
            </span>
            <span
              style={{
                fontSize: "0.85rem",
                color: "#64748b",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Calendar size={14} /> {post.date}
            </span>
            <span
              style={{
                fontSize: "0.85rem",
                color: "#64748b",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.9rem, 4.2vw, 2.75rem)",
              fontWeight: 900,
              color: "#000000",
              lineHeight: 1.25,
              marginBottom: "18px",
              letterSpacing: "-0.025em",
            }}
          >
            {post.title}
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "#475569",
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            {post.excerpt}
          </p>

          {/* Author Byline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              marginTop: "24px",
              paddingTop: "20px",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, #0055ff 0%, #1ce783 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#ffffff",
                fontWeight: 900,
                fontSize: "1.1rem",
                boxShadow: "0 2px 10px rgba(0, 85, 255, 0.2)",
              }}
            >
              {post.author.charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#000000" }}>
                {post.author}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                {post.authorRole || "Digital Media & Streaming Specialist"}
              </div>
            </div>
          </div>
        </header>

        {/* Featured Cover Graphic */}
        {post.coverImage && (
          <div
            style={{
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border-subtle)",
              marginBottom: "40px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
              aspectRatio: "16 / 9",
              background: "#080c16",
            }}
          >
            <img
              src={post.coverImage}
              alt={post.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}

        {/* Article Body */}
        <div
          className="card-glass"
          style={{
            padding: "clamp(24px, 5vw, 48px)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-subtle)",
            background: "#ffffff",
            marginBottom: "48px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
          }}
        >
          {renderMarkdownContent(post.content)}

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
                marginTop: "44px",
                paddingTop: "24px",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <Tag size={16} color="#64748b" />
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748b" }}>
                Related Topics:
              </span>
              {post.tags.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    background: "#f1f5f9",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    color: "#334155",
                  }}
                >
                  #{t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA Card */}
        <div
          style={{
            padding: "clamp(24px, 4vw, 36px)",
            borderRadius: "var(--radius-lg)",
            border: "2px solid #0055ff",
            boxShadow: "0 0 0 4px rgba(0, 85, 255, 0.12), 0 12px 36px rgba(0, 85, 255, 0.1)",
            background: "linear-gradient(180deg, #ffffff 0%, #f8faff 100%)",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.75rem",
              fontWeight: 800,
              background: "var(--color-blue)",
              color: "#ffffff",
              padding: "4px 14px",
              borderRadius: "var(--radius-full)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "14px",
            }}
          >
            <Zap size={13} /> IPTV USA Subscription Service
          </span>
          <h3
            style={{
              fontSize: "clamp(1.35rem, 3vw, 1.65rem)",
              fontWeight: 900,
              color: "#000000",
              marginBottom: "10px",
            }}
          >
            Stream Over 24,000+ Channels with Zero Buffering
          </h3>
          <p
            style={{
              fontSize: "0.95rem",
              color: "#475569",
              maxWidth: "580px",
              margin: "0 auto 22px auto",
              lineHeight: 1.65,
            }}
          >
            Enjoy high-speed 4K & FHD streaming powered by Anti Freeze 9.3 servers. Compatible with
            Firestick, Smart TVs, Android, iOS, and PC with instant 5-minute activation.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link
              href="/pricing"
              className="btn btn-primary"
              style={{ padding: "12px 24px", fontSize: "0.92rem" }}
            >
              <Zap size={16} />
              <span>Explore IPTV USA Plans</span>
            </Link>
            <Link
              href="/setup-guide"
              className="btn btn-secondary"
              style={{ padding: "12px 20px", fontSize: "0.92rem" }}
            >
              <Tv size={16} />
              <span>Device Setup Guides</span>
            </Link>
            <Link
              href="/contact"
              className="btn btn-secondary"
              style={{ padding: "12px 20px", fontSize: "0.92rem" }}
            >
              <span>Contact 24/7 Support</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
