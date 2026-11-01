import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Konveksi Tas Custom untuk Bisnis & Event | ABUTAS",
  description:
    "Layanan konveksi tas custom untuk perusahaan, seminar, event, dan brand. Pilihan model tote bag, ransel, goodie bag, tas laptop, dan pouch dengan material pilihan.",
  alternates: {
    canonical: "https://abutas.com/konveksi-tas/",
  },
  openGraph: {
    title: "Konveksi Tas Custom untuk Bisnis & Event | ABUTAS",
    description:
      "Layanan konveksi tas custom untuk perusahaan, seminar, event, dan brand. Pilihan model tote bag, ransel, goodie bag, tas laptop, dan pouch dengan material pilihan.",
    url: "https://abutas.com/konveksi-tas/",
    siteName: "ABUTAS",
    locale: "id_ID",
    images: [
      {
        url: "https://abutas.com/images/service-bag-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Koleksi Tas Custom ABUTAS — Tote Bag, Ransel, dan Tas Seminar",
      },
    ],
    type: "article",
  },
};

const BAG_CATEGORIES = [
  {
    title: "Tote Bag & Goodie Bag",
    badge: "Populer untuk Event & Brand",
    materials: "Kanvas, Blacu, Drill, Cordura",
    description:
      "Solusi tas jinjing fleksibel untuk seminar kit, souvenir promosi, goodie bag pameran, packaging premium, hingga produk ritel brand fashion.",
    highlights: ["Kapasitas muat luas", "Pilihan sablon atau bordir", "Handle jahit silang kuat"],
  },
  {
    title: "Tas Ransel (Backpack)",
    badge: "Kebutuhan Kantor & Komunitas",
    materials: "Cordura 1000D, Polyester D600, Kanvas",
    description:
      "Daypack kantor, ransel seminar eksekutif, tas komunitas, dan ransel laptop dengan busa pelindung empuk pada strap dan panel punggung.",
    highlights: ["Kompartemen laptop berbusa", "Strap punggung ergonomis", "Resleting anti-macet"],
  },
  {
    title: "Tas Seminar & Dokumen",
    badge: "Formal & Kegiatan Resmi",
    materials: "Dinir D300, D600, Cordura, Kanvas",
    description:
      "Tas laptop jinjing, tas dokumen diklat, map tas selempang untuk pelatihan, konferensi ilmiah, kementerian, dan instansi swasta.",
    highlights: ["Saku organizer dokumen", "Tali selempang lepas-pasang", "Branding sablon presisi"],
  },
  {
    title: "Waist Bag & Sling Bag",
    badge: "Merchandise & Streetwear",
    materials: "Cordura Bimo Waterproof, Ripstop, Kanvas",
    description:
      "Tas selempang dada dan pinggang berdesain dinamis. Pilihan favorit untuk merchandise komunitas motor, gathering, dan brand streetwear lokal.",
    highlights: ["Buckle asetal kokoh", "Pilihan bahan tahan percikan air", "Model ringkas fungsional"],
  },
  {
    title: "Pouch & Organizer Kit",
    badge: "Kemasan Souvenir & Amenities",
    materials: "Kanvas Marsoto, Kulit Sintetis, Blacu, Mika",
    description:
      "Pouch kosmetik, clutch seminar eksklusif, travel amenities kit, tempat perlengkapan kabel/gadget, dan kemasan hadiah korporat.",
    highlights: ["Bentuk custom sesuai ukuran", "Pilihan furing parasut", "Zipper metalik atau nylon"],
  },
  {
    title: "Tas Duffle & Travel Bag",
    badge: "Operasional & Family Gathering",
    materials: "Cordura 1000D, Kanvas Tebal, Polyester",
    description:
      "Tas pakaian bepergian berkapasitas besar untuk outing perusahaan, klub olahraga, kontingen instansi, dan perjalanan dinas.",
    highlights: ["Bantalan bawah tas", "Jahitan webbing tembus alas", "Kapasitas muat 25-45 liter"],
  },
];

const MATERIAL_GUIDES = [
  {
    name: "Kanvas (Canvas Marsoto & Twill)",
    karakter: "Bertekstur serat alami, tebal, kuat, memberi kesan estetik dan ramah lingkungan.",
    cocokUntuk: "Tote bag, pouch estetik, tas kasual, merchandise brand.",
  },
  {
    name: "Cordura & Cordura Bimo",
    karakter: "Serat rapat berdensitas tinggi, lentur, tahan gesekan, varian Bimo memiliki lapisan tahan percikan air (water repellent).",
    cocokUntuk: "Tas ransel, waist bag outdoor, tas laptop kerja.",
  },
  {
    name: "Dinir (D300, D600, D1680)",
    karakter: "Bahan polyester ekonomis dengan daya tahan tinggi, tahan robek, dan permukaan mudah dibersihkan.",
    cocokUntuk: "Tas seminar massal, goodie bag acara, tas promosi.",
  },
  {
    name: "Kain Blacu",
    karakter: "Kain katun mentah berwarna broken white (krem), bertekstur natural, sangat ramah anggaran.",
    cocokUntuk: "Goodie bag ramah lingkungan, kantong pembungkus produk, tas pameran.",
  },
];

const BAG_FAQS = [
  {
    q: "Berapa minimal order quantity (MOQ) untuk konveksi tas custom?",
    a: "Minimal pemesanan disesuaikan dengan jenis tas, ketersediaan bahan baku, dan tingkat kerumitan pola. Kami terbuka mendiskusikan kebutuhan jumlah kecil maupun partai besar untuk perusahaan dan event.",
  },
  {
    q: "Apakah bisa membuat tas dengan model dan ukuran sesuai rancangan sendiri?",
    a: "Ya. Layanan kami adalah custom manufacturing penuh. Anda dapat mengirimkan sketsa, sampel fisik yang sudah ada, atau file referensi untuk kami adaptasi polanya.",
  },
  {
    q: "Format file apa yang dibutuhkan untuk mencetak logo pada tas?",
    a: "Untuk hasil sablon dan bordir terbaik, disarankan mengirimkan file logo dalam format vektor seperti PDF, Adobe Illustrator (.AI), CorelDraw (.CDR), atau SVG. Jika hanya memiliki format PNG/JPG resolusi tinggi, tim kami dapat membantu proses penyesuaian.",
  },
  {
    q: "Apakah bisa membuat sampel (prototipe) sebelum produksi massal?",
    a: "Ya. Pembuatan sampel tas (sample proofing) dapat dilakukan setelah detail spesifikasi bahan, ukuran, dan penawaran biaya disepakati bersama.",
  },
  {
    q: "Berapa lama estimasi waktu produksi tas?",
    a: "Estimasi waktu produksi ditentukan berdasarkan jenis produk, spesifikasi, dan jumlah pesanan. Jadwal pengerjaan resmi akan diinformasikan secara transparan dalam penawaran.",
  },
];

export default function KonveksiTasPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Beranda",
            "item": "https://abutas.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Layanan",
            "item": "https://abutas.com/#layanan"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Konveksi Tas Custom",
            "item": "https://abutas.com/konveksi-tas/"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Konveksi Tas Custom",
        "provider": {
          "@type": "Organization",
          "name": "ABUTAS",
          "url": "https://abutas.com"
        },
        "description": "Layanan konveksi dan manufaktur tas custom untuk kebutuhan bisnis, perusahaan, event, dan brand.",
        "areaServed": "ID"
      }
    ]
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
                  <li>
                    <span className="text-muted">Layanan</span>
                  </li>
                  <li aria-hidden="true" className="text-[#B0B7B9]">/</li>
                  <li className="font-semibold text-ink" aria-current="page">
                    Konveksi Tas Custom
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* HERO SECTION — Bag Atelier Editorial */}
          <section className="relative border-b border-line-light bg-canvas py-12 sm:py-20">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
                
                {/* Hero Copy (lg:col-span-7) */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-action/20 bg-action-subtle px-3 py-1 text-xs font-bold uppercase tracking-wider text-action">
                    <span>Pilar Manufaktur 01</span>
                    <span aria-hidden="true">•</span>
                    <span>Bag Atelier</span>
                  </div>

                  <h1 className="mt-4 text-3xl font-black leading-[1.12] tracking-tight text-ink font-display sm:text-5xl lg:text-5xl">
                    Konveksi Tas Custom untuk Kebutuhan Bisnis, Event, &amp; Brand
                  </h1>

                  <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg max-w-2xl">
                    Partner produksi tas custom dengan pemilihan material berkualitas, konstruksi jahitan rapi, dan fleksibilitas model sesuai identitas perusahaan atau brand Anda.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/kontak/"
                      className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-md bg-action px-6 text-sm font-bold text-white shadow-sm transition-all hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2"
                    >
                      <span>Konsultasi Pemesanan Tas</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>

                    <a
                      href="#katalog-tas"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-line-light bg-paper px-6 text-sm font-bold text-ink transition-all hover:bg-[#F2ECE3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                    >
                      Pilihan Model &amp; Material
                    </a>
                  </div>

                  {/* Trust Specs Strip */}
                  <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 border-t border-line-light pt-6">
                    <div>
                      <span className="block text-xs font-bold text-ink uppercase tracking-wider">Kustomisasi Penuh</span>
                      <span className="mt-1 block text-xs text-muted leading-relaxed">Bebas tentukan ukuran, saku, tali, &amp; warna</span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-ink uppercase tracking-wider">Pilihan Bahan Variatif</span>
                      <span className="mt-1 block text-xs text-muted leading-relaxed">Kanvas, cordura, dinir, hingga blacu ramah anggaran</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="block text-xs font-bold text-ink uppercase tracking-wider">Branding Presisi</span>
                      <span className="mt-1 block text-xs text-muted leading-relaxed">Sablon plastisol, bordir komputer, atau woven tag</span>
                    </div>
                  </div>
                </div>

                {/* Hero Media (lg:col-span-5) */}
                <div className="lg:col-span-5">
                  <div className="relative overflow-hidden rounded-2xl border border-line-light bg-paper shadow-md">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src="/images/service-bag-detail.jpg"
                        alt="Detail konstruksi tas ransel kanvas zaitun dengan jahitan presisi, strap kulit dan buckle logam kuningan"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="p-4 bg-paper border-t border-line-light flex items-center justify-between text-xs text-muted">
                      <span>Detail Konstruksi &amp; Hardware</span>
                      <span className="font-semibold text-action">Pengerjaan Rapi</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* SECTION 2: KATEGORI PRODUK TAS YANG DIPRODUKSI (Dark Charcoal) */}
          <section id="katalog-tas" className="scroll-mt-16 bg-dark text-white py-16 sm:py-24 border-b border-line-dark">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              
              <div className="max-w-2xl mb-12 sm:mb-16">
                <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                  / KATALOG MODEL /
                </span>
                <h2 className="text-2xl font-black tracking-tight text-white font-display sm:text-4xl">
                  Referensi Model Tas Custom
                </h2>
                <p className="mt-3 text-sm text-[#A2A9AB] leading-relaxed sm:text-base">
                  Pilihan model tas yang dapat disesuaikan dengan dimensi ukuran, kompartemen internal, jenis bahan, serta kebutuhan branding Anda.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {BAG_CATEGORIES.map((bag, idx) => (
                  <article
                    key={bag.title}
                    className="flex flex-col justify-between rounded-xl border border-line-dark bg-dark-surface p-6 transition-all hover:border-[#3E464A] hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="font-bold text-action">{bag.badge}</span>
                        <span className="text-[#6C7577] font-mono">0{idx + 1}</span>
                      </div>
                      <h3 className="text-xl font-black tracking-tight text-white font-display">
                        {bag.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-[#A2A9AB] sm:text-sm">
                        {bag.description}
                      </p>

                      <div className="mt-4 pt-4 border-t border-line-dark/70">
                        <span className="block text-[11px] font-bold text-[#CAD0D2] uppercase tracking-wider mb-2">
                          Pilihan Material Utama:
                        </span>
                        <p className="text-xs text-action font-medium">
                          {bag.materials}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-1.5 border-t border-line-dark/60 pt-4 text-xs text-[#8E9799]">
                      {bag.highlights.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span className="text-action text-xs font-bold" aria-hidden="true">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-xs text-[#8E9799] sm:text-sm">
                  Punya contoh model tas lain yang tidak tercantum di atas?{" "}
                  <Link
                    href="/kontak/"
                    className="text-action font-bold hover:underline"
                  >
                    Kirimkan foto referensi Anda ke tim kami &rarr;
                  </Link>
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 3: MATERIAL & HARDWARE CONSIDERATIONS (Sand/Canvas) */}
          <section className="bg-canvas py-16 sm:py-24 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                
                <div className="lg:col-span-5">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                    / SELEKSI MATERIAL /
                  </span>
                  <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-4xl">
                    Memilih Bahan &amp; Komponen yang Tepat
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                    Kualitas dan ketahanan tas sangat ditentukan oleh perpaduan kain luar, lapisan dalam (furing), webbing tali, serta kualitas ritsleting dan buckle. Kami membantu Anda memilih material yang paling sesuai dengan anggaran dan tujuan penggunaan.
                  </p>

                  <div className="mt-8 rounded-xl border border-line-light bg-paper p-6 shadow-sm">
                    <h3 className="text-base font-bold text-ink">Komponen &amp; Aksesori Pendukung</h3>
                    <ul className="mt-3 space-y-2.5 text-xs text-muted sm:text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-action font-bold">•</span>
                        <span><strong>Ritsleting / Zipper:</strong> Pilihan coil zipper nylon atau ritsleting standar industri sesuai spesifikasi pesanan.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-action font-bold">•</span>
                        <span><strong>Tali Webbing:</strong> Katun tebal nyaman di pundak, polyester rapat, atau nylon tahan beban berat.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-action font-bold">•</span>
                        <span><strong>Hardware Pengait:</strong> Buckle asetal lentur tidak mudah patah, ring D, atau pengait logam kuningan.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-action font-bold">•</span>
                        <span><strong>Busa Pelindung:</strong> Polyfoam empuk 5-8 mm untuk tas laptop dan bantalan ransel.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-4">
                  {MATERIAL_GUIDES.map((mat) => (
                    <div
                      key={mat.name}
                      className="rounded-xl border border-line-light bg-paper p-5 transition-all hover:border-[#D0C9BD] shadow-xs"
                    >
                      <h3 className="text-base font-bold text-ink font-display">
                        {mat.name}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                        {mat.karakter}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-xs text-ink/80 bg-[#FAF7F2] p-2.5 rounded-md border border-line-light/60">
                        <span className="font-bold text-action shrink-0">Ideal untuk:</span>
                        <span className="text-muted">{mat.cocokUntuk}</span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>
          </section>

          {/* SECTION 4: B2B USE CASES UNTUK TAS */}
          <section className="bg-paper py-16 sm:py-20 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                  / KEBUTUHAN PENGADAAN /
                </span>
                <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-3xl">
                  Siapa yang Membutuhkan Layanan Konveksi Tas Kami?
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-line-light bg-canvas p-6">
                  <div className="text-action text-xl font-black font-display mb-2">01</div>
                  <h3 className="text-base font-bold text-ink">Perusahaan &amp; Korporat</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    Tas ransel laptop karyawan, merchandise onboarding kit karyawan baru, dan tas souvenir gathering tahunan.
                  </p>
                </div>

                <div className="rounded-xl border border-line-light bg-canvas p-6">
                  <div className="text-action text-xl font-black font-display mb-2">02</div>
                  <h3 className="text-base font-bold text-ink">Event &amp; Seminar Organizer</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    Goodie bag seminar, tas pelatihan diklat, tas pameran eksibisi, dan souvenir peserta konferensi.
                  </p>
                </div>

                <div className="rounded-xl border border-line-light bg-canvas p-6">
                  <div className="text-action text-xl font-black font-display mb-2">03</div>
                  <h3 className="text-base font-bold text-ink">Brand Fashion &amp; Ritel</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    Maklon tas kanvas dan waist bag untuk label independen dengan spesifikasi desain eksklusif dan label brand sendiri.
                  </p>
                </div>

                <div className="rounded-xl border border-line-light bg-canvas p-6">
                  <div className="text-action text-xl font-black font-display mb-2">04</div>
                  <h3 className="text-base font-bold text-ink">Komunitas &amp; Organisasi</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    Tas selempang seragam klub hobi, sling bag touring, tas travel bakti sosial, dan merchandise alumni.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 5: ALUR PEMESANAN & FAKTOR HARGA */}
          <section id="alur-pemesanan" className="bg-canvas py-16 sm:py-24 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              
              <div className="max-w-2xl mb-12">
                <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                  / TRANSPARANSI PROSES /
                </span>
                <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-4xl">
                  Alur Pemesanan Tas Custom di Abutas
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  Kami mengedepankan komunikasi yang jelas dari awal agar spesifikasi barang yang dihasilkan tepat sasaran.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                <div className="rounded-xl border border-line-light bg-paper p-6 relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-action text-sm font-extrabold text-white mb-4">
                    01
                  </div>
                  <h3 className="text-base font-bold text-ink">Konsultasi &amp; Brief</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    Sampaikan model tas, perkiraan jumlah, estimasi waktu yang diharapkan, serta logo atau tulisan yang akan diaplikasikan.
                  </p>
                </div>

                <div className="rounded-xl border border-line-light bg-paper p-6 relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-action text-sm font-extrabold text-white mb-4">
                    02
                  </div>
                  <h3 className="text-base font-bold text-ink">Pilihan Bahan &amp; Penawaran</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    Tim kami memberikan rekomendasi jenis bahan dan komponen yang efisien sesuai anggaran, lengkap dengan rincian biaya resmi.
                  </p>
                </div>

                <div className="rounded-xl border border-line-light bg-paper p-6 relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-action text-sm font-extrabold text-white mb-4">
                    03
                  </div>
                  <h3 className="text-base font-bold text-ink">Pembuatan Sampel</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    Untuk memastikan bentuk, ukuran kompartemen, dan presisi logo sesuai harapan, pembuatan sampel fisik dapat diproses sebelum produksi massal.
                  </p>
                </div>

                <div className="rounded-xl border border-line-light bg-paper p-6 relative">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-action text-sm font-extrabold text-white mb-4">
                    04
                  </div>
                  <h3 className="text-base font-bold text-ink">Produksi &amp; Quality Check</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    Proses potong, jahit, dan pemasangan aksesori berjalan dengan pemantauan kualitas jahitan sebelum dipacking rapi untuk pengiriman.
                  </p>
                </div>
              </div>

              {/* Pricing Factors Note */}
              <div className="mt-10 rounded-xl border border-line-light bg-[#F5F0E8] p-6 text-xs text-muted sm:text-sm">
                <span className="font-bold text-ink block mb-1">
                  Catatan Transparansi Penawaran Harga:
                </span>
                <p>
                  Harga konveksi tas custom tidak dibuat dalam angka statis karena sangat dipengaruhi oleh: <strong>kuantitas pesanan</strong>, <strong>ketebalan &amp; jenis kain</strong>, <strong>kerumitan sekat kantong dalam</strong>, serta <strong>metode aplikasi logo</strong> (jumlah warna sablon atau ukuran bidang bordir). Konsultasikan detail Anda untuk mendapatkan estimasi penawaran yang akurat.
                </p>
              </div>

            </div>
          </section>

          {/* SECTION 6: FAQ KONVEKSI TAS */}
          <section id="faq-tas" className="bg-canvas py-16 sm:py-24 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                
                <div className="lg:col-span-4">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                    / TANYA JAWAB /
                  </span>
                  <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-4xl">
                    FAQ Konveksi Tas Custom
                  </h2>
                  <p className="mt-3 text-sm text-muted leading-relaxed sm:text-base">
                    Pertanyaan yang sering diajukan seputar pemesanan tas, file artwork, dan pengiriman.
                  </p>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-4">
                  {BAG_FAQS.map((faq) => (
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

          {/* SECTION 7: INTERLINKING KE PILAR PAKAIAN */}
          <section className="bg-paper py-12 sm:py-16 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-2xl border border-line-light bg-[#FAF7F2] p-6 sm:p-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-action block mb-1">
                    Layanan Terkait
                  </span>
                  <h3 className="text-xl font-black text-ink font-display">
                    Membutuhkan Seragam atau Pakaian Custom?
                  </h3>
                  <p className="mt-1 text-xs text-muted sm:text-sm max-w-xl">
                    Selain tas, kami juga melayani produksi kemeja kerja, polo shirt bordir, seragam kantor, dan kaos custom dengan standar kualitas bahan pilihan.
                  </p>
                </div>

                <Link
                  href="/konveksi-pakaian/"
                  className="inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-md border border-ink bg-dark px-6 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                >
                  <span>Jelajahi Konveksi Pakaian</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </section>

          {/* SECTION 8: FINAL CTA */}
          <section className="relative overflow-hidden bg-dark text-white py-16 sm:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10 text-center max-w-3xl">
              <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-3">
                / HUBUNGI TIM ABUTAS /
              </span>
              <h2 className="text-3xl font-black leading-tight tracking-tight text-white font-display sm:text-4xl lg:text-5xl">
                Mulai Produksi Tas Custom untuk Kebutuhan Anda
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#A2A9AB] sm:text-base">
                Diskusikan konsep tas, kuantitas, dan kebutuhan jadwal acara Anda bersama tim kami. Dapatkan saran material dan penawaran transparan.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/kontak/"
                  className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-md bg-action px-8 text-sm font-bold text-white shadow-md transition-all hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
                >
                  <span>Minta Penawaran Tas Custom</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
                <Link
                  href="/"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-line-dark bg-dark-surface px-6 text-sm font-bold text-white transition-all hover:bg-[#2A3134] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
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
