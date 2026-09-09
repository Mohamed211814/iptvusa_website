"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BlogPost, initialBlogPosts } from "@/data/blog";
import {
  PenTool,
  FileText,
  PlusCircle,
  Eye,
  Trash2,
  Edit3,
  CheckCircle2,
  AlertCircle,
  Clock,
  Tag,
  Folder,
  User,
  Image as ImageIcon,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Search,
  Lock,
  Zap,
} from "lucide-react";

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"create" | "manage">("create");
  const [editorMode, setEditorMode] = useState<"write" | "preview" | "split">("split");

  // Form State
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("IPTV Guides");
  const [author, setAuthor] = useState("Alex Rivera");
  const [authorRole, setAuthorRole] = useState("IPTV Specialist");
  const [readTime, setReadTime] = useState("5 min read");
  const [coverImage, setCoverImage] = useState("/images/hero_streaming_preview.webp");
  const [tags, setTags] = useState("Firestick, IPTV USA, Setup");
  const [status, setStatus] = useState<"published" | "draft">("published");
  const [featured, setFeatured] = useState(false);

  // Status feedback
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");

  // Fetch posts on mount
  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/blog");
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      } else {
        setPosts(initialBlogPosts);
      }
    } catch {
      setPosts(initialBlogPosts);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    async function load() {
      try {
        const res = await fetch("/api/blog");
        if (res.ok) {
          const data = await res.json();
          if (!ignore) setPosts(data);
        } else if (!ignore) {
          setPosts(initialBlogPosts);
        }
      } catch {
        if (!ignore) setPosts(initialBlogPosts);
      } finally {
        if (!ignore) setIsLoading(false);
      }
    }
    load();
    return () => {
      ignore = true;
    };
  }, []);

  // Auto-generate slug from title if not manually customized
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setTitle(val);
    if (!editingId) {
      const autoSlug = val
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
      setSlug(autoSlug);
    }
  };

  // Quick Markdown Insert Helpers
  const insertMarkdown = (prefix: string, suffix: string = "") => {
    const textarea = document.getElementById("content-editor") as HTMLTextAreaElement | null;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentText = textarea.value;
    const selected = currentText.substring(start, end);

    const replacement = `${prefix}${selected || "text"}${suffix}`;
    const newContent = currentText.substring(0, start) + replacement + currentText.substring(end);
    setContent(newContent);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, start + prefix.length + (selected ? selected.length : 4));
    }, 50);
  };

  // Reset form
  const resetForm = () => {
    setEditingId(null);
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setCategory("IPTV Guides");
    setAuthor("Alex Rivera");
    setAuthorRole("IPTV Specialist");
    setReadTime("5 min read");
    setCoverImage("/images/hero_streaming_preview.webp");
    setTags("Firestick, IPTV USA, Setup");
    setStatus("published");
    setFeatured(false);
  };

  // Load post into form for editing
  const handleEditPost = (post: BlogPost) => {
    setEditingId(post.id);
    setTitle(post.title);
    setSlug(post.slug);
    setExcerpt(post.excerpt);
    setContent(post.content);
    setCategory(post.category);
    setAuthor(post.author);
    setAuthorRole(post.authorRole || "IPTV Specialist");
    setReadTime(post.readTime);
    setCoverImage(post.coverImage || "/images/hero_streaming_preview.webp");
    setTags(Array.isArray(post.tags) ? post.tags.join(", ") : "");
    setStatus(post.status);
    setFeatured(Boolean(post.featured));
    setActiveTab("create");
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  // Submit form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      setFeedback({ type: "error", message: "Please enter both a Title and Content for the blog post." });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    const postPayload = {
      id: editingId || undefined,
      title,
      slug,
      excerpt: excerpt || title,
      content,
      category,
      author,
      authorRole,
      readTime,
      coverImage,
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      status,
      featured,
    };

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postPayload),
      });

      const data = await res.json();
      if (res.ok) {
        setFeedback({
          type: "success",
          message: editingId
            ? `Post "${title}" was updated successfully!`
            : `Post "${title}" was created and published successfully!`,
        });
        await fetchPosts();
        if (!editingId) {
          resetForm();
        }
      } else {
        setFeedback({ type: "error", message: data.error || "Failed to save post." });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Error saving post";
      setFeedback({ type: "error", message: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Delete post
  const handleDeletePost = async (id: string, postTitle: string) => {
    if (!confirm(`Are you sure you want to delete "${postTitle}"?`)) return;

    try {
      const res = await fetch(`/api/blog?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        setFeedback({ type: "success", message: `Post "${postTitle}" has been deleted.` });
        setPosts((prev) => prev.filter((p) => p.id !== id));
        if (editingId === id) resetForm();
      } else {
        const data = await res.json();
        setFeedback({ type: "error", message: data.error || "Failed to delete post." });
      }
    } catch {
      setFeedback({ type: "error", message: "Failed to delete post." });
    }
  };

  const filteredPosts = posts.filter(
    (p) =>
      p.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.category.toLowerCase().includes(searchFilter.toLowerCase()) ||
      p.author.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div style={{ paddingTop: "40px", paddingBottom: "100px", minHeight: "100vh" }}>
      <div className="container">
        {/* Hidden / Background Status Banner */}
        <div
          style={{
            background: "linear-gradient(135deg, rgba(0, 85, 255, 0.08) 0%, rgba(5, 150, 105, 0.08) 100%)",
            border: "1.5px dashed rgba(0, 85, 255, 0.35)",
            borderRadius: "var(--radius-lg)",
            padding: "20px 24px",
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "var(--color-blue)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <Lock size={22} />
            </div>
            <div>
              <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "var(--color-blue)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Secret Background Page • Not Visible in Site Navigation
              </div>
              <h2 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#000000", margin: "2px 0 0 0" }}>
                IPTV USA Private Blog Creator & Post Studio
              </h2>
              <p style={{ fontSize: "0.85rem", color: "#475569", margin: "2px 0 0 0" }}>
                This studio is kept strictly in the background (no links in Navbar or Footer). You can view the live blog catalog anytime at <strong style={{ color: "var(--color-blue)" }}>/blog</strong>.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link
              href="/blog"
              target="_blank"
              className="btn btn-secondary"
              style={{ padding: "9px 16px", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: "6px" }}
            >
              <ExternalLink size={15} />
              <span>View Live Blog</span>
            </Link>
          </div>
        </div>

        {/* Top Header & Stat Counters */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            marginBottom: "28px",
          }}
        >
          <div>
            <span className="section-tag" style={{ marginBottom: "8px" }}>
              <PenTool size={14} /> Post Management Studio
            </span>
            <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)", fontWeight: 900, color: "#000000", margin: 0 }}>
              Create & Manage <span className="text-blue">Blog Posts</span>
            </h1>
          </div>

          {/* Quick Stats */}
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", padding: "10px 18px", borderRadius: "10px", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "#000000" }}>{posts.length}</div>
              <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>Total Posts</div>
            </div>
            <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", padding: "10px 18px", borderRadius: "10px", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "var(--color-green)" }}>
                {posts.filter((p) => p.status === "published").length}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>Published</div>
            </div>
            <div style={{ background: "#ffffff", border: "1px solid var(--border-subtle)", padding: "10px 18px", borderRadius: "10px", textAlign: "center", boxShadow: "var(--shadow-sm)" }}>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "#ea580c" }}>
                {posts.filter((p) => p.status === "draft").length}
              </div>
              <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: 600 }}>Drafts</div>
            </div>
          </div>
        </div>

        {/* Action Tabs */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "28px" }}>
          <button
            onClick={() => setActiveTab("create")}
            style={{
              padding: "12px 24px",
              borderRadius: "10px",
              fontWeight: 800,
              fontSize: "0.95rem",
              background: activeTab === "create" ? "var(--color-blue)" : "#ffffff",
              color: activeTab === "create" ? "#ffffff" : "#000000",
              border: "1.5px solid",
              borderColor: activeTab === "create" ? "var(--color-blue)" : "var(--border-subtle)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: activeTab === "create" ? "0 4px 18px rgba(0, 85, 255, 0.35)" : "var(--shadow-sm)",
              transition: "all 0.2s ease",
            }}
          >
            <PlusCircle size={18} />
            <span>{editingId ? "Edit Post Mode" : "Create New Post"}</span>
          </button>

          <button
            onClick={() => setActiveTab("manage")}
            style={{
              padding: "12px 24px",
              borderRadius: "10px",
              fontWeight: 800,
              fontSize: "0.95rem",
              background: activeTab === "manage" ? "var(--color-blue)" : "#ffffff",
              color: activeTab === "manage" ? "#ffffff" : "#000000",
              border: "1.5px solid",
              borderColor: activeTab === "manage" ? "var(--color-blue)" : "var(--border-subtle)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              boxShadow: activeTab === "manage" ? "0 4px 18px rgba(0, 85, 255, 0.35)" : "var(--shadow-sm)",
              transition: "all 0.2s ease",
            }}
          >
            <FileText size={18} />
            <span>Manage All Posts ({posts.length})</span>
          </button>
        </div>

        {/* Feedback alert message */}
        {feedback && (
          <div
            style={{
              padding: "14px 20px",
              borderRadius: "10px",
              marginBottom: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "12px",
              background: feedback.type === "success" ? "#dcfce7" : "#fee2e2",
              border: `1px solid ${feedback.type === "success" ? "#86efac" : "#fca5a5"}`,
              color: feedback.type === "success" ? "#14532d" : "#7f1d1d",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {feedback.type === "success" ? <CheckCircle2 size={20} color="#16a34a" /> : <AlertCircle size={20} color="#dc2626" />}
              <span style={{ fontSize: "0.95rem", fontWeight: 700 }}>{feedback.message}</span>
            </div>
            <button
              onClick={() => setFeedback(null)}
              style={{ background: "transparent", border: "none", color: "inherit", cursor: "pointer", fontWeight: 800 }}
            >
              ✕
            </button>
          </div>
        )}

        {/* TAB 1: CREATE OR EDIT POST */}
        {activeTab === "create" && (
          <form onSubmit={handleSubmit}>
            <div
              className="card-glass"
              style={{
                border: "2.5px solid #0055ff",
                boxShadow: "0 0 0 3px rgba(0, 85, 255, 0.15), 0 10px 30px rgba(0, 85, 255, 0.1)",
                borderRadius: "var(--radius-lg)",
                padding: "clamp(24px, 4vw, 36px)",
                background: "#ffffff",
                marginBottom: "36px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px", flexWrap: "wrap", gap: "12px" }}>
                <div>
                  <h2 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#000000", margin: 0 }}>
                    {editingId ? "✏️ Edit Blog Post" : "✍️ Write & Publish a New Blog Post"}
                  </h2>
                  <p style={{ fontSize: "0.875rem", color: "#64748b", margin: "4px 0 0 0" }}>
                    Fill out the post metadata, write formatted markdown content, and publish instantly.
                  </p>
                </div>

                {editingId && (
                  <button
                    type="button"
                    onClick={resetForm}
                    className="btn btn-secondary"
                    style={{ padding: "8px 16px", fontSize: "0.85rem" }}
                  >
                    Cancel Editing & Create New
                  </button>
                )}
              </div>

              {/* Title & Slug */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: "20px", marginBottom: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#000000", marginBottom: "8px" }}>
                    Post Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. How to Setup IPTV USA on Samsung Smart TV in 2026"
                    value={title}
                    onChange={handleTitleChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: "1.5px solid var(--border-medium)",
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#000000", marginBottom: "8px" }}>
                    URL Slug (auto-generated) *
                  </label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ padding: "12px 14px", background: "#f1f5f9", border: "1.5px solid var(--border-medium)", borderRight: "none", borderRadius: "8px 0 0 8px", fontSize: "0.85rem", color: "#64748b", fontWeight: 600 }}>
                      /blog/
                    </span>
                    <input
                      type="text"
                      required
                      placeholder="how-to-setup-iptv-usa-samsung"
                      value={slug}
                      onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]+/g, ""))}
                      style={{
                        flex: 1,
                        padding: "12px 16px",
                        borderRadius: "0 8px 8px 0",
                        border: "1.5px solid var(--border-medium)",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        outline: "none",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Excerpt */}
              <div style={{ marginBottom: "20px" }}>
                <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 700, color: "#000000", marginBottom: "8px" }}>
                  Short Excerpt / Meta Description (1-2 sentences for preview & SEO)
                </label>
                <textarea
                  rows={2}
                  placeholder="A brief summary that introduces the article on blog cards and search engines..."
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "8px",
                    border: "1.5px solid var(--border-medium)",
                    fontSize: "0.9rem",
                    lineHeight: 1.5,
                    outline: "none",
                    fontFamily: "inherit",
                  }}
                />
              </div>

              {/* Category, Author, Read Time */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "20px" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#000000", marginBottom: "6px" }}>
                    <Folder size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "8px",
                      border: "1.5px solid var(--border-medium)",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  >
                    <option value="IPTV Guides">IPTV Guides</option>
                    <option value="Streaming Tips">Streaming Tips</option>
                    <option value="Technology">Technology & Anti Freeze</option>
                    <option value="Sports & PPV">Sports & PPV Feeds</option>
                    <option value="Hardware & Devices">Hardware & Devices</option>
                    <option value="Announcements">Announcements & News</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#000000", marginBottom: "6px" }}>
                    <User size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                    Author Name
                  </label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Alex Rivera"
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "8px",
                      border: "1.5px solid var(--border-medium)",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#000000", marginBottom: "6px" }}>
                    <Clock size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                    Reading Time
                  </label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    placeholder="e.g. 5 min read"
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "8px",
                      border: "1.5px solid var(--border-medium)",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#000000", marginBottom: "6px" }}>
                    <Tag size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                    Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Firestick, IPTV, Setup"
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "8px",
                      border: "1.5px solid var(--border-medium)",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Cover Image URL & Preset Selection */}
              <div style={{ marginBottom: "24px" }}>
                <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 700, color: "#000000", marginBottom: "6px" }}>
                  <ImageIcon size={14} style={{ display: "inline", verticalAlign: "middle", marginRight: "4px" }} />
                  Cover Image Path or URL
                </label>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <input
                    type="text"
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    placeholder="/images/hero_streaming_preview.webp"
                    style={{
                      flex: 1,
                      minWidth: "260px",
                      padding: "11px 14px",
                      borderRadius: "8px",
                      border: "1.5px solid var(--border-medium)",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setCoverImage("/images/hero_streaming_preview.webp")}
                    style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid var(--border-medium)", background: "#f8fafc", fontSize: "0.75rem", fontWeight: 700, cursor: "pointer" }}
                  >
                    Preset: Device Screen
                  </button>
                  <button
                    type="button"
                    onClick={() => setCoverImage("/images/sports_championship_live.webp")}
                    style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid var(--border-medium)", background: "#f8fafc", fontSize: "0.75rem", fontWeight: 700, cursor: "pointer" }}
                  >
                    Preset: Sports Feed
                  </button>
                  <button
                    type="button"
                    onClick={() => setCoverImage("/images/cinema_vod_streaming.webp")}
                    style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid var(--border-medium)", background: "#f8fafc", fontSize: "0.75rem", fontWeight: 700, cursor: "pointer" }}
                  >
                    Preset: Cinema VOD
                  </button>
                </div>
              </div>

              {/* Post Content Header & View Switcher */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "10px",
                  paddingBottom: "12px",
                  borderBottom: "1px solid var(--border-subtle)",
                  marginBottom: "12px",
                }}
              >
                <div>
                  <span style={{ fontSize: "0.95rem", fontWeight: 800, color: "#000000" }}>
                    Article Content (Markdown Supported) *
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "#64748b", marginLeft: "8px" }}>
                    Supports ## Headings, **Bold**, Lists, Code, & Quotes
                  </span>
                </div>

                {/* Editor View Modes */}
                <div style={{ display: "flex", gap: "6px", background: "#f1f5f9", padding: "4px", borderRadius: "8px" }}>
                  <button
                    type="button"
                    onClick={() => setEditorMode("write")}
                    style={{
                      padding: "5px 12px",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      background: editorMode === "write" ? "#ffffff" : "transparent",
                      color: "#000000",
                      border: "none",
                      boxShadow: editorMode === "write" ? "var(--shadow-sm)" : "none",
                      cursor: "pointer",
                    }}
                  >
                    Editor
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditorMode("split")}
                    style={{
                      padding: "5px 12px",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      background: editorMode === "split" ? "#ffffff" : "transparent",
                      color: "#000000",
                      border: "none",
                      boxShadow: editorMode === "split" ? "var(--shadow-sm)" : "none",
                      cursor: "pointer",
                    }}
                  >
                    Side-by-Side Split
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditorMode("preview")}
                    style={{
                      padding: "5px 12px",
                      borderRadius: "6px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      background: editorMode === "preview" ? "#ffffff" : "transparent",
                      color: "#000000",
                      border: "none",
                      boxShadow: editorMode === "preview" ? "var(--shadow-sm)" : "none",
                      cursor: "pointer",
                    }}
                  >
                    Preview
                  </button>
                </div>
              </div>

              {/* Formatting Quick Toolbar */}
              <div
                style={{
                  display: "flex",
                  gap: "6px",
                  flexWrap: "wrap",
                  marginBottom: "12px",
                  padding: "8px 12px",
                  background: "#f8fafc",
                  borderRadius: "8px",
                  border: "1px solid var(--border-subtle)",
                }}
              >
                <button
                  type="button"
                  onClick={() => insertMarkdown("## ")}
                  style={{ padding: "4px 10px", borderRadius: "6px", border: "1px solid var(--border-medium)", background: "#ffffff", fontSize: "0.8rem", fontWeight: 800, cursor: "pointer" }}
                >
                  H2 Heading
                </button>
                <button
                  type="button"
                  onClick={() => insertMarkdown("### ")}
                  style={{ padding: "4px 10px", borderRadius: "6px", border: "1px solid var(--border-medium)", background: "#ffffff", fontSize: "0.8rem", fontWeight: 800, cursor: "pointer" }}
                >
                  H3 Heading
                </button>
                <button
                  type="button"
                  onClick={() => insertMarkdown("**", "**")}
                  style={{ padding: "4px 10px", borderRadius: "6px", border: "1px solid var(--border-medium)", background: "#ffffff", fontSize: "0.8rem", fontWeight: 800, cursor: "pointer" }}
                >
                  **Bold**
                </button>
                <button
                  type="button"
                  onClick={() => insertMarkdown("*", "*")}
                  style={{ padding: "4px 10px", borderRadius: "6px", border: "1px solid var(--border-medium)", background: "#ffffff", fontSize: "0.8rem", fontWeight: 800, cursor: "pointer" }}
                >
                  *Italic*
                </button>
                <button
                  type="button"
                  onClick={() => insertMarkdown("- ")}
                  style={{ padding: "4px 10px", borderRadius: "6px", border: "1px solid var(--border-medium)", background: "#ffffff", fontSize: "0.8rem", fontWeight: 800, cursor: "pointer" }}
                >
                  • Bullet List
                </button>
                <button
                  type="button"
                  onClick={() => insertMarkdown("1. ")}
                  style={{ padding: "4px 10px", borderRadius: "6px", border: "1px solid var(--border-medium)", background: "#ffffff", fontSize: "0.8rem", fontWeight: 800, cursor: "pointer" }}
                >
                  1. Number List
                </button>
                <button
                  type="button"
                  onClick={() => insertMarkdown("> ")}
                  style={{ padding: "4px 10px", borderRadius: "6px", border: "1px solid var(--border-medium)", background: "#ffffff", fontSize: "0.8rem", fontWeight: 800, cursor: "pointer" }}
                >
                  &ldquo; Blockquote
                </button>
                <button
                  type="button"
                  onClick={() => insertMarkdown("`", "`")}
                  style={{ padding: "4px 10px", borderRadius: "6px", border: "1px solid var(--border-medium)", background: "#ffffff", fontSize: "0.8rem", fontWeight: 800, cursor: "pointer" }}
                >
                  `Code`
                </button>
                <button
                  type="button"
                  onClick={() => insertMarkdown("[Link Text](", "https://iptvusa.com)")}
                  style={{ padding: "4px 10px", borderRadius: "6px", border: "1px solid var(--border-medium)", background: "#ffffff", fontSize: "0.8rem", fontWeight: 800, cursor: "pointer" }}
                >
                  🔗 Link
                </button>
                <button
                  type="button"
                  onClick={() => insertMarkdown("\n---\n")}
                  style={{ padding: "4px 10px", borderRadius: "6px", border: "1px solid var(--border-medium)", background: "#ffffff", fontSize: "0.8rem", fontWeight: 800, cursor: "pointer" }}
                >
                  ― Divider
                </button>
              </div>

              {/* Editor / Preview Area */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: editorMode === "split" ? "1fr 1fr" : "1fr",
                  gap: "16px",
                  marginBottom: "24px",
                }}
              >
                {/* Textarea */}
                {(editorMode === "write" || editorMode === "split") && (
                  <div>
                    <textarea
                      id="content-editor"
                      required
                      rows={16}
                      placeholder="Write your article in Markdown here...&#10;&#10;## Introduction&#10;Start with your opening paragraph...&#10;&#10;## Key Features&#10;- Feature 1&#10;- Feature 2"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      style={{
                        width: "100%",
                        height: "450px",
                        padding: "16px",
                        borderRadius: "8px",
                        border: "1.5px solid var(--border-medium)",
                        fontFamily: "monospace",
                        fontSize: "0.95rem",
                        lineHeight: 1.6,
                        outline: "none",
                        resize: "vertical",
                        backgroundColor: "#ffffff",
                        color: "#000000",
                      }}
                    />
                  </div>
                )}

                {/* Live Preview */}
                {(editorMode === "preview" || editorMode === "split") && (
                  <div
                    style={{
                      height: "450px",
                      overflowY: "auto",
                      padding: "20px",
                      borderRadius: "8px",
                      border: "1.5px solid var(--border-subtle)",
                      background: "#f8fafc",
                    }}
                  >
                    <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "var(--color-blue)", textTransform: "uppercase", marginBottom: "10px" }}>
                      Live Preview
                    </div>
                    {content.trim() ? (
                      <div
                        style={{
                          fontSize: "0.95rem",
                          lineHeight: 1.7,
                          color: "#000000",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        {content}
                      </div>
                    ) : (
                      <div style={{ color: "#94a3b8", fontStyle: "italic", textAlign: "center", marginTop: "120px" }}>
                        Type in the editor to see your real-time preview here...
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Status & Options Footer */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "16px",
                  paddingTop: "20px",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", fontWeight: 700, color: "#000000", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="postStatus"
                      checked={status === "published"}
                      onChange={() => setStatus("published")}
                    />
                    <span>Publish Immediately</span>
                  </label>

                  <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", fontWeight: 700, color: "#000000", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="postStatus"
                      checked={status === "draft"}
                      onChange={() => setStatus("draft")}
                    />
                    <span>Save as Draft</span>
                  </label>

                  <label style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.9rem", fontWeight: 700, color: "#000000", cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={featured}
                      onChange={(e) => setFeatured(e.target.checked)}
                    />
                    <span>Feature at Top of Blog</span>
                  </label>
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary"
                    style={{ padding: "12px 28px", fontSize: "0.95rem" }}
                  >
                    <Zap size={16} />
                    <span>{isSubmitting ? "Saving..." : editingId ? "Update Post" : "Publish Post Now"}</span>
                  </button>
                </div>
              </div>
            </div>
          </form>
        )}

        {/* TAB 2: MANAGE ALL POSTS */}
        {activeTab === "manage" && (
          <div
            className="card-glass"
            style={{
              padding: "clamp(20px, 3vw, 32px)",
              border: "1.5px solid var(--border-subtle)",
              borderRadius: "var(--radius-lg)",
            }}
          >
            {/* Search filter */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <div style={{ position: "relative", flex: 1, minWidth: "260px", maxWidth: "450px" }}>
                <Search size={18} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#64748b" }} />
                <input
                  type="text"
                  placeholder="Search articles by title, category, or author..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px 10px 42px",
                    borderRadius: "8px",
                    border: "1px solid var(--border-medium)",
                    fontSize: "0.9rem",
                    outline: "none",
                  }}
                />
              </div>

              <button
                onClick={() => {
                  resetForm();
                  setActiveTab("create");
                }}
                className="btn btn-primary"
                style={{ padding: "10px 20px", fontSize: "0.85rem" }}
              >
                <PlusCircle size={16} />
                <span>Create New Post</span>
              </button>
            </div>

            {/* Posts List Table */}
            {isLoading ? (
              <div style={{ textAlign: "center", padding: "40px", color: "#64748b" }}>Loading blog posts...</div>
            ) : filteredPosts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "60px 20px", color: "#64748b" }}>
                <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#000000" }}>No posts found</p>
                <p style={{ fontSize: "0.9rem" }}>Try another search or click &quot;Create New Post&quot; to publish your first article.</p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {filteredPosts.map((post) => (
                  <div
                    key={post.id}
                    style={{
                      background: "#ffffff",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "10px",
                      padding: "18px 20px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "16px",
                      boxShadow: "var(--shadow-sm)",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <div style={{ flex: 1, minWidth: "260px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px", flexWrap: "wrap" }}>
                        <span
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 800,
                            padding: "3px 8px",
                            borderRadius: "4px",
                            background: post.status === "published" ? "rgba(5, 150, 105, 0.12)" : "rgba(234, 88, 12, 0.12)",
                            color: post.status === "published" ? "#059669" : "#ea580c",
                            textTransform: "uppercase",
                          }}
                        >
                          {post.status}
                        </span>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-blue)" }}>
                          {post.category}
                        </span>
                        <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>•</span>
                        <span style={{ fontSize: "0.75rem", color: "#64748b" }}>{post.date}</span>
                        <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>•</span>
                        <span style={{ fontSize: "0.75rem", color: "#64748b" }}>{post.readTime}</span>
                        {post.featured && (
                          <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "rgba(245, 158, 11, 0.15)", color: "#d97706", padding: "2px 6px", borderRadius: "4px" }}>
                            ★ Featured
                          </span>
                        )}
                      </div>

                      <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: "#000000", margin: "0 0 6px 0" }}>
                        {post.title}
                      </h3>

                      <p style={{ fontSize: "0.85rem", color: "#475569", margin: 0, lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Actions */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="btn btn-secondary"
                        style={{ padding: "8px 14px", fontSize: "0.8rem", display: "inline-flex", alignItems: "center", gap: "6px" }}
                      >
                        <Eye size={14} />
                        <span>View</span>
                      </Link>

                      <button
                        onClick={() => handleEditPost(post)}
                        className="btn btn-secondary"
                        style={{ padding: "8px 14px", fontSize: "0.8rem", display: "inline-flex", alignItems: "center", gap: "6px" }}
                      >
                        <Edit3 size={14} />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => handleDeletePost(post.id, post.title)}
                        style={{
                          padding: "8px 14px",
                          borderRadius: "6px",
                          border: "1px solid #fecaca",
                          background: "#fef2f2",
                          color: "#dc2626",
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <Trash2 size={14} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
