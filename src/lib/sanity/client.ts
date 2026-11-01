/**
 * ABUTAS.COM — Sanity Client Integration
 *
 * Client untuk fetching data dari Sanity CMS saat static export build.
 * Keamanan:
 * - Tidak membocorkan write token atau private credentials ke client bundle.
 * - SANITY_API_READ_TOKEN hanya digunakan pada build time (server-side/CI) jika dataset bersifat private.
 * - Graceful fallback jika project ID belum disediakan oleh pemilik website.
 */

import { createClient, type SanityClient } from "@sanity/client";
import { sanityConfig, isSanityConfigured } from "./config.ts";

let cachedClient: SanityClient | null = null;

export function getSanityClient(): SanityClient | null {
  if (!isSanityConfigured()) {
    return null;
  }

  if (cachedClient) {
    return cachedClient;
  }

  // Token hanya dibaca saat proses build di environment Node.js (jika ada dataset privat)
  const token = typeof window === "undefined" ? process.env.SANITY_API_READ_TOKEN : undefined;

  cachedClient = createClient({
    projectId: sanityConfig.projectId,
    dataset: sanityConfig.dataset,
    apiVersion: sanityConfig.apiVersion,
    useCdn: sanityConfig.useCdn,
    token: token || undefined,
    perspective: "published", // Hanya mengambil dokumen yang sudah dipublikasikan (bukan draft)
  });

  return cachedClient;
}
