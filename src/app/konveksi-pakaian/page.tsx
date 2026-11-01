import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Konveksi Pakaian & Seragam Custom untuk Perusahaan & Brand | ABUTAS",
  description:
    "Layanan konveksi pakaian custom: kemeja kerja kantor, polo shirt bordir, seragam kerja, kaos sablon combed, dan jaket hoodie dengan detail jahitan rapi.",
  alternates: {
    canonical: "https://abutas.com/konveksi-pakaian/",
  },
  openGraph: {
    title: "Konveksi Pakaian & Seragam Custom untuk Perusahaan & Brand | ABUTAS",
    description:
      "Layanan konveksi pakaian custom: kemeja kerja kantor, polo shirt bordir, seragam kerja, kaos sablon combed, dan jaket hoodie dengan detail jahitan rapi.",
    url: "https://abutas.com/konveksi-pakaian/",
    siteName: "ABUTAS",
    locale: "id_ID",
    images: [
      {
        url: "https://abutas.com/images/service-apparel-showcase.jpg",
        width: 1200,
        height: 630,
        alt: "Koleksi Pakaian dan Seragam Custom ABUTAS — Kemeja, Polo Shirt, dan Kaos",
      },
    ],
    type: "article",
  },
};

const APPAREL_CATEGORIES = [
  {
    title: "Kemeja Kerja & Seragam Kantor",
    tagline: "Tampilan Profesional & Rapi",
    recommendedFabrics: "American Drill, Japan Drill, Tropical, Oxford",
    description:
      "Kemeja kerja formal dan semi-formal untuk korporat, instansi pemerintah, BUMN, perhotelan, dan seragam operasional harian. Tersedia model lengan panjang dan pendek.",
    features: [
      "Kerah kaku rapi dengan pelapis interlining",
      "Saku saku paspol atau saku tempel dengan slot pulpen",
      "Pilihan ventilasi airflow jaring pada punggung",
      "Aplikasi bordir komputer logo dada dan punggung",
    ],
  },
  {
    title: "Polo Shirt (Kaos Wangki)",
    tagline: "Elegan, Santai, & Fungsional",
    recommendedFabrics: "Lacoste CVC 20s/24s, Pique Cotton, Cotton Combed",
    description:
      "Seragam berkerah rajut rapi yang cocok untuk seragam casual kantor, sales lapangan, seragam event pameran, gathering keluarga, dan seragam komunitas.",
    features: [
      "Kerah rajut tebal anti-gulung (tidak mudah mengkerut)",
      "Placket kancing 2 atau 3 kancing rapi",
      "Belahan samping bawah (side slit) fleksibel",
      "Bordir komputer presisi logo dada",
    ],
  },
  {
    title: "Kaos Custom (T-Shirt)",
    tagline: "Nyaman, Dingin, & Menyerap Keringat",
    recommendedFabrics: "100% Cotton Combed 24s & 30s",
    description:
      "Kaos oblong harian untuk merchandise launching produk, kaos seragam kepanitiaan event, gathering komunitas, hingga produksi kaos label brand lokal.",
    features: [
      "Bahan katun alami halus dan adem di iklim tropis",
      "Jahitan rantai pundak dan obras benang rapat",
      "Sablon manual plastisol, rubber, atau DTF elastis",
      "Pilihan rib leher spandex elastis anti-melar",
    ],
  },
  {
    title: "Jaket, Hoodie, & Windbreaker",
    tagline: "Protektif & Bergaya Modern",
    recommendedFabrics: "Taslan Milky (Water Repellent), Cotton Fleece, Baby Terry, Parasut",
    description:
      "Jaket bomber perusahaan, windbreaker lapangan penahan angin, hoodie komunitas, dan jaket varsity dengan pilihan lapisan furing jaring atau katun asahi.",
    features: [
      "Bahan luar tahan hembusan angin dan percikan gerimis",
      "Ritsleting coil zipper tebal atau metalik sesuai pesanan",
      "Karet rib elastis pada pergelangan tangan dan pinggang",
      "Pilihan saku dalam tersembunyi untuk smartphone",
    ],
  },
  {
    title: "Wearpack & Seragam Lapangan",
    tagline: "Kekuatan & Keselamatan Kerja K3",
    recommendedFabrics: "American Drill Heavy Duty, Twill Katun Tebal",
    description:
      "Seragam teknisi bengkel, pekerja tambang/proyek, dan seragam pabrik manufaktur dengan konstruksi jahitan rangkap tiga (triple stitch) yang kuat.",
    features: [
      "Pita scotchlite reflektif 3M memantulkan cahaya malam",
      "Banyak kantong fungsional berkancing snap / velcro",
      "Ritsleting dua arah (two-way zipper) pada coverall",
      "Kain tahan gesekan mesin dan debu industri",
    ],
  },
];

const FABRIC_COMPARISON = [
  {
    category: "Kaos",
    materialA: "Cotton Combed 30s",
    descA: "Lebih tipis, sangat dingin, dan jatuh ringan. Paling disukai untuk kaos santai dan event indoor.",
    materialB: "Cotton Combed 24s",
    descB: "Sedikit lebih tebal dan kokoh, tidak menerawang, sangat pas untuk seragam kepanitiaan dan kaos brand.",
  },
  {
    category: "Polo Shirt",
    materialA: "Lacoste CVC",
    descA: "Campuran katun dan polyester dengan pori rajutan heksagonal. Nyaman menyerap keringat dan bentuk kerah stabil.",
    materialB: "Lacoste PE",
    descB: "Serat polyester ekonomis, tidak mudah kusut, cocok untuk seragam massal dalam jumlah ribuan pcs.",
  },
  {
    category: "Kemeja",
    materialA: "American Drill",
    descA: "Tebal medium, permukaan bertekstur diagonal rapat, warna awet dicuci berulang. Standar seragam kantor.",
    materialB: "Japan Drill",
    descB: "Kandungan katun lebih tinggi, lebih lembut dan dingin, sangat nyaman untuk penggunaan seharian penuh.",
  },
];

const APPAREL_FAQS = [
  {
    q: "Berapa minimal pemesanan (MOQ) untuk konveksi pakaian custom?",
    a: "Minimal pemesanan disesuaikan dengan jenis pakaian dan ketersediaan kain. Kami dapat melayani produksi dalam jumlah puluhan pcs untuk seragam tim khusus hingga ribuan pcs untuk seragam perusahaan dan event massal.",
  },
  {
    q: "Bagaimana dengan toleransi ukuran baju?",
    a: "Dalam proses pemotongan manual dan penjahitan tekstil, standar deviasi ukuran internasional berkisar antara ±1 hingga 2 cm dari size chart resmi yang disepakati.",
  },
  {
    q: "Bagaimana cara memastikan ukuran seragam sesuai sebelum produksi massal?",
    a: "Kami menyediakan tabel size chart standar sebagai acuan pengukuran. Pelanggan dapat mengukur lebar dada dan panjang badan masing-masing staf, atau mendiskusikan opsi pengecekan sampel ukuran saat proses penawaran awal.",
  },
  {
    q: "Metode sablon atau bordir apa yang paling disarankan?",
    a: "Untuk bahan kemeja dan polo shirt, kami menyarankan bordir komputer karena tampil rapi, tegas, dan berumur panjang. Untuk kaos combed, sablon plastisol atau DTF elastis sangat disarankan karena detail warna akurat dan tahan pencucian.",
  },
  {
    q: "Apakah pelanggan bisa membawa bahan kain sendiri (maklon jahit)?",
    a: "Secara umum kami menyediakan paket lengkap (bahan kain, pemotongan, jahit, sablon/bordir, hingga finishing setrika uap & polybag). Namun untuk brand yang memiliki kain khusus, kami terbuka mendiskusikan opsi kerja sama penjahitan.",
  },
];

export default function KonveksiPakaianPage() {
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
            "name": "Konveksi Pakaian & Seragam",
            "item": "https://abutas.com/konveksi-pakaian/"
          }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Konveksi Pakaian & Seragam Custom",
        "provider": {
          "@type": "Organization",
          "name": "ABUTAS",
          "url": "https://abutas.com"
        },
        "description": "Layanan konveksi kemeja kerja, polo shirt bordir, seragam kantor, kaos sablon combed, dan jaket custom untuk perusahaan dan bisnis.",
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
          <div className="border-b border-line-dark bg-dark py-3 text-xs text-[#8E9799]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <nav aria-label="Breadcrumb">
                <ol className="flex items-center space-x-2">
                  <li>
                    <Link href="/" className="hover:text-action transition-colors">
                      Beranda
                    </Link>
                  </li>
                  <li aria-hidden="true" className="text-[#555E60]">/</li>
                  <li>
                    <span className="text-[#8E9799]">Layanan</span>
                  </li>
                  <li aria-hidden="true" className="text-[#555E60]">/</li>
                  <li className="font-semibold text-white" aria-current="page">
                    Konveksi Pakaian &amp; Seragam
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* HERO SECTION — Apparel Atelier Dark Stage */}
          <section className="relative border-b border-line-dark bg-dark text-white py-14 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
                
                {/* Hero Headline & Copy (lg:col-span-7) */}
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-action/30 bg-action-subtle/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-action">
                    <span>Pilar Manufaktur 02</span>
                    <span aria-hidden="true">•</span>
                    <span>Apparel Atelier</span>
                  </div>

                  <h1 className="mt-4 text-3xl font-black leading-[1.12] tracking-tight text-white font-display sm:text-5xl lg:text-[3.25rem]">
                    Konveksi Pakaian &amp; Seragam Custom untuk Kebutuhan Bisnis
                  </h1>

                  <p className="mt-5 text-base leading-relaxed text-[#A2A9AB] sm:text-lg max-w-2xl">
                    Layanan pembuatan kemeja kerja, polo shirt bordir, seragam kantor, kaos combed sablon, dan jaket seragam dengan pengerjaan rapi, pola yang nyaman, dan seleksi bahan yang tepat.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/kontak/"
                      className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-md bg-action px-6 text-sm font-bold text-white shadow-md transition-all hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
                    >
                      <span>Konsultasi Produksi Pakaian</span>
                      <span aria-hidden="true">&rarr;</span>
                    </Link>

                    <a
                      href="#kategori-pakaian"
                      className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-line-dark bg-dark-surface px-6 text-sm font-bold text-white transition-all hover:bg-[#2A3134] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                    >
                      Lihat Jenis Pakaian &amp; Kain
                    </a>
                  </div>

                  {/* Highlights Grid */}
                  <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 border-t border-line-dark/70 pt-6">
                    <div>
                      <span className="block text-xs font-bold text-white uppercase tracking-wider">Pola Ergonomis</span>
                      <span className="mt-1 block text-xs text-[#8E9799] leading-relaxed">Pola cutting pas badan, leluasa bergerak seharian</span>
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-white uppercase tracking-wider">Konstruksi Jahitan Rapi</span>
                      <span className="mt-1 block text-xs text-[#8E9799] leading-relaxed">Jahit rantai, stik ganda, &amp; obras benang rapat</span>
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                      <span className="block text-xs font-bold text-white uppercase tracking-wider">Bordir Komputer Rapi</span>
                      <span className="mt-1 block text-xs text-[#8E9799] leading-relaxed">Kerapatan benang tinggi, logo tegas &amp; tahan cuci</span>
                    </div>
                  </div>
                </div>

                {/* Hero Gallery (lg:col-span-5) */}
                <div className="lg:col-span-5">
                  <div className="relative overflow-hidden rounded-2xl border border-line-dark bg-dark-surface p-2 shadow-2xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                      <Image
                        src="/images/service-apparel-detail.jpg"
                        alt="Detail kerah kemeja polo katun hitam, kancing jahit rapi, dan tumpukan sampel kain tekstil"
                        fill
                        priority
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="p-4 bg-dark-surface flex items-center justify-between text-xs text-[#959E9F]">
                      <span>Kerapian Kerah &amp; Jahit Kancing</span>
                      <span className="text-action font-semibold">Quality Monitored</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* SECTION 2: KATEGORI PRODUK APPAREL (Warm Canvas) */}
          <section id="kategori-pakaian" className="scroll-mt-16 bg-canvas py-16 sm:py-24 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              
              <div className="max-w-2xl mb-12 sm:mb-16">
                <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                  / KOLEKSI APPAREL /
                </span>
                <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-4xl">
                  Referensi Kategori Pakaian Custom
                </h2>
                <p className="mt-3 text-sm text-muted leading-relaxed sm:text-base">
                  Mulai dari pakaian formal kantor hingga seragam operasional lapangan, disesuaikan dengan identitas warna dan kenyamanan pemakai.
                </p>
              </div>

              {/* Editorial Staggered Layout for Apparel */}
              <div className="flex flex-col gap-6">
                {APPAREL_CATEGORIES.map((item, idx) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-line-light bg-paper p-6 sm:p-8 transition-all hover:border-[#D0C9BD] hover:shadow-sm"
                  >
                    <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                      
                      <div className="lg:col-span-7">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-action font-bold text-xs uppercase tracking-wider">
                            Kategori 0{idx + 1}
                          </span>
                          <span className="text-muted text-xs">•</span>
                          <span className="text-xs text-muted font-medium">{item.tagline}</span>
                        </div>

                        <h3 className="text-xl font-black tracking-tight text-ink font-display sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                          {item.description}
                        </p>

                        <div className="mt-4 inline-flex items-center gap-2 rounded-md bg-[#FAF7F2] px-3 py-1.5 border border-line-light/70 text-xs text-ink">
                          <span className="font-bold text-action">Rekomendasi Kain:</span>
                          <span className="text-muted">{item.recommendedFabrics}</span>
                        </div>
                      </div>

                      <div className="lg:col-span-5 border-t border-line-light pt-4 lg:border-t-0 lg:border-l lg:border-line-light lg:pl-8 lg:pt-0">
                        <span className="block text-xs font-bold text-ink uppercase tracking-wider mb-2.5">
                          Standar Detail Penjahitan:
                        </span>
                        <ul className="space-y-2 text-xs text-muted sm:text-sm">
                          {item.features.map((f) => (
                            <li key={f} className="flex items-start gap-2">
                              <span className="text-action font-bold shrink-0">✓</span>
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </article>
                ))}
              </div>

            </div>
          </section>

          {/* SECTION 3: PANDUAN KAIN & KENYAMANYAN (Comparison Matrix) */}
          <section className="bg-paper py-16 sm:py-24 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              
              <div className="max-w-3xl mb-12">
                <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                  / KOMPARASI MATERIAL /
                </span>
                <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-4xl">
                  Memahami Karakteristik Bahan Pakaian
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  Salah satu penentu keberhasilan seragam adalah kepuasan pemakai saat mengenakannya seharian. Kami bantu memilih komposisi serat kain yang tepat.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {FABRIC_COMPARISON.map((comp) => (
                  <div
                    key={comp.category}
                    className="flex flex-col justify-between rounded-xl border border-line-light bg-canvas p-6 shadow-xs"
                  >
                    <div>
                      <span className="inline-block text-xs font-black uppercase tracking-wider text-action mb-2">
                        Pilihan Bahan: {comp.category}
                      </span>
                      
                      <div className="border-b border-line-light/80 pb-4 mb-4">
                        <h3 className="text-base font-bold text-ink">{comp.materialA}</h3>
                        <p className="mt-1.5 text-xs text-muted leading-relaxed">
                          {comp.descA}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-ink">{comp.materialB}</h3>
                        <p className="mt-1.5 text-xs text-muted leading-relaxed">
                          {comp.descB}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Branding Technique Strip */}
              <div className="mt-12 rounded-xl border border-line-light bg-[#F9F6F0] p-6 sm:p-8">
                <h3 className="text-base font-bold text-ink mb-2">Pilihan Teknik Aplikasi Logo &amp; Identitas</h3>
                <p className="text-xs text-muted sm:text-sm leading-relaxed mb-4">
                  Setiap jenis bahan memiliki pasangan teknik cetak terbaik:
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 text-xs text-muted">
                  <div className="rounded-lg bg-paper p-4 border border-line-light">
                    <strong className="block text-ink text-sm mb-1">Bordir Komputer</strong>
                    Kerapatan jarum tinggi, benang polyester mengilap, sangat tahan cuci untuk kemeja, polo shirt, dan jaket.
                  </div>
                  <div className="rounded-lg bg-paper p-4 border border-line-light">
                    <strong className="block text-ink text-sm mb-1">Sablon Plastisol</strong>
                    Cat berbasis minyak dengan daya lekat luar biasa, warna cerah dan tajam pada kain kaos gelap maupun terang.
                  </div>
                  <div className="rounded-lg bg-paper p-4 border border-line-light">
                    <strong className="block text-ink text-sm mb-1">Sablon DTF / Rubber</strong>
                    Sangat fleksibel untuk logo gradasi penuh warna atau kaos dalam jumlah pesanan sedang tanpa biaya film terpisah.
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 4: STANDAR UKURAN & SIZE CHART FITTING */}
          <section className="bg-canvas py-16 sm:py-20 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                
                <div className="lg:col-span-5">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                    / AKURASI FITTING /
                  </span>
                  <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-3xl">
                    Pola Standar Lokal &amp; Panduan Fitting
                  </h2>
                  <p className="mt-4 text-xs leading-relaxed text-muted sm:text-sm">
                    Kami menggunakan standar ukuran tubuh Indonesia (Asian Fit) yang proporsional pada lingkar dada, panjang badan, dan panjang lengan.
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-muted sm:text-sm">
                    Untuk pemesanan seragam kerja dan perusahaan, penentuan ukuran seluruh anggota tim secara tepat sebelum pemotongan kain massal sangat penting guna menghindari ketidaksesuaian ukuran pakaian saat seragam selesai diproduksi.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <div className="overflow-x-auto rounded-xl border border-line-light bg-paper shadow-xs">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-[#FAF7F2] border-b border-line-light text-ink font-bold">
                        <tr>
                          <th className="p-3 sm:p-4">Ukuran Standar</th>
                          <th className="p-3 sm:p-4">Lebar Dada (cm)</th>
                          <th className="p-3 sm:p-4">Panjang Badan (cm)</th>
                          <th className="p-3 sm:p-4">Kategori Penggunaan</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-line-light text-muted">
                        <tr>
                          <td className="p-3 sm:p-4 font-bold text-ink">S</td>
                          <td className="p-3 sm:p-4">48 - 50</td>
                          <td className="p-3 sm:p-4">68 - 70</td>
                          <td className="p-3 sm:p-4">Slim / Standard</td>
                        </tr>
                        <tr>
                          <td className="p-3 sm:p-4 font-bold text-ink">M</td>
                          <td className="p-3 sm:p-4">50 - 52</td>
                          <td className="p-3 sm:p-4">70 - 72</td>
                          <td className="p-3 sm:p-4">Standard Adult</td>
                        </tr>
                        <tr>
                          <td className="p-3 sm:p-4 font-bold text-ink">L</td>
                          <td className="p-3 sm:p-4">53 - 55</td>
                          <td className="p-3 sm:p-4">72 - 74</td>
                          <td className="p-3 sm:p-4">Standard Adult</td>
                        </tr>
                        <tr>
                          <td className="p-3 sm:p-4 font-bold text-ink">XL</td>
                          <td className="p-3 sm:p-4">56 - 58</td>
                          <td className="p-3 sm:p-4">74 - 76</td>
                          <td className="p-3 sm:p-4">Large Adult</td>
                        </tr>
                        <tr>
                          <td className="p-3 sm:p-4 font-bold text-ink">XXL / 3XL</td>
                          <td className="p-3 sm:p-4">60 - 64</td>
                          <td className="p-3 sm:p-4">76 - 80</td>
                          <td className="p-3 sm:p-4">Big Size Custom</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <span className="block mt-2 text-[11px] text-muted italic">
                    *Toleransi jahitan konveksi tekstil wajar berkisar antara ±1 s/d 2 cm.
                  </span>
                </div>

              </div>
            </div>
          </section>

          {/* SECTION 5: ALUR PRODUKSI PAKAIAN */}
          <section id="alur-produksi" className="bg-paper py-16 sm:py-24 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              
              <div className="max-w-2xl mb-12">
                <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                  / WORKFLOW PRODUKSI /
                </span>
                <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-4xl">
                  Tahapan Pembuatan Seragam &amp; Pakaian
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  Setiap pesanan melewati tahapan verifikasi pola dan persetujuan visual sebelum masuk mesin produksi.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl border border-line-light bg-canvas p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-action text-sm font-extrabold text-white mb-4">
                    01
                  </div>
                  <h3 className="text-base font-bold text-ink">Diskusi Model &amp; Kain</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    Tentukan model pakaian (kemeja, polo, kaos), pilihan jenis kain, warna dasar, dan data jumlah ukuran.
                  </p>
                </div>

                <div className="rounded-xl border border-line-light bg-canvas p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-action text-sm font-extrabold text-white mb-4">
                    02
                  </div>
                  <h3 className="text-base font-bold text-ink">Approval Mockup Visual</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    Kami buatkan lembar mockup digital berisi letak posisi bordir/sablon dan detail warna untuk disetujui.
                  </p>
                </div>

                <div className="rounded-xl border border-line-light bg-canvas p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-action text-sm font-extrabold text-white mb-4">
                    03
                  </div>
                  <h3 className="text-base font-bold text-ink">Cutting &amp; Penjahitan</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    Kain dipotong presisi sesuai pola ukuran, dilanjutkan proses bordir/sablon, penjahitan stik, dan obras.
                  </p>
                </div>

                <div className="rounded-xl border border-line-light bg-canvas p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-action text-sm font-extrabold text-white mb-4">
                    04
                  </div>
                  <h3 className="text-base font-bold text-ink">Finishing &amp; Steam Ironing</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted sm:text-sm">
                    Pembersihan sisa benang (trimming), penyetrikaan uap agar rapi, pemeriksaan QC, dan pengemasan individual polybag.
                  </p>
                </div>
              </div>

            </div>
          </section>

          {/* SECTION 6: FAQ KONVEKSI PAKAIAN */}
          <section id="faq-pakaian" className="bg-canvas py-16 sm:py-24 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                
                <div className="lg:col-span-4">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-action block mb-2">
                    / TANYA JAWAB /
                  </span>
                  <h2 className="text-2xl font-black tracking-tight text-ink font-display sm:text-4xl">
                    FAQ Konveksi Pakaian &amp; Seragam
                  </h2>
                  <p className="mt-3 text-sm text-muted leading-relaxed sm:text-base">
                    Jawaban mengenai ketersediaan ukuran, ketahanan bordir/sablon, dan prosedur pemesanan.
                  </p>
                </div>

                <div className="lg:col-span-8 flex flex-col gap-4">
                  {APPAREL_FAQS.map((faq) => (
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

          {/* SECTION 7: INTERLINKING KE PILAR TAS */}
          <section className="bg-paper py-12 sm:py-16 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-2xl border border-line-light bg-[#FAF7F2] p-6 sm:p-8">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-action block mb-1">
                    Layanan Terkait
                  </span>
                  <h3 className="text-xl font-black text-ink font-display">
                    Melengkapi Seragam dengan Tas atau Goodie Bag?
                  </h3>
                  <p className="mt-1 text-xs text-muted sm:text-sm max-w-xl">
                    Kami juga memproduksi ransel laptop kerja, tote bag seminar, pouch souvenir, dan goodie bag custom yang serasi dengan seragam perusahaan Anda.
                  </p>
                </div>

                <Link
                  href="/konveksi-tas/"
                  className="inline-flex min-h-[46px] shrink-0 items-center justify-center gap-2 rounded-md border border-ink bg-dark px-6 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action"
                >
                  <span>Jelajahi Konveksi Tas</span>
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
                Wujudkan Kebutuhan Seragam &amp; Pakaian Custom Anda
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#A2A9AB] sm:text-base">
                Diskusikan kebutuhan seragam kerja, kemeja kantor, polo shirt, atau kaos custom Anda bersama tim kami. Dapatkan rekomendasi kain dan penawaran transparan.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/kontak/"
                  className="inline-flex min-h-[48px] items-center justify-center gap-1.5 rounded-md bg-action px-8 text-sm font-bold text-white shadow-md transition-all hover:bg-action-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-action focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
                >
                  <span>Minta Penawaran Seragam</span>
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
