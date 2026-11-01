"use client";

import React, { useState } from "react";

interface ArticleSummary {
  id: string;
  title: string;
  category: "tas" | "pakaian" | "material" | "tips";
  categoryLabel: string;
  excerpt: string;
  readTime: string;
  isFeatured?: boolean;
}

const ARTICLES: ArticleSummary[] = [
  {
    id: "1",
    title: "Panduan Memilih Bahan Tas Seminar: Perbandingan Kanvas, Cordura, dan Dinir",
    category: "material",
    categoryLabel: "Material & Teknik Produksi",
    excerpt:
      "Analisis komparatif karakteristik serat, daya tahan gesek, dan efisiensi anggaran untuk pengadaan goodie bag, ransel seminar, dan kit peserta.",
    readTime: "5 menit baca",
    isFeatured: true,
  },
  {
    id: "2",
    title: "Cotton Combed 24s vs 30s: Memilih Ketebalan Kain Kaos untuk Acara & Seragam",
    category: "pakaian",
    categoryLabel: "Panduan Konveksi Pakaian",
    excerpt:
      "Perbedaan ketebalan gramasi, daya serap keringat, dan kenyamanan pemakaian di iklim tropis antara combed 24s yang kokoh dan 30s yang ringan.",
    readTime: "4 menit baca",
  },
  {
    id: "3",
    title: "Bordir Komputer vs Sablon Manual: Kapan Harus Memilih Masing-Masing Teknik?",
    category: "material",
    categoryLabel: "Material & Teknik Produksi",
    excerpt:
      "Kajian detail letak aplikasi logo untuk kemeja drill, kaos katun, polo shirt, dan tas kanvas agar hasil branding rapi dan tahan pencucian berulang.",
    readTime: "6 menit baca",
  },
  {
    id: "4",
    title: "Checklist Brief Pemesanan Seragam Kerja untuk Tim Procurement & HR",
    category: "tips",
    categoryLabel: "Tips Pemesanan Custom",
    excerpt:
      "Langkah menyusun rincian kebutuhan seragam kantor: penentuan size chart Asian fit, kuota toleransi ukuran, hingga penentuan jadwal deadline pemesanan.",
    readTime: "4 menit baca",
  },
  {
    id: "5",
    title: "Karakteristik Bahan Cordura Bimo Water Repellent untuk Ransel Laptop Kerja",
    category: "tas",
    categoryLabel: "Panduan Konveksi Tas",
    excerpt:
      "Mengenal lapisan pelindung anti-percikan air pada kain cordura bimo dan pertimbangan busa polyfoam pelindung laptop di dalam ransel.",
    readTime: "5 menit baca",
  },
  {
    id: "6",
    title: "Polo Shirt Lacoste CVC vs Lacoste PE: Mana yang Pas untuk Seragam Kantor?",
    category: "pakaian",
    categoryLabel: "Panduan Konveksi Pakaian",
    excerpt:
      "Membandingkan pori rajutan heksagonal pique, kestabilan bentuk kerah rajut, dan kenyamanan sirkulasi udara antara serat CVC dan polyester ekonomis.",
    readTime: "5 menit baca",
  },
];

const CATEGORIES = [
  { key: "all", label: "Semua Topik" },
  { key: "tas", label: "Panduan Konveksi Tas" },
  { key: "pakaian", label: "Panduan Konveksi Pakaian" },
  { key: "material", label: "Material & Teknik Produksi" },
  { key: "tips", label: "Tips Pemesanan Custom" },
] as const;

export function ArticleIndexViewer() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredArticles = ARTICLES.filter((art) => {
    if (selectedCategory === "all") return true;
    return art.category === selectedCategory;
  });

  const featuredArticle = filteredArticles.find((a) => a.isFeatured) || filteredArticles[0];
  const regularArticles = filteredArticles.filter((a) => a.id !== featuredArticle?.id);

  return (
    <div className="space-y-12">
      {/* Category Tabs Filter */}
      <div className="flex flex-wrap items-center justify-start sm:justify-center gap-2 border-b border-line-light pb-4 overflow-x-auto">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            type="button"
            onClick={() => setSelectedCategory(cat.key)}
            className={`min-h-[44px] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === cat.key
                ? "bg-action text-white shadow-xs"
                : "bg-paper border border-line-light text-muted hover:text-ink hover:border-[#D0C9BD]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Featured Article Card */}
      {featuredArticle && (
        <div className="rounded-2xl border border-line-light bg-paper p-6 sm:p-10 shadow-xs">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-action font-bold text-xs uppercase tracking-wider">
                  {featuredArticle.categoryLabel}
                </span>
                <span className="text-muted text-xs">•</span>
                <span className="text-xs text-muted font-medium">{featuredArticle.readTime}</span>
                <span className="text-muted text-xs">•</span>
                <span className="rounded bg-action-subtle/10 px-2 py-0.5 text-[10px] font-bold text-action">
                  Topik Utama
                </span>
              </div>

              <h2 className="text-2xl font-black text-ink font-display sm:text-3xl leading-snug">
                {featuredArticle.title}
              </h2>

              <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm max-w-2xl">
                {featuredArticle.excerpt}
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="text-xs font-bold text-muted bg-canvas border border-line-light px-3 py-1.5 rounded-md">
                  Materi Sedang Ditinjau Redaksi
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 border-t border-line-light pt-4 lg:border-t-0 lg:border-l lg:border-line-light lg:pl-8 lg:pt-0">
              <span className="text-xs font-bold uppercase tracking-wider text-ink block mb-2">
                Fokus Edukasi:
              </span>
              <p className="text-xs text-muted leading-relaxed">
                Panduan komprehensif bagi procurement perusahaan untuk menentukan spesifikasi teknis tas dan pakaian custom yang efisien dan tepat fungsi.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Regular Articles Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {regularArticles.map((art) => (
          <article
            key={art.id}
            className="flex flex-col justify-between rounded-xl border border-line-light bg-paper p-6 shadow-xs transition-all hover:border-[#D0C9BD] hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-2.5">
                <span className="font-bold text-action text-[11px] uppercase tracking-wider">
                  {art.categoryLabel}
                </span>
                <span className="text-muted text-[11px]">{art.readTime}</span>
              </div>

              <h3 className="text-base font-bold text-ink font-display leading-snug">
                {art.title}
              </h3>

              <p className="mt-2.5 text-xs text-muted leading-relaxed">
                {art.excerpt}
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-line-light flex items-center justify-between text-[11px] text-muted">
              <span>Kurasi Artikel Teknis</span>
              <span className="text-action font-semibold">Persiapan Rilis</span>
            </div>
          </article>
        ))}
      </div>

      {/* Editorial Curation Notice Banner */}
      <div className="rounded-xl border border-line-light bg-[#FAF7F2] p-6 text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-action block mb-1">
          Komitmen Kualitas Redaksi
        </span>
        <p className="text-xs text-muted leading-relaxed">
          Seluruh artikel panduan disusun secara faktual oleh praktisi konveksi untuk membantu keputusan pengadaan B2B Anda, tanpa artikel generik buatan otomatis.
        </p>
      </div>
    </div>
  );
}
