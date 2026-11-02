import React from "react";
import Link from "next/link";
import { getEffectiveBusinessConfig } from "@/lib/sanity";

export async function Footer() {
  const config = await getEffectiveBusinessConfig();
  return (
    <footer className="border-t border-line-dark bg-[#0E1112] text-[#959E9F] py-14 sm:py-16 text-xs sm:text-sm">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand Col (lg:col-span-4) */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1 font-display text-2xl font-black tracking-tight text-white transition-opacity hover:opacity-90"
              aria-label="ABUTAS"
            >
              <span>ABUTAS</span>
              <span
                className="inline-block w-0 h-0 border-l-[9px] border-l-transparent border-b-[15px] border-b-action -skew-x-[15deg] ml-0.5"
                aria-hidden="true"
              />
            </Link>
            <p className="mt-3.5 text-xs sm:text-sm leading-relaxed text-[#959E9F] max-w-sm">
              Partner produksi tas dan pakaian custom untuk kebutuhan bisnis, event, komunitas, dan brand Anda.
            </p>
          </div>

          {/* Col 2: Layanan (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white mb-3 sm:mb-4">
              Layanan Produksi
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/konveksi-tas/"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-action text-[10px]">›</span>
                  <span>Konveksi Tas Custom</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/konveksi-pakaian/"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span className="text-action text-[10px]">›</span>
                  <span>Konveksi Pakaian &amp; Seragam</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigasi Cepat (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white mb-3 sm:mb-4">
              Navigasi
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/cara-pesan/" className="hover:text-white transition-colors">
                  Cara Pesan
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami/" className="hover:text-white transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/kontak/" className="hover:text-white transition-colors">
                  Kontak &amp; RFQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Hubungi Kami (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white mb-3 sm:mb-4">
              Konsultasi Langsung
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={config.whatsapp.directUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <span className="font-extrabold text-action text-xs font-mono">WA:</span>
                  <span>{config.whatsapp.display}</span>
                  <span className="text-[10px]" aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <Link
                  href="/kontak/"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>Formulir Permintaan Penawaran</span>
                </Link>
              </li>
              <li className="pt-1 text-[11px] text-[#7A8385] leading-relaxed">
                Mailbox email resmi (info@abutas.com) dalam proses aktivasi di hosting cPanel.
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="mt-12 border-t border-line-dark pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#6C7476] gap-4">
          <p>© 2026 ABUTAS. Semua hak cipta dilindungi.</p>
          <div className="flex gap-5">
            <span className="text-[#6C7476]">Manufaktur Tas &amp; Pakaian Custom</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
