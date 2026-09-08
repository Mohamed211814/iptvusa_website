import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { initialBlogPosts, BlogPost } from "@/data/blog";

const DATA_FILE_PATH = path.join(process.cwd(), "src", "data", "blog-posts.json");

async function readPostsFromFile(): Promise<BlogPost[]> {
  try {
    const data = await fs.readFile(DATA_FILE_PATH, "utf-8");
    const posts = JSON.parse(data);
    if (Array.isArray(posts)) {
      return posts;
    }
  } catch {
    // If file read fails or doesn't exist yet, return initial posts
  }
  return initialBlogPosts;
}

async function writePostsToFile(posts: BlogPost[]): Promise<boolean> {
  try {
    await fs.writeFile(DATA_FILE_PATH, JSON.stringify(posts, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Failed to write blog-posts.json:", err);
    return false;
  }
}

// GET: Fetch all blog posts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");
  const posts = await readPostsFromFile();

  if (slug) {
    const found = posts.find((p) => p.slug === slug);
    if (!found) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    return NextResponse.json(found);
  }

  return NextResponse.json(posts);
}

// POST: Create or update a blog post
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      id,
      title,
      slug,
      excerpt,
      content,
      category,
      author,
      authorRole,
      readTime,
      coverImage,
      tags,
      status,
      featured,
    } = body;

    if (!title || !content) {
      return NextResponse.json({ error: "Title and content are required." }, { status: 400 });
    }

    const posts = await readPostsFromFile();

    const finalSlug = (slug || title)
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const postId = id || `post-${Date.now()}`;
    const formattedDate = new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    const parsedTags = Array.isArray(tags)
      ? tags
      : typeof tags === "string"
      ? tags.split(",").map((t) => t.trim()).filter(Boolean)
      : [];

    const newOrUpdatedPost: BlogPost = {
      id: postId,
      slug: finalSlug,
      title: title.trim(),
      excerpt: excerpt?.trim() || title.trim(),
      content: content.trim(),
      category: category || "IPTV Guides",
      author: author?.trim() || "IPTV USA Editorial",
      authorRole: authorRole?.trim() || "Streaming Specialist",
      date: body.date || formattedDate,
      readTime: readTime?.trim() || "5 min read",
      coverImage: coverImage?.trim() || "/images/hero_streaming_preview.webp",
      tags: parsedTags.length > 0 ? parsedTags : ["IPTV USA", "Streaming"],
      status: status === "draft" ? "draft" : "published",
      featured: Boolean(featured),
    };

    const existingIndex = posts.findIndex((p) => p.id === postId || p.slug === finalSlug);

    let updatedPosts: BlogPost[];
    if (existingIndex >= 0) {
      updatedPosts = [...posts];
      updatedPosts[existingIndex] = newOrUpdatedPost;
    } else {
      updatedPosts = [newOrUpdatedPost, ...posts];
    }

    await writePostsToFile(updatedPosts);

    return NextResponse.json({
      success: true,
      post: newOrUpdatedPost,
      message: existingIndex >= 0 ? "Post updated successfully" : "Post created and published successfully",
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

// DELETE: Remove a post by ID or Slug
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    const slug = searchParams.get("slug");

    if (!id && !slug) {
      return NextResponse.json({ error: "Missing id or slug parameter" }, { status: 400 });
    }

    const posts = await readPostsFromFile();
    const filtered = posts.filter((p) => (id ? p.id !== id : p.slug !== slug));

    if (filtered.length === posts.length) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    await writePostsToFile(filtered);
    return NextResponse.json({ success: true, message: "Post deleted successfully" });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Internal Server Error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
