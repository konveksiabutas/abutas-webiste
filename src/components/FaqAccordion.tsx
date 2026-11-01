"use client";

import React, { useState } from "react";
import { ChevronDownIcon } from "./icons";

const FAQS = [
  {
    q: "Berapa minimal pemesanan (MOQ)?",
    a: "Minimal pemesanan dapat disesuaikan dengan jenis produk dan kebutuhan Anda. Silakan konsultasikan terlebih dahulu untuk detailnya.",
  },
  {
    q: "Apakah bisa custom desain dan logo?",
    a: "Bisa. Kami menerima desain kustom dan menyediakan berbagai teknik aplikasi logo, seperti bordir komputer presisi, sablon manual/DTF, label woven, hingga cetak timbul (emboss).",
  },
  {
    q: "Berapa lama proses produksinya?",
    a: "Estimasi waktu produksi ditentukan berdasarkan jenis produk, spesifikasi, dan jumlah pesanan. Jadwal pengerjaan akan diinformasikan saat proses penawaran.",
  },
  {
    q: "Bisa minta sampel terlebih dahulu?",
    a: "Opsi pembuatan sampel persetujuan (approval sample) dapat didiskusikan sebelum produksi massal dimulai untuk memastikan kesesuaian bahan dan detail spesifikasi.",
  },
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="scroll-mt-16 bg-canvas py-16 sm:py-24 border-b border-line-light">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
          
          {/* Section Heading Left */}
          <div className="lg:col-span-4">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-action">
              / PERTANYAAN UMUM /
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-ink font-display sm:text-3xl lg:text-4xl">
              FAQ Seputar Produksi
            </h2>
          </div>

          {/* Accordion List Right */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-lg border border-line-light bg-paper overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-ink hover:text-action transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.q}</span>
                    <span
                      className={`ml-2 shrink-0 transition-transform duration-200 text-muted ${
                        isOpen ? "rotate-180 text-action" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <ChevronDownIcon size={18} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs leading-relaxed text-muted sm:text-sm border-t border-[#F2ECE3]">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
