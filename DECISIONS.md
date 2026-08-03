# Design & Content Decisions

Key decisions made during the build — why things are the way they are.

---

## No "Commercial Projects" page

The original brief included a Commercial Projects page. This was removed for two reasons:
1. No images exist for commercial work
2. The business's primary audience is homeowners and residential builders; a commercial page with no images would likely hurt rather than help

If the business builds up a commercial portfolio, a page can be added easily.

---

## "Custom Furniture" includes booth seating as the lead product

The brief described a custom furniture page, but the most differentiated product in the brief was booth/banquette seating — specifically called out with its own images and descriptions. The custom-furniture page leads with booth seating (the unique sell) and covers other custom furniture as a secondary section.

If other furniture work becomes more prominent (joinery, cabinetry for other rooms), this page can be expanded.

---

## Gallery images are reference/inspiration only

All 11 images on the site were provided as AI-generated style references, not photographs of Stirling Kitchens' own completed work. Each gallery includes a prominent disclaimer.

When real project photographs are available:
- Replace reference images with real photos
- Remove the disclaimer blocks
- Update image `alt` text to accurately describe the real project

---

## Logo choice: `stirling-kitchens-logo-dark-background.png`

Two logo variants were provided:
- `stirling-kitchens-logo-dark-background.png` — white text, works on navy/dark backgrounds
- `stirling-kitchens-logo-transparent.png` — appears to have a coloured glow/background artifact

The dark-background logo was chosen for all uses (header and footer both sit on navy). The transparent logo was not used.

---

## No external fonts

The site uses the system font stack instead of loading Google Fonts or similar. This eliminates:
- A render-blocking external request
- GDPR/privacy compliance considerations around third-party font loading

The system font stack (`system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', ...`) looks clean and loads instantly.

---

## Netlify Forms for the contact form

No backend or server is needed. Netlify Forms captures submissions from the `data-netlify="true"` form attribute and sends email notifications. A honeypot field (`bot-field`) is included to reduce spam.

If the site moves off Netlify, the form will need a backend or a form service (Formspree, etc.).

---

## `aria-current="page"` on nav is hardcoded per page

Rather than relying entirely on JavaScript to detect the active page, each page has `aria-current="page"` hardcoded on its own nav link. JS adds it dynamically as a fallback for any future pages added without the attribute.

---

## No `width` and `height` on gallery images

Gallery items use `aspect-ratio: 4/3` in CSS, which prevents CLS (cumulative layout shift) without needing explicit width/height attributes on each `<img>`. The explicit `width` and `height` attributes exist only on images used outside the gallery grid.

---

## CTA phone number links use `tel:` format without spaces

`href="tel:+64211443301"` — no spaces, the `+` prefix for international format. This is the correct format for mobile tap-to-call.

---

## `400.html` excluded from sitemap and set to `noindex`

The 404 page has `<meta name="robots" content="noindex">` and is not listed in `sitemap.xml`. Search engines should not index error pages.
