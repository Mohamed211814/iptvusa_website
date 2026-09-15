import React from "react";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { BlogPost, initialBlogPosts } from "@/data/blog";
import { BookOpen, ArrowRight, Clock, Sparkles } from "lucide-react";

async function getLatestPosts(): Promise<BlogPost[]> {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "blog-posts.json");
    const data = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      return parsed.filter((p) => p.status === "published").slice(0, 3);
    }
  } catch {
    // fallback
  }
  return initialBlogPosts.filter((p) => p.status === "published").slice(0, 3);
}

export const LatestBlogPosts: React.FC = async () => {
  const posts = await getLatestPosts();

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="section" style={{ background: "var(--bg-secondary, #f8fafc)" }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <BookOpen size={14} /> Knowledge Hub & Streaming Guides
          </span>
          <h2 className="section-title">
            Latest <span className="text-blue">IPTV USA</span> Articles & Tutorials
          </h2>
          <p className="section-subtitle">
            Stay up to date with the latest cord-cutting strategies, device setup guides, and technical insights from our streaming specialists.
          </p>
        </div>

        <div className="grid-3" style={{ gap: "24px", marginBottom: "40px" }}>
          {posts.map((post) => (
            <article
              key={post.id}
              className="card-glass"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "24px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-subtle)",
                background: "#ffffff",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div>
                {/* Image Cover */}
                <div
                  style={{
                    borderRadius: "10px",
                    overflow: "hidden",
                    border: "1px solid var(--border-subtle)",
                    aspectRatio: "16 / 9",
                    marginBottom: "16px",
                    background: "#0b101e",
                  }}
                >
                  <img
                    src={post.coverImage || post.image || "/images/hero_streaming_preview.webp"}
                    alt={post.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>

                {/* Category & Read Time */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--color-blue)",
                      background: "rgba(0, 85, 255, 0.08)",
                      padding: "3px 9px",
                      borderRadius: "4px",
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#64748b" }}>•</span>
                  <span style={{ fontSize: "0.75rem", color: "#64748b", display: "flex", alignItems: "center", gap: "4px" }}>
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#000000", marginBottom: "10px", lineHeight: 1.4 }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "#000000", textDecoration: "none" }}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.6, marginBottom: "20px" }}>
                  {post.excerpt}
                </p>
              </div>

              {/* Footer CTA */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "14px",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <span style={{ fontSize: "0.8rem", color: "#64748b" }}>
                  {post.date}
                </span>

                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--color-blue)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    textDecoration: "none",
                  }}
                >
                  <span>Read Guide</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            href="/blog"
            className="btn btn-primary"
            style={{
              padding: "12px 28px",
              fontSize: "0.95rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span>Explore All 28+ IPTV Guides & Articles</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};
