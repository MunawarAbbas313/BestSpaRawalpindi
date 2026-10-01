import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";
import { SITE_LAST_UPDATED } from "@/lib/site-config";

const baseUrl = "https://bestsparawalpindi.com";

// Fixed lastModified dates: Google ignores lastmod when it changes on every request.
// Bump SITE_LAST_UPDATED (src/lib/site-config.ts) whenever page content changes.
const routes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  // Core location pages
  { path: "/massage-center-rawalpindi", priority: 0.95, changeFrequency: "weekly" },
  { path: "/massage-center-bahria-town-phase-7", priority: 0.95, changeFrequency: "weekly" },
  { path: "/spa-bahria-town", priority: 0.9, changeFrequency: "weekly" },
  { path: "/massage-bahria-town", priority: 0.9, changeFrequency: "weekly" },
  { path: "/massage-near-islamabad", priority: 0.9, changeFrequency: "monthly" },
  { path: "/spa-near-me", priority: 0.9, changeFrequency: "monthly" },
  // Services
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/massage-prices-rawalpindi", priority: 0.9, changeFrequency: "monthly" },
  { path: "/full-body-massage", priority: 0.9, changeFrequency: "monthly" },
  { path: "/deep-tissue-massage-rawalpindi", priority: 0.85, changeFrequency: "monthly" },
  { path: "/thai-massage-rawalpindi", priority: 0.85, changeFrequency: "monthly" },
  { path: "/swedish-massage-rawalpindi", priority: 0.85, changeFrequency: "monthly" },
  { path: "/aromatherapy-massage-rawalpindi", priority: 0.85, changeFrequency: "monthly" },
  { path: "/hot-stone-massage-rawalpindi", priority: 0.85, changeFrequency: "monthly" },
  { path: "/foot-reflexology-rawalpindi", priority: 0.85, changeFrequency: "monthly" },
  { path: "/couples-massage-rawalpindi", priority: 0.85, changeFrequency: "monthly" },
  { path: "/body-massage", priority: 0.85, changeFrequency: "monthly" },
  { path: "/spa-services", priority: 0.85, changeFrequency: "monthly" },
  // Info
  { path: "/contact", priority: 0.85, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
  { path: "/location", priority: 0.8, changeFrequency: "monthly" },
  { path: "/why-choose-us", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  // NOTE: /whatsapp is a redirect, so it must NOT be listed here ("Page with redirect" in Search Console).
];

function toIsoDate(value: string): string {
  const d = new Date(value);
  return isNaN(d.getTime()) ? SITE_LAST_UPDATED : d.toISOString().slice(0, 10);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: toIsoDate(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
