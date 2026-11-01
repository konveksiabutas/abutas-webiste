import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

test("Step 03C.1: GitHub Actions CI/CD Foundation & Safety Workflow Verification", async (t) => {
  const rootDir = process.cwd();
  const workflowPath = path.resolve(rootDir, ".github/workflows/build-static-export.yml");

  await t.test("1. Workflow YAML file exists and is readable", () => {
    assert.ok(fs.existsSync(workflowPath), "build-static-export.yml must exist");
    const content = fs.readFileSync(workflowPath, "utf8");
    assert.ok(content.length > 0, "Workflow content must not be empty");
  });

  await t.test("2. Workflow defines manual workflow_dispatch trigger without automatic FTP push", () => {
    const content = fs.readFileSync(workflowPath, "utf8");
    assert.ok(content.includes("workflow_dispatch:"), "Must support manual workflow_dispatch execution");
    assert.ok(!content.includes("SamKirkland/FTP-Deploy-Action"), "Must NOT include active FTP deploy step");
    assert.ok(!content.includes("ftp://"), "Must not use unencrypted FTP");
  });

  await t.test("3. Workflow includes mandatory quality control hard gates", () => {
    const content = fs.readFileSync(workflowPath, "utf8");
    assert.ok(content.includes("npm ci"), "Must install clean dependencies using npm ci");
    assert.ok(content.includes("npm run lint"), "Must execute ESLint check");
    assert.ok(content.includes("npm run typecheck"), "Must execute TypeScript typecheck");
    assert.ok(content.includes("npm run test"), "Must execute automated test suite");
    assert.ok(content.includes("npm run build"), "Must execute Next.js static build");
  });

  await t.test("4. Workflow maps Sanity environment variables and secrets safely", () => {
    const content = fs.readFileSync(workflowPath, "utf8");
    assert.ok(content.includes("NEXT_PUBLIC_SANITY_PROJECT_ID"), "Must pass Sanity Project ID");
    assert.ok(content.includes("NEXT_PUBLIC_SANITY_DATASET"), "Must pass Sanity Dataset");
    assert.ok(content.includes("SANITY_API_READ_TOKEN"), "Must pass read token from secrets");
  });

  await t.test("5. Workflow executes rigorous content and negative test audit on out/", () => {
    const content = fs.readFileSync(workflowPath, "utf8");
    assert.ok(content.includes("out/artikel/tas-ransel-laptop-souvenir"), "Must audit for unapproved article leak");
    assert.ok(content.includes("out/portofolio/tas-ransel-pln"), "Must audit for unapproved portfolio leak");
    assert.ok(content.includes("grep -q \"_placeholder\" out/sitemap.xml"), "Must check _placeholder leak in sitemap");
    assert.ok(content.includes("actions/upload-artifact@v4"), "Must save build artifact for verification");
  });

  await t.test("6. Lockfile and package configuration ensure reproducible runner builds", () => {
    const lockfilePath = path.resolve(rootDir, "package-lock.json");
    assert.ok(fs.existsSync(lockfilePath), "package-lock.json must exist in root");
    const packageJsonPath = path.resolve(rootDir, "package.json");
    const pkg = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    assert.ok(pkg.scripts.build, "package.json must define build script");
    assert.ok(pkg.scripts.lint, "package.json must define lint script");
    assert.ok(pkg.scripts.test, "package.json must define test script");
    assert.ok(pkg.scripts.typecheck, "package.json must define typecheck script");
  });

  await t.test("7. Artifact configuration preserves .htaccess and guards against credential leaks", () => {
    const content = fs.readFileSync(workflowPath, "utf8");
    assert.ok(content.includes("include-hidden-files: true"), "Artifact upload must preserve hidden files such as .htaccess");
    assert.ok(content.includes("find out/ -type f -name \".env*\""), "Must audit that zero .env files leak into out/");
    assert.ok(content.includes("tar -czf abutas-static-export.tar.gz"), "Must package release tarball preserving permissions");
    assert.ok(content.includes("test -f out/.htaccess"), "Must assert that .htaccess exists prior to upload");
    assert.ok(content.includes("test -d out/_next"), "Must assert that _next assets directory exists");
  });
});
