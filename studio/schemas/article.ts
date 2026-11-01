import { defineField, defineType } from "sanity";

export const ARTICLE_CATEGORIES = [
  "Panduan Konveksi Tas",
  "Panduan Konveksi Pakaian",
  "Material & Teknik Produksi",
  "Tips Pemesanan Custom",
] as const;

export const article = defineType({
  name: "article",
  title: "Artikel & Panduan",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul Artikel",
      type: "string",
      description: "Judul editorial yang informatif dan lugas untuk kebutuhan B2B.",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug URL",
      type: "slug",
      description: "Slug unik untuk rute URL artikel (misal: /artikel/panduan-memilih-bahan-tas/).",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Ringkasan / Excerpt",
      type: "text",
      rows: 3,
      description: "Ringkasan 1-2 kalimat untuk kartu artikel dan cuplikan mesin pencari.",
      validation: (Rule) => Rule.required().max(250),
    }),
    defineField({
      name: "featuredImage",
      title: "Foto Utama (Featured Image)",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text Gambar",
          type: "string",
          description: "Deskripsi faktual foto untuk aksesibilitas dan SEO.",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori Artikel",
      type: "string",
      options: {
        list: ARTICLE_CATEGORIES.map((cat) => ({ title: cat, value: cat })),
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Isi Konten Artikel",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2 (H2)", value: "h2" },
            { title: "Heading 3 (H3)", value: "h3" },
            { title: "Kutipan", value: "blockquote" },
          ],
          lists: [
            { title: "Bullet List", value: "bullet" },
            { title: "Numbered List", value: "number" },
          ],
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text Gambar",
              type: "string",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Keterangan Foto (Caption)",
              type: "string",
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Penulis / Atribusi Redaksi",
      type: "string",
      initialValue: "Tim Redaksi ABUTAS",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Tanggal Publikasi",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Meta Title (Opsional)",
      type: "string",
      description: "Jika dikosongkan, judul artikel akan digunakan otomatis (rekomendasi max 60 karakter).",
      validation: (Rule) => Rule.max(65),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Meta Description (Opsional)",
      type: "text",
      rows: 2,
      description: "Jika dikosongkan, ringkasan/excerpt akan digunakan otomatis (rekomendasi max 155 karakter).",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL Kustom (Opsional)",
      type: "url",
      description: "Default: https://abutas.com/artikel/[slug]/",
    }),
    defineField({
      name: "contentStatus",
      title: "Status Publikasi Konten",
      type: "string",
      options: {
        list: [
          { title: "Draft (Internal / Ditinjau)", value: "draft" },
          { title: "Published (Siap Tayang Publik)", value: "published" },
        ],
        layout: "radio",
      },
      initialValue: "draft",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "featuredImage",
      status: "contentStatus",
    },
    prepare(selection) {
      const { title, subtitle, media, status } = selection;
      const displayStatus = typeof status === "string" ? status.toUpperCase() : "DRAFT";
      return {
        title: title || "Tanpa Judul",
        subtitle: `${subtitle || "Uncategorized"} [${displayStatus}]`,
        media,
      };
    },
  },
});
