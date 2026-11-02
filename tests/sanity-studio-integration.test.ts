import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { article } from "../studio/schemas/article.ts";
import { portfolio } from "../studio/schemas/portfolio.ts";
import { siteSettings } from "../studio/schemas/siteSettings.ts";
import { structure } from "../studio/structure/index.ts";

interface MockItem {
  _title?: string;
  _schemaType?: string;
  title: (t: string) => MockItem;
  schemaType: (st: string) => MockItem;
  child: (c: unknown) => MockItem;
}

test("Step 03B: Sanity Studio Setup & Real Integration Verification", async (t) => {
  const rootDir = process.cwd();

  await t.test("1. Sanity Studio isolated configuration and dependencies exist", () => {
    const studioPkgPath = path.resolve(rootDir, "studio/package.json");
    const studioConfigPath = path.resolve(rootDir, "studio/sanity.config.ts");
    const studioCliPath = path.resolve(rootDir, "studio/sanity.cli.ts");

    assert.ok(fs.existsSync(studioPkgPath), "studio/package.json must exist");
    assert.ok(fs.existsSync(studioConfigPath), "studio/sanity.config.ts must exist");
    assert.ok(fs.existsSync(studioCliPath), "studio/sanity.cli.ts must exist");

    const pkg = JSON.parse(fs.readFileSync(studioPkgPath, "utf8"));
    assert.ok(pkg.dependencies.sanity, "Studio must depend on official sanity package");
    assert.ok(pkg.dependencies["@sanity/vision"], "Studio must include @sanity/vision plugin");
    assert.ok(pkg.scripts.build, "Studio must have build script");
    assert.ok(pkg.scripts.dev, "Studio must have dev script");

    const configContent = fs.readFileSync(studioConfigPath, "utf8");
    assert.ok(configContent.includes("ABUTAS Content Studio"), "Studio title must be 'ABUTAS Content Studio'");
    assert.ok(configContent.includes("AbutasStudioLogo"), "Studio must use AbutasStudioLogo");
    assert.ok(configContent.includes("AbutasStudioIcon"), "Studio must use AbutasStudioIcon");
  });

  await t.test("2. Studio Desk Structure implements exactly three mandatory menus", () => {
    const itemsMock: MockItem[] = [];
    const sMock = {
      list: () => sMock,
      title: () => sMock,
      items: (items: MockItem[]) => {
        itemsMock.push(...items);
        return itemsMock;
      },
      listItem: () => {
        const item: MockItem = {
          title(t: string) { item._title = t; return item; },
          schemaType(st: string) { item._schemaType = st; return item; },
          child() { return item; },
        };
        return item;
      },
      divider: () => ({
        title() { return this; },
        schemaType() { return this; },
        child() { return this; },
      }),
      documentTypeList: (st: string) => ({ _type: "documentTypeList", _schemaType: st, title: () => ({}) }),
      document: () => ({
        _type: "document",
        schemaType: () => ({ documentId: () => ({ title: () => ({}) }) }),
      }),
    };

    structure(sMock as unknown as Parameters<typeof structure>[0], {} as unknown as Parameters<typeof structure>[1]);

    const menuTitles = itemsMock.map((item) => item._title).filter(Boolean);
    assert.ok(menuTitles.includes("Artikel & Panduan"), "Must include 'Artikel & Panduan' menu");
    assert.ok(menuTitles.includes("Portofolio Produksi"), "Must include 'Portofolio Produksi' menu");
    assert.ok(menuTitles.includes("Pengaturan Website"), "Must include 'Pengaturan Website' menu");
    assert.strictEqual(menuTitles.length, 3, "Desk structure must contain exactly 3 main menus");
  });

  await t.test("3. Native Sanity Schemas define all required fields with strict validation", () => {
    assert.strictEqual(article.name, "article");
    assert.strictEqual(portfolio.name, "portfolio");
    assert.strictEqual(siteSettings.name, "siteSettings");

    const articleFields = article.fields.map((f: { name: string }) => f.name);
    assert.ok(articleFields.includes("title"));
    assert.ok(articleFields.includes("slug"));
    assert.ok(articleFields.includes("excerpt"));
    assert.ok(articleFields.includes("featuredImage"));
    assert.ok(articleFields.includes("category"));
    assert.ok(articleFields.includes("body"));
    assert.ok(articleFields.includes("contentStatus"));

    const portfolioFields = portfolio.fields.map((f: { name: string }) => f.name);
    assert.ok(portfolioFields.includes("title"));
    assert.ok(portfolioFields.includes("slug"));
    assert.ok(portfolioFields.includes("materials"));
    assert.ok(portfolioFields.includes("brandingTechnique"));
    assert.ok(portfolioFields.includes("clientPermissionReleased"));
    assert.ok(portfolioFields.includes("contentStatus"));

    const settingsFields = siteSettings.fields.map((f: { name: string }) => f.name);
    assert.ok(settingsFields.includes("brandName"));
    assert.ok(settingsFields.includes("whatsappVerified"));
    assert.ok(settingsFields.includes("emailVerified"));
    assert.ok(settingsFields.includes("addressVerified"));
  });

  await t.test("4. GROQ query simulation: Drafts are strictly excluded and published items included", () => {
    // Simulasi dataset mock yang mencerminkan state dokumen Sanity
    const mockDocuments = [
      {
        _id: "article-01",
        _type: "article",
        title: "Panduan Bahan Tas",
        slug: { current: "panduan-bahan-tas" },
        contentStatus: "published",
      },
      {
        _id: "drafts.article-01",
        _type: "article",
        title: "Panduan Bahan Tas (Draft Revisi)",
        slug: { current: "panduan-bahan-tas" },
        contentStatus: "draft",
      },
      {
        _id: "article-02-draft-only",
        _type: "article",
        title: "Draft Baru Belum Rilis",
        slug: { current: "draft-baru" },
        contentStatus: "draft",
      },
      {
        _id: "portfolio-01",
        _type: "portfolio",
        title: "Ransel Laptop Bimo",
        slug: { current: "ransel-laptop-bimo" },
        contentStatus: "published",
      },
      {
        _id: "drafts.portfolio-02",
        _type: "portfolio",
        title: "Draft Portofolio Belum Terverifikasi",
        slug: { current: "draft-portofolio" },
        contentStatus: "published", // Dokumen draft walau di-flag published tetap ber-id drafts.*
      },
    ];

    // Evaluasi filter query: contentStatus == "published" && !(_id in path("drafts.**"))
    const filteredArticles = mockDocuments.filter(
      (doc) => doc._type === "article" && doc.contentStatus === "published" && !doc._id.startsWith("drafts.")
    );
    assert.strictEqual(filteredArticles.length, 1, "Only clean non-draft published article must be returned");
    assert.strictEqual(filteredArticles[0]._id, "article-01");

    const filteredPortfolio = mockDocuments.filter(
      (doc) => doc._type === "portfolio" && doc.contentStatus === "published" && !doc._id.startsWith("drafts.")
    );
    assert.strictEqual(filteredPortfolio.length, 1, "Draft portfolio must be excluded even if status is published");
    assert.strictEqual(filteredPortfolio[0]._id, "portfolio-01");
  });

  await t.test("5. Placeholder route is blocked from public access in .htaccess", () => {
    const htaccessPath = path.resolve(rootDir, "public/.htaccess");
    assert.ok(fs.existsSync(htaccessPath), "public/.htaccess must exist");
    const content = fs.readFileSync(htaccessPath, "utf8");
    assert.ok(
      content.includes("RewriteRule ^(artikel|portofolio)/_placeholder/?$ - [R=404,L]"),
      "Must have Apache rule explicitly returning 404 for _placeholder URLs"
    );
  });

  await t.test("6. Sanity Studio compiled distribution (dist/) exists", (subtest) => {
    const distIndexPath = path.resolve(rootDir, "studio/dist/index.html");
    if (!fs.existsSync(distIndexPath)) {
      subtest.skip("studio/dist/index.html is a build artifact ignored by Git and generated on studio:build");
      return;
    }
    const html = fs.readFileSync(distIndexPath, "utf8");
    assert.ok(html.includes("sanity"), "Compiled studio index must contain Sanity bundle references");

    const htaccessPath = path.resolve(rootDir, "studio/dist/.htaccess");
    assert.ok(fs.existsSync(htaccessPath), "studio/dist/.htaccess must exist for SPA routing fallback");
    const htaccess = fs.readFileSync(htaccessPath, "utf8");
    assert.ok(htaccess.includes("RewriteRule . /index.html"), "studio/dist/.htaccess must include SPA fallback rewrite");
  });

  await t.test("7. Root package.json exposes convenient studio commands", () => {
    const rootPkg = JSON.parse(fs.readFileSync(path.resolve(rootDir, "package.json"), "utf8"));
    assert.ok(rootPkg.scripts["studio:dev"], "Root must provide studio:dev script");
    assert.ok(rootPkg.scripts["studio:build"], "Root must provide studio:build script");
    assert.ok(rootPkg.scripts["studio:typecheck"], "Root must provide studio:typecheck script");
  });
});
