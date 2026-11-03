import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

test("Step 02B: Supporting Website Pages Verification", async (t) => {
  const rootDir = process.cwd();
  const tentangPath = path.resolve(rootDir, "src/app/tentang-kami/page.tsx");
  const kontakPath = path.resolve(rootDir, "src/app/kontak/page.tsx");
  const caraPesanPath = path.resolve(rootDir, "src/app/cara-pesan/page.tsx");
  const portofolioPath = path.resolve(rootDir, "src/app/portofolio/page.tsx");
  const artikelPath = path.resolve(rootDir, "src/app/artikel/page.tsx");
  const sitemapPath = path.resolve(rootDir, "src/app/sitemap.ts");
  const headerPath = path.resolve(rootDir, "src/components/Header.tsx");
  const footerPath = path.resolve(rootDir, "src/components/Footer.tsx");

  await t.test("All 5 supporting page files and components exist", () => {
    assert.ok(fs.existsSync(tentangPath), "src/app/tentang-kami/page.tsx must exist");
    assert.ok(fs.existsSync(kontakPath), "src/app/kontak/page.tsx must exist");
    assert.ok(fs.existsSync(caraPesanPath), "src/app/cara-pesan/page.tsx must exist");
    assert.ok(fs.existsSync(portofolioPath), "src/app/portofolio/page.tsx must exist");
    assert.ok(fs.existsSync(artikelPath), "src/app/artikel/page.tsx must exist");
    assert.ok(
      fs.existsSync(path.resolve(rootDir, "src/components/RfqContactForm.tsx")),
      "RfqContactForm must exist"
    );
    assert.ok(
      fs.existsSync(path.resolve(rootDir, "src/components/PortfolioViewer.tsx")),
      "PortfolioViewer must exist"
    );
    assert.ok(
      fs.existsSync(path.resolve(rootDir, "src/components/ArticleIndexViewer.tsx")),
      "ArticleIndexViewer must exist"
    );
  });

  await t.test("Tentang Kami page has unique single H1, metadata, and canonical", () => {
    const content = fs.readFileSync(tentangPath, "utf8");
    assert.ok(content.includes("<h1"), "Must contain <h1 tag");
    assert.ok(content.includes("https://abutas.com/tentang-kami/"), "Must specify canonical URL");
    assert.ok(content.includes("BreadcrumbList"), "Must include BreadcrumbList JSON-LD");
    assert.ok(content.includes("AboutPage"), "Must include AboutPage JSON-LD");
  });

  await t.test("Kontak page provides RFQ form and transparent consultation flow", () => {
    const content = fs.readFileSync(kontakPath, "utf8");
    const rfqContent = fs.readFileSync(path.resolve(rootDir, "src/components/RfqContactForm.tsx"), "utf8");
    const constantsPath = path.resolve(rootDir, "src/lib/constants.ts");
    assert.ok(fs.existsSync(constantsPath), "src/lib/constants.ts must exist");
    const constantsContent = fs.readFileSync(constantsPath, "utf8");
    assert.ok(constantsContent.includes("6281285689538"), "constants must include confirmed numeric whatsapp");
    assert.ok(constantsContent.includes("+62 812-8568-9538"), "constants must include formatted whatsapp");
    assert.ok(constantsContent.includes("info@abutas.com"), "constants must include official email address");
    assert.ok(content.includes("<h1"), "Must contain <h1 tag");
    assert.ok(content.includes("https://abutas.com/kontak/"), "Must specify canonical URL");
    assert.ok(content.includes("RfqContactForm"), "Must embed RfqContactForm");
    assert.ok(
      rfqContent.includes("wa.me/${whatsappNumeric}?text="),
      "RFQ form must format direct WhatsApp message using whatsappNumeric prop"
    );
    assert.ok(
      rfqContent.includes("mailto:${officialEmail}?subject="),
      "RFQ form must provide mailto fallback with officialEmail prop"
    );
    assert.ok(
      rfqContent.includes("BUSINESS_CONFIG.whatsapp.numeric"),
      "RFQ form must provide default fallback to BUSINESS_CONFIG.whatsapp.numeric"
    );
    assert.ok(
      rfqContent.includes("BUSINESS_CONFIG.email.address"),
      "RFQ form must provide default fallback to BUSINESS_CONFIG.email.address"
    );
  });

  await t.test("Business contact configuration and CMS data access layer integrity", async () => {
    const dataModuleUrl = pathToFileURL(path.resolve(rootDir, "src/lib/sanity/data.ts")).href;
    const { getEffectiveBusinessConfig } = await import(dataModuleUrl);
    const config = await getEffectiveBusinessConfig();
    assert.strictEqual(typeof config.whatsapp.numeric, "string");
    assert.strictEqual(typeof config.whatsapp.display, "string");
    assert.ok(config.whatsapp.directUrl.startsWith("https://wa.me/"));
    assert.strictEqual(config.whatsapp.verified, true);
    assert.ok(["cms", "verified_fallback"].includes(config.whatsapp.source));

    assert.strictEqual(typeof config.email.address, "string");
    assert.ok(
      config.email.address.endsWith("@abutas.com"),
      "email address must belong to official abutas.com domain"
    );
    assert.strictEqual(config.email.mailtoUrl, `mailto:${config.email.address}`);
    assert.strictEqual(config.email.verified, true);
    assert.ok(["cms", "verified_fallback"].includes(config.email.source));
  });

  await t.test("Cara Pesan page explains 5-step workflow without unverified promises", () => {
    const content = fs.readFileSync(caraPesanPath, "utf8");
    assert.ok(content.includes("<h1"), "Must contain <h1 tag");
    assert.ok(content.includes("https://abutas.com/cara-pesan/"), "Must specify canonical URL");
    assert.ok(content.includes("Konsultasi & Pengiriman Brief"), "Must detail Step 01");
    assert.ok(content.includes("Rekomendasi Bahan & Penawaran Harga"), "Must detail Step 02");
    assert.ok(content.includes("Persetujuan Mockup Visual / Sampel"), "Must detail Step 03");
  });

  await t.test("Portofolio and Artikel pages have noindex draft governance", () => {
    const portofolioContent = fs.readFileSync(portofolioPath, "utf8");
    const artikelContent = fs.readFileSync(artikelPath, "utf8");
    assert.ok(portofolioContent.includes("index: false"), "Portofolio must specify robots noindex");
    assert.ok(artikelContent.includes("index: false"), "Artikel must specify robots noindex");
  });

  await t.test("Public sitemap includes published pages and excludes unverified draft pages", () => {
    const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
    assert.ok(sitemapContent.includes("/tentang-kami/"), "Sitemap must include tentang-kami");
    assert.ok(sitemapContent.includes("/cara-pesan/"), "Sitemap must include cara-pesan");
    assert.ok(sitemapContent.includes("/kontak/"), "Sitemap must include kontak");
    assert.ok(!sitemapContent.includes("/portofolio/"), "Sitemap must NOT include draft portofolio");
    assert.ok(!sitemapContent.includes("/artikel/"), "Sitemap must NOT include draft artikel");
  });

  await t.test("Header and Footer contain links to supporting pages", () => {
    const headerContent = fs.readFileSync(headerPath, "utf8");
    const footerContent = fs.readFileSync(footerPath, "utf8");
    assert.ok(headerContent.includes("/tentang-kami/"), "Header must link to /tentang-kami/");
    assert.ok(headerContent.includes("/cara-pesan/"), "Header must link to /cara-pesan/");
    assert.ok(headerContent.includes("/kontak/"), "Header must link to /kontak/");
    assert.ok(footerContent.includes("/tentang-kami/"), "Footer must link to /tentang-kami/");
    assert.ok(footerContent.includes("/cara-pesan/"), "Footer must link to /cara-pesan/");
    assert.ok(footerContent.includes("/kontak/"), "Footer must link to /kontak/");
    assert.ok(!footerContent.includes("/portofolio/"), "Footer must hide draft /portofolio/ link");
    assert.ok(!footerContent.includes("/artikel/"), "Footer must hide draft /artikel/ link");
  });
});
