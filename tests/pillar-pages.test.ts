import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

test("Step 02A: SEO Service Pillar Pages Verification", async (t) => {
  const rootDir = process.cwd();
  const tasPagePath = path.resolve(rootDir, "src/app/konveksi-tas/page.tsx");
  const pakaianPagePath = path.resolve(rootDir, "src/app/konveksi-pakaian/page.tsx");
  const sitemapPath = path.resolve(rootDir, "src/app/sitemap.ts");
  const headerPath = path.resolve(rootDir, "src/components/Header.tsx");

  await t.test("Pillar page files exist", () => {
    assert.ok(fs.existsSync(tasPagePath), "src/app/konveksi-tas/page.tsx must exist");
    assert.ok(fs.existsSync(pakaianPagePath), "src/app/konveksi-pakaian/page.tsx must exist");
  });

  await t.test("Konveksi Tas page has unique single H1, metadata, and canonical", () => {
    const content = fs.readFileSync(tasPagePath, "utf8");
    assert.ok(content.includes("<h1"), "Must contain <h1 tag");
    assert.ok(content.includes("Konveksi Tas Custom"), "H1 must state core service");
    assert.ok(content.includes("https://abutas.com/konveksi-tas/"), "Must specify canonical URL");
    assert.ok(content.includes("service-bag-detail.jpg"), "Must include product visual");
    assert.ok(content.includes("/konveksi-pakaian/"), "Must interlink to apparel pillar");
    assert.ok(content.includes("BreadcrumbList"), "Must include BreadcrumbList JSON-LD");
    assert.ok(content.includes("Service"), "Must include Service JSON-LD");
  });

  await t.test("Konveksi Pakaian page has unique single H1, metadata, and canonical", () => {
    const content = fs.readFileSync(pakaianPagePath, "utf8");
    assert.ok(content.includes("<h1"), "Must contain <h1 tag");
    assert.ok(content.includes("Konveksi Pakaian &amp; Seragam Custom"), "H1 must state apparel service");
    assert.ok(content.includes("https://abutas.com/konveksi-pakaian/"), "Must specify canonical URL");
    assert.ok(content.includes("service-apparel-detail.jpg"), "Must include apparel visual");
    assert.ok(content.includes("/konveksi-tas/"), "Must interlink to bag pillar");
    assert.ok(content.includes("BreadcrumbList"), "Must include BreadcrumbList JSON-LD");
    assert.ok(content.includes("Service"), "Must include Service JSON-LD");
  });

  await t.test("Both pages have distinct editorial layout structures", () => {
    const tasContent = fs.readFileSync(tasPagePath, "utf8");
    const pakaianContent = fs.readFileSync(pakaianPagePath, "utf8");
    assert.notStrictEqual(tasContent, pakaianContent, "Pillar pages must have distinct content and structure");
    assert.ok(tasContent.includes("Tote Bag & Goodie Bag"), "Tas must detail bag categories");
    assert.ok(pakaianContent.includes("Polo Shirt (Kaos Wangki)"), "Pakaian must detail apparel categories");
    assert.ok(pakaianContent.includes("Pola Standar Lokal"), "Pakaian must feature size chart section");
  });

  await t.test("Sitemap includes both published pillar page URLs", () => {
    const sitemapContent = fs.readFileSync(sitemapPath, "utf8");
    assert.ok(sitemapContent.includes("/konveksi-tas/"), "Sitemap must include konveksi-tas");
    assert.ok(sitemapContent.includes("/konveksi-pakaian/"), "Sitemap must include konveksi-pakaian");
  });

  await t.test("Header provides accessible multipage dropdown for services", () => {
    const headerContent = fs.readFileSync(headerPath, "utf8");
    assert.ok(headerContent.includes('role="menu"'), "Dropdown must define ARIA role=menu");
    assert.ok(headerContent.includes("aria-haspopup"), "Button must have aria-haspopup");
    assert.ok(headerContent.includes("aria-expanded"), "Button must have aria-expanded");
    assert.ok(headerContent.includes("/konveksi-tas/"), "Must link to /konveksi-tas/");
    assert.ok(headerContent.includes("/konveksi-pakaian/"), "Must link to /konveksi-pakaian/");
  });
});
