import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/channels",
    "/pricing",
    "/setup-guide",
    "/contact",
    "/reseller",
    "/refund-and-returns-policy",
    "/privacy-policy",
  ];

  return routes.map((route) => ({
    url: route === "" ? `${siteConfig.url}/` : `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/channels" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route === "/pricing" || route === "/channels" ? 0.9 : 0.8,
  }));
}
