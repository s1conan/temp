# SAXBYS Marquees — Demo Website Plan

**Purpose:** Show Oli (Saxbys Marquees) what we can build — a showpiece demo, not production. Visual polish + one "wow" feature (quote builder/cart) + fast loading.

## Stack

Static HTML + CSS + vanilla JavaScript. Single `index.html`. No framework, no build step, no backend. Deployable as-is to Netlify / GitHub Pages / Cloudflare Pages, or sendable as a zip.

## Theme tokens

| Token | Value |
|---|---|
| Background | `#F8F5F0` (cream/ivory) |
| Text | `#1B2A41` (deep navy) |
| Accent | `#C9A227` (warm gold) |
| Display font | Playfair Display (serif) |
| Body font | Inter or similar clean sans |
| Feel | luxury wedding/event brand — wide spacing, thin dividers, slow scroll fade-ins |

## Page structure (single page, anchored nav)

1. **Fixed nav** — Home · About · Marquees · Extras · Gallery · Contact · [Get a Quote] · mobile hamburger
2. **Hero** — full-bleed image, "Bringing dreams to life", CTA scrolls to quote builder
3. **About** — luxury marquee & events company, creativity at its core, market-leading suppliers, years of industry experience
4. **Marquees** — two cards:
   - **Sailcloth Marquee** — traditional charm + modern design, fully sealable walls, stylish & durable, ~14m wide, modular sections, all event sizes, ~190 seated @ 14×32m
   - **Stretch Tent** — originally from Africa, unbeatable versatility, adapts to varied terrain where pole marquees can't go, sizes 4.5×4.5m up to 15×15m
5. **Extras** — cards/grid for:
   - Tables & Chairs — trestle tables, oak cross-back chairs (standard or rustic)
   - Lighting — fairy light canopy (interior), flying festoons (exterior), walkway festoons, uplighters
   - Flooring — matting (classic), dancefloor (oak or black & white, 4.8×4.8m)
   - Bars — rustic round bar (3.6m diameter), rectangular bar
   - Accessories — flower rings, staging, blackout draping + roof, reveal curtain, outdoor furniture, fire pits, oak barrels (1.2m)
   - Facilities — luxury loos, generator
6. **Gallery** — 6 picsum placeholders, tasteful captions (wedding / corporate / party / festival)
7. **Your Quote (cart)** — the hook:
   - select marquee type + size → add extras with quantity steppers
   - live totals panel: Sub-total → VAT 20% → TOTAL inc VAT (styled like a real quote)
   - "Email me this quote" → `mailto:` with formatted summary
   - selection persisted in localStorage
8. **Contact** — form (name, email, event date, guests, message) + company details

## Out of scope (intentional)

No backend, no payments, no CMS, no auth, no real booking, no SEO build-out — SEO is part of the actual paid pitch ("here's what we'd do next for you").

## Execution

1. Write source into `a:\projects\saxbysmarquees`
2. Build with Windows opencode (fully configured with user's skills/MCP)
3. Smoke-test locally (nav, steppers, VAT math, mailto)
4. Zip + short "here's what we'd build you" note for Oli
