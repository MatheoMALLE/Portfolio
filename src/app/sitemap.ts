import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://portfolio-matheo8.vercel.app",
      lastModified: new Date(),
    },
  ];
}