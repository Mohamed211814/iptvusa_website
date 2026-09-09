import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import { BlogPost, initialBlogPosts } from "@/data/blog";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { ArrowLeft, Clock, Calendar, User, Tag, Check, Zap, ArrowRight, ShieldCheck, Share2 } from "lucide-react";

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

  return {
    title: `${post.title} | IPTV USA Blog`,
    description: post.excerpt,
    robots: {
      index: false, // Hidden in background
      follow: false,
    },
  };
}

// Markdown parser helper for clean presentation
function renderMarkdownContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let keyIndex = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={keyIndex++} style={{ fontSize: "1.25rem", fontWeight: 800, color: "#000000", marginTop: "28px", marginBottom: "12px" }}>
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={keyIndex++} style={{ fontSize: "1.5rem", fontWeight: 800, color: "#000000", marginTop: "36px", marginBottom: "16px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("---")) {
      elements.push(
        <hr key={keyIndex++} style={{ margin: "32px 0", border: "none", borderTop: "1px solid var(--border-subtle)" }} />
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      elements.push(
        <li key={keyIndex++} style={{ fontSize: "1rem", color: "#1e293b", lineHeight: 1.7, marginLeft: "20px", marginBottom: "6px" }}>
          {line.substring(2)}
        </li>
      );
    } else if (/^\d+\.\s/.test(line)) {
      elements.push(
        <li key={keyIndex++} style={{ fontSize: "1rem", color: "#1e293b", lineHeight: 1.7, marginLeft: "20px", marginBottom: "6px" }}>
          {line.replace(/^\d+\.\s/, "")}
        </li>
      );
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote key={keyIndex++} style={{ borderLeft: "4px solid var(--color-blue)", paddingLeft: "16px", margin: "20px 0", fontStyle: "italic", color: "#334155", background: "#f8fafc", padding: "14px 18px", borderRadius: "0 8px 8px 0" }}>
          {line.replace("> ", "")}
        </blockquote>
      );
    } else if (line.trim().length > 0) {
      elements.push(
        <p key={keyIndex++} style={{ fontSize: "1.025rem", color: "#1e293b", lineHeight: 1.8, marginBottom: "18px" }}>
          {line}
        </p>
      );
    }
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

  return (
    <article style={{ paddingTop: "40px", paddingBottom: "100px", minHeight: "100vh" }}>
      <ArticleSchema post={post} />
      <div className="container" style={{ maxWidth: "860px" }}>
        {/* Back Link */}
        <div style={{ marginBottom: "24px" }}>
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
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>
        </div>

        {/* Post Metadata & Title */}
        <header style={{ marginBottom: "32px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px", flexWrap: "wrap" }}>
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
            <span style={{ fontSize: "0.85rem", color: "#64748b", display: "flex", alignItems: "center", gap: "5px" }}>
              <Calendar size={14} /> {post.date}
            </span>
            <span style={{ fontSize: "0.85rem", color: "#64748b", display: "flex", alignItems: "center", gap: "5px" }}>
              <Clock size={14} /> {post.readTime}
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 900,
              color: "#000000",
              lineHeight: 1.25,
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            {post.title}
          </h1>

          <p style={{ fontSize: "1.1rem", color: "#475569", lineHeight: 1.65, margin: 0 }}>
            {post.excerpt}
          </p>

          {/* Author Card */}
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
              }}
            >
              {post.author.charAt(0)}
            </div>
            <div>
              <div style={{ fontSize: "0.95rem", fontWeight: 800, color: "#000000" }}>
                {post.author}
              </div>
              <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                {post.authorRole || "Official IPTV USA Contributor"}
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
              boxShadow: "var(--shadow-md)",
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
            padding: "clamp(24px, 5vw, 44px)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--border-subtle)",
            background: "#ffffff",
            marginBottom: "48px",
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
                marginTop: "40px",
                paddingTop: "24px",
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <Tag size={16} color="#64748b" />
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#64748b" }}>Topics:</span>
              {post.tags.map((t, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    background: "#f1f5f9",
                    padding: "3px 10px",
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

        {/* Bottom CTA to Subscription Pricing */}
        <div
          style={{
            padding: "32px",
            borderRadius: "var(--radius-lg)",
            border: "2.5px solid #059669",
            boxShadow: "0 0 0 4px rgba(5, 150, 105, 0.2), 0 10px 30px rgba(5, 150, 105, 0.15)",
            background: "#ffffff",
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontSize: "0.75rem",
              fontWeight: 800,
              background: "#059669",
              color: "#ffffff",
              padding: "4px 12px",
              borderRadius: "var(--radius-full)",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              marginBottom: "12px",
            }}
          >
            ★ Special Subscriber Offer
          </span>
          <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#000000", marginBottom: "10px" }}>
            Ready for 24,000+ Live Channels with Anti Freeze 9.3?
          </h3>
          <p style={{ fontSize: "0.95rem", color: "#475569", maxWidth: "560px", margin: "0 auto 20px auto", lineHeight: 1.6 }}>
            Stream on Firestick, Smart TVs, and mobile devices with zero buffering. Choose your plan today and receive instant setup in 5 minutes.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/pricing" className="btn btn-green" style={{ padding: "12px 24px" }}>
              <Zap size={16} />
              <span>View IPTV USA Plans</span>
            </Link>
            <Link href="/contact" className="btn btn-secondary" style={{ padding: "12px 20px" }}>
              <span>Contact 24/7 Support</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
