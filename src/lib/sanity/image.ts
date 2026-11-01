/**
 * ABUTAS.COM — Sanity Image URL Helper
 *
 * Mengoptimalkan dan membuat URL gambar dari Sanity asset pipeline.
 */

import { createImageUrlBuilder } from "@sanity/image-url";
import { sanityConfig, isSanityConfigured } from "./config.ts";

// Inisialisasi image builder dengan konfigurasi aman
const builder = isSanityConfigured()
  ? createImageUrlBuilder({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
    })
  : null;

export function urlForImage(source: unknown) {
  if (!builder || !source) {
    return null;
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return builder.image(source as any);
  } catch {
    return null;
  }
}
