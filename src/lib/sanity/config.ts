/**
 * ABUTAS.COM — Sanity Configuration
 *
 * Konfigurasi koneksi ke Sanity Cloud.
 * Mendukung Next.js Static Export tanpa membocorkan token privat di browser.
 */

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-11-01",
  useCdn: false, // Non-CDN untuk menjamin data published selalu paling mutakhir saat static build
};

/**
 * Memeriksa apakah Sanity CMS telah dikonfigurasi dengan Project ID valid.
 * Mencegah error runtime saat build jika pemilik belum mengisi environment variables.
 */
export function isSanityConfigured(): boolean {
  const pid = sanityConfig.projectId.trim();
  return pid.length > 0 && pid !== "<YOUR_PROJECT_ID>" && pid !== "placeholder";
}
