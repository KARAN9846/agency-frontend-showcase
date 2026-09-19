import type { MetadataRoute } from "next";

const siteUrl = "https://agency-frontend-showcase.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/services", "/gallery", "/careers", "/contact"].map(
    (path) => ({
      url: `${siteUrl}${path}`,
    }),
  );
}
