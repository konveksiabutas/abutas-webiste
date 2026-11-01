import test from "node:test";
import assert from "node:assert";
import fs from "node:fs";
import path from "node:path";
import { cn } from "../src/lib/utils.ts";

test("Starter Step 00: Architecture and Foundation Checks", async (t) => {
  await t.test("Utility cn merges classnames correctly", () => {
    assert.strictEqual(cn("bg-canvas", "text-ink"), "bg-canvas text-ink");
    assert.strictEqual(cn("p-4", "p-6"), "p-6");
  });

  await t.test("DESIGN.md exists and contains required token definitions", () => {
    const designPath = path.resolve(process.cwd(), "DESIGN.md");
    assert.ok(fs.existsSync(designPath), "DESIGN.md must exist in the root");
    const content = fs.readFileSync(designPath, "utf8");
    assert.ok(content.includes("#F1EDE5") || content.includes("#F5F0E8"), "Must include canvas/ivory token");
    assert.ok(content.includes("#171B1C") || content.includes("#20292B"), "Must include charcoal/dark token");
    assert.ok(content.includes("#E56B37") || content.includes("#245F56"), "Must include accent token");
  });

  await t.test("docs/business-facts.md exists and enforces UNVERIFIED for sensitive claims", () => {
    const factsPath = path.resolve(process.cwd(), "docs/business-facts.md");
    assert.ok(fs.existsSync(factsPath), "docs/business-facts.md must exist");
    const content = fs.readFileSync(factsPath, "utf8");
    assert.ok(content.includes("UNVERIFIED"), "Must have UNVERIFIED status entries");
    assert.ok(content.includes("Nomor Telepon / WhatsApp"), "Must track phone/WhatsApp status");
    assert.ok(content.includes("Minimum Order Quantity (MOQ)"), "Must track MOQ status");
  });

  await t.test("AGENTS.md maintains Next.js rules block and Anti-Slop governance", () => {
    const agentsPath = path.resolve(process.cwd(), "AGENTS.md");
    assert.ok(fs.existsSync(agentsPath), "AGENTS.md must exist");
    const content = fs.readFileSync(agentsPath, "utf8");
    assert.ok(content.includes("BEGIN:nextjs-agent-rules"), "Must preserve Next.js agent block");
    assert.ok(content.includes("Anti-Slop Integration"), "Must specify Anti-Slop integration");
    assert.ok(content.includes("Verified-Only Business Claims"), "Must enforce verified claims");
  });
});
