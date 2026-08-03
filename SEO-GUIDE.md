# SEO Guide — Stirling Kitchens Website

Per-page SEO details: canonical URL, title tag, meta description, H1, structured data, and internal links.

---

## Home page — `index.html`

| Element | Value |
|---------|-------|
| **Canonical** | `https://stirlingkitchens.co.nz/` |
| **Title** | Stirling Kitchens — Custom Kitchen Manufacturing, Auckland |
| **Meta description** | Custom kitchens, bathrooms and furniture made to measure in East Tāmaki, Auckland. 25 years' experience. Call +64 21 144 3301. |
| **H1** | Built for the way you actually live |
| **Structured data** | LocalBusiness + WebSite |
| **Target keywords** | custom kitchens Auckland, kitchen manufacturer Auckland, bespoke kitchen Auckland |

---

## Custom Kitchens — `custom-kitchens.html`

| Element | Value |
|---------|-------|
| **Canonical** | `https://stirlingkitchens.co.nz/custom-kitchens.html` |
| **Title** | Custom Kitchens Auckland \| Stirling Kitchens |
| **Meta description** | Bespoke kitchen design and manufacturing from East Tāmaki, Auckland. Every kitchen is built to your brief, your space and your style. Call +64 21 144 3301. |
| **H1** | Custom Kitchens, Built to Measure |
| **Structured data** | LocalBusiness + Service (Custom Kitchen Manufacturing) + BreadcrumbList |
| **Target keywords** | custom kitchen Auckland, bespoke kitchen Auckland, kitchen manufacturer Auckland |

---

## Custom Bathrooms — `custom-bathrooms.html`

| Element | Value |
|---------|-------|
| **Canonical** | `https://stirlingkitchens.co.nz/custom-bathrooms.html` |
| **Title** | Custom Bathroom Vanities Auckland \| Stirling Kitchens |
| **Meta description** | Custom-made bathroom vanities and cabinetry from East Tāmaki, Auckland. Built to your dimensions — not whatever happens to come in a standard box. Call +64 21 144 3301. |
| **H1** | Custom Bathroom Vanities & Cabinetry |
| **Structured data** | LocalBusiness + Service (Custom Bathroom Vanities) + BreadcrumbList |
| **Target keywords** | custom bathroom vanity Auckland, bespoke bathroom cabinetry Auckland |

---

## Custom Furniture — `custom-furniture.html`

| Element | Value |
|---------|-------|
| **Canonical** | `https://stirlingkitchens.co.nz/custom-furniture.html` |
| **Title** | Custom Furniture & Booth Seating Auckland \| Stirling Kitchens |
| **Meta description** | Custom booth seating, banquette seating and built-in furniture from East Tāmaki, Auckland. Specialists in curved, L-shaped and integrated kitchen booth seating. |
| **H1** | Custom Furniture & Booth Seating |
| **Structured data** | LocalBusiness + Service (Custom Booth and Banquette Seating) + BreadcrumbList |
| **Target keywords** | booth seating Auckland, banquette seating Auckland, custom built-in furniture Auckland |

---

## Our Work — `our-work.html`

| Element | Value |
|---------|-------|
| **Canonical** | `https://stirlingkitchens.co.nz/our-work.html` |
| **Title** | Our Work \| Stirling Kitchens |
| **Meta description** | Style and inspiration gallery from Stirling Kitchens — custom kitchens, bathrooms and booth seating. Based in East Tāmaki, Auckland. Call +64 21 144 3301. |
| **H1** | Our Work |
| **Structured data** | LocalBusiness + BreadcrumbList |

---

## About Us — `about.html`

| Element | Value |
|---------|-------|
| **Canonical** | `https://stirlingkitchens.co.nz/about.html` |
| **Title** | About Us \| Stirling Kitchens |
| **Meta description** | Meet the Stirling Kitchens team — Craig, Stacy, Wayne and Phil. Over 25 years in kitchen design and manufacturing from our East Tāmaki, Auckland workshop. |
| **H1** | About Stirling Kitchens |
| **Structured data** | LocalBusiness (with employee list) + BreadcrumbList |

---

## Contact — `contact.html`

| Element | Value |
|---------|-------|
| **Canonical** | `https://stirlingkitchens.co.nz/contact.html` |
| **Title** | Contact Us \| Stirling Kitchens |
| **Meta description** | Get in touch with Stirling Kitchens. Call Craig on +64 21 144 3301, email admin@stirlingkitchens.co.nz, or send an enquiry. Based in East Tāmaki, Auckland. |
| **H1** | Get in Touch |
| **Structured data** | LocalBusiness + ContactPage + BreadcrumbList |

---

## 404 — `404.html`

The 404 page has `<meta name="robots" content="noindex">` so it won't be indexed by Google. Netlify automatically serves it when a page isn't found.

---

## Notes

### Updating canonical URLs
If the domain changes from `stirlingkitchens.co.nz`, do a find and replace across all HTML files.

### Submitting the sitemap
After deploying, submit `https://stirlingkitchens.co.nz/sitemap.xml` to Google Search Console.

### Internal linking
Key internal links in place:
- Home → all service pages (service cards)
- Home → Our Work (gallery CTA)
- Service pages → Contact (CTA blocks)
- Navigation links all pages together
- Footer links all pages

### Google Business Profile
Register or update the Google Business Profile at business.google.com using the address `3/32 Neilpark Drive, East Tāmaki, Auckland 2014`. This is separate from the website and critical for local search.
