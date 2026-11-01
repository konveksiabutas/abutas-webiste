import type { StructureResolver } from "sanity/structure";

/**
 * ABUTAS Content Studio — Desk Structure
 *
 * Struktur navigasi Studio resmi dengan 3 menu wajib:
 * 1. Artikel & Panduan (article)
 * 2. Portofolio Produksi (portfolio)
 * 3. Pengaturan Website (siteSettings singleton)
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Menu Manajemen Konten")
    .items([
      // 1. Menu Artikel
      S.listItem()
        .title("Artikel & Panduan")
        .schemaType("article")
        .child(
          S.documentTypeList("article")
            .title("Daftar Artikel & Panduan")
        ),

      // 2. Menu Portofolio
      S.listItem()
        .title("Portofolio Produksi")
        .schemaType("portfolio")
        .child(
          S.documentTypeList("portfolio")
            .title("Daftar Portofolio Produksi")
        ),

      S.divider(),

      // 3. Menu Pengaturan Website (Singleton Document)
      S.listItem()
        .title("Pengaturan Website")
        .schemaType("siteSettings")
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Pengaturan Website & Profil Bisnis")
        ),
    ]);
