/**
 * ABUTAS.COM — Real CMS End-to-End Test Runner (Step 03B.3)
 *
 * Menguji alur:
 * Sanity Studio -> Draft -> Publish -> Next.js Static Export -> HTML -> Sitemap
 * Menggunakan dataset "staging" yang terisolasi dari "production".
 */

import { createClient } from "@sanity/client";
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const rootDir = process.cwd();

// Baca environment variables dari .env.local
function getEnvConfig() {
  const envPath = path.resolve(rootDir, ".env.local");
  const config = {
    projectId: "0ahnrkj4",
    dataset: "staging",
    writeToken: "",
  };

  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, "utf8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (trimmed.startsWith("NEXT_PUBLIC_SANITY_PROJECT_ID=")) {
        config.projectId = trimmed.split("=")[1].trim();
      }
      if (trimmed.startsWith("NEXT_PUBLIC_SANITY_DATASET=")) {
        config.dataset = trimmed.split("=")[1].trim();
      }
      if (trimmed.startsWith("SANITY_API_WRITE_TOKEN=")) {
        config.writeToken = trimmed.split("=")[1].trim();
      }
    }
  }

  return config;
}

const config = getEnvConfig();

console.log("=================================================");
console.log("ABUTAS — STEP 03B.3 REAL CMS END-TO-END TEST");
console.log("=================================================");
console.log(`Target Sanity Project : ${config.projectId}`);
console.log(`Target Dataset        : ${config.dataset}`);
console.log(`Has Write Token       : ${config.writeToken ? "YES (Automated API Mode)" : "NO (Studio Manual Mode)"}`);
console.log("-------------------------------------------------");

async function runTest() {
  const publicClient = createClient({
    projectId: config.projectId,
    dataset: config.dataset,
    apiVersion: "2024-01-01",
    useCdn: false,
  });

  // 1. Verifikasi dataset staging terhubung
  console.log("\n[1/6] Memverifikasi dataset staging...");
  try {
    const existing = await publicClient.fetch('*');
    console.log(`✓ Dataset '${config.dataset}' aktif. Total dokumen awal: ${existing.length}`);
  } catch (err) {
    console.error(`✗ Gagal menghubungi dataset '${config.dataset}':`, err.message);
    process.exit(1);
  }

  // Jika write token tersedia, lakukan otomatisasi end-to-end menyeluruh
  if (config.writeToken) {
    const writeClient = createClient({
      projectId: config.projectId,
      dataset: config.dataset,
      apiVersion: "2024-01-01",
      token: config.writeToken,
      useCdn: false,
    });

    const testArticleId = "e2e-test-article";
    const testArticleDraftId = `drafts.${testArticleId}`;
    const testPortfolioNoPermId = "e2e-test-portfolio-noperm";
    const testPortfolioPermId = "e2e-test-portfolio-perm";

    try {
      // 2. Uji Draft Isolation
      console.log("\n[2/6] Menguji Pembuatan & Isolasi Dokumen Draft...");
      const draftDoc = {
        _id: testArticleDraftId,
        _type: "article",
        title: "Panduan Uji Coba Konveksi E2E (Draft)",
        slug: { _type: "slug", current: "panduan-uji-coba-konveksi-e2e" },
        excerpt: "Artikel pengujian draft untuk memverifikasi isolasi konten.",
        category: "panduan-tas",
        body: [
          {
            _type: "block",
            children: [{ _type: "span", text: "Konten paragraf uji coba draft." }],
            markDefs: [],
            style: "normal",
          },
        ],
        contentStatus: "draft",
        publishedAt: new Date().toISOString(),
      };

      await writeClient.createOrReplace(draftDoc);
      console.log(`✓ Dokumen draft berhasil disimpan dengan ID: ${testArticleDraftId}`);

      // Query publik via perspektif published
      const publishedArticlesBefore = await publicClient.fetch(
        '*[_type == "article" && contentStatus == "published" && !(_id in path("drafts.**"))]'
      );
      const isDraftLeaked = publishedArticlesBefore.some((a) => a.slug?.current === "panduan-uji-coba-konveksi-e2e");
      if (isDraftLeaked) {
        throw new Error("FAIL: Dokumen draft bocor ke query publik published!");
      }
      console.log("✓ Verifikasi PASS: Dokumen draft TIDAK masuk query publik.");

      // Build static Next.js dengan draft aktif
      console.log("  Menjalankan build Next.js saat draft aktif...");
      execSync("npm run build", { stdio: "ignore" });
      const draftHtmlPath = path.resolve(rootDir, "out/artikel/panduan-uji-coba-konveksi-e2e/index.html");
      if (fs.existsSync(draftHtmlPath)) {
        throw new Error("FAIL: File HTML draft terbentuk di folder out!");
      }
      console.log("✓ Verifikasi PASS: File HTML draft TIDAK terbentuk di out/artikel/.");

      // 3. Uji Publikasi Konten Riil
      console.log("\n[3/6] Menguji Publikasi Artikel Riil...");
      const publishedDoc = {
        _id: testArticleId,
        _type: "article",
        title: "Panduan Memilih Bahan Tas Seminar Custom 2026",
        slug: { _type: "slug", current: "panduan-memilih-bahan-tas-seminar-custom-2026" },
        excerpt: "Panduan teknis pemilihan bahan Dinir, Kanvas, dan Cordura untuk tas seminar.",
        category: "panduan-tas",
        body: [
          {
            _type: "block",
            children: [{ _type: "span", text: "Berikut ulasan komparasi material tas seminar custom." }],
            markDefs: [],
            style: "normal",
          },
        ],
        author: "Tim Redaksi ABUTAS",
        publishedAt: new Date().toISOString(),
        seoTitle: "Panduan Memilih Bahan Tas Seminar Custom 2026 | ABUTAS",
        seoDescription: "Ulasan komprehensif pemilihan bahan Dinir, Kanvas, dan Cordura.",
        contentStatus: "published",
      };

      await writeClient.createOrReplace(publishedDoc);
      console.log(`✓ Artikel berhasil dipublikasikan dengan ID: ${testArticleId}`);

      // 4. Uji Portofolio dengan Kunci Izin Rilis Klien
      console.log("\n[4/6] Menguji Portofolio & Perlindungan Izin Rilis Klien...");
      const portfolioNoPerm = {
        _id: testPortfolioNoPermId,
        _type: "portfolio",
        title: "Tas Seminar PT Maju Bersama (Tanpa Izin Rilis)",
        slug: { _type: "slug", current: "tas-seminar-pt-maju-bersama" },
        category: "tas",
        productType: "Tas Seminar Dinir 600D",
        description: "Pengujian privasi klien saat izin rilis belum diberikan.",
        materials: "Dinir D300",
        brandingTechnique: "Sablon Rubber",
        year: "2026",
        clientPermissionReleased: false, // TIDAK BOLEH DIEKSPOR
        contentStatus: "published",
      };

      const portfolioPerm = {
        _id: testPortfolioPermId,
        _type: "portfolio",
        title: "Ransel Pelatihan Instansi Mandiri (Dengan Izin Rilis)",
        slug: { _type: "slug", current: "ransel-pelatihan-instansi-mandiri" },
        category: "tas",
        productType: "Ransel Laptop Bimo Cordura",
        description: "Pengujian portofolio yang memiliki persetujuan rilis klien.",
        materials: "Cordura Bimo 1000D",
        brandingTechnique: "Bordir Komputer",
        year: "2026",
        clientPermissionReleased: true, // WAJIB DIEKSPOR
        contentStatus: "published",
      };

      await writeClient.createOrReplace(portfolioNoPerm);
      await writeClient.createOrReplace(portfolioPerm);
      console.log("✓ Dua dokumen portofolio uji (dengan dan tanpa izin rilis) berhasil disimpan.");

      // 5. Jalankan Static Export Build & Verifikasi File
      console.log("\n[5/6] Menjalankan Next.js Static Export Build...");
      execSync("npm run build", { stdio: "inherit" });

      console.log("\n  Memverifikasi output HTML di out/...");
      // Verifikasi artikel published
      const articleHtmlPath = path.resolve(rootDir, "out/artikel/panduan-memilih-bahan-tas-seminar-custom-2026/index.html");
      if (!fs.existsSync(articleHtmlPath)) {
        throw new Error("FAIL: HTML artikel published tidak terbentuk di out/!");
      }
      const articleHtml = fs.readFileSync(articleHtmlPath, "utf8");
      if (!articleHtml.includes("Panduan Memilih Bahan Tas Seminar Custom 2026")) {
        throw new Error("FAIL: Judul artikel tidak ditemukan di dalam HTML yang diekspor!");
      }
      console.log("✓ PASS: HTML artikel published terbentuk sempurna dengan konten riil.");

      // Verifikasi portofolio tanpa izin rilis (harus TIDAK ada)
      const noPermHtmlPath = path.resolve(rootDir, "out/portofolio/tas-seminar-pt-maju-bersama/index.html");
      if (fs.existsSync(noPermHtmlPath)) {
        throw new Error("FAIL: Portofolio tanpa izin rilis (clientPermissionReleased=false) bocor ke HTML statis!");
      }
      console.log("✓ PASS: Portofolio tanpa izin rilis TIDAK diekspor.");

      // Verifikasi portofolio dengan izin rilis (harus ADA)
      const permHtmlPath = path.resolve(rootDir, "out/portofolio/ransel-pelatihan-instansi-mandiri/index.html");
      if (!fs.existsSync(permHtmlPath)) {
        throw new Error("FAIL: Portofolio dengan izin rilis tidak terbentuk di out/!");
      }
      console.log("✓ PASS: Portofolio dengan izin rilis terbentuk sempurna.");

      // Verifikasi Sitemap
      const sitemapPath = path.resolve(rootDir, "out/sitemap.xml");
      const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
      if (!sitemapContent.includes("panduan-memilih-bahan-tas-seminar-custom-2026")) {
        throw new Error("FAIL: URL artikel published tidak terdaftar di sitemap.xml!");
      }
      if (sitemapContent.includes("tas-seminar-pt-maju-bersama")) {
        throw new Error("FAIL: URL portofolio tanpa izin rilis terdaftar di sitemap.xml!");
      }
      console.log("✓ PASS: Sitemap secara tepat menyertakan artikel published & mengecualikan portofolio tanpa izin.");

      // 6. Pembersihan Konten Uji Coba
      console.log("\n[6/6] Membersihkan Dokumen Pengujian dari Staging...");
      await writeClient.delete(testArticleDraftId);
      await writeClient.delete(testArticleId);
      await writeClient.delete(testPortfolioNoPermId);
      await writeClient.delete(testPortfolioPermId);
      console.log("✓ Seluruh dokumen pengujian berhasil dihapus dari dataset staging.");

      // Verifikasi kebersihan
      const afterClean = await publicClient.fetch('*');
      console.log(`✓ Dataset staging kembali bersih. Total dokumen: ${afterClean.length}`);

      // Build ulang untuk memastikan out/ kembali bersih
      console.log("  Membangun ulang website dalam keadaan bersih...");
      execSync("npm run build", { stdio: "ignore" });
      console.log("✓ Website statis kembali ke state bersih.");

      console.log("\n=================================================");
      console.log("HASIL: SEMUA PENGUJIAN END-TO-END CMS PASS (100%)");
      console.log("=================================================");
    } catch (err) {
      console.error("\n✗ TERJADI KESALAHAN PADA PENGUJIAN E2E:", err.message);
      // Pembersihan darurat jika gagal
      try {
        await writeClient.delete(testArticleDraftId);
        await writeClient.delete(testArticleId);
        await writeClient.delete(testPortfolioNoPermId);
        await writeClient.delete(testPortfolioPermId);
      } catch {
        // ignore
      }
      process.exit(1);
    }
  } else {
    // Mode manual Studio: panduan untuk pengujian interaktif pemilik
    console.log("\n[MODE MANUAL STUDIO]");
    console.log("Karena SANITY_API_WRITE_TOKEN belum ada di .env.local,");
    console.log("pengujian pembuatan dokumen dilakukan langsung melalui Studio:");
    console.log("1. Buka http://localhost:3333 di browser Anda.");
    console.log("2. Masuk ke menu 'Artikel & Panduan' -> Klik 'Create'.");
    console.log("3. Tulis artikel uji (misal: 'Uji Coba Staging') -> Biarkan sebagai DRAFT.");
    console.log("4. Jalankan 'npm run build' -> Pastikan HTML artikel belum terbentuk di out/.");
    console.log("5. Di Studio, klik tombol 'Publish'.");
    console.log("6. Jalankan 'npm run build' -> Pastikan HTML artikel terbentuk di out/.");
    console.log("7. Hapus artikel uji dari Studio setelah pengujian selesai.");
  }
}

runTest();
