import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import {
  getPublishedArticles,
  getArticleBySlug,
  getSlugString,
  type PortableTextBlock,
  type PortableTextChild,
} from "@/lib/sanity";

export const dynamicParams = false;

interface ArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const articles = await getPublishedArticles();
  const validSlugs = articles
    .map((art) => ({
      slug: getSlugString(art.slug),
    }))
    .filter((param) => param.slug.length > 0);

  // Next.js static export requires at least one route in generateStaticParams.
  // Jika belum ada artikel terbit, gunakan placeholder yang tidak diindeks dan tidak masuk sitemap.
  if (validSlugs.length === 0) {
    return [{ slug: "_placeholder" }];
  }

  return validSlugs;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "_placeholder") {
    return {
      title: "Halaman Tidak Ditemukan | ABUTAS",
      robots: { index: false, follow: false },
    };
  }

  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artikel Tidak Ditemukan | ABUTAS",
      robots: { index: false, follow: false },
    };
  }

  const title = article.seoTitle || `${article.title} | Panduan Konveksi ABUTAS`;
  const description = article.seoDescription || article.excerpt;
  const canonical = article.canonicalUrl || `https://abutas.com/artikel/${slug}/`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author || "Tim Redaksi ABUTAS"],
      siteName: "ABUTAS",
      locale: "id_ID",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const canonicalUrl = article.canonicalUrl || `https://abutas.com/artikel/${slug}/`;
  const authorName = article.author || "Tim Redaksi ABUTAS";
  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Terkini";

  // Structured Data (Schema.org Article & BreadcrumbList)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: authorName,
      url: "https://abutas.com",
    },
    publisher: {
      "@type": "Organization",
      name: "ABUTAS",
      url: "https://abutas.com",
      logo: {
        "@type": "ImageObject",
        url: "https://abutas.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonicalUrl,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
        name: "Artikel & Panduan",
        item: "https://abutas.com/artikel/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink antialiased selection:bg-action/20 selection:text-ink">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />

      <main id="top" className="flex-1">
        {/* Breadcrumb Navigation UI */}
        <div className="border-b border-line-light bg-paper/60 py-3 text-xs text-muted">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 truncate">
                <li>
                  <Link href="/" className="hover:text-action transition-colors">
                    Beranda
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#B0B7B9]">/</li>
                <li>
                  <Link href="/artikel/" className="hover:text-action transition-colors">
                    Artikel &amp; Panduan
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#B0B7B9]">/</li>
                <li className="font-semibold text-ink truncate" aria-current="page">
                  {article.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* ARTICLE HEADER */}
        <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
          <header className="border-b border-line-light pb-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-block rounded-full bg-paper px-3 py-1 text-xs font-bold uppercase tracking-wider text-action border border-line-light">
                {article.category}
              </span>
              <time dateTime={article.publishedAt} className="text-xs text-muted">
                {formattedDate}
              </time>
              <span className="text-xs text-muted" aria-hidden="true">•</span>
              <span className="text-xs text-muted">Oleh: {authorName}</span>
            </div>

            <h1 className="mt-4 text-3xl font-black leading-[1.2] tracking-tight text-ink font-display sm:text-4xl md:text-5xl">
              {article.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted border-l-2 border-action pl-4 font-sans sm:text-xl">
              {article.excerpt}
            </p>
          </header>

          {/* ARTICLE BODY */}
          <div className="prose prose-neutral max-w-none py-10 font-sans text-ink leading-relaxed space-y-6">
            {Array.isArray(article.body) && article.body.length > 0 ? (
              article.body.map((block: PortableTextBlock, idx: number) => {
                if (block._type === "block") {
                  const text = block.children?.map((c: PortableTextChild) => c.text || "").join("") || "";
                  if (block.style === "h2") {
                    return (
                      <h2 key={idx} className="mt-8 text-2xl font-bold font-display text-ink">
                        {text}
                      </h2>
                    );
                  }
                  if (block.style === "h3") {
                    return (
                      <h3 key={idx} className="mt-6 text-xl font-bold font-display text-ink">
                        {text}
                      </h3>
                    );
                  }
                  if (block.style === "blockquote") {
                    return (
                      <blockquote key={idx} className="border-l-4 border-line-dark pl-4 italic text-muted my-4">
                        {text}
                      </blockquote>
                    );
                  }
                  return (
                    <p key={idx} className="text-base sm:text-lg text-ink/90">
                      {text}
                    </p>
                  );
                }
                return null;
              })
            ) : (
              <p className="text-base text-muted italic">
                Uraian lengkap artikel ini sedang dalam proses sinkronisasi redaksi.
              </p>
            )}
          </div>

          {/* CONTEXTUAL INTERNAL LINKS */}
          <section className="mt-12 rounded-2xl border border-line-light bg-paper p-6 sm:p-8">
            <h2 className="text-lg font-bold text-ink font-display">
              Layanan Konveksi Terkait
            </h2>
            <p className="mt-1 text-xs text-muted">
              Konsultasikan kebutuhan produksi kustom Anda bersama tim teknis ABUTAS:
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Link
                href="/konveksi-tas/"
                className="group flex flex-col rounded-xl border border-line-light bg-canvas p-4 transition-all hover:border-action hover:shadow-xs"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-action">Layanan Pilar</span>
                <span className="mt-1 text-sm font-bold text-ink group-hover:text-action transition-colors">
                  Konveksi Tas Custom &rarr;
                </span>
                <span className="mt-1 text-xs text-muted">
                  Produksi ransel laptop, tote bag, tas seminar, waist bag, dan pouch custom.
                </span>
              </Link>
              <Link
                href="/konveksi-pakaian/"
                className="group flex flex-col rounded-xl border border-line-light bg-canvas p-4 transition-all hover:border-action hover:shadow-xs"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-action">Layanan Pilar</span>
                <span className="mt-1 text-sm font-bold text-ink group-hover:text-action transition-colors">
                  Konveksi Pakaian &amp; Seragam &rarr;
                </span>
                <span className="mt-1 text-xs text-muted">
                  Produksi kemeja kerja drill, polo shirt bordir, kaos acara, dan jaket kantor.
                </span>
              </Link>
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-line-light pt-4 text-xs">
              <Link href="/artikel/" className="font-semibold text-action hover:underline">
                &larr; Kembali ke Indeks Artikel
              </Link>
              <Link href="/cara-pesan/" className="text-muted hover:text-ink">
                Alur Pemesanan &amp; Konsultasi &rarr;
              </Link>
            </div>
          </section>
        </article>

        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
