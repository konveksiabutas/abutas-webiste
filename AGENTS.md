<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ABUTAS.COM — AGENTS & ENGINEERING GOVERNANCE

## Anti-Slop Integration (Plugin Verified Active)
- Anti-Slop is installed globally in Antigravity (`~/.gemini/config/plugins/antislop` and `~/.gemini/config/skills`).
- Operational mode: **DURING** (apply rules while building UI, copy, and code).
- Announce `antislop active: during (session override).` at the start of every session.
- Mandatory Delivery Gate: Run full 4-block Delivery Gate (Hard Gate, Purpose-Gate, Liveliness, Craftsmanship & Quality Locks) for all user-facing UI and copy changes with real evidence.
- Design Read & Dials: **ENERGY 2 / RHYTHM 3 / MOTION 1** per [DESIGN.md](file:///c:/Users/HP/Documents/ALL%20FILE/Project%20Endra/2026/Abutas/DESIGN.md).
- Do NOT reinstall or clone Anti-Slop into the project repository.

## Core Development Rules
1. **One Step Per Prompt**: Execute ONLY the requested step from `ABUTAS_ANTIGRAVITY_BUILD_PROMPTS_v3_ANTISLOP.md`. Never jump ahead to subsequent steps. Stop and report for review.
2. **Fresh Greenfield Project**: This is a brand new project built from zero. DO NOT audit, back up, migrate, or analyze any legacy website, database, or WordPress instance.
3. **Verified-Only Business Claims**:
   - All operational facts (phone number, WhatsApp, email, physical address, factory capacity, MOQ, exact pricing, lead times, client logos, certifications, reviews) are strictly **UNVERIFIED** until confirmed in `docs/business-facts.md`.
   - Never fabricate testimonials, client names, reviews, fake stats, or mock factory photos.
   - Use text wordmark "ABUTAS" and explicit development placeholders until official assets are provided.
4. **Public Language**: Bahasa Indonesia. Natural, direct, professional, free from generic marketing clichés and AI buzzwords. Avoid em dashes (`—`) in agent-written copy.
5. **SEO & GEO First**:
   - Semantic HTML5 structure with single `h1` per page, logical heading hierarchy (`h2`, `h3`).
   - Short, readable URLs with trailing slash consistency.
   - Essential public content rendered in initial HTML (SSR/SSG), fully crawlable.
   - Self-referencing canonical URLs (`https://abutas.com`).
   - Breadcrumb navigation and contextual internal linking.
6. **Accessibility & Human Comfort**:
   - WCAG 2.2 AA compliance: visible focus states (`:focus-visible`), pointer cursors on interactive controls, touch targets >= 44x44px.
   - High text contrast (Canvas `#F8F9F7` vs Ink `#14252C`).
   - Respect `prefers-reduced-motion`.
7. **Responsive UI**:
   - Tested viewports: 360px, 390px, 768px, 1024px, 1440px.
   - Zero horizontal overflow.
8. **Security & Privacy**:
   - No secrets committed to Git. `.env.local` must remain gitignored.
   - Server-side validation, honeypot spam protection, and rate-limiting on forms.
   - Anti-PII logging: never log user names, phone numbers, or email addresses to console or analytics.
9. **Rigorous Quality Checks**:
   - Every step must pass: `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build`.
10. **Scope & Budget Protection**:
    - No unapproved third-party paid services or API integrations without owner confirmation.
    - NEVER touch live DNS, production hosting, or domain configuration without explicit user permission.
