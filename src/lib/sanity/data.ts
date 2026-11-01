/**
 * ABUTAS.COM — Sanity Data Access Layer
 *
 * Mengambil konten yang berstatus "published" dari Sanity CMS saat static export build.
 * Jika Sanity belum dikonfigurasi, mengembalikan data kosong secara aman
 * sehingga build Next.js tetap berhasil tanpa membuat konten fiktif.
 */

import { getSanityClient } from "./client.ts";
import {
  publishedArticlesQuery,
  articleBySlugQuery,
  publishedPortfolioQuery,
  portfolioBySlugQuery,
  siteSettingsQuery,
} from "./queries.ts";
import type { SanityArticle, SanityPortfolio, SanitySiteSettings, SanitySlug } from "./types.ts";

/**
 * Normalisasi objek slug Sanity `{ current: string }` atau string biasa.
 */
export function getSlugString(slug: SanitySlug | string | undefined): string {
  if (!slug) return "";
  if (typeof slug === "string") return slug;
  return slug.current || "";
}

/**
 * Mengambil seluruh artikel yang telah dipublikasikan secara resmi.
 */
export async function getPublishedArticles(): Promise<SanityArticle[]> {
  const client = getSanityClient();
  if (!client) {
    return [];
  }

  try {
    const articles = await client.fetch<SanityArticle[]>(publishedArticlesQuery);
    return Array.isArray(articles) ? articles : [];
  } catch (error) {
    console.warn("[Sanity CMS] Tidak dapat mengambil artikel publik:", error);
    return [];
  }
}

/**
 * Mengambil satu artikel publik berdasarkan slug.
 */
export async function getArticleBySlug(slug: string): Promise<SanityArticle | null> {
  const client = getSanityClient();
  if (!client || !slug) {
    return null;
  }

  try {
    const article = await client.fetch<SanityArticle | null>(articleBySlugQuery, { slug });
    return article || null;
  } catch (error) {
    console.warn(`[Sanity CMS] Tidak dapat mengambil artikel dengan slug '${slug}':`, error);
    return null;
  }
}

/**
 * Mengambil seluruh item portofolio yang telah disetujui publikasinya.
 */
export async function getPublishedPortfolio(): Promise<SanityPortfolio[]> {
  const client = getSanityClient();
  if (!client) {
    return [];
  }

  try {
    const portfolio = await client.fetch<SanityPortfolio[]>(publishedPortfolioQuery);
    return Array.isArray(portfolio) ? portfolio : [];
  } catch (error) {
    console.warn("[Sanity CMS] Tidak dapat mengambil portofolio publik:", error);
    return [];
  }
}

/**
 * Mengambil satu item portofolio publik berdasarkan slug.
 */
export async function getPortfolioBySlug(slug: string): Promise<SanityPortfolio | null> {
  const client = getSanityClient();
  if (!client || !slug) {
    return null;
  }

  try {
    const portfolio = await client.fetch<SanityPortfolio | null>(portfolioBySlugQuery, { slug });
    return portfolio || null;
  } catch (error) {
    console.warn(`[Sanity CMS] Tidak dapat mengambil portofolio dengan slug '${slug}':`, error);
    return null;
  }
}

/**
 * Mengambil pengaturan situs dan data profil bisnis.
 */
export async function getSiteSettings(): Promise<SanitySiteSettings | null> {
  const client = getSanityClient();
  if (!client) {
    return null;
  }

  try {
    const settings = await client.fetch<SanitySiteSettings | null>(siteSettingsQuery);
    return settings || null;
  } catch (error) {
    console.warn("[Sanity CMS] Tidak dapat mengambil profil situs:", error);
    return null;
  }
}
