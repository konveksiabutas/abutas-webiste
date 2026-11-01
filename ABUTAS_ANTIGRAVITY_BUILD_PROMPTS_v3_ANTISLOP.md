# ABUTAS — Antigravity Build Prompts v3.0 (GREENFIELD + ANTI-SLOP)

**Satu prompt = satu step.** Letakkan `ABUTAS_MASTER_BLUEPRINT_v3_ANTISLOP.md` dan `DESIGN.md` di root project, atau salin seluruh isinya ke `docs/blueprint.md`. Setiap kali lanjut step, minta Antigravity membaca dokumen ini dan `AGENTS.md` dahulu, serta `DESIGN.md` untuk pekerjaan UI/copy. Gunakan Anti-Slop yang telah terinstal di Antigravity, mode `during`.

> **Penting:** Ini pembangunan **website baru dari nol**. JANGAN membuat checklist backup/migrasi WordPress, inventaris URL website lama, mapping redirect lama, atau audit struktur website lama. Jangan sentuh DNS/hosting production tanpa izin pemilik. Jangan mengarang data bisnis.


### Anti-Slop requirements shared by ALL steps

- Skill/plugin is **already installed** by the owner. Do not install it again or copy its rules into the project. Confirm it is available and active at session start; report any discrepancy.
- Use the **DURING** mode while creating new pages/copy. Do not switch to AFTER without owner instruction.
- `DESIGN.md` is the project-specific design direction. Read it before editing visible UI. Do not use Anti-Slop as a substitute for a real design.
- Its Delivery Gate is additional to the normal build/test report. Each PASS must include actual evidence. No fake PASS, invented metrics, client logos, testimonials, or irrelevant stock factory photos.
- Keep SEO/GEO, semantic HTML, headings, page-specific content, crawlable pages, and working user journeys intact.
- Existing site is OUT OF SCOPE. This remains a completely new project; no backups, legacy analysis, WordPress migration, or historical redirects.

## STARTER — STEP 00: New project initialization

```text
You are the lead engineer and UX architect building ABUTAS.COM as a completely NEW greenfield project. The business is an Indonesian B2B custom bag and apparel manufacturing website with SEO/GEO-friendly service pages and RFQ/WhatsApp lead generation.

Read ABUTAS_MASTER_BLUEPRINT_v3_ANTISLOP.md (or docs/blueprint.md) and DESIGN.md. Treat the blueprint as the product/SEO source of truth and DESIGN.md as the visual direction. Anti-Slop is already installed in Antigravity by the owner: verify that its rules are active; do not reinstall, clone or duplicate the skill. Request Anti-Slop mode DURING for this build. If it is not detected, report the blocker honestly. This is NOT a migration or legacy rebuild. Do not audit, back up, copy, migrate, or redirect any old website. Do not inspect or reproduce its visual design.

SCOPE: STEP 00 ONLY — initialize a fresh repository and project foundation.

1. Create a brand-new Next.js App Router + TypeScript (strict) + Tailwind CSS project; use stable compatible versions. Set up package scripts: dev, lint, typecheck, test, build.
2. Define a sensible scalable architecture: src/app, src/components, src/lib, src/types, src/styles, public, tests, docs. Avoid overengineering.
3. Create or safely update AGENTS.md (do not overwrite any existing Anti-Slop pointer or plugin instructions) establishing: one-step-per-prompt, verified-only business claims, public Bahasa Indonesia, SEO-first semantic HTML, accessibility, responsive UI, security, tests, no unapproved paid services, and no production deployment/domain changes without permission.
4. Create docs/business-facts.md with all business-specific facts marked UNVERIFIED: phone, email, address, brand logo, service inventory, MOQ, pricing, lead time, capacity, client permissions, real images. Create docs/content-inventory.md, docs/qa-checklist.md, and docs/launch-checklist.md FOR A NEW WEBSITE.
5. Preserve the provided DESIGN.md in the root; align preliminary design tokens with it and create a basic app shell so dev preview loads. Do not replace DESIGN.md with generic generated direction. If official logo/assets are missing, use a text wordmark 'ABUTAS' and clearly labeled placeholders in development, never misleading claims.
6. Add .env.example (no secrets) and README with setup instructions for Windows/Antigravity. Document how the already-installed Anti-Slop plugin and DESIGN.md are used; do not assume the plugin is active without verification.
7. Run install, lint, typecheck, tests if configured, and production build. Record exact results. Fix failures within Step 00.

NON-GOALS: No CMS, no services content expansion, no RFQ backend, no SEO production polish, no deployment.

OUTPUT: summary of implementation; list of created files; confirmation of DESIGN.md and active Anti-Slop (or an honest blocker); exact commands and PASS/FAIL results; preview instructions; blockers; and recommendation for Step 01. STOP after Step 00.
```

## STEP 01: Modern Industrial Premium homepage

```text
Continue ABUTAS Step 01 ONLY. Read the blueprint, AGENTS.md and DESIGN.md first. Activate/verify Anti-Slop DURING (and relevant UI, copywriting, human, layoutmobile skills if installed). Declare a Design Read with ENERGY 2 / RHYTHM 3 / MOTION 1. Build a distinctive modern industrial premium, clean, trust-oriented, conversion-first homepage in Bahasa Indonesia. Implement only content-justified reusable components: Header, Hero, two distinct service pillar compositions (Konveksi Tas and Konveksi Pakaian), evidence-first service highlights, Process section, PortfolioPreview (honest empty state), contextual FAQ and Footer. Avoid uniform 3/6-card grids, decorative badges, generic icons and fake client logos. Document one-line rationale for major design decisions. Plan primary CTA 'Minta Penawaran', secondary 'Lihat Portofolio', but do NOT link to nonexistent routes. If targets are not yet built, either create an honest preview route/working anchor within Step 01 or show clearly unavailable controls, never inert clickable buttons. Do not simulate a successful quote submission or imply the form is live.

Use text-only ABUTAS wordmark as a clearly temporary development placeholder until official assets exist. Do not fabricate branding assets or visuals. Keep business facts UNVERIFIED; don't invent clients, factory photos, testimonials, certifications, MOQ, lead times or prices. Any photos used as visual placeholders must clearly be development examples, not published proof of Abutas work.

Responsive viewport QA: 360, 390, 768, 1024, 1440. Test keyboard navigation, contrast, heading structure, focus states, semantic tags, link functionality and zero horizontal overflow. Apply deliberate hierarchy, varied editorial section rhythm, restrained motion and responsive typography per DESIGN.md; no decorative stock AI patterns. For media, reserve dimensions; real hero img must not be lazy loaded and should have high fetch priority.

Do not integrate CMS/backend or deploy. Run lint/typecheck/test/build and report exact PASS/FAIL and preview. Run the full Anti-Slop Delivery Gate (Hard Gate / Purpose-Gate / Liveliness / Craftsmanship & Quality Locks), cite evidence for results and fix blockers before considering the step PASS. STOP.
```

## STEP 02: All core website pages and templates

```text
Continue ABUTAS Step 02 ONLY. Read blueprint, DESIGN.md (for UI/copy) and AGENTS.md. Create the two SEO pillar routes /konveksi-tas/ and /konveksi-pakaian/, and reusable service detail layouts. Add /portofolio/, portfolio detail template, /artikel/, article detail template, /tentang-kami/, /cara-pesan/, /kontak/, /minta-penawaran/ (UI shell only), and /kebijakan-privasi/.

Use approved factual content only. For unverified product categories, use typed development fixtures clearly marked as drafts, and do not add them to public navigation as live services. Add breadcrumbs, contextual internal linking, accessible forms UI shell, empty states, loading and not-found states. Test all real route links, responsive behavior, lint/typecheck/build. No CMS, no RFQ persistence, no deployment. Apply Anti-Slop DURING and run Delivery Gate for every new user-facing page, including link/control click-through. STOP.
```

## STEP 03: Sanity CMS (content-first)

```text
Continue ABUTAS Step 03 ONLY. Read blueprint, DESIGN.md (for UI/copy)/AGENTS.md. Set up Sanity schemas and read queries for siteSettings, servicePillar, service, portfolioProject, article and FAQ. Model a clear draft→approved→published workflow with required slug, descriptive alt text, related internal links, SEO fields and content validation. Only approved, published entries appear on public pages or sitemap. Ensure preview is authenticated and nonindexable; don't leak tokens to the browser. Keep practical local fallback/empty states when CMS is not configured.

Document configuration in .env.example and README. Demonstrate one edit→preview→publish→render flow using approved demo-only data. Test build, query error states and static HTML content rendering. No backend lead capture or deployment. Apply Anti-Slop to CMS editor and any public UI/copy. Run its Delivery Gate where relevant. STOP.
```

## STEP 04: SEO / GEO implementation

```text
Continue ABUTAS Step 04 ONLY. Read blueprint, DESIGN.md (for UI/copy)/AGENTS.md. Implement per-page unique metadata and dynamic generateMetadata for services, portfolio and articles; canonical URLs with approved https://abutas.com host, OG metadata/images, XML sitemap of published canonical pages, robots directives, semantic HTML, correct H1/H2 structure, breadcrumb UI plus matching BreadcrumbList JSON-LD.

Add Organization JSON-LD with VERIFIED facts only. LocalBusiness JSON-LD only if location details are verified. Add Article/Service types where applicable; never invent Product prices, aggregate ratings or FAQs eligible for rich snippets. Ensure essential public content is rendered in initial HTML, internal linking supports pillar→services→case studies→relevant articles, and previews/staging are nonindexable.

Write automated technical SEO tests for titles, metadata, sitemap exclusions, schema validation shape, no broken critical links, no duplicate routes. Run test/lint/typecheck/build and report honest results. No production deploy. Preserve SEO/GEO requirements regardless of visual filtering. Run Anti-Slop Delivery Gate for any UI/copy changes. STOP.
```

## STEP 05: RFQ, WhatsApp and analytics

```text
Continue ABUTAS Step 05 ONLY. Read blueprint, DESIGN.md (for UI/copy)/AGENTS.md. Implement usable B2B Request-for-Quotation form: contact name, WhatsApp, service pillar, specific product, estimated quantity, free-text needs; optional organization, email and desired delivery date. Server-side validation, rate limiting/honeypot, consent/privacy explanation, secure server-only configuration, anti-PII logging and clear error/success states. Choose managed persistence/notification ONLY with owner approval; if credentials not available, implement a safe non-production adapter and clearly label submissions as TEST, not successful live leads.

Add contextual WhatsApp CTAs using a VERIFIED business number, with URL-encoded prefilled messages; never silently use dummy phone numbers. Track CTA and submit_success events without names/phone numbers in analytics. Test malformed input, spam, unavailable provider, retry, duplicate clicks, and success. Do not deploy. Test functional form states; run Anti-Slop Delivery Gate for form/CTA UI. STOP.
```

## STEP 06: Content verification, a11y and performance

```text
Continue ABUTAS Step 06 ONLY. Read blueprint, DESIGN.md (for UI/copy)/AGENTS.md. Audit all public copy against docs/business-facts.md and the CMS approval status. Replace development-only placeholders with verified facts/images only when provided. Keep unsupported pages as drafts. Improve alt text, responsive visual hierarchy, keyboard access, lighthouse lab diagnostics, correct image sizing, HTML content rendering and page loading.

Check commercial intent differentiation so service pages aren't near duplicates, verify contextual internal links, and produce a content gaps table without fabricating missing assets. Run tests, lint, typecheck and build. Report PASS/FAIL plus unresolved owner-provided content. Run Anti-Slop Delivery Gate for refreshed UI/copy. STOP.
```

## STEP 07: Fresh website launch readiness (not a migration)

```text
Continue ABUTAS Step 07 ONLY as a READINESS / DRY RUN. This is a new-site launch, NOT a website migration. Do not audit old URLs, back up or migrate WordPress, or implement historical redirects.

Verify published content, actual business contacts, real portfolio/permissions, privacy notice, form delivery, HTTPS domain configuration plan, canonical host, sitemap/robots, 404/500, accessibility, security, mobile speed and analytics readiness. Produce a go/no-go report and a clear checklist for deploying to abutas.com. Do not touch production DNS, live hosting or secrets without explicit user approval. Report Anti-Slop Delivery Gate for the final public UI/copy. STOP.
```

## STEP 08: Post-launch measurement

```text
Continue ABUTAS Step 08 ONLY after launch approval. Configure/verify GSC, GA4, sitemap submission, indexability checks, published URL discovery, Core Web Vitals, lead-event tracking and conversion reporting. Establish baseline and 30/60/90-day improvement backlog. Do not invent keyword volumes or ranking wins. Report measurable data only; separate WhatsApp clicks from qualified inquiries. STOP.
```

## Mandatory reporting format after EVERY step

```text
ABUTAS | STEP XX
Status: PASS / PARTIAL / FAIL
Scope delivered:
Files changed:
Commands executed + actual results:
Responsive / accessibility / SEO checks:
Anti-Slop activation: during / blocked (report evidence)
Anti-Slop Delivery Gate (for UI/copy): Hard Gate; Purpose-Gate; Liveliness; Craftsmanship & Quality Locks, each with evidence
Design decisions and one-line rationale:
Preview instructions:
Unverified business facts still needed:
Known issues:
Next suggested step:
```
