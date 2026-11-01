import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";
import { structure } from "./structure";

export default defineConfig({
  name: "abutas-studio",
  title: "ABUTAS Creative Manufacturing Studio",

  // Menggunakan Project ID resmi dari environment variable pemilik
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || "placeholder-project",
  dataset: process.env.SANITY_STUDIO_DATASET || "production",

  plugins: [
    structureTool({
      structure,
    }),
    visionTool({
      defaultApiVersion: "2026-11-01",
      defaultDataset: process.env.SANITY_STUDIO_DATASET || "production",
    }),
  ],

  schema: {
    types: schemaTypes,
  },
});
