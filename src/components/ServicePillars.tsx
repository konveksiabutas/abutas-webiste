import React from "react";
import Image from "next/image";
import Link from "next/link";

export function ServicePillars() {
  return (
    <section id="layanan" className="scroll-mt-16 bg-dark text-white py-16 sm:py-24 border-b border-line-dark">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="grid gap-4 md:grid-cols-2 md:items-end md:gap-8 mb-12 sm:mb-14">
          <div>
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-action">
              / LAYANAN UTAMA /
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-white font-display sm:text-4xl">
              Dua Pilar Produksi Custom Kami
            </h2>
          </div>
          <p className="text-sm text-[#A2A9AB] leading-relaxed sm:text-base">
            Fokus pada produksi tas dan pakaian dengan kualitas material pilihan, proses yang rapi, dan hasil yang sesuai kebutuhan bisnis Anda.
          </p>
        </div>

        {/* Two Large Service Cards */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          
          {/* Card 1: Konveksi Tas Custom */}
          <article className="group flex flex-col justify-between rounded-2xl border border-line-dark bg-dark-surface p-6 transition-all hover:border-[#3E464A] hover:-translate-y-1 sm:p-7 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex flex-col justify-between h-full mb-6 sm:mb-0 sm:w-1/2">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-action block mb-1">
                  Pilar Manufaktur 01
                </span>
                <h3 className="text-xl font-black tracking-tight text-white font-display sm:text-2xl">
                  Konveksi Tas Custom
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#A2A9AB] sm:text-sm">
                  Tote bag, goodie bag seminar, ransel, tas laptop, waist bag, hingga tas promosi custom dengan pilihan material kanvas, cordura, dan dinir.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  href="/konveksi-tas/"
                  className="inline-flex items-center gap-2 rounded-md bg-action px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                >
                  <span>Lihat Layanan</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            <Link
              href="/konveksi-tas/"
              className="relative aspect-square w-full sm:w-1/2 overflow-hidden rounded-xl border border-line-dark bg-[#242A2C] block cursor-pointer"
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image
                src="/images/service-bag-detail.jpg"
                alt="Detail ransel canvas zaitun dengan strap kulit dan buckle kuningan"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </article>

          {/* Card 2: Konveksi Pakaian & Seragam */}
          <article className="group flex flex-col justify-between rounded-2xl border border-line-dark bg-dark-surface p-6 transition-all hover:border-[#3E464A] hover:-translate-y-1 sm:p-7 sm:flex-row sm:items-center sm:gap-6">
            <div className="flex flex-col justify-between h-full mb-6 sm:mb-0 sm:w-1/2">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-action block mb-1">
                  Pilar Manufaktur 02
                </span>
                <h3 className="text-xl font-black tracking-tight text-white font-display sm:text-2xl">
                  Konveksi Pakaian &amp; Seragam
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-[#A2A9AB] sm:text-sm">
                  Kemeja kerja kantor, seragam drill, polo shirt bordir, kaos combed sablon, jaket taslan, dan hoodie untuk kebutuhan perusahaan &amp; event.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  href="/konveksi-pakaian/"
                  className="inline-flex items-center gap-2 rounded-md bg-action px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                >
                  <span>Lihat Layanan</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>

            <Link
              href="/konveksi-pakaian/"
              className="relative aspect-square w-full sm:w-1/2 overflow-hidden rounded-xl border border-line-dark bg-[#242A2C] block cursor-pointer"
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image
                src="/images/service-apparel-detail.jpg"
                alt="Detail kerah kemeja polo katun hitam dan tumpukan sampel kain"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </article>

        </div>
      </div>
    </section>
  );
}
