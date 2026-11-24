# Changelog

## v1.1 — Booth & banquette seating (24–25 November 2026)

All published to the live site. Details and owner decisions: `PROJECT-STATUS.md`.

### New
- `booth-seating.html` — booth & banquette seating page: 8 layout cards (inspiration images), real jobs shown As built / Styled, 3D measure → CAD → finished job strip, Meet Craig, FAQ with structured data, hover zoom and click-to-enlarge images (`assets/js/image-viewer.js`)
- `booth-seating-render.html` + `/corner` short link — "send us your corner" render enquiry app (built in a separate session, PR #1)
- Our Work: "Booth & Banquette Seating" section with 7 real-job photos
- Footer link to the booth page on every page; booth page added to `sitemap.xml`

### Changed
- Site-wide: canonicals, social previews, structured data, sitemap and robots.txt now use `https://www.stirlingkitchens.co.nz`
- About: Craig's experience is 30 years
- Call buttons on computers show and copy the number (separate session)

## v1.0 — Initial build (August 2025)

Initial website build for Stirling Kitchens Ltd.

### Pages built
- `index.html` — Home page with hero, service cards, stats, about blurb, testimonials, gallery preview, CTA
- `custom-kitchens.html` — Custom Kitchens with intro, process steps, gallery (5 images), testimonials, CTA
- `custom-bathrooms.html` — Custom Bathrooms with intro, 4 feature blocks, gallery (3 images), CTA
- `custom-furniture.html` — Custom Furniture & Booth Seating with lead section, why-custom features, 6 layout options, gallery (3 images), CTA
- `our-work.html` — Gallery page with all 11 reference images in 3 groups, disclaimer, CTA
- `about.html` — About Us with company intro, stats, 4 team bios, how-we-work features, CTA
- `contact.html` — Contact details + Netlify Forms enquiry form
- `404.html` — Custom 404 page

### Infrastructure
- `sitemap.xml` — All 7 indexable pages
- `robots.txt`
- CSS design token system (`tokens.css` → `base.css` → `components.css`)
- Vanilla JS (`main.js`) — mobile nav, active page detection, form validation
- JSON-LD structured data on every page (LocalBusiness + page-specific schemas)

### Content
- NZ English throughout
- Real team bios for Craig, Stacy, Wayne and Phil
- All 3 real customer testimonials
- Gallery disclaimers on all image galleries (images are AI style references, not real project photos)
