import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://northern-hibiscus.vercel.app";

  const routes = [
    "",
    "/products",
    "/catering",
    "/reviews",
    "/about",
    "/contact",
    "/order",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
