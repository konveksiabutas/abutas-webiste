/**
 * ABUTAS.COM — Sanity Studio Configuration Example
 *
 * Contoh konfigurasi untuk Sanity Studio (dijalankan di Sanity Managed Cloud
 * atau workspace terpisah, bukan backend server di shared hosting).
 *
 * Referensi deployment:
 * https://www.sanity.io/docs/deployment
 */

import { schemaTypes } from "./schemas";

export const studioConfigExample = {
  name: "abutas-studio",
  title: "ABUTAS Content Studio",

  // Diisi dengan kredensial Sanity resmi milik pemilik:
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "<YOUR_PROJECT_ID>",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",

  plugins: [],

  schema: {
    types: schemaTypes,
  },
};
