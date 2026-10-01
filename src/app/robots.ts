import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://bestsparawalpindi.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Do NOT block /_next/ — Google needs the JS/CSS there to render pages.
        disallow: ["/api/", "/whatsapp"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
