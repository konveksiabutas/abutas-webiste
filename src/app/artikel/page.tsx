import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArticleIndexViewer } from "@/components/ArticleIndexViewer";
import { getPublishedArticles, getSlugString } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Panduan & Artikel Konveksi Tas dan Pakaian | ABUTAS",
  description:
    "Kumpulan panduan edukatif mengenai pemilihan bahan tas, karakteristik kain seragam, teknik sablon dan bordir, serta tips pengadaan konveksi custom B2B.",
  alternates: {
    canonical: "https://abutas.com/artikel/",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default async function ArtikelPage() {
  const articles = await getPublishedArticles();

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
                  Artikel &amp; Panduan
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
                / TOPICAL KNOWLEDGE /
              </span>
              <h1 className="mt-3 text-3xl font-black leading-[1.15] tracking-tight text-ink font-display sm:text-5xl">
                Panduan &amp; Artikel Konveksi
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
                Pusat referensi teknis pemilihan material, komparasi kain, teknik sablon dan bordir komputer, serta panduan praktis pengadaan produksi B2B.
              </p>
            </div>
          </div>
        </section>

        {/* ARTICLES CONTENT */}
        <section className="bg-canvas py-12 sm:py-20 border-b border-line-light">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            {articles.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((art) => {
                  const slug = getSlugString(art.slug);
                  return (
                    <article
                      key={art._id}
                      className="group flex flex-col justify-between rounded-2xl border border-line-light bg-paper p-6 transition-all hover:border-action hover:shadow-xs"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-muted mb-3">
                          <span className="font-bold uppercase tracking-wider text-action">
                            {art.category}
                          </span>
                          {art.publishedAt && (
                            <time dateTime={art.publishedAt}>
                              {new Date(art.publishedAt).toLocaleDateString("id-ID", {
                                month: "short",
                                year: "numeric",
                              })}
                            </time>
                          )}
                        </div>

                        <h2 className="text-lg font-bold text-ink font-display leading-snug group-hover:text-action transition-colors">
                          <Link href={`/artikel/${slug}/`}>
                            {art.title}
                          </Link>
                        </h2>

                        <p className="mt-3 text-xs leading-relaxed text-muted line-clamp-3">
                          {art.excerpt}
                        </p>
                      </div>

                      <div className="mt-6 pt-4 border-t border-line-light flex items-center justify-between text-xs">
                        <span className="text-muted">{art.author || "Tim Redaksi"}</span>
                        <Link
                          href={`/artikel/${slug}/`}
                          className="font-bold text-action hover:underline"
                        >
                          Baca Panduan &rarr;
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <ArticleIndexViewer />
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
