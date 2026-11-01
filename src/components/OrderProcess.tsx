import React from "react";
import Image from "next/image";

export function OrderProcess() {
  return (
    <section id="cara-pesan" className="scroll-mt-16 bg-canvas py-16 sm:py-24 border-b border-line-light">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
          
          {/* Left Column: Macro Process Stitching Photo */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-line-light bg-paper shadow-sm">
              <Image
                src="/images/process-stitching.jpg"
                alt="Makro jahitan ganda rapi pada pakaian katun twill zaitun di atelier workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: 3 Steps Process */}
          <div className="lg:col-span-7">
            <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-action">
              / PROSES PEMESANAN /
            </span>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-ink font-display sm:text-3xl lg:text-4xl">
              Tiga Langkah Mudah dari Ide ke Produk
            </h2>

            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-start md:gap-4">
              {/* Step 01 */}
              <div className="flex-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-action text-sm font-extrabold text-white">
                  01
                </div>
                <h3 className="mt-3 text-base font-extrabold text-ink">
                  Konsultasi
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
                  Ceritakan kebutuhan, konsep, dan gambaran produk Anda.
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block pt-3 text-base text-[#A4A9AB]" aria-hidden="true">
                &rarr;
              </div>

              {/* Step 02 */}
              <div className="flex-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-action text-sm font-extrabold text-white">
                  02
                </div>
                <h3 className="mt-3 text-base font-extrabold text-ink">
                  Penawaran &amp; Sampel
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
                  Dapatkan rekomendasi, penawaran, dan (opsional) sampel produk.
                </p>
              </div>

              {/* Arrow */}
              <div className="hidden md:block pt-3 text-base text-[#A4A9AB]" aria-hidden="true">
                &rarr;
              </div>

              {/* Step 03 */}
              <div className="flex-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-action text-sm font-extrabold text-white">
                  03
                </div>
                <h3 className="mt-3 text-base font-extrabold text-ink">
                  Produksi
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted sm:text-sm">
                  Masuk ke tahap produksi dengan kontrol kualitas yang rapi.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
