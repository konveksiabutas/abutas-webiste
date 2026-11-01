import React from "react";

const AUDIENCE_ITEMS = [
  {
    title: "Perusahaan",
    description: "Seragam, goods perusahaan, dan kebutuhan operasional.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
        <line x1="9" y1="22" x2="9" y2="22.01"></line>
        <line x1="15" y1="22" x2="15" y2="22.01"></line>
        <line x1="9" y1="6" x2="9" y2="6.01"></line>
        <line x1="15" y1="6" x2="15" y2="6.01"></line>
        <line x1="9" y1="10" x2="9" y2="10.01"></line>
        <line x1="15" y1="10" x2="15" y2="10.01"></line>
        <line x1="9" y1="14" x2="9" y2="14.01"></line>
        <line x1="15" y1="14" x2="15" y2="14.01"></line>
        <line x1="9" y1="18" x2="9" y2="18.01"></line>
        <line x1="15" y1="18" x2="15" y2="18.01"></line>
      </svg>
    ),
  },
  {
    title: "Event & Konferensi",
    description: "Tas seminar, kit peserta, dan merchandise event.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
  },
  {
    title: "Komunitas",
    description: "Pakaian dan tas untuk komunitas, organisasi, atau kegiatan bersama.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Merchandise",
    description: "Produk custom untuk branding, launching, atau promosi.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 12 20 22 4 22 4 12"></polyline>
        <rect x="2" y="7" width="20" height="5"></rect>
        <line x1="12" y1="22" x2="12" y2="7"></line>
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
      </svg>
    ),
  },
];

export function UseCasesSection() {
  return (
    <section id="kebutuhan" className="scroll-mt-16 bg-canvas py-16 sm:py-20 border-b border-line-light">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Section Heading Left */}
          <div className="lg:col-span-4">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-action">
              / UNTUK SIAPA? /
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-ink font-display sm:text-3xl lg:text-4xl">
              Solusi Produksi untuk Berbagai Kebutuhan
            </h2>
          </div>

          {/* 4 Cards Grid Right */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8 lg:grid-cols-4">
            {AUDIENCE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="group flex flex-col items-start gap-3 rounded-xl border border-line-light bg-paper p-5 transition-all hover:border-[#D0C9BD] hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-lg bg-action-subtle text-action"
                  aria-hidden="true"
                >
                  {item.icon}
                </div>
                <h3 className="text-base font-extrabold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
