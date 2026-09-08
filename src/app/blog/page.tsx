import type { Metadata } from "next";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";
import { BlogPost, initialBlogPosts } from "@/data/blog";
import { Tv, Clock, User, ArrowRight, Tag, Sparkles, BookOpen, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "IPTV USA Blog - Streaming Guides, News & Tutorials",
  description:
    "Official IPTV USA blog featuring step-by-step installation guides for Firestick and Smart TVs, Anti Freeze streaming technology updates, and cord-cutting tips.",
  robots: {
    index: false, // Hidden in the background
    follow: false,
  },
};

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "blog-posts.json");
    const data = await fs.readFile(filePath, "utf-8");
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed)) {
      return parsed.filter((p) => p.status === "published");
    }
  } catch {
    // fallback
  }
  return initialBlogPosts.filter((p) => p.status === "published");
}

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const regularPosts = posts.filter((p) => p.id !== featuredPost?.id);

  return (
    <div style={{ paddingTop: "40px", paddingBottom: "100px", minHeight: "100vh" }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-tag">
            <BookOpen size={14} /> IPTV USA Knowledge Hub & Guides
          </span>
          <h1 className="section-title">
            Latest <span className="text-blue">IPTV USA</span> Articles & Guides
          </h1>
          <p className="section-subtitle">
            Expert installation tutorials, Anti Freeze streaming insights, device setup instructions, and the latest news for cord-cutters across the United States.
          </p>
        </div>

        {/* Empty State when no posts are published yet */}
        {posts.length === 0 ? (
          <div
            className="card-glass"
            style={{
              textAlign: "center",
              padding: "70px 24px",
              borderRadius: "var(--radius-lg)",
              maxWidth: "580px",
              margin: "0 auto",
              border: "1px solid var(--border-subtle)",
              background: "#ffffff",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "50%",
                background: "rgba(0, 85, 255, 0.1)",
                color: "var(--color-blue)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px auto",
              }}
            >
              <BookOpen size={28} />
            </div>
            <h2 style={{ fontSize: "1.35rem", fontWeight: 800, color: "#000000", marginBottom: "8px" }}>
              No Articles Published Yet
            </h2>
            <p style={{ color: "#64748b", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
              Articles and streaming guides will appear here once published.
            </p>
            <Link href="/" className="btn btn-primary" style={{ padding: "10px 22px", fontSize: "0.9rem" }}>
              Return to Homepage
            </Link>
          </div>
        ) : (
          <>
            {/* Featured Post Card */}
            {featuredPost && (
          <div
            className="card-glass"
            style={{
              padding: "clamp(24px, 4vw, 36px)",
              border: "2.5px solid #0055ff",
              boxShadow: "0 0 0 3px rgba(0, 85, 255, 0.15), 0 10px 30px rgba(0, 85, 255, 0.12)",
              borderRadius: "var(--radius-lg)",
              marginBottom: "48px",
              background: "#ffffff",
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: "28px", alignItems: "center" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      background: "var(--color-blue)",
                      color: "#ffffff",
                      padding: "4px 10px",
                      borderRadius: "var(--radius-full)",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    ★ Featured Article
                  </span>
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--color-green)" }}>
                    {featuredPost.category}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "#64748b" }}>•</span>
                  <span style={{ fontSize: "0.85rem", color: "#64748b" }}>{featuredPost.readTime}</span>
                </div>

                <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.9rem)", fontWeight: 900, color: "#000000", marginBottom: "14px", lineHeight: 1.3 }}>
                  <Link href={`/blog/${featuredPost.slug}`} style={{ color: "#000000" }}>
                    {featuredPost.title}
                  </Link>
                </h2>

                <p style={{ fontSize: "0.95rem", color: "#475569", lineHeight: 1.65, marginBottom: "20px" }}>
                  {featuredPost.excerpt}
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: "rgba(0, 85, 255, 0.12)",
                        color: "var(--color-blue)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                      }}
                    >
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#000000" }}>
                        {featuredPost.author}
                      </div>
                      <div style={{ fontSize: "0.75rem", color: "#64748b" }}>
                        {featuredPost.date}
                      </div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="btn btn-primary"
                    style={{ padding: "10px 20px", fontSize: "0.875rem" }}
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              {/* Thumbnail / Graphic */}
              <div
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  border: "1px solid var(--border-subtle)",
                  aspectRatio: "16 / 10",
                  position: "relative",
                  background: "#0b101e",
                }}
              >
                <img
                  src={featuredPost.coverImage || "/images/hero_streaming_preview.webp"}
                  alt={featuredPost.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid-3" style={{ gap: "24px" }}>
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="card-glass"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "24px",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div>
                {/* Image */}
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
                    src={post.coverImage || "/images/cinema_vod_streaming.webp"}
                    alt={post.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: "var(--color-blue)",
                      background: "rgba(0, 85, 255, 0.08)",
                      padding: "2px 8px",
                      borderRadius: "4px",
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ fontSize: "0.75rem", color: "#64748b" }}>•</span>
                  <span style={{ fontSize: "0.75rem", color: "#64748b" }}>{post.readTime}</span>
                </div>

                <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#000000", marginBottom: "10px", lineHeight: 1.4 }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: "#000000" }}>
                    {post.title}
                  </Link>
                </h3>

                <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.6, marginBottom: "20px" }}>
                  {post.excerpt}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ fontSize: "0.8rem", color: "#64748b" }}>
                  By <strong>{post.author}</strong>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--color-blue)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span>Read</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </>
    )}
  </div>
</div>
  );
}
