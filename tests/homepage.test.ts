import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

test("Step 01 Redesign: Homepage Architecture and Anti-Slop v4 Verification", async (t) => {
  const pagePath = path.resolve(process.cwd(), "src/app/page.tsx");
  const layoutPath = path.resolve(process.cwd(), "src/app/layout.tsx");

  await t.test("Page and layout files exist", () => {
    assert.ok(fs.existsSync(pagePath), "src/app/page.tsx must exist");
    assert.ok(fs.existsSync(layoutPath), "src/app/layout.tsx must exist");
  });

  await t.test("Layout sets lang=id, Plus Jakarta Sans, and Archivo fonts per DESIGN.md v4", () => {
    const layoutContent = fs.readFileSync(layoutPath, "utf8");
    assert.ok(layoutContent.includes('lang="id"'), "Must specify lang=id");
    assert.ok(layoutContent.includes("Plus_Jakarta_Sans"), "Must import Plus Jakarta Sans");
    assert.ok(layoutContent.includes("Archivo"), "Must import Archivo display font");
    assert.ok(layoutContent.includes("metadataBase"), "Must configure metadataBase");
  });

  await t.test("Redesigned component files exist", () => {
    const components = [
      "Header.tsx",
      "Hero.tsx",
      "ServicePillars.tsx",
      "UseCasesSection.tsx",
      "OrderProcess.tsx",
      "FaqAccordion.tsx",
      "FinalCtaSection.tsx",
      "Footer.tsx",
      "icons.tsx",
    ];

    for (const comp of components) {
      const compPath = path.resolve(process.cwd(), "src/components", comp);
      assert.ok(fs.existsSync(compPath), `src/components/${comp} must exist`);
    }
  });

  await t.test("Hero contains single, clear B2B H1 headline and priority product Image", () => {
    const heroPath = path.resolve(process.cwd(), "src/components/Hero.tsx");
    const heroContent = fs.readFileSync(heroPath, "utf8");
    assert.ok(heroContent.includes("<h1"), "Hero must contain <h1 tag");
    assert.ok(heroContent.includes("Konveksi Tas & Pakaian Custom"), "H1 must state core service");
    assert.ok(heroContent.includes("<Image"), "Hero must contain Image component for dominant product visual");
    assert.ok(heroContent.includes("priority"), "Hero Image must be priority loaded per R-40");
  });

  await t.test("ServicePillars explicitly specifies both Tas and Pakaian pillars with product imagery", () => {
    const pillarsPath = path.resolve(process.cwd(), "src/components/ServicePillars.tsx");
    const pillarsContent = fs.readFileSync(pillarsPath, "utf8");
    assert.ok(pillarsContent.includes("Konveksi Tas Custom"), "Must feature Konveksi Tas");
    assert.ok(pillarsContent.includes("Konveksi Pakaian & Seragam"), "Must feature Konveksi Pakaian");
    assert.ok(pillarsContent.includes('id="layanan"'), "Must have id=layanan for in-page navigation");
    assert.ok(
      pillarsContent.includes("service-bag-detail.jpg") || pillarsContent.includes("service-bag-showcase.jpg"),
      "Must feature bag showcase image"
    );
    assert.ok(
      pillarsContent.includes("service-apparel-detail.jpg") || pillarsContent.includes("service-apparel-showcase.jpg"),
      "Must feature apparel showcase image"
    );
  });

  await t.test("Navigation links in Header match defined routes with zero dead links", () => {
    const headerPath = path.resolve(process.cwd(), "src/components/Header.tsx");
    const headerContent = fs.readFileSync(headerPath, "utf8");
    const targets = ["/konveksi-tas/", "/konveksi-pakaian/", "#cara-pesan", "#faq"];

    for (const target of targets) {
      assert.ok(headerContent.includes(target), `Header must contain working route/anchor ${target}`);
    }
  });

  await t.test("Asset register documents all product images per DESIGN.md v4", () => {
    const assetRegisterPath = path.resolve(process.cwd(), "docs/asset-register.md");
    assert.ok(fs.existsSync(assetRegisterPath), "docs/asset-register.md must exist");
    const content = fs.readFileSync(assetRegisterPath, "utf8");
    assert.ok(content.includes("hero-product-showcase.jpg"), "Must register hero image");
    assert.ok(content.includes("service-bag-showcase.jpg"), "Must register bag image");
    assert.ok(content.includes("service-apparel-showcase.jpg"), "Must register apparel image");
  });
});
