import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tentang Kami | ABUTAS Creative Manufacturing Studio",
  description:
    "Profil ABUTAS: Studio manufaktur dan konveksi tas serta pakaian custom untuk kebutuhan bisnis, perusahaan, komunitas, dan brand di Indonesia.",
  alternates: {
    canonical: "https://abutas.com/tentang-kami/",
  },
  openGraph: {
    title: "Tentang Kami | ABUTAS Creative Manufacturing Studio",
    description:
      "Profil ABUTAS: Studio manufaktur dan konveksi tas serta pakaian custom untuk kebutuhan bisnis, perusahaan, komunitas, dan brand di Indonesia.",
    url: "https://abutas.com/tentang-kami/",
    siteName: "ABUTAS",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://abutas.com/images/hero-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "ABUTAS Creative Manufacturing Studio",
      },
    ],
  },
};

export default function TentangKamiPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Beranda",
            item: "https://abutas.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tentang Kami",
            item: "https://abutas.com/tentang-kami/",
          },
        ],
      },
      {
        "@type": "AboutPage",
        name: "Tentang ABUTAS",
        description:
          "Studio manufaktur dan konveksi tas serta pakaian custom untuk kebutuhan bisnis, perusahaan, komunitas, dan brand di Indonesia.",
        url: "https://abutas.com/tentang-kami/",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex min-h-screen flex-col bg-canvas text-ink antialiased selection:bg-action/20 selection:text-ink">
        <Header />

        <main id="top" className="flex-1">
          {/* Breadcrumb Navigation */}
          <div className="border-b border-line-light bg-paper/60 py-3 text-xs text-muted">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                  <li>
                    <Link href="/" className="hover:text-action transition-colors">
                      Beranda
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-[#B0B7B9]">/</li>
                  <li className="font-semibold text-ink" aria-current="page">
                    Tentang Kami
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* HERO SECTION — Studio Profile */}
          <section className="relative border-b border-line-light bg-canvas py-12 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
                
                {/* Hero Text */}
                <div className="lg:col-span-7">
                  <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-action">
                    / PROFIL STUDIO /
                  </span>

                  <h1 className="mt-3 text-3xl font-black leading-[1.15] tracking-tight text-ink font-display sm:text-5xl lg:text-[3.25rem]">
                    Partner Manufaktur Tas &amp; Pakaian Custom untuk Kebutuhan B2B
                  </h1>

                  <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg max-w-2xl">
                    ABUTAS hadir sebagai studio konveksi yang berfokus pada produksi tas dan pakaian custom bagi korporat, penyelenggara acara, komunitas, dan label independen. Kami memadukan pemahaman mendalam tentang material tekstil dengan alur pengerjaan yang terstruktur.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      href="/kontak/"
                      className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-md bg-action px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
                    >
                      <span>Hubungi Tim Abutas</span>
                      <span aria-hidden="true">↗</span>
                    </Link>
                    <Link
                      href="/cara-pesan/"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-line-light bg-paper px-6 text-sm font-bold text-ink transition-all hover:bg-[#F2ECE3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                    >
                      Pelajari Alur Pemesanan
                    </Link>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="lg:col-span-5">
                  <div className="relative overflow-hidden rounded-2xl border border-line-light bg-paper shadow-md">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src="/images/process-stitching.jpg"
                        alt="Detail jahitan presisi benang katun pada proses penjahitan di workshop konveksi"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="p-4 bg-paper border-t border-line-light text-xs text-muted flex items-center justify-between">
                      <span>Proses Penjahitan &amp; Finishing</span>
                      <span className="text-action font-semibold">Atelier Craft</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* SECTION 2: PENDEKATAN MANUFAKTUR KAMI */}
          <section className="bg-paper py-16 sm:py-24 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              
              <div className="max-w-2xl mb-12 sm:mb-16">
                <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                  / PRINSIP KERJA /
                </span>
                <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-4xl">
                  Prinsip Produksi yang Kami Pegang
                </h2>
                <p className="mt-3 text-sm text-muted leading-relaxed sm:text-base">
                  Kami percaya bahwa pesanan produksi custom yang sukses berakar pada komunikasi spesifikasi yang transparan sejak awal.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-xl border border-line-light bg-canvas p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-action text-sm font-mono font-extrabold block mb-3">01 / MATERIAL</span>
                    <h3 className="text-lg font-bold text-ink font-display">Keterbukaan Spesifikasi Bahan</h3>
                    <p className="mt-2.5 text-xs text-muted leading-relaxed sm:text-sm">
                      Kami menerangkan karakteristik setiap jenis kain dan material tas secara jujur, mulai dari kelebihan, ketebalan serat, hingga kecocokannya dengan anggaran dan tujuan acara.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-line-light/80 text-[11px] text-action font-semibold">
                    Seleksi Kanvas, Cordura, Drill, &amp; Katun
                  </div>
                </div>

                <div className="rounded-xl border border-line-light bg-canvas p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-action text-sm font-mono font-extrabold block mb-3">02 / FIT &amp; POLA</span>
                    <h3 className="text-lg font-bold text-ink font-display">Pola Fungsional &amp; Nyaman</h3>
                    <p className="mt-2.5 text-xs text-muted leading-relaxed sm:text-sm">
                      Baik seragam kerja kantor maupun tas ransel harian dirancang dengan pola ergonomis standar lokal agar leluasa dikenakan seharian dalam aktivitas operasional nyata.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-line-light/80 text-[11px] text-action font-semibold">
                    Acuan Size Chart Asian Fit &amp; Proporsional
                  </div>
                </div>

                <div className="rounded-xl border border-line-light bg-canvas p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-action text-sm font-mono font-extrabold block mb-3">03 / APPROVAL</span>
                    <h3 className="text-lg font-bold text-ink font-display">Verifikasi Pra-Produksi</h3>
                    <p className="mt-2.5 text-xs text-muted leading-relaxed sm:text-sm">
                      Sebelum proses pemotongan kain massal dimulai, kami memvalidasi detail letak logo bordir/sablon dan proporsi warna melalui lembar mockup kerja digital. Opsi pembuatan sampel fisik dapat dikoordinasikan sesuai kesepakatan pesanan.
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-line-light/80 text-[11px] text-action font-semibold">
                    Minimalisasi Risiko Ketidaksesuaian
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 3: DUA PILAR UTAMA */}
          <section className="bg-dark text-white py-16 sm:py-24 border-b border-line-dark">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              
              <div className="max-w-2xl mb-12 sm:mb-16">
                <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                  / DUA FOKUS LAYANAN /
                </span>
                <h2 className="text-2xl font-black tracking-tight text-white font-display sm:text-4xl">
                  Dua Bidang Spesialisasi Kami
                </h2>
                <p className="mt-3 text-sm text-[#A2A9AB] leading-relaxed sm:text-base">
                  Fokus ganda pada tas custom dan pakaian memungkinkan kami menyediakan pengadaan seragam sekaligus merchandise seminar secara terpadu.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                
                {/* Pilar Tas */}
                <div className="rounded-2xl border border-line-dark bg-dark-surface p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-action text-xs font-bold uppercase tracking-wider block mb-2">
                      Pilar 01
                    </span>
                    <h3 className="text-2xl font-black text-white font-display">
                      Konveksi Tas Custom
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#A2A9AB] sm:text-sm">
                      Mulai dari goodie bag promosi seminar berbahan blacu dan dinir, tote bag kanvas estetik untuk brand, tas ransel laptop perusahaan, hingga pouch dan travel bag fungsional.
                    </p>
                    <ul className="mt-5 space-y-2 text-xs text-[#8E9799]">
                      <li className="flex items-center gap-2">
                        <span className="text-action font-bold">✓</span>
                        <span>Pilihan bahan kanvas, cordura, dinir, blacu</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-action font-bold">✓</span>
                        <span>Aplikasi sablon manual, bordir komputer, label woven</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-action font-bold">✓</span>
                        <span>Kustomisasi ukuran dan kompartemen dalam</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-line-dark">
                    <Link
                      href="/konveksi-tas/"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-action hover:text-white transition-colors"
                    >
                      <span>Jelajahi Layanan Konveksi Tas</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>

                {/* Pilar Pakaian */}
                <div className="rounded-2xl border border-line-dark bg-dark-surface p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-action text-xs font-bold uppercase tracking-wider block mb-2">
                      Pilar 02
                    </span>
                    <h3 className="text-2xl font-black text-white font-display">
                      Konveksi Pakaian &amp; Seragam
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-[#A2A9AB] sm:text-sm">
                      Produksi seragam kerja kantor berbahan drill bertekstur rapi, polo shirt bordir katun pique untuk acara, kaos combed 24s/30s adem, serta jaket dan windbreaker perusahaan.
                    </p>
                    <ul className="mt-5 space-y-2 text-xs text-[#8E9799]">
                      <li className="flex items-center gap-2">
                        <span className="text-action font-bold">✓</span>
                        <span>Pilihan kain American/Japan Drill, Lacoste CVC, Combed</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-action font-bold">✓</span>
                        <span>Bordir komputer kerapatan tinggi dan sablon plastisol/DTF</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-action font-bold">✓</span>
                        <span>Acuan size chart standar tubuh Indonesia</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-line-dark">
                    <Link
                      href="/konveksi-pakaian/"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-action hover:text-white transition-colors"
                    >
                      <span>Jelajahi Konveksi Pakaian</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </section>

          {/* SECTION 4: FINAL CTA */}
          <section className="bg-canvas py-16 sm:py-24 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center max-w-2xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                / HUBUNGI KAMI /
              </span>
              <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-4xl">
                Mulai Konsultasi Kebutuhan Anda
              </h2>
              <p className="mt-3 text-sm text-muted leading-relaxed sm:text-base">
                Diskusikan rencana produksi tas atau seragam custom bersama tim kami. Dapatkan saran pemilihan kain dan rincian penawaran yang transparan.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/kontak/"
                  className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-md bg-action px-7 text-sm font-bold text-white shadow-sm transition-all hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
                >
                  <span>Buka Halaman Kontak</span>
                  <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-line-light bg-paper px-6 text-sm font-bold text-ink transition-all hover:bg-[#F2ECE3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                >
                  Kembali ke Beranda
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
