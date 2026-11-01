import React from "react";
import Image from "next/image";
import Link from "next/link";

export function FinalCtaSection() {
  return (
    <section id="kontak" className="scroll-mt-16 relative overflow-hidden bg-dark text-white py-16 sm:py-24 border-b border-line-dark">
      {/* Background Thread Spools Image with Gradient Mask */}
      <div className="absolute right-0 top-0 h-full w-full md:w-3/5 opacity-30 pointer-events-none">
        <Image
          src="/images/cta-threads.jpg"
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover object-right"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          
          {/* Left Text */}
          <div className="md:col-span-8 lg:col-span-8">
            <h2 className="text-2xl font-black leading-tight tracking-tight text-white font-display sm:text-4xl lg:text-5xl">
              Siap Wujudkan Kebutuhan{" "}
              <span className="text-action">Produksi Anda?</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#A2A9AB] sm:text-base max-w-xl">
              Diskusikan kebutuhan tas dan pakaian custom bersama tim Abutas. Kami siap membantu dari konsep hingga produksi.
            </p>
          </div>

          {/* Right Button */}
          <div className="md:col-span-4 lg:col-span-4 flex md:justify-end">
            <Link
              href="/kontak/"
              className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-md bg-action px-7 text-sm font-bold text-white shadow-md transition-all hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
            >
              <span>Minta Penawaran Produksi</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
