import { defineField, defineType } from "./schemaHelper.ts";

export const portfolio = defineType({
  name: "portfolio",
  title: "Portofolio Produksi",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Judul Proyek",
      type: "string",
      description: "Contoh: Produksi Ransel Laptop Cordura Bimo untuk Event Perusahaan",
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug URL",
      type: "slug",
      description: "Slug unik untuk rute URL portofolio (misal: /portofolio/ransel-laptop-cordura-bimo/).",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Kategori Produk",
      type: "string",
      options: {
        list: [
          { title: "Konveksi Tas Custom", value: "tas" },
          { title: "Konveksi Pakaian & Seragam", value: "pakaian" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "productType",
      title: "Jenis Produk Spesifik",
      type: "string",
      description: "Contoh: Tote Bag Kanvas, Tas Seminar Dinir, Kemeja Drill Kerja, Polo Shirt CVC.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi Proyek",
      type: "text",
      rows: 4,
      description: "Uraian latar belakang pesanan, tantangan produksi, atau detail pengerjaan.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "materials",
      title: "Material & Serat Kain",
      type: "string",
      description: "Contoh: Kanvas Marsoto 14oz, American Drill 1919, Cordura Bimo Water Repellent.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "brandingTechnique",
      title: "Teknik Aplikasi Branding",
      type: "string",
      description: "Contoh: Bordir Komputer Kerapatan Tinggi, Sablon Plastisol Doff, Label Kulit Emboss.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Galeri Dokumentasi Foto",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text Foto",
              type: "string",
              description: "Deskripsi faktual detail produk (misal: Detail jahitan saku dalam ransel laptop).",
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Keterangan Tambahan (Caption)",
              type: "string",
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "year",
      title: "Tahun Pengerjaan",
      type: "string",
      initialValue: "2026",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clientInfo",
      title: "Informasi Klien (Opsional)",
      type: "string",
      description: "Nama perusahaan, instansi, atau komunitas pemesan.",
    }),
    defineField({
      name: "clientPermissionReleased",
      title: "Izin Rilis Publik Klien",
      type: "boolean",
      description: "Wajib dicentang jika klien telah memberikan izin tertulis untuk mempublikasikan foto dan logo.",
      initialValue: false,
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Meta Title (Opsional)",
      type: "string",
      validation: (Rule) => Rule.max(65),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Meta Description (Opsional)",
      type: "text",
      rows: 2,
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "contentStatus",
      title: "Status Publikasi Konten",
      type: "string",
      options: {
        list: [
          { title: "Draft (Menunggu Kurasi / Izin Klien)", value: "draft" },
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
      subtitle: "productType",
      media: "gallery.0",
      status: "contentStatus",
    },
    prepare(selection: Record<string, unknown>) {
      const title = typeof selection.title === "string" ? selection.title : "";
      const subtitle = typeof selection.subtitle === "string" ? selection.subtitle : "Produk";
      const status = typeof selection.status === "string" ? selection.status.toUpperCase() : "DRAFT";
      return {
        title,
        subtitle: `${subtitle} [${status}]`,
        media: selection.media,
      };
    },
  },
});
