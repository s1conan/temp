# Product Requirements Document — Saxbys Marquees Website

| Field | Value |
|---|---|
| **Product** | Saxbys Marquees marketing & lead-generation website |
| **Document version** | 1.0 |
| **Status** | Draft — for review |
| **Date** | 2026-10-07 |
| **Owner** | Development (freelance engagement) |
| **Client** | Saxbys Marquees (Oli) — https://www.saxbysmarquees.co.uk |
| **Stack** | Next.js (App Router) · React · Supabase · Resend.dev · Tailwind CSS · Framer Motion |

**Source materials**

- `freelancer-req.md` — client brief (lead generation, SEO, 8–10 pages, about + contact).
- `Alice & George B-A.pdf` — 15-page brand deck (copy, imagery, sample quote).
- `PLAN.md` — original static-demo plan (superseded in scope by this PRD; retained as visual direction).
- `index.html` — existing single-page static demo (visual reference only).

---

## 1. Executive Summary

Saxbys Marquees is a luxury marquee and event-hire business. Its current site is a **holding page** with no route to enquiry. This project replaces it with a **professional, modern, SEO-ready, mobile-first marketing site** whose primary purpose is to **generate qualified leads** (enquiries and quote requests) via Google organic search and direct browsing.

The site showcases two core structures — **Sailcloth Marquees** and **Stretch Tents** — plus event categories (weddings, parties, corporate), a styling/extras catalogue, a gallery, coverage areas, and a **live quote builder** seeded with real pricing. Every page funnels toward an **enquiry/quote form** that writes to Supabase and notifies the business via **Resend**.

The visual language is drawn from the brand deck: refined, generous whitespace, cream/navy/gold palette, editorial serif display type — a luxury wedding/event feel that "brings dreams to life".

---

## 2. Background & Problem

- **Current state:** A holding page. No service detail, no portfolio, no lead capture.
- **Client goal:** "A professional, modern website that showcases our marquees and previous events and, importantly, is set up properly for SEO so we can start generating enquiries through Google."
- **Gap:** Prospects cannot understand offerings, see past work, build a quote, or contact the business from the site.
- **Opportunity:** A fast, well-structured, conversion-focused site with local SEO can capture high-intent searches ("marquee hire near me", "sailcloth marquee hire", "stretch tent wedding").

---

## 3. Goals & Non-Goals

### 3.1 Goals

1. **Lead generation** — clear, repeated calls-to-action; low-friction enquiry and quote forms.
2. **Showcase** — present marquees, events and styling (extras) with premium imagery and copy.
3. **SEO foundation** — 8–10 indexable, keyword-targeted pages with structured data, sitemap, metadata, and fast Core Web Vitals.
4. **Trust** — about/story, gallery of real events, coverage areas, professional design.
5. **Self-serve quoting** — a quote builder that mirrors how the business prices events, producing a branded summary.

### 3.2 Non-Goals (this phase)

- No online payments or deposit taking.
- No real-time availability/booking engine or calendar.
- No customer login/accounts or portal.
- No full CMS authoring UI (content is code-managed; Supabase stores submissions — CMS is a future phase).
- No multi-language support.
- No native apps.

---

## 4. Success Metrics (KPIs)

| Metric | Target (first 90 days post-launch) | Measurement |
|---|---|---|
| Enquiries / month | Baseline → measurable growth; ≥ 8/month | Supabase `enquiries` count + Resend sends |
| Quote submissions / month | ≥ 4/month | Supabase `quote_requests` |
| Form completion rate | ≥ 40% of form starters | Client-side analytics event funnel |
| Organic impressions & clicks | Steady growth; indexed pages 10+ | Google Search Console |
| Lighthouse (mobile) | Perf ≥ 90, A11y/Best-practices/SEO ≥ 95 | Lighthouse CI |
| Core Web Vitals | LCP < 2.5s, INP < 200ms, CLS < 0.1 | CrUX / Vercel Analytics |
| Bounce rate on key landing pages | < 55% | Analytics |

---

## 5. Target Audience & Personas

| Persona | Need | Primary journey |
|---|---|---|
| **Bride/Groom & family** (primary) | Beautiful, weatherproof wedding marquee; styling ideas; reassurance | Home → Weddings → Gallery → Quote → Enquiry |
| **Corporate/event organiser** | Capacity, layout, facilities, reliability, quick quote | Home → Corporate Events → Sailcloth/Stretch → Quote |
| **Party host** (birthdays, anniversaries, celebrations) | Right size, extras (bar, dancefloor, lighting) | Home → Parties → Extras → Quote |
| **Festival/community organiser** | Large capacity, stretch-tent versatility on uneven ground | Home → Stretch Tents → Areas → Contact |
| **Local searcher** | "marquee hire [town]"; areas covered, contact | Areas We Cover landing → Enquiry |

---

## 6. Brand & Design System

Derived from the brand deck and `PLAN.md`.

### 6.1 Design tokens

| Token | Value | Usage |
|---|---|---|
| `--color-cream` | `#F6F1E8` | Cream page background (sampled from brand deck) |
| `--color-ivory` | `#FFFFFF` | Card surfaces |
| `--color-ink` | `#12271D` | Near-black green body text/headings |
| `--color-ink-soft` | `#4C5C52` | Secondary text |
| `--color-forest` | `#106038` | **Brand green** — CTAs, accents, links (from the logo) |
| `--color-forest-deep` | `#0B4A2B` | Green hover/active + focus ring |
| `--line` | `rgba(18,39,29,0.12)` | Hairline dividers |
| Display font | **Playfair Display** (serif) | Headings, hero |
| Body font | **Inter** | Body/UI |
| Feel | Luxury wedding/event brand | Wide spacing, thin dividers, slow scroll fade-ins |

> The palette is derived from the real brand assets: the logo mark is forest green `#106038` on a cream `#F6F1E8` field. Brand logos are stored transparent in `public/images/brand/` (`logo-green.png`, `logo-cream.png`).

> Implementation note: expose tokens as CSS custom properties and Tailwind theme extensions; prefer shared `@apply` component classes over repeated utility strings (per project styling standards).

### 6.2 Motion & interaction (Framer Motion)

- Hero: subtle parallax / fade-up on load; optional scroll-linked image reveal.
- Section entrances: fade-up with stagger, respecting `prefers-reduced-motion`.
- Quote builder: layout animations for line-item add/remove and total updates.
- Gallery: shared-element lightbox transitions.
- Keep animations purposeful and performant (transform/opacity only).

### 6.3 Imagery

41 images were extracted from the brand deck into `public/images/pdf/` (grouped by section, with `manifest.json`). See Appendix A and `public/images/pdf/manifest.json`. These are the **primary source imagery** for the site; final curation, cropping, compression and `next/image` optimisation happen during build. Placeholder stock (e.g. picsum in the demo) is replaced by real imagery where available.

---

## 7. Information Architecture

**Primary navigation:** Home · About · Marquees · Weddings · Parties · Corporate · Extras · Gallery · Areas · [Get a Quote]

### 7.1 Page map (10 core pages + utility)

| # | Page | Route | Purpose / primary keywords |
|---|---|---|---|
| 1 | Home | `/` | Brand statement, dual marquee offering, social proof, primary CTA |
| 2 | About Us | `/about` | Story, expertise, market-leading suppliers, trust ("marquee company [region]") |
| 3 | Marquees (hub) | `/marquees` | Hub linking to both structures |
| 3a | Sailcloth Marquees | `/marquees/sailcloth` | "sailcloth marquee hire", 14m modular, sealable walls, ~190 seated @ 14×32m |
| 3b | Stretch Tents | `/marquees/stretch-tents` | "stretch tent hire", versatility, 4.5×4.5m → 15×15m |
| 4 | Weddings | `/weddings` | "wedding marquee hire" — lead event page |
| 5 | Parties & Celebrations | `/parties-celebrations` | Birthdays, anniversaries, parties |
| 6 | Corporate Events | `/corporate-events` | Corporate/festival, capacity, facilities |
| 7 | Extras & Styling | `/extras` | Tables/chairs, lighting, flooring, bars, accessories, alfresco, facilities |
| 8 | Gallery | `/gallery` | Filterable portfolio (wedding/corporate/party/festival) |
| 9 | Areas We Cover | `/areas-we-cover` | Local SEO landing; coverage list |
| 10 | Get a Quote / Contact | `/quote` | Quote builder + enquiry form (primary conversion) |
| U1 | Thank-you | `/thank-you` | Confirmation + analytics conversion |
| U2 | Privacy Policy | `/privacy-policy` | GDPR / data handling |
| U3 | 404 | `not-found` | Friendly recovery |

### 7.2 Conversion paths

- Persistent header CTA **"Get a Quote"** and sticky mobile CTA.
- Every service/gallery page ends with an inline CTA band → `/quote`.
- Quote builder submission = highest-value conversion; enquiry form = general conversion.

---

## 8. Functional Requirements

Requirement IDs are referenced by acceptance criteria (§14) and phases (§15).

### F1 — Enquiry / Contact form

- Fields: name*, email*, phone, event date, estimated guests, event type (wedding/party/corporate/festival/other), location, message*, marketing consent checkbox.
- Client + server validation with **Zod**; inline field errors; accessible labels (`aria-describedby`, focus management).
- Submit via **Next.js Server Action** (or route handler) → insert into Supabase `enquiries` → send **Resend** notification email to business + auto-acknowledgement to enquirer.
- Spam mitigation: honeypot field + minimum time-to-submit + optional hCaptcha/Turnstile; server rate limiting.
- Success → redirect to `/thank-you` with conversion event; failure → non-destructive error state, retry-safe (idempotency key).

### F2 — Quote builder

- Select **marquee type + size** (Sailcloth / Stretch Tent; size options and capacities from brand data).
- Add **extras** as line items with quantity steppers: tables, chairs, lighting, flooring/dancefloor, bars, accessories, alfresco additions, facilities (loos, generator, catering tent).
- Live totals panel styled like a real quote: **Sub-total → VAT (20%) → TOTAL (inc VAT)**.
- Item catalogue seeded from the brand deck's sample quote (Appendix B) with prices as **indicative/“from”** (see Open Questions OQ-1).
- State persisted in `localStorage` for returning users.
- "Email me this quote" and "Submit quote request": both produce a formatted line-item summary; submission writes `quote_requests` + `quote_items` to Supabase and emails via Resend.
- Money handled in integer pennies to avoid float error (per code quality standards — pure, testable functions).

### F3 — Gallery

- Responsive masonry/grid using `next/image`; category filters (wedding / corporate / party / festival).
- Accessible lightbox with keyboard nav, focus trap, captions.
- Content sourced from `public/images/pdf/` (curated) and future client uploads; metadata-driven.

### F4 — Service pages (Marquees, Weddings, Parties, Corporate)

- Consistent template: hero image, intro copy, feature list, specification table (sizes/capacity), image gallery strip, related extras, FAQ, CTA band.
- Copy grounded in brand deck facts:
  - **Sailcloth:** traditional charm + modern design; fully sealable walls; stylish & durable; 14 m wide, modular sections; all event sizes; **~190 seated @ 14 m × 32 m** (sample layout: 192 guests).
  - **Stretch Tent:** originally from Africa; unbeatable versatility; adapts to varied terrain where pole marquees can't; sizes **4.5×4.5 m up to 15×15 m**.

### F5 — Extras & Styling catalogue

- Grid of categories with imagery and copy:
  - **Tables & Chairs** — trestle tables (standard or rustic), oak cross-back chairs.
  - **Lighting** — fairy light canopy (interior), flying festoons (exterior), walkway festoons, uplighters, festoon/fairy lights cascading from king poles.
  - **Flooring** — matting (classic), dancefloor (oak finish or black & white, 4.8 m × 4.8 m).
  - **Bars** — rustic round bar (3.6 m diameter), rectangular bar.
  - **Accessories** — flower rings, staging, blackout draping (incl. roof), reveal curtain.
  - **Alfresco additions** — outdoor furniture, fire pits, oak barrels (1.2 m diameter).
  - **Facilities** — luxury loos, generator (essential infrastructure).
- Each item can deep-link into the quote builder with the item pre-selected.

### F6 — Areas We Cover

- Local-SEO landing page listing towns/regions served (client to supply) with per-area short copy, embedded map (optional), and CTA.
- Structured data (`areaServed`) to reinforce local relevance.

### F7 — SEO & metadata

- Next.js **Metadata API** per page (title, description, canonical, Open Graph, Twitter cards).
- `sitemap.xml` and `robots.txt` (dynamic where sensible).
- JSON-LD: `LocalBusiness`/`EventVenue`, `Service`, `FAQPage`, `BreadcrumbList`, `ImageObject`.
- Semantic headings (single H1/page), descriptive alt text on all imagery.
- Clean, keyword-informed URL slugs; internal linking between services ↔ areas ↔ gallery ↔ quote.
- Core Web Vitals budget enforced (see §11).

### F8 — Navigation & responsive shell

- Fixed header with logo, nav, primary CTA; mobile hamburger with accessible drawer.
- Footer: contact details, social links, areas, legal, opening hours.
- Sticky mobile CTA ("Get a Quote" / "Call us").
- Fully responsive 360 px → 1920 px+.

### F9 — Animations

- Framer Motion scroll reveals, hero treatment, quote-builder layout transitions, gallery lightbox.
- All motion gated by `prefers-reduced-motion` and kept off the critical path (lazy-loaded client components).

### F10 — Notifications (Resend)

- Business notification (to client inbox) and enquirer auto-reply, using branded HTML templates (cream/navy/gold).
- Include submission source page, timestamp, and full line items for quotes.
- Failure to send must not lose the submission (DB insert succeeds first; email errors logged + retry/queueable).

---

## 9. Data Model (Supabase / Postgres)

MVP stores **submissions** only; marketing content lives in the codebase. All tables **RLS-enabled**.

### 9.1 `enquiries`

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | `gen_random_uuid()` |
| `created_at` | timestamptz | default `now()` |
| `name` | text | required |
| `email` | text | required, validated |
| `phone` | text | nullable |
| `event_date` | date | nullable |
| `guest_count` | int | nullable, ≥ 0 |
| `event_type` | text | enum-ish (wedding/party/corporate/festival/other) |
| `location` | text | nullable |
| `message` | text | required |
| `marketing_consent` | boolean | default false |
| `source_page` | text | route that submitted |
| `status` | text | default `new` (new/contacted/closed) |
| `user_agent` | text | nullable (ops) |

### 9.2 `quote_requests`

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `created_at` | timestamptz | |
| `name`, `email`, `phone` | text | name/email required |
| `event_date` | date | nullable |
| `event_type` | text | nullable |
| `location` | text | nullable |
| `marquee_type` | text | sailcloth/stretch |
| `marquee_size` | text | e.g. `14x32` |
| `subtotal_pence` | int | |
| `vat_pence` | int | 20% |
| `total_pence` | int | |
| `status` | text | default `new` |

### 9.3 `quote_items`

| Column | Type | Notes |
|---|---|---|
| `id` | uuid PK | |
| `quote_request_id` | uuid FK → `quote_requests.id` | `on delete cascade` |
| `category` | text | marquee/lighting/flooring/… |
| `item_name` | text | |
| `quantity` | int | > 0 |
| `unit_price_pence` | int | |
| `line_total_pence` | int | quantity × unit |

### 9.4 RLS policies (summary)

- `enquiries`, `quote_requests`, `quote_items`: **anon INSERT allowed** (with validation); **no anon SELECT/UPDATE/DELETE**.
- Reads for the client via a future authenticated admin (Supabase Auth) or dashboard — out of scope this phase.
- Optional DB constraints/checks for non-negative quantities and valid email format.

### 9.5 Optional future tables

`gallery_images`, `testimonials`, `areas`, `content_pages` — for a CMS phase once content volume justifies it.

---

## 10. Technical Architecture

### 10.1 Stack & rationale

| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router)** | SSR/SSG for SEO + Core Web Vitals, server actions, image optimisation |
| UI | **React** + server components by default | Minimal client JS; `'use client'` only for interactivity |
| Styling | **Tailwind CSS** + **CVA** | Consistent design tokens + variant components |
| Animation | **Framer Motion** | Premium scroll/reveal motion |
| Backend/DB | **Supabase (Postgres + RLS)** | Managed DB, RLS for safe anon inserts, later auth |
| Email | **Resend.dev** | Transactional notifications with branded templates |
| Validation | **Zod** | Boundary validation shared client/server |
| Deployment | **Vercel** (recommended) | Native Next.js hosting, edge, analytics |

### 10.2 Project structure (proposed)

```
src/
├── app/
│   ├── (marketing)/            # home, about, weddings, parties, corporate, extras, areas
│   ├── marquees/[type]/        # sailcloth, stretch-tents
│   ├── gallery/
│   ├── quote/                  # quote builder + enquiry
│   ├── thank-you/
│   ├── privacy-policy/
│   ├── api/                    # route handlers (e.g. revalidate, og)
│   ├── layout.tsx              # nav, footer, fonts, metadata
│   └── sitemap.ts, robots.ts
├── components/
│   ├── ui/                     # shadcn-style primitives
│   ├── layout/                 # header, footer, nav drawer
│   └── features/               # QuoteBuilder, EnquiryForm, Gallery, ServicePage
├── lib/
│   ├── quote/                  # pure pricing fns (pence math) + tests
│   ├── validation/             # Zod schemas
│   ├── supabase/               # server + browser clients
│   └── email/                  # Resend client + templates
├── services/                   # sendEnquiry(), submitQuote()
├── data/                       # static content: marquees, extras, areas, gallery
├── types/                      # shared TS types/interfaces
└── styles/globals.css          # design tokens, shared @apply classes
```

### 10.3 Integrations

- **Supabase:** `@supabase/ssr` server client; inserts happen server-side in server actions/services. Env: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` (publishable), server-only secret if needed.
- **Resend:** server-only `RESEND_API_KEY`, `RESEND_FROM` (verified domain), `BUSINESS_NOTIFICATION_EMAIL`. Domain verification (SPF/DKIM) required before launch.
- **Analytics:** Vercel Analytics or GA4 with conversion events (`enquiry_submit`, `quote_submit`, `cta_click`).

### 10.4 Environment variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=        # server-only, never exposed
RESEND_API_KEY=
RESEND_FROM=quotes@saxbysmarquees.co.uk
BUSINESS_NOTIFICATION_EMAIL=
NEXT_PUBLIC_SITE_URL=https://www.saxbysmarquees.co.uk
```

---

## 11. Non-Functional Requirements

| Area | Requirement |
|---|---|
| **Performance** | Lighthouse mobile Perf ≥ 90; LCP < 2.5s, INP < 200ms, CLS < 0.1; `next/image` with responsive `sizes`; lazy-load heavy components (gallery, quote builder); no layout shift from fonts/images. |
| **Accessibility** | **WCAG 2.1 Level AA — mandatory release gate** (see §11.1). Target Lighthouse Accessibility = 100 on every route. |
| **Responsive** | Flawless 360 px → 1920 px+; mobile-first Tailwind with `sm/md/lg/xl` coverage. |
| **SEO** | Metadata API, sitemap, robots, JSON-LD, canonical URLs, OG images, descriptive alt/slugs, GSC + sitemap submission. |
| **Security** | RLS on all tables; aon-only inserts; secrets server-only; Zod validation at boundaries; rate limiting + honeypot on public forms; no PII in logs; HTTPS. |
| **Privacy/GDPR** | Explicit consent checkbox, privacy policy, documented retention; Supabase EU region preferred. |
| **Reliability** | Submissions persisted before email send; email failures logged & retryable; graceful error states. |
| **Maintainability** | TypeScript strict (no `any`), modular/pure logic (especially pricing), unit tests for pricing + validation, shared design tokens. |
| **Browser support** | Latest Chrome, Safari, Firefox, Edge; iOS Safari + Android Chrome. |

### 11.1 Accessibility Standard — WCAG 2.1 Level AA (mandatory)

The site **must** conform to WCAG 2.1 Level AA. This is a release gate: no page ships with an axe/Lighthouse accessibility violation. Current status (Phase 1): homepage and the interactive nav/drawer score **Lighthouse Accessibility 100 (0 failures)**.

**Perceivable**
- **Contrast (SC 1.4.3 / 1.4.11):** normal text ≥ 4.5:1; large text (≥ 24 px, or ≥ 18.66 px bold) ≥ 3:1; UI components and states — including focus indicators, form borders and icon buttons — ≥ 3:1. Text over imagery must sit on a deliberate scrim/gradient that guarantees contrast (e.g. hero `from-ink/85`).
- **Colour tokens (AA-verified):** `--color-forest` `#106038` is the brand green used for text and primary buttons on light backgrounds (6.78:1 vs cream). `--color-forest-deep` `#0B4A2B` is for hover and the focus ring (9.20:1 vs cream). `--color-ink` `#12271D` is body text; `--color-ink-soft` `#4C5C52` is secondary text. On **dark** backgrounds use cream text and `focus-visible:outline-cream`, because the green focus ring does not reach 3:1 against dark surfaces. Never introduce raw colours that bypass the verified palette.
- Meaningful images have descriptive `alt`; decorative images use `alt=""` or `aria-hidden`.
- Information is never conveyed by colour alone.
- Content reflows to 320 px width and 400 % zoom without loss (SC 1.4.10).

**Operable**
- Every interactive element is keyboard-operable with a visible focus indicator (`outline-2 outline-offset-2 outline-forest-deep`; `focus-visible:outline-cream` on dark surfaces).
- Logical focus order; never a keyboard trap.
- **Modal surfaces** (mobile nav drawer, future lightbox): `role="dialog"` + `aria-modal="true"`, focus moved inside on open, trapped while open, and restored to the trigger on close — via the shared `useFocusTrap` hook.
- A **Skip to content** link is the first focusable element; `<main id="main" tabIndex={-1}>` is its target.
- Honour `prefers-reduced-motion`: `MotionConfig reducedMotion="user"` plus CSS `scroll-behavior: auto`. Motion never conveys meaning; nothing flashes more than 3×/second.
- Touch targets ≥ 44 × 44 px.

**Understandable**
- `<html lang="en-GB">`; semantic landmarks (`header` / `nav` / `main` / `footer`).
- Exactly one `<h1>` per page; headings hierarchical.
- Discernible link names; `aria-label` on icon-only controls; `aria-expanded` on disclosures; `aria-current="page"` on the active nav link.
- Accessible name must match the visible label (SC 2.5.3).
- Form labels programmatically associated; errors identified in text and announced (`aria-describedby`, `role="alert"`), never colour-only; on error, focus returns to the first invalid field.

**Robust**
- Valid, well-nested semantic HTML; ARIA only where no native element suffices ("no ARIA is better than bad ARIA").

**Verification (definition of done)**
- Automated: Lighthouse Accessibility = 100 (mobile **and** desktop) and axe-clean on **every route and on the open drawer/lightbox**.
- Manual: full keyboard-only pass (tab order, drawer trap, forms) and a screen-reader spot-check (NVDA / VoiceOver).
- Every foreground/background pair used is contrast-verified.
- Phase 6: add automated axe checks (Playwright) to CI.

**Component contract**
- New UI primitives reuse the shared focus style and the AA-verified colour tokens; never hard-code colours that bypass the palette.
- Any component with motion must be reduced-motion aware.

---

## 12. Content Requirements

- **Copy** for about/services/extras derived from brand deck text (see Appendix C) — final editing by client/SEO copywriter.
- **Client-supplied:** real contact details (phone/email), registered address, opening hours, social links, areas covered list, privacy policy text, any real pricing confirmation (OQ-1).
- **Imagery:** curated from `public/images/pdf/` + any client photo library; alt text per image.
- **SEO keywords** to target per page (working set): marquee hire, sailcloth marquee hire, stretch tent hire, wedding marquee hire, party marquee, corporate event marquee, marquee hire [area].

---

## 13. Analytics, Tracking & Ops

- Events: `enquiry_submit`, `quote_submit`, `quote_item_add`, `cta_click`, `gallery_filter`, `outbound_contact`.
- Funnel: landing → service page → quote builder start → submit.
- Error monitoring (e.g. Sentry) optional but recommended for server actions/email failures.

---

## 14. Acceptance Criteria

**F1 Enquiry form**
- [ ] All required fields validated client- and server-side; errors announced to screen readers.
- [ ] Valid submission inserts one `enquiries` row and sends two Resend emails.
- [ ] Invalid/spam submissions create no row and show a friendly error.
- [ ] Success lands on `/thank-you` and fires `enquiry_submit`.

**F2 Quote builder**
- [ ] Selecting marquee + extras updates subtotal, VAT (20%) and total live and accurately (pence math, unit-tested).
- [ ] Quantities editable via steppers; totals recompute; state persists across reloads.
- [ ] Submission inserts `quote_requests` + related `quote_items` and emails a formatted summary.
- [ ] PDF sample totals reproduce exactly: subtotal £17,199.00, VAT £3,439.80, total £20,638.80 (given identical line items).

**F3 Gallery**
- [ ] Grid renders responsive `next/image`; filters work; lightbox keyboard-accessible with focus trap.

**F4/F5 Content pages**
- [ ] Each page uses the shared template with factual specs matching the brand deck.
- [ ] Extras items deep-link into the quote builder pre-selected.

**F7 SEO**
- [ ] Unique title/description/canonical/OG per page; valid JSON-LD (Rich Results test).
- [ ] `sitemap.xml` + `robots.txt` reachable; no accidental `noindex`.

**NFR**
- [ ] Lighthouse mobile thresholds met; reduced-motion honoured; WCAG AA audit passes.

---

## 15. Phased Delivery

| Phase | Scope | Exit |
|---|---|---|
| **0. Setup** | Next.js + TS strict, Tailwind, fonts, design tokens, Supabase + Resend projects, Vercel, lint/test config | Skeleton deploys |
| **1. Design system & shell** | Header/nav/footer, tokens, UI primitives, motion primitives, responsive shell | Navigable shell |
| **2. Content pages** | Home, About, Marquees (+2), Weddings, Parties, Corporate, Extras, Gallery, Areas | All pages content-complete |
| **3. Lead capture** | Enquiry form → Supabase + Resend + thank-you + spam protection | End-to-end enquiries |
| **4. Quote builder** | Catalogue, pricing logic (+tests), persistence, submission + email | Quote submissions |
| **5. Studio polish** | Framer motion, image curation/optimisation, lightbox, micro-interactions | Premium feel |
| **6. SEO, analytics & QA** | Metadata, JSON-LD, sitemap, analytics, a11y & perf audits, launch | Live |

---

## 16. Risks, Assumptions & Dependencies

**Assumptions**
- Client confirms domain/DNS access and provides Resend-verifiable sending domain.
- Public "from" prices are acceptable; exact pricing is confirmed per enquiry (OQ-1).
- Content editing is provided by client/copywriter; dev places it.

**Risks & mitigations**
- *Price sensitivity/exposure* → present as "from"/indicative, final quote confirmed personally.
- *Spam on public forms* → honeypot + rate limit + optional Turnstile.
- *Email deliverability* → verify domain (SPF/DKIM) before launch.
- *Image quality/licensing* → curate from deck + client library; confirm usage rights.
- *Scope creep toward booking engine* → explicitly out of scope this phase.

**Dependencies**
- Client inputs (OQ list), Supabase project, Resend account/domain, hosting, analytics account.

---

## 17. Open Questions

| ID | Question |
|---|---|
| OQ-1 | Are the sample prices indicative "from" prices, or exact quote line items? Should they be public? |
| OQ-2 | Which towns/regions belong on Areas We Cover? |
| OQ-3 | Exact contact details, address, opening hours, social links? |
| OQ-4 | Is a CMS needed now, or is code-managed content acceptable for launch? |
| OQ-5 | Analytics preference (Vercel Analytics vs GA4) and existing Google accounts? |
| OQ-6 | Any existing photo library beyond the deck? |
| OQ-7 | Booking/availability enquiries — capture only, or later calendar integration? |
| OQ-8 | Preferred email inbox(es) for notifications. |

---

## Appendix A — Extracted Image Inventory

All images extracted from `Alice & George B-A.pdf` into `public/images/pdf/<section>/` (41 files, duplicates collapsed, decorative strips skipped). Full machine-readable list: **`public/images/pdf/manifest.json`**.

| Section folder | Files | Representative content |
|---|---|---|
| `hero/` | 4 | Page-1 hero/collage imagery (1280×720 etc.) |
| `about/` | 2 | About-us featured imagery |
| `sailcloth/` | 5 | Sailcloth marquee photography |
| `sailcloth-layout/` | 2 | "Your Marquee" spec graphic (14×32 m, 190 seated) — repeats as section header |
| `layout/` | 2 | "Your Layout" floor-plan graphic (612×371) — repeats as section header |
| `stretch-tent/` | 5 | Stretch tent photography |
| `stretch-sizes/` | 3 | Size diagrams (4.5×4.5 / 10×10 / 15×15 m) |
| `tables-chairs/` | 2 | Trestle tables, oak cross-back chairs |
| `lighting/` | 4 | Walkway festoons, interior, uplighters, flying lights |
| `flooring/` | 2 | Matting, dancefloor (oak / black & white) |
| `bars/` | 1 | Rustic round bar (3.6 m) |
| `accessories/` | 4 | Flower rings, staging, blackout draping, reveal curtain |
| `alfresco/` | 3 | Outdoor furniture, fire pits, oak barrels |
| `facilities/` | 2 | Luxury loos, generator |

> Note: two graphics repeat across pages as section headers (`sailcloth-layout/sailcloth-layout-01.png` 484×293 and `layout/layout-01.png` 612×371); only one copy of each is stored, with occurrences recorded in the manifest.

---

## Appendix B — Sample Quote Catalogue (from brand deck p.15)

Indicative prices extracted from the "Alice & George" sample quote. Used to seed the quote builder.

**Marquee & event styling**

| Item | Price (£) |
|---|---|
| Sailcloth marquee — 14 m × 32 m | 6,750.00 |
| Matting | 800.00 |
| Fairy light canopy (interior) | 200.00 |
| Flying festoons (exterior) | 200.00 |
| Flower rings ×4 | 400.00 |
| Steel deck stage | 360.00 |
| Patterned drape linings | 620.00 |
| Round bar | 450.00 |
| Dance floor (4.6 m × 4.6 m) | 675.00 |
| Chairs ×190 | 1,254.00 |
| Rustic rectangular tables ×32 | 672.00 |

**Outdoor & facilities**

| Item | Price (£) |
|---|---|
| Fire pits ×2 | 264.00 |
| Oak barrel podium table ×6 | 228.00 |
| Walkway festoon lighting ×100 m | 200.00 |
| Outdoor furniture | 440.00 |
| Uplighters ×18 | 436.00 |
| Catering tent (5 m × 10 m) — incl. link, flooring & lighting | 1,100.00 |
| Luxury Loos | 1,250.00 |
| Generator | 900.00 |

**Totals**

| | £ |
|---|---|
| **Sub-total** | 17,199.00 |
| **VAT (20%)** | 3,439.80 |
| **Total (inc VAT)** | 20,638.80 |

---

## Appendix C — Source Copy Snippets (brand deck)

**About (p.2):** "SAXBYS Marquees is a luxury marquee and events company with creativity at its core. Our event spaces are not just marquees but spaces created in collaboration with you to bring dreams to life. Bringing together market-leading suppliers and years of industry experience, SAXBYS is here to help you achieve perfection."

**Sailcloth Marquee (p.3):** "Our sailcloth marquee combines traditional charm with modern design features. With fully sealable tent walls, the sailcloth is both stylish and durable, ensuring your event remains comfortable and protected, whatever the weather. 14 m wide and built in modular sections, this marquee can cater to all sizes of events." Spec: 14 m × 32 m, ~190 seated.

**Stretch Tent (p.6):** "The stretch tent, originally from Africa, has evolved into a modern tent concept with unbeatable versatility. Designed to adapt to a variety of terrains, these versatile structures can be installed in spaces where traditional pole marquees may not be suitable. Offering the perfect balance of style, comfort and flexibility, stretch tents allow you to make the most of your outdoor setting." Sizes: 4.5 × 4.5 m to 15 × 15 m.
