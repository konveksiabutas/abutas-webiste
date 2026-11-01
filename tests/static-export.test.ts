import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";

test("Step 01C: Shared Hosting & Static Export Compatibility Verification", async (t) => {
  const rootDir = process.cwd();
  const nextConfigPath = path.resolve(rootDir, "next.config.ts");
  const outDir = path.resolve(rootDir, "out");
  const publicHtaccess = path.resolve(rootDir, "public/.htaccess");

  await t.test("next.config.ts configures static export and unoptimized images", () => {
    assert.ok(fs.existsSync(nextConfigPath), "next.config.ts must exist");
    const content = fs.readFileSync(nextConfigPath, "utf8");
    assert.ok(content.includes('output: "export"'), 'Must specify output: "export"');
    assert.ok(content.includes("unoptimized: true"), "Must specify images.unoptimized: true for static export");
    assert.ok(content.includes("trailingSlash: true"), "Must specify trailingSlash: true for directory-based routing");
  });

  await t.test("Production static output directory (out/) exists and is populated", (subtest) => {
    if (!fs.existsSync(outDir)) {
      subtest.skip("Build output out/ directory not present yet; tested after npm run build");
      return;
    }
    assert.ok(fs.existsSync(path.join(outDir, "index.html")), "out/index.html must exist");
    assert.ok(fs.existsSync(path.join(outDir, "404.html")), "out/404.html must exist");
    assert.ok(fs.existsSync(path.join(outDir, "robots.txt")), "out/robots.txt must exist");
    assert.ok(fs.existsSync(path.join(outDir, "sitemap.xml")), "out/sitemap.xml must exist");
  });

  await t.test("Apache .htaccess file exists in public/ and is copied to out/", (subtest) => {
    assert.ok(fs.existsSync(publicHtaccess), "public/.htaccess must exist");
    const content = fs.readFileSync(publicHtaccess, "utf8");
    assert.ok(content.includes("mod_rewrite.c"), "Must include mod_rewrite rules");
    assert.ok(content.includes("ErrorDocument 404 /404.html"), "Must configure 404 handler");
    assert.ok(content.includes("mod_deflate.c"), "Must configure gzip compression");
    assert.ok(content.includes("mod_expires.c"), "Must configure caching headers");
    if (!fs.existsSync(outDir)) {
      subtest.skip("out/ not generated yet; htaccess copy tested after build");
      return;
    }
    assert.ok(fs.existsSync(path.join(outDir, ".htaccess")), "out/.htaccess must be exported");
  });

  await t.test("Exported index.html renders standard image paths without server-side Next image API", (subtest) => {
    const indexPath = path.join(outDir, "index.html");
    if (!fs.existsSync(indexPath)) {
      subtest.skip("out/index.html not generated yet; tested after build");
      return;
    }
    const html = fs.readFileSync(indexPath, "utf8");
    assert.ok(!html.includes("/_next/image?url="), "Must not rely on /_next/image dynamic endpoint");
    assert.ok(html.includes("/images/hero-showcase.jpg"), "Must directly link static images");
    assert.ok(html.includes("Konveksi Tas &amp; Pakaian Custom"), "Must retain core B2B headline");
  });
});
