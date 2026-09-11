import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { initialBlogPosts, BlogPost } from "@/data/blog";
import fs from "fs";
import path from "path";

function getPublishedPosts(): BlogPost[] {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "blog-posts.json");
    if (fs.existsSync(filePath)) {
      const data = fs.readFileSync(filePath, "utf-8");
      const parsed = JSON.parse(data);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.filter((p) => p.status === "published");
      }
    }
  } catch {
    // fallback
  }
  return initialBlogPosts.filter((p) => p.status === "published");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/channels",
    "/pricing",
    "/setup-guide",
    "/blog",
    "/contact",
    "/reseller",
    "/refund-and-returns-policy",
    "/privacy-policy",
  ];

  const staticEntries = routes.map((route) => ({
    url: route === "" ? `${siteConfig.url}/` : `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" || route === "/channels" || route === "/blog"
      ? "daily"
      : "weekly") as "daily" | "weekly",
    priority:
      route === ""
        ? 1.0
        : route === "/pricing" || route === "/channels"
        ? 0.9
        : route === "/blog" || route === "/setup-guide"
        ? 0.85
        : 0.7,
  }));

  const blogPosts = getPublishedPosts();
  const blogEntries = blogPosts.map((post) => ({
    url: post.canonicalUrl || `${siteConfig.url}/blog/${post.slug}/`,
    lastModified: post.dateModified ? new Date(post.dateModified) : new Date(),
    changeFrequency: "weekly" as const,
    priority: post.featured ? 0.85 : 0.8,
  }));

  return [...staticEntries, ...blogEntries];
}
