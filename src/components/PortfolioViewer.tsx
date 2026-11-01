"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioItem {
  id: string;
  title: string;
  category: "tas" | "pakaian";
  productType: string;
  description: string;
  materials: string;
  brandingTechnique: string;
  year?: string;
  clientInfo?: string;
  image: string;
}

// Data model architecture ready for verified client projects
const PORTFOLIO_DATA: PortfolioItem[] = [];

export function PortfolioViewer() {
  const [activeTab, setActiveTab] = useState<"all" | "tas" | "pakaian">("all");

  const filteredItems = PORTFOLIO_DATA.filter((item) => {
    if (activeTab === "all") return true;
    return item.category === activeTab;
  });

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 border-b border-line-light pb-4">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`min-h-[44px] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "all"
              ? "bg-action text-white shadow-xs"
              : "bg-paper border border-line-light text-muted hover:text-ink hover:border-[#D0C9BD]"
          }`}
        >
          Semua Kategori
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("tas")}
          className={`min-h-[44px] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "tas"
              ? "bg-action text-white shadow-xs"
              : "bg-paper border border-line-light text-muted hover:text-ink hover:border-[#D0C9BD]"
          }`}
        >
          Konveksi Tas
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("pakaian")}
          className={`min-h-[44px] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeTab === "pakaian"
              ? "bg-action text-white shadow-xs"
              : "bg-paper border border-line-light text-muted hover:text-ink hover:border-[#D0C9BD]"
          }`}
        >
          Konveksi Pakaian
        </button>
      </div>

      {/* Honest Empty State per docs/business-facts.md */}
      {filteredItems.length === 0 && (
        <div className="rounded-2xl border border-line-light bg-paper p-8 sm:p-14 text-center max-w-3xl mx-auto shadow-xs">
          <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-action-subtle text-action mb-5" aria-hidden="true">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
          </div>

          <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
            / STATUS KURASI PORTOFOLIO /
          </span>

          <h2 className="text-2xl font-black text-ink font-display sm:text-3xl">
            Dokumentasi Proyek Sedang Dalam Proses Kurasi
          </h2>

          <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted max-w-xl mx-auto">
            Demi menjaga kerahasiaan desain dan hak cipta mitra B2B kami, dokumentasi hasil produksi komersial hanya diterbitkan setelah memperoleh izin rilis resmi. Kami tidak menampilkan logo atau testimoni tanpa persetujuan tertulis.
          </p>

          <div className="mt-8 rounded-xl border border-line-light bg-canvas p-6 text-left max-w-lg mx-auto text-xs text-muted space-y-2">
            <span className="font-bold text-ink block text-xs uppercase tracking-wider mb-1">
              Struktur Arsitektur Studi Kasus Terencana:
            </span>
            <div className="flex items-center gap-2">
              <span className="text-action font-bold">✓</span>
              <span>Spesifikasi Material &amp; Serat Kain</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-action font-bold">✓</span>
              <span>Metode Aplikasi Branding (Bordir / Sablon)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-action font-bold">✓</span>
              <span>Foto Detail Konstruksi Penjahitan &amp; Hardware</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/kontak/"
              className="inline-flex min-h-[46px] items-center justify-center gap-1.5 rounded-md bg-action px-6 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
            >
              <span>Konsultasi Spesifikasi Produk</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/cara-pesan/"
              className="inline-flex min-h-[46px] items-center justify-center rounded-md border border-line-light bg-canvas px-6 text-xs font-bold uppercase tracking-wider text-ink hover:bg-[#F2ECE3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
            >
              Pelajari Alur Pemesanan
            </Link>
          </div>
        </div>
      )}

      {/* Render Items if any exist in the future */}
      {filteredItems.length > 0 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-xl border border-line-light bg-paper shadow-xs transition-all hover:border-[#D0C9BD] hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full bg-[#EAE5DC]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-[11px] font-bold text-action uppercase tracking-wider block mb-1">
                  {item.productType}
                </span>
                <h3 className="text-lg font-bold text-ink font-display">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 pt-4 border-t border-line-light text-[11px] text-muted space-y-1">
                  <div><strong>Material:</strong> {item.materials}</div>
                  <div><strong>Branding:</strong> {item.brandingTechnique}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
