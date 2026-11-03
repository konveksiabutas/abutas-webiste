import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RfqContactForm } from "@/components/RfqContactForm";
import { getEffectiveBusinessConfig } from "@/lib/sanity";
import { getWhatsAppConsultationUrl } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontak Kami & Permintaan Penawaran | ABUTAS",
  description:
    "Hubungi tim ABUTAS untuk konsultasi spesifikasi material dan permintaan penawaran (RFQ) produksi konveksi tas serta pakaian custom.",
  alternates: {
    canonical: "https://abutas.com/kontak/",
  },
  openGraph: {
    title: "Kontak Kami & Permintaan Penawaran | ABUTAS",
    description:
      "Hubungi tim ABUTAS untuk konsultasi spesifikasi material dan permintaan penawaran (RFQ) produksi konveksi tas serta pakaian custom.",
    url: "https://abutas.com/kontak/",
    siteName: "ABUTAS",
    locale: "id_ID",
    type: "website",
  },
};

export default async function KontakPage() {
  const businessConfig = await getEffectiveBusinessConfig();
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
            name: "Kontak",
            item: "https://abutas.com/kontak/",
          },
        ],
      },
      {
        "@type": "ContactPage",
        name: "Kontak ABUTAS",
        description: "Saluran komunikasi resmi dan formulir penawaran produksi konveksi tas dan pakaian custom.",
        url: "https://abutas.com/kontak/",
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
                    Kontak &amp; Permintaan Penawaran
                  </li>
                </ol>
              </nav>
            </div>
          </div>

          {/* PAGE HERO */}
          <section className="relative border-b border-line-light bg-canvas py-12 sm:py-16">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-action">
                / SALURAN KOMUNIKASI /
              </span>
              <h1 className="mt-3 text-3xl font-black leading-[1.15] tracking-tight text-ink font-display sm:text-5xl">
                Hubungi Tim ABUTAS
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg max-w-2xl">
                Siap mendiskusikan konsep desain, pilihan bahan kain/tas, serta perkiraan biaya produksi untuk perusahaan, event, atau brand Anda.
              </p>
            </div>
          </section>

          {/* MAIN CONTENT: 2 COLUMNS (INFO LEFT, FORM RIGHT) */}
          <section className="bg-canvas py-12 sm:py-20 border-b border-line-light">
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="grid gap-12 lg:grid-cols-12">
                
                {/* Left Column: Contact Channels & Operational Info */}
                <div className="lg:col-span-5 space-y-6">
                  
                  {/* Card 1: WhatsApp Channel */}
                  <div className="rounded-xl border border-line-light bg-paper p-6 shadow-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-action-subtle text-action" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-ink">WhatsApp Resmi</h3>
                        <span className="text-[11px] font-bold text-action bg-action-subtle/20 px-1.5 py-0.5 rounded">
                          {businessConfig.whatsapp.verified ? "Resmi Terverifikasi" : "Belum Terverifikasi"}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted leading-relaxed sm:text-sm">
                      Hubungi tim konsultasi kami langsung via WhatsApp resmi untuk mendiskusikan konsep produk, pemilihan bahan kain/tas, serta penawaran biaya produksi.
                    </p>
                    <div className="mt-4 pt-3 border-t border-line-light flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-sm font-extrabold text-ink font-mono">
                        {businessConfig.whatsapp.display}
                      </span>
                      <a
                        href={getWhatsAppConsultationUrl("Halo ABUTAS, saya ingin konsultasi mengenai produksi konveksi custom.", businessConfig.whatsapp.numeric)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-action hover:underline"
                      >
                        <span>Chat WhatsApp</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>

                  {/* Card 2: Email Channel */}
                  <div className="rounded-xl border border-line-light bg-paper p-6 shadow-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-action-subtle text-action" aria-hidden="true">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-ink">Email Korespondensi</h3>
                        <span className="text-[11px] font-bold text-action bg-action-subtle/20 px-1.5 py-0.5 rounded">
                          {businessConfig.email.verified ? "Resmi Terverifikasi" : "Tahap Konfigurasi Mailbox"}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted leading-relaxed sm:text-sm">
                      Kirimkan dokumen Purchase Order (PO), berkas spesifikasi teknis desain, atau permintaan penawaran resmi langsung ke alamat email bisnis kami:
                    </p>
                    <div className="mt-4 pt-3 border-t border-line-light flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <span className="text-sm font-extrabold text-ink font-mono">
                        {businessConfig.email.address}
                      </span>
                      <a
                        href={`mailto:${businessConfig.email.address}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-action hover:underline"
                      >
                        <span>Kirim Email</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>

                  {/* Card 3: Operational Hours & Workshop Policy */}
                  <div className="rounded-xl border border-line-light bg-paper p-6 shadow-xs">
                    <h3 className="text-sm font-bold text-ink uppercase tracking-wider mb-3">
                      Waktu Operasional &amp; Layanan
                    </h3>
                    <ul className="space-y-2.5 text-xs text-muted sm:text-sm">
                      <li className="flex items-start justify-between">
                        <span className="font-medium text-ink">Senin – Sabtu:</span>
                        <span>08.30 – 17.00 WIB</span>
                      </li>
                      <li className="flex items-start justify-between">
                        <span className="font-medium text-ink">Minggu &amp; Libur Nasional:</span>
                        <span className="text-action">Tutup</span>
                      </li>
                    </ul>
                    <div className="mt-4 pt-3 border-t border-line-light text-xs text-muted leading-relaxed">
                      <strong>Kebijakan Kunjungan:</strong> Seluruh konsultasi spesifikasi saat ini dipusatkan melalui koordinasi digital terpadu. Workshop produksi fisik tidak melayani kunjungan publik umum tanpa janji temu resmi.
                    </div>
                  </div>

                </div>

                {/* Right Column: RFQ Form */}
                <div className="lg:col-span-7">
                  <RfqContactForm
                    whatsappNumeric={businessConfig.whatsapp.numeric}
                    whatsappDisplay={businessConfig.whatsapp.display}
                    officialEmail={businessConfig.email.address}
                  />
                </div>

              </div>
            </div>
          </section>

        </main>

        <Footer />
      </div>
    </>
  );
}
