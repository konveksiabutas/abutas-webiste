import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Panduan Cara Pesan Konveksi Tas & Pakaian Custom | ABUTAS",
  description:
    "Panduan alur pemesanan konveksi tas dan pakaian custom di ABUTAS: dari persiapan brief, konsultasi bahan, penawaran harga resmi, hingga tahap produksi massal.",
  alternates: {
    canonical: "https://abutas.com/cara-pesan/",
  },
  openGraph: {
    title: "Panduan Cara Pesan Konveksi Tas & Pakaian Custom | ABUTAS",
    description:
      "Panduan alur pemesanan konveksi tas dan pakaian custom di ABUTAS: dari persiapan brief, konsultasi bahan, penawaran harga resmi, hingga tahap produksi massal.",
    url: "https://abutas.com/cara-pesan/",
    siteName: "ABUTAS",
    locale: "id_ID",
    type: "article",
  },
};

const ORDER_STEPS = [
  {
    step: "01",
    title: "Konsultasi & Pengiriman Brief",
    summary: "Sampaikan ide atau kebutuhan produk Anda kepada tim kami.",
    details:
      "Ceritakan jenis produk yang dibutuhkan (tas seminar, ransel, kemeja, polo, kaos), perkiraan jumlah pesanan, referensi desain, serta batas waktu acara jika ada.",
  },
  {
    step: "02",
    title: "Rekomendasi Bahan & Penawaran Harga",
    summary: "Dapatkan rincian penawaran resmi yang transparan.",
    details:
      "Tim kami memberikan saran opsi bahan kain atau material tas yang efisien sesuai anggaran Anda, lengkap dengan rincian biaya resmi dan estimasi jadwal pengerjaan.",
  },
  {
    step: "03",
    title: "Persetujuan Mockup Visual / Sampel",
    summary: "Memastikan keselarasan detail sebelum kain dipotong.",
    details:
      "Kami menyusun lembar mockup digital yang memuat visualisasi letak logo dan ukuran bordir/sablon. Pembuatan sampel fisik pra-produksi bersifat opsional dan dapat dikoordinasikan sesuai volume pesanan.",
  },
  {
    step: "04",
    title: "Proses Produksi & Kontrol Kualitas",
    summary: "Pengerjaan sesuai spesifikasi pesanan yang telah disepakati.",
    details:
      "Masuk ke tahap pemotongan kain presisi, proses sablon atau bordir komputer, penjahitan stik rapi, pembersihan sisa benang (trimming), dan penyetrikaan uap.",
  },
  {
    step: "05",
    title: "Pengemasan & Pengiriman",
    summary: "Produk dipacking rapi dan siap dikirim ke lokasi Anda.",
    details:
      "Setiap produk dikemas secara rapi menggunakan individual polybag, dimasukkan ke dalam karung/kardus ekspedisi yang aman, lalu dikirimkan ke alamat tujuan.",
  },
];

const PREPARATION_ITEMS = [
  {
    num: "A",
    title: "Kategori & Model Produk",
    desc: "Tentukan apakah Anda membutuhkan tas (tote, ransel, goodie bag) atau pakaian (kemeja kantor, polo shirt, kaos combed, jaket).",
  },
  {
    num: "B",
    title: "Perkiraan Kuantitas",
    desc: "Estimasi jumlah yang dibutuhkan (misalnya 50 pcs, 100 pcs, atau lebih) karena volume pesanan sangat memengaruhi efisiensi biaya produksi.",
  },
  {
    num: "C",
    title: "File Desain & Logo",
    desc: "Siapkan logo dalam format vektor (PDF, AI, CDR, SVG) atau gambar resolusi tinggi untuk mempermudah visualisasi bordir atau sablon.",
  },
  {
    num: "D",
    title: "Target Waktu Acara",
    desc: "Informasikan batas tanggal penggunaan barang agar jadwal produksi dan pengiriman dapat disesuaikan dengan transparan saat proses penawaran.",
  },
];

const ORDER_FAQS = [
  {
    q: "Berapa minimal pemesanan (MOQ) di Abutas?",
    a: "Minimal pemesanan disesuaikan dengan jenis produk, ketersediaan bahan, dan tingkat kerumitan pola. Silakan diskusikan kebutuhan jumlah Anda dengan tim kami saat konsultasi awal.",
  },
  {
    q: "Berapa lama estimasi waktu pengerjaan pesanan?",
    a: "Estimasi waktu produksi ditentukan berdasarkan jenis produk, spesifikasi, dan jumlah pesanan. Jadwal pengerjaan akan diinformasikan saat proses penawaran.",
  },
  {
    q: "Apakah bisa membuat approval sample fisik sebelum produksi massal?",
    a: "Pembuatan sampel fisik pra-produksi bersifat opsional dan disesuaikan dengan volume serta kesepakatan pesanan. Untuk alur standar, persetujuan detail teknis dilakukan secara efisien melalui lembar mockup digital kerja resmi.",
  },
  {
    q: "Bagaimana sistem pembayaran untuk produksi custom?",
    a: "Secara umum, proses pemesanan diawali dengan uang muka (DP) setelah penawaran harga dan detail pesanan disetujui, dan pelunasan dilakukan saat pesanan selesai diproduksi dan siap dikirim.",
  },
];

export default function CaraPesanPage() {
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
            name: "Cara Pesan",
            item: "https://abutas.com/cara-pesan/",
          },
        ],
      },
      {
        "@type": "Article",
        headline: "Panduan Cara Pesan Konveksi Tas & Pakaian Custom",
        description: "Panduan alur pemesanan konveksi tas dan pakaian custom di ABUTAS dari persiapan hingga pengiriman.",
        url: "https://abutas.com/cara-pesan/",
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
                    Cara Pesan
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* PAGE HERO */}
          <section className="relative border-b border-line-light bg-canvas py-12 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="max-w-3xl">
                <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-action">
                  / PANDUAN PENGADAAN B2B /
                </span>
                <h1 className="mt-3 text-3xl font-black leading-[1.15] tracking-tight text-ink font-display sm:text-5xl lg:text-[3.25rem]">
                  Alur Pemesanan Tas &amp; Pakaian Custom
                </h1>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                  Panduan langkah demi langkah untuk merencanakan pesanan konveksi tas dan seragam pakaian Anda bersama ABUTAS, dari persiapan rincian awal hingga produk selesai dikerjakan.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#lima-tahap"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-md bg-action px-6 text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                  >
                    Lihat 5 Tahapan Alur
                  </a>
                  <Link
                    href="/kontak/"
                    className="inline-flex min-h-[46px] items-center justify-center rounded-md border border-line-light bg-paper px-6 text-xs font-bold uppercase tracking-wider text-ink hover:bg-[#F2ECE3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                  >
                    Mulai Konsultasi Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 1: APA YANG PERLU DISIAPKAN */}
          <section className="bg-paper py-16 sm:py-24 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              
              <div className="max-w-2xl mb-12 sm:mb-16">
                <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                  / CHECKLIST PERSIAPAN /
                </span>
                <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-4xl">
                  Sebelum Menghubungi Tim Kami
                </h2>
                <p className="mt-3 text-sm text-muted leading-relaxed sm:text-base">
                  Menyiapkan empat hal berikut akan mempercepat proses konsultasi dan mempermudah perhitungan estimasi penawaran harga resmi:
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {PREPARATION_ITEMS.map((item) => (
                  <div
                    key={item.num}
                    className="rounded-xl border border-line-light bg-canvas p-6 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-action-subtle text-action font-bold text-xs mb-4">
                        {item.num}
                      </div>
                      <h3 className="text-base font-bold text-ink font-display">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* SECTION 2: 5 TAHAPAN PEMESANAN */}
          <section id="lima-tahap" className="scroll-mt-16 bg-canvas py-16 sm:py-24 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              
              <div className="max-w-2xl mb-12 sm:mb-16">
                <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                  / PROSES KERJA SISTEMATIS /
                </span>
                <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-4xl">
                  Lima Tahapan Pemesanan di Abutas
                </h2>
                <p className="mt-3 text-sm text-muted leading-relaxed sm:text-base">
                  Alur terstruktur yang menjaga akurasi spesifikasi pesanan dari tahap diskusi awal hingga barang diterima.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                {ORDER_STEPS.map((step) => (
                  <div
                    key={step.step}
                    className="rounded-2xl border border-line-light bg-paper p-6 sm:p-8 transition-all hover:border-[#D0C9BD] shadow-xs"
                  >
                    <div className="grid gap-6 md:grid-cols-12 md:items-center">
                      <div className="md:col-span-1">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-action text-white font-extrabold text-base font-display">
                          {step.step}
                        </span>
                      </div>
                      <div className="md:col-span-4">
                        <h3 className="text-xl font-black text-ink font-display">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-xs text-action font-semibold">
                          {step.summary}
                        </p>
                      </div>
                      <div className="md:col-span-7 border-t border-line-light pt-4 md:border-t-0 md:border-l md:border-line-light md:pl-6 md:pt-0">
                        <p className="text-xs leading-relaxed text-muted sm:text-sm">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* SECTION 3: FAKTOR PENENTU PENAWARAN BIAYA */}
          <section className="bg-paper py-16 sm:py-20 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="rounded-2xl border border-line-light bg-[#FAF7F2] p-6 sm:p-10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                  / TRANSPARANSI BIAYA /
                </span>
                <h2 className="text-xl font-black text-ink font-display sm:text-2xl">
                  Faktor yang Memengaruhi Penawaran Harga Produksi
                </h2>
                <p className="mt-2 text-xs text-muted sm:text-sm leading-relaxed max-w-3xl">
                  Harga konveksi custom dihitung secara proporsional berdasarkan kebutuhan nyata pesanan Anda, bukan angka seragam:
                </p>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 text-xs text-muted">
                  <div className="rounded-lg bg-paper p-4 border border-line-light">
                    <strong className="block text-ink text-sm mb-1">Kuantitas Pesanan</strong>
                    Jumlah pesanan menentukan efisiensi pemotongan kain roll dan setting cetak awal.
                  </div>
                  <div className="rounded-lg bg-paper p-4 border border-line-light">
                    <strong className="block text-ink text-sm mb-1">Pilihan Bahan Kain</strong>
                    Tingkat ketebalan dan jenis serat (misal Combed 24s vs 30s, atau Cordura vs Blacu).
                  </div>
                  <div className="rounded-lg bg-paper p-4 border border-line-light">
                    <strong className="block text-ink text-sm mb-1">Aplikasi Branding</strong>
                    Jumlah titik logo, ukuran bidang sablon, atau tingkat kerapatan benang pada bordir komputer.
                  </div>
                  <div className="rounded-lg bg-paper p-4 border border-line-light">
                    <strong className="block text-ink text-sm mb-1">Aksesori &amp; Kerumitan</strong>
                    Tambahan sekat saku, ritsleting khusus, kancing snap, atau furing pelindung.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: FAQ CARA PESAN */}
          <section className="bg-canvas py-16 sm:py-24 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                
                <div className="lg:col-span-4">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                    / TANYA JAWAB /
                  </span>
                  <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-4xl">
                    Pertanyaan Seputar Pemesanan
                  </h2>
                  <p className="mt-3 text-sm text-muted leading-relaxed sm:text-base">
                    Informasi mengenai batas minimal, estimasi waktu, dan mekanisme pembayaran.
                  </p>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-4">
                  {ORDER_FAQS.map((faq) => (
                    <div
                      key={faq.q}
                      className="rounded-xl border border-line-light bg-paper p-6 shadow-xs"
                    >
                      <h3 className="text-base font-bold text-ink font-display">
                        {faq.q}
                      </h3>
                      <p className="mt-2.5 text-xs leading-relaxed text-muted sm:text-sm">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* SECTION 5: FINAL CTA */}
          <section className="bg-dark text-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 text-center max-w-2xl">
              <h2 className="text-2xl font-black tracking-tight text-white font-display sm:text-4xl">
                Siap Memulai Konsultasi Pesanan Anda?
              </h2>
              <p className="mt-3 text-sm text-[#A2A9AB] leading-relaxed sm:text-base">
                Kirimkan rincian kebutuhan Anda kepada tim kami untuk mendapatkan estimasi penawaran dan rekomendasi material.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/kontak/"
                  className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-md bg-action px-7 text-sm font-bold text-white shadow-sm hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
                >
                  <span>Minta Penawaran Harga</span>
                  <span aria-hidden="true">↗</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-line-dark bg-dark-surface px-6 text-sm font-bold text-white hover:bg-[#2A3134] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
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
