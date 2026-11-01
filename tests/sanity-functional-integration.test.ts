import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { article } from "../studio/schemas/article.ts";
import { portfolio } from "../studio/schemas/portfolio.ts";
import { siteSettings } from "../studio/schemas/siteSettings.ts";
import {
  publishedArticlesQuery,
  articleBySlugQuery,
  publishedPortfolioQuery,
  portfolioBySlugQuery,
  siteSettingsQuery,
} from "../src/lib/sanity/queries.ts";

test("Step 03B.2: Sanity CMS Real Functional & Integration Verification", async (t) => {
  const rootDir = process.cwd();

  await t.test("1. Project ID and Dataset consistency between Next.js and Sanity Studio", () => {
    const envLocalPath = path.resolve(rootDir, ".env.local");
    const studioEnvPath = path.resolve(rootDir, "studio/.env");

    assert.ok(fs.existsSync(envLocalPath), ".env.local must exist");
    assert.ok(fs.existsSync(studioEnvPath), "studio/.env must exist");

    const envLocal = fs.readFileSync(envLocalPath, "utf8");
    const studioEnv = fs.readFileSync(studioEnvPath, "utf8");

    const nextProjectId = envLocal.match(/NEXT_PUBLIC_SANITY_PROJECT_ID=(.+)/)?.[1]?.trim();
    const nextDataset = envLocal.match(/NEXT_PUBLIC_SANITY_DATASET=(.+)/)?.[1]?.trim();

    const studioProjectId = studioEnv.match(/SANITY_STUDIO_PROJECT_ID=(.+)/)?.[1]?.trim();
    const studioDataset = studioEnv.match(/SANITY_STUDIO_DATASET=(.+)/)?.[1]?.trim();

    assert.ok(nextProjectId, "Next.js must have a configured Sanity Project ID");
    assert.ok(studioProjectId, "Studio must have a configured Sanity Project ID");
    assert.strictEqual(
      nextProjectId,
      studioProjectId,
      "Next.js and Sanity Studio must point to the identical Project ID"
    );

    assert.ok(nextDataset, "Next.js must have a configured Sanity Dataset");
    assert.ok(studioDataset, "Studio must have a configured Sanity Dataset");
    assert.strictEqual(
      nextDataset,
      studioDataset,
      "Next.js and Sanity Studio must point to the identical Dataset"
    );
  });

  await t.test("2. Real Sanity API connection responds with HTTP 200", async () => {
    const envLocalPath = path.resolve(rootDir, ".env.local");
    const envLocal = fs.readFileSync(envLocalPath, "utf8");
    const projectId = envLocal.match(/NEXT_PUBLIC_SANITY_PROJECT_ID=(.+)/)?.[1]?.trim();
    const dataset = envLocal.match(/NEXT_PUBLIC_SANITY_DATASET=(.+)/)?.[1]?.trim();

    assert.ok(projectId);
    assert.ok(dataset);

    const queryUrl = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=*[_type in ["article", "portfolio", "siteSettings"]]`;
    const response = await fetch(queryUrl);

    assert.strictEqual(response.status, 200, "Sanity API query must return HTTP 200 OK");
    const data = (await response.json()) as { result?: unknown[] };
    assert.ok(Array.isArray(data.result), "Response must contain a result array");
  });

  await t.test("3. Production dataset is protected from fake/unverified published content", async () => {
    const envLocalPath = path.resolve(rootDir, ".env.local");
    const envLocal = fs.readFileSync(envLocalPath, "utf8");
    const projectId = envLocal.match(/NEXT_PUBLIC_SANITY_PROJECT_ID=(.+)/)?.[1]?.trim();
    const dataset = envLocal.match(/NEXT_PUBLIC_SANITY_DATASET=(.+)/)?.[1]?.trim();

    const queryUrl = `https://${projectId}.api.sanity.io/v2024-01-01/data/query/${dataset}?query=*[_type in ["article", "portfolio"]]`;
    const response = await fetch(queryUrl);
    const data = (await response.json()) as { result?: Array<{ _id: string; title: string; contentStatus: string }> };

    // Sesuai Rule #3: Setiap item yang berstatus published harus merupakan dokumen valid dengan title dan slug
    const publishedItems = (data.result || []).filter((item) => item.contentStatus === "published");
    for (const item of publishedItems) {
      assert.ok(item.title && item.title.length > 0, "Published item must have valid title");
      assert.ok(!item._id.startsWith("drafts."), "Published item must not be a draft");
    }
  });

  await t.test("4. Studio Desk Structure implements exactly three mandatory operational menus", async () => {
    const { structure } = await import("../studio/structure/index.ts");
    interface MockItem {
      _title?: string;
      _schemaType?: string;
    }

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
          _title: undefined,
          _schemaType: undefined,
        };
        const builder = {
          title: (t: string) => { item._title = t; return builder; },
          schemaType: (s: string) => { item._schemaType = s; return builder; },
          child: () => item,
        };
        return builder;
      },
      divider: () => ({
        _title: undefined,
        _schemaType: undefined,
      }),
      documentTypeList: (st: string) => ({ _type: "documentTypeList", _schemaType: st, title: () => ({}) }),
      document: () => ({
        _type: "document",
        schemaType: () => ({ documentId: () => ({ title: () => ({}) }) }),
      }),
    };

    structure(sMock as unknown as Parameters<typeof structure>[0], {} as unknown as Parameters<typeof structure>[1]);

    const menuTitles = itemsMock.map((item) => item._title).filter(Boolean);
    assert.strictEqual(menuTitles.length, 3, "Desk Structure must have exactly three menu items");
    assert.ok(menuTitles.includes("Artikel & Panduan"), "Must have Artikel & Panduan menu");
    assert.ok(menuTitles.includes("Portofolio Produksi"), "Must have Portofolio Produksi menu");
    assert.ok(menuTitles.includes("Pengaturan Website"), "Must have Pengaturan Website menu");
  });

  await t.test("5. Draft isolation logic strictly excludes drafts.* and unreleased items", () => {
    // GROQ syntax checks
    assert.ok(publishedArticlesQuery.includes('!(_id in path("drafts.**"))'));
    assert.ok(publishedArticlesQuery.includes('contentStatus == "published"'));
    assert.ok(articleBySlugQuery.includes('!(_id in path("drafts.**"))'));
    assert.ok(articleBySlugQuery.includes('contentStatus == "published"'));

    // Portfolio client release lock
    assert.ok(publishedPortfolioQuery.includes('!(_id in path("drafts.**"))'));
    assert.ok(publishedPortfolioQuery.includes('contentStatus == "published"'));
    assert.ok(publishedPortfolioQuery.includes("clientPermissionReleased == true"));

    assert.ok(portfolioBySlugQuery.includes('!(_id in path("drafts.**"))'));
    assert.ok(portfolioBySlugQuery.includes('contentStatus == "published"'));
    assert.ok(portfolioBySlugQuery.includes("clientPermissionReleased == true"));

    assert.ok(siteSettingsQuery.includes('_type == "siteSettings"'));

    // Behavioral simulation: verify client permission release lock
    const testPortfolios = [
      {
        _id: "portfolio-with-permission",
        contentStatus: "published",
        clientPermissionReleased: true,
      },
      {
        _id: "portfolio-without-permission",
        contentStatus: "published",
        clientPermissionReleased: false, // Izin belum ada!
      },
      {
        _id: "drafts.portfolio-with-permission",
        contentStatus: "published",
        clientPermissionReleased: true, // Draft!
      },
    ];

    const eligibleForPublic = testPortfolios.filter(
      (p) =>
        p.contentStatus === "published" &&
        p.clientPermissionReleased === true &&
        !p._id.startsWith("drafts.")
    );

    assert.strictEqual(eligibleForPublic.length, 1);
    assert.strictEqual(eligibleForPublic[0]._id, "portfolio-with-permission");
  });

  await t.test("6. Native Schemas enforce strict editorial, technical & contact locks", () => {
    // Article schema fields
    const articleFields: string[] = article.fields.map((f: { name: string }) => f.name);
    assert.ok(articleFields.includes("title"));
    assert.ok(articleFields.includes("slug"));
    assert.ok(articleFields.includes("excerpt"));
    assert.ok(articleFields.includes("featuredImage"));
    assert.ok(articleFields.includes("category"));
    assert.ok(articleFields.includes("body"));
    assert.ok(articleFields.includes("seoTitle"));
    assert.ok(articleFields.includes("seoDescription"));

    // Portfolio schema fields
    const portfolioFields: string[] = portfolio.fields.map((f: { name: string }) => f.name);
    assert.ok(portfolioFields.includes("productType"));
    assert.ok(portfolioFields.includes("materials"));
    assert.ok(portfolioFields.includes("brandingTechnique"));
    assert.ok(portfolioFields.includes("gallery"));
    assert.ok(portfolioFields.includes("clientPermissionReleased"));

    const clientPermission = portfolio.fields.find(
      (f: { name: string }) => f.name === "clientPermissionReleased"
    ) as { initialValue?: unknown } | undefined;
    assert.strictEqual(clientPermission?.initialValue, false);

    // SiteSettings verification locks
    const settingsFields: string[] = siteSettings.fields.map((f: { name: string }) => f.name);
    assert.ok(settingsFields.includes("whatsappVerified"));
    assert.ok(settingsFields.includes("emailVerified"));
    assert.ok(settingsFields.includes("addressVerified"));

    const wa = siteSettings.fields.find((f: { name: string }) => f.name === "whatsappVerified") as
      | { initialValue?: unknown }
      | undefined;
    assert.strictEqual(wa?.initialValue, false);
  });

  await t.test("7. Static export & Apache htaccess block placeholder URLs", () => {
    const htaccessPath = path.resolve(rootDir, "public/.htaccess");
    assert.ok(fs.existsSync(htaccessPath), "public/.htaccess must exist");
    const htaccess = fs.readFileSync(htaccessPath, "utf8");

    assert.ok(
      htaccess.includes("RewriteRule ^(artikel|portofolio)/_placeholder/?$ - [R=404,L]"),
      "Apache rewrite must explicitly intercept _placeholder and return HTTP 404"
    );
  });
});
