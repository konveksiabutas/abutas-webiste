import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { article } from "../studio/schemas/article.ts";
import { portfolio } from "../studio/schemas/portfolio.ts";
import { siteSettings } from "../studio/schemas/siteSettings.ts";
import {
  isSanityConfigured,
  getPublishedArticles,
  getPublishedPortfolio,
  getSiteSettings,
  publishedArticlesQuery,
  publishedPortfolioQuery,
  getSlugString,
} from "../src/lib/sanity/index.ts";

test("Step 03A: Sanity CMS Foundation & Static Export Integration", async (t) => {
  const rootDir = process.cwd();

  await t.test("A. Artikel content schema defines all required editorial & SEO fields", () => {
    assert.strictEqual(article.name, "article");
    const fieldNames: string[] = article.fields.map((f) => f.name);

    const requiredFields = [
      "title",
      "slug",
      "excerpt",
      "featuredImage",
      "category",
      "body",
      "author",
      "publishedAt",
      "seoTitle",
      "seoDescription",
      "canonicalUrl",
      "contentStatus",
    ];

    for (const field of requiredFields) {
      assert.ok(fieldNames.includes(field), `Article schema must include field: ${field}`);
    }
  });

  await t.test("B. Portofolio content schema defines all required production & client permission fields", () => {
    assert.strictEqual(portfolio.name, "portfolio");
    const fieldNames: string[] = portfolio.fields.map((f) => f.name);

    const requiredFields = [
      "title",
      "slug",
      "category",
      "productType",
      "description",
      "materials",
      "brandingTechnique",
      "gallery",
      "year",
      "clientInfo",
      "clientPermissionReleased",
      "seoTitle",
      "seoDescription",
      "contentStatus",
    ];

    for (const field of requiredFields) {
      assert.ok(fieldNames.includes(field), `Portfolio schema must include field: ${field}`);
    }

    const clientPermission = portfolio.fields.find((f) => f.name === "clientPermissionReleased") as { initialValue?: unknown } | undefined;
    assert.strictEqual(clientPermission?.initialValue, false, "Client permission must default to false");
  });

  await t.test("C. Site Settings schema enforces owner verification locks on business contacts", () => {
    assert.strictEqual(siteSettings.name, "siteSettings");
    const fieldNames: string[] = siteSettings.fields.map((f) => f.name);

    const requiredFields = [
      "brandName",
      "tagline",
      "description",
      "whatsappNumber",
      "whatsappVerified",
      "officialEmail",
      "emailVerified",
      "businessAddress",
      "addressVerified",
      "socialLinks",
    ];

    for (const field of requiredFields) {
      assert.ok(fieldNames.includes(field), `SiteSettings schema must include field: ${field}`);
    }

    const waVerified = siteSettings.fields.find((f) => f.name === "whatsappVerified") as { initialValue?: unknown } | undefined;
    const emailVerified = siteSettings.fields.find((f) => f.name === "emailVerified") as { initialValue?: unknown } | undefined;
    const addrVerified = siteSettings.fields.find((f) => f.name === "addressVerified") as { initialValue?: unknown } | undefined;

    assert.strictEqual(waVerified?.initialValue, false, "whatsappVerified must default to false");
    assert.strictEqual(emailVerified?.initialValue, false, "emailVerified must default to false");
    assert.strictEqual(addrVerified?.initialValue, false, "addressVerified must default to false");
  });

  await t.test("D. Static Data Access Layer safely falls back when CMS is unconfigured", async () => {
    // When environment variables are empty, client safely returns unconfigured
    assert.strictEqual(typeof isSanityConfigured(), "boolean");

    // Fetching published data must NOT throw runtime errors and must return empty collections
    const articles = await getPublishedArticles();
    assert.ok(Array.isArray(articles), "getPublishedArticles must return an array");

    const portfolioItems = await getPublishedPortfolio();
    assert.ok(Array.isArray(portfolioItems), "getPublishedPortfolio must return an array");

    const configured = isSanityConfigured();
    const settings = await getSiteSettings();
    if (!configured) {
      assert.strictEqual(settings, null, "getSiteSettings must safely return null when unconfigured");
    } else {
      assert.ok(
        settings === null || (typeof settings === "object" && settings !== null),
        "getSiteSettings must return null or valid settings object when configured"
      );
    }
  });

  await t.test("E. GROQ queries strictly filter published documents and exclude drafts", () => {
    assert.ok(
      publishedArticlesQuery.includes('contentStatus == "published"'),
      "Articles query must require contentStatus == 'published'"
    );
    assert.ok(
      publishedArticlesQuery.includes('!(_id in path("drafts.**"))'),
      "Articles query must exclude drafts"
    );

    assert.ok(
      publishedPortfolioQuery.includes('contentStatus == "published"'),
      "Portfolio query must require contentStatus == 'published'"
    );
    assert.ok(
      publishedPortfolioQuery.includes('!(_id in path("drafts.**"))'),
      "Portfolio query must exclude drafts"
    );
  });

  await t.test("F. Slug normalization helper handles both objects and strings", () => {
    assert.strictEqual(getSlugString({ current: "panduan-bahan-tas" }), "panduan-bahan-tas");
    assert.strictEqual(getSlugString("panduan-bahan-tas"), "panduan-bahan-tas");
    assert.strictEqual(getSlugString(undefined), "");
  });

  await t.test("G. Dynamic route templates exist with static generation handlers", () => {
    const articleSlugPath = path.resolve(rootDir, "src/app/artikel/[slug]/page.tsx");
    const portfolioSlugPath = path.resolve(rootDir, "src/app/portofolio/[slug]/page.tsx");

    assert.ok(fs.existsSync(articleSlugPath), "src/app/artikel/[slug]/page.tsx must exist");
    assert.ok(fs.existsSync(portfolioSlugPath), "src/app/portofolio/[slug]/page.tsx must exist");

    const articleCode = fs.readFileSync(articleSlugPath, "utf8");
    const portfolioCode = fs.readFileSync(portfolioSlugPath, "utf8");

    assert.ok(articleCode.includes("generateStaticParams"), "Article page must export generateStaticParams");
    assert.ok(articleCode.includes("dynamicParams = false"), "Article page must enforce static params only");
    assert.ok(articleCode.includes("Article"), "Article page must generate Article JSON-LD");
    assert.ok(articleCode.includes("BreadcrumbList"), "Article page must generate BreadcrumbList JSON-LD");

    assert.ok(portfolioCode.includes("generateStaticParams"), "Portfolio page must export generateStaticParams");
    assert.ok(portfolioCode.includes("dynamicParams = false"), "Portfolio page must enforce static params only");
    assert.ok(portfolioCode.includes("CreativeWork"), "Portfolio page must generate CreativeWork JSON-LD");
  });

  await t.test("H. Environment documentation and security protection", () => {
    const envExamplePath = path.resolve(rootDir, ".env.example");
    assert.ok(fs.existsSync(envExamplePath), ".env.example must exist");

    const envContent = fs.readFileSync(envExamplePath, "utf8");
    assert.ok(envContent.includes("NEXT_PUBLIC_SANITY_PROJECT_ID"), "Must document NEXT_PUBLIC_SANITY_PROJECT_ID");
    assert.ok(envContent.includes("SANITY_API_READ_TOKEN"), "Must document SANITY_API_READ_TOKEN");
    assert.ok(!envContent.includes("NEXT_PUBLIC_SANITY_API_READ_TOKEN"), "Must NEVER prefix read token with NEXT_PUBLIC_");
  });

  await t.test("I. CI/CD GitHub Actions & Architecture documentation exist", () => {
    const workflowPath = path.resolve(rootDir, ".github/workflows/deploy-superserver.yml.example");
    assert.ok(fs.existsSync(workflowPath), ".github/workflows/deploy-superserver.yml.example must exist");

    const docPath = path.resolve(rootDir, "docs/sanity-cms-architecture.md");
    assert.ok(fs.existsSync(docPath), "docs/sanity-cms-architecture.md must exist");
  });
});
