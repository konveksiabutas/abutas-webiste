import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PortfolioViewer } from "@/components/PortfolioViewer";
import { getPublishedPortfolio, getSlugString } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Portofolio Produksi | ABUTAS Creative Manufacturing Studio",
  description:
    "Arsip dokumentasi hasil produksi tas dan pakaian custom ABUTAS untuk perusahaan, event, dan brand.",
  alternates: {
    canonical: "https://abutas.com/portofolio/",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function PortofolioPage() {
  const portfolio = await getPublishedPortfolio();

  return (
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
                  Portofolio
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* PAGE HERO */}
        <section className="relative border-b border-line-light bg-canvas py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-action">
                / DOKUMENTASI PRODUKSI /
              </span>
              <h1 className="mt-3 text-3xl font-black leading-[1.15] tracking-tight text-ink font-display sm:text-5xl">
                Arsip Portofolio &amp; Hasil Pengerjaan
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Eksplorasi referensi model tas custom dan seragam pakaian yang dikerjakan dengan standar perhatian detail dan pemilihan bahan berkualitas.
              </p>
            </div>
          </div>
        </section>

        {/* PORTFOLIO CONTENT */}
        <section className="bg-canvas py-12 sm:py-20 border-b border-line-light">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            {portfolio.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {portfolio.map((item) => {
                  const slug = getSlugString(item.slug);
                  const categoryBadge =
                    item.category === "tas" ? "Konveksi Tas" : "Konveksi Pakaian";
                  return (
                    <article
                      key={item._id}
                      className="group flex flex-col justify-between rounded-2xl border border-line-light bg-paper p-6 transition-all hover:border-action hover:shadow-xs"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-muted mb-3">
                          <span className="font-bold uppercase tracking-wider text-action">
                            {categoryBadge}
                          </span>
                          {item.year && <span>{item.year}</span>}
                        </div>

                        <h2 className="text-lg font-bold text-ink font-display leading-snug group-hover:text-action transition-colors">
                          <Link href={`/portofolio/${slug}/`}>
                            {item.title}
                          </Link>
                        </h2>

                        <p className="mt-2 text-xs font-medium text-muted">
                          Produk: <span className="text-ink font-semibold">{item.productType}</span>
                        </p>

                        <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-3">
                          {item.description}
                        </p>

                        <div className="mt-4 rounded-lg bg-canvas p-3 text-[11px] text-muted space-y-1">
                          <p>
                            <strong className="text-ink">Material:</strong> {item.materials}
                          </p>
                          <p>
                            <strong className="text-ink">Branding:</strong> {item.brandingTechnique}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-line-light flex items-center justify-between text-xs">
                        {item.clientPermissionReleased && item.clientInfo ? (
                          <span className="text-muted">Klien: {item.clientInfo}</span>
                        ) : (
                          <span className="text-muted">Proyek Terverifikasi</span>
                        )}
                        <Link
                          href={`/portofolio/${slug}/`}
                          className="font-bold text-action hover:underline"
                        >
                          Lihat Detail &rarr;
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <PortfolioViewer />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
