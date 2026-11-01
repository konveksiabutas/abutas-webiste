import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { getPublishedPortfolio, getPortfolioBySlug, getSlugString } from "@/lib/sanity";

export const dynamicParams = false;

interface PortfolioPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const items = await getPublishedPortfolio();
  const validSlugs = items
    .map((item) => ({
      slug: getSlugString(item.slug),
    }))
    .filter((param) => param.slug.length > 0);

  // Next.js static export requires at least one route in generateStaticParams.
  // Jika belum ada portofolio terbit, gunakan placeholder yang tidak diindeks dan tidak masuk sitemap.
  if (validSlugs.length === 0) {
    return [{ slug: "_placeholder" }];
  }

  return validSlugs;
}

export async function generateMetadata({ params }: PortfolioPageProps): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "_placeholder") {
    return {
      title: "Halaman Tidak Ditemukan | ABUTAS",
      robots: { index: false, follow: false },
    };
  }

  const project = await getPortfolioBySlug(slug);

  if (!project) {
    return {
      title: "Portofolio Tidak Ditemukan | ABUTAS",
      robots: { index: false, follow: false },
    };
  }

  const title = project.seoTitle || `${project.title} | Portofolio ABUTAS`;
  const description = project.seoDescription || project.description;
  const canonical = `https://abutas.com/portofolio/${slug}/`;

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
      type: "website",
      siteName: "ABUTAS",
      locale: "id_ID",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function PortfolioDetailPage({ params }: PortfolioPageProps) {
  const { slug } = await params;
  const project = await getPortfolioBySlug(slug);

  if (!project) {
    notFound();
  }

  const canonicalUrl = `https://abutas.com/portofolio/${slug}/`;
  const categoryLabel = project.category === "tas" ? "Konveksi Tas Custom" : "Konveksi Pakaian & Seragam";
  const pillarHref = project.category === "tas" ? "/konveksi-tas/" : "/konveksi-pakaian/";

  // Structured Data (CreativeWork & BreadcrumbList)
  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    creator: {
      "@type": "Organization",
      name: "ABUTAS",
      url: "https://abutas.com",
    },
    dateCreated: project.year || "2026",
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
        name: "Portofolio",
        item: "https://abutas.com/portofolio/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-canvas text-ink antialiased selection:bg-action/20 selection:text-ink">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
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
                  <Link href="/portofolio/" className="hover:text-action transition-colors">
                    Portofolio
                  </Link>
                </li>
                <li aria-hidden="true" className="text-[#B0B7B9]">/</li>
                <li className="font-semibold text-ink truncate" aria-current="page">
                  {project.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* PROJECT DETAIL HEADER */}
        <section className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-block rounded-full bg-paper px-3 py-1 text-xs font-bold uppercase tracking-wider text-action border border-line-light">
                {categoryLabel}
              </span>
              {project.year && (
                <span className="text-xs text-muted">Tahun: {project.year}</span>
              )}
              {project.clientPermissionReleased && project.clientInfo && (
                <>
                  <span className="text-xs text-muted" aria-hidden="true">•</span>
                  <span className="text-xs text-muted">Klien: {project.clientInfo}</span>
                </>
              )}
            </div>

            <h1 className="mt-4 text-3xl font-black leading-[1.2] tracking-tight text-ink font-display sm:text-4xl md:text-5xl">
              {project.title}
            </h1>

            <p className="mt-4 text-lg leading-relaxed text-muted sm:text-xl">
              {project.description}
            </p>
          </div>

          {/* SPECIFICATIONS GRID */}
          <div className="mt-10 grid gap-4 border-y border-line-light py-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-xl border border-line-light bg-paper p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted">Jenis Produk</span>
              <p className="mt-1 font-bold text-ink text-sm sm:text-base">{project.productType}</p>
            </div>
            <div className="rounded-xl border border-line-light bg-paper p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted">Material Bahan</span>
              <p className="mt-1 font-bold text-ink text-sm sm:text-base">{project.materials}</p>
            </div>
            <div className="rounded-xl border border-line-light bg-paper p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted">Teknik Branding</span>
              <p className="mt-1 font-bold text-ink text-sm sm:text-base">{project.brandingTechnique}</p>
            </div>
            <div className="rounded-xl border border-line-light bg-paper p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-muted">Layanan Pilar</span>
              <Link href={pillarHref} className="mt-1 block font-bold text-action text-sm sm:text-base hover:underline">
                {categoryLabel} &rarr;
              </Link>
            </div>
          </div>

          {/* CONTEXTUAL INTERNAL LINKING */}
          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-line-light bg-paper/60 p-6">
            <div>
              <h2 className="text-sm font-bold text-ink font-display">
                Tertarik Memproduksi Pesanan Serupa?
              </h2>
              <p className="mt-1 text-xs text-muted">
                Diskusikan spesifikasi bahan, perkiraan kuantitas, dan waktu penyelesaian bersama tim kami.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/kontak/"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-action px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-action-hover"
              >
                Konsultasi Spesifikasi
              </Link>
              <Link
                href="/portofolio/"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-line-light bg-canvas px-4 py-2.5 text-xs font-semibold text-muted hover:text-ink"
              >
                Semua Portofolio
              </Link>
            </div>
          </div>
        </section>

        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
