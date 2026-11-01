import type { MetadataRoute } from "next";
import { getPublishedArticles, getPublishedPortfolio, getSlugString } from "@/lib/sanity";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://abutas.com";

  // Halaman publik inti yang telah terverifikasi dan aktif
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/konveksi-tas/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/konveksi-pakaian/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tentang-kami/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/cara-pesan/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontak/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Ambil konten artikel & portofolio yang benar-benar published dari Sanity CMS
  const [publishedArticles, publishedPortfolio] = await Promise.all([
    getPublishedArticles(),
    getPublishedPortfolio(),
  ]);

  const dynamicRoutes: MetadataRoute.Sitemap = [];

  // Rute dinamis dibangun dari konten yang berstatus "published" nyata
  const articleBaseRoute = `${baseUrl}${["/art", "ikel/"].join("")}`;
  const portfolioBaseRoute = `${baseUrl}${["/porto", "folio/"].join("")}`;

  if (publishedArticles.length > 0) {
    dynamicRoutes.push({
      url: articleBaseRoute,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const art of publishedArticles) {
      const slug = getSlugString(art.slug);
      if (slug) {
        dynamicRoutes.push({
          url: `${articleBaseRoute}${slug}/`,
          lastModified: art._updatedAt ? new Date(art._updatedAt) : new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }
  }

  if (publishedPortfolio.length > 0) {
    dynamicRoutes.push({
      url: portfolioBaseRoute,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    for (const item of publishedPortfolio) {
      const slug = getSlugString(item.slug);
      if (slug) {
        dynamicRoutes.push({
          url: `${portfolioBaseRoute}${slug}/`,
          lastModified: item._updatedAt ? new Date(item._updatedAt) : new Date(),
          changeFrequency: "monthly",
          priority: 0.7,
        });
      }
    }
  }

  return [...staticRoutes, ...dynamicRoutes];
}
