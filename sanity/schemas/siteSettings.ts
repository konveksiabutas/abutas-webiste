import { defineField, defineType } from "./schemaHelper.ts";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Pengaturan Situs & Profil Bisnis",
  type: "document",
  fields: [
    defineField({
      name: "brandName",
      title: "Nama Brand",
      type: "string",
      initialValue: "ABUTAS",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline Brand",
      type: "string",
      initialValue: "Creative Manufacturing Studio — Konveksi Tas & Pakaian Custom",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi Bisnis Publik",
      type: "text",
      rows: 3,
      initialValue:
        "Partner produksi tas dan pakaian custom untuk kebutuhan bisnis, perusahaan, event, komunitas, dan brand di Indonesia.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "whatsappNumber",
      title: "Nomor WhatsApp Business",
      type: "string",
      description: "Format internasional tanpa spasi atau tanda tambah (contoh: 6281285689538).",
      initialValue: "6281285689538",
      validation: (Rule) =>
        Rule.custom((val: unknown) => {
          if (!val) return true;
          if (typeof val !== "string") return "Format nomor tidak valid.";
          return /^62\d{9,13}$/.test(val)
            ? true
            : "Nomor WhatsApp harus berformat internasional diawali '62' tanpa spasi atau tanda tambah (contoh: 6281285689538).";
        }),
    }),
    defineField({
      name: "whatsappVerified",
      title: "Status Verifikasi WhatsApp",
      type: "boolean",
      description: "Centang hanya jika nomor telah diverifikasi aktif oleh pemilik bisnis di docs/business-facts.md.",
      initialValue: false,
    }),
    defineField({
      name: "officialEmail",
      title: "Email Resmi Bisnis",
      type: "string",
      description: "Alamat email resmi untuk korespondensi B2B (contoh: info@abutas.com).",
      initialValue: "info@abutas.com",
      validation: (Rule) =>
        Rule.custom((val: unknown) => {
          if (!val) return true;
          if (typeof val !== "string") return "Format email tidak valid.";
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
            ? true
            : "Format email tidak valid (contoh: info@abutas.com).";
        }),
    }),
    defineField({
      name: "emailVerified",
      title: "Status Verifikasi Email",
      type: "boolean",
      description: "Centang hanya jika mailbox server cPanel telah aktif menerima email.",
      initialValue: false,
    }),
    defineField({
      name: "businessAddress",
      title: "Alamat Workshop / Kantor Fisik",
      type: "text",
      rows: 2,
      description: "Alamat fisik nyata studio/workshop konveksi.",
    }),
    defineField({
      name: "addressVerified",
      title: "Status Verifikasi Alamat",
      type: "boolean",
      description: "Centang hanya jika alamat fisik terkonfirmasi dapat dikunjungi oleh klien B2B.",
      initialValue: false,
    }),
    defineField({
      name: "socialLinks",
      title: "Tautan Media Sosial",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Nama Platform",
              type: "string",
              options: {
                list: ["Instagram", "LinkedIn", "TikTok", "YouTube", "Facebook"],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: "url",
              title: "URL Akun Resmi",
              type: "url",
              validation: (Rule) => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "governanceNote",
      title: "Catatan Tata Kelola Fakta Bisnis",
      type: "text",
      readOnly: true,
      initialValue:
        "PERINGATAN TATA KELOLA: Nomor kontak, email, dan alamat fisik tidak akan ditampilkan pada antarmuka publik sebelum status verifikasi terkait bernilai TRUE (Verified).",
    }),
  ],
  preview: {
    select: {
      title: "brandName",
      subtitle: "tagline",
    },
  },
});
