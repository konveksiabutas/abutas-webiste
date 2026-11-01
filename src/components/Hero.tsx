import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative border-b border-line-light bg-canvas pt-8 pb-12 sm:pt-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-14">
          
          {/* Left Column: Editorial Copy & Conversion */}
          <div className="lg:col-span-6 xl:col-span-6">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-action">
              / MANUFACTURING STUDIO /
            </span>

            <h1 className="mt-3 text-3xl font-black leading-[1.12] tracking-tight text-ink font-display sm:text-5xl lg:text-[3.25rem]">
              Konveksi Tas & Pakaian Custom untuk{" "}
              <span className="text-action">Kebutuhan Bisnis</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg max-w-xl">
              Partner produksi tas dan pakaian custom untuk perusahaan, event, komunitas, dan kebutuhan brand Anda.
            </p>

            {/* CTAs Row */}
            <div className="mt-7 flex flex-wrap gap-3 sm:items-center">
              <a
                href="#kontak"
                className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-md bg-action px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
              >
                <span>Konsultasi Produksi</span>
                <span aria-hidden="true">↗</span>
              </a>
              <a
                href="#layanan"
                className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-line-light bg-paper px-6 text-sm font-bold text-ink transition-all hover:bg-[#F2ECE3] hover:border-[#D5CDC0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
              >
                Jelajahi Layanan
              </a>
            </div>

            {/* 3 Trust Indicators */}
            <div className="mt-8 border-t border-line-light pt-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-4">
                <div className="flex items-start gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line-light bg-paper text-action"
                    aria-hidden="true"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold leading-tight text-ink">Produksi Custom</span>
                    <span className="mt-0.5 block text-[11px] leading-tight text-muted">Sesuai Kebutuhan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line-light bg-paper text-action"
                    aria-hidden="true"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold leading-tight text-ink">Konsultasi Pesanan</span>
                    <span className="mt-0.5 block text-[11px] leading-tight text-muted">Penyesuaian Detail Produk</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-line-light bg-paper text-action"
                    aria-hidden="true"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-xs font-bold leading-tight text-ink">Perhatian Detail</span>
                    <span className="mt-0.5 block text-[11px] leading-tight text-muted">Pengerjaan Rapi &amp; Teratur</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Product Photography */}
          <div className="lg:col-span-6 xl:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-line-light bg-paper shadow-md">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/hero-showcase.jpg"
                  alt="Koleksi tas canvas ecru, ransel charcoal, polo shirt navy, dan kain oranye atelier ABUTAS"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
