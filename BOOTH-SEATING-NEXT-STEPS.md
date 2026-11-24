# Booth & Banquette Seating page — where it's up to

**Branch:** `draft/booth-seating-page` (not live yet — `master` is what Netlify publishes)

## Done
- New page `booth-seating.html` targeting booth seating / banquette seating searches in Auckland
  (keyword research summary is in `SEO-GUIDE.md` under "Booth & Banquette Seating")
- FAQ section with FAQPage structured data, Service + BreadcrumbList structured data
- Footer link to the page on every page (top menu left unchanged on purpose)
- Custom Furniture page's booth section now links to the new page
- Added to `sitemap.xml`; decision logged in `DECISIONS.md`
- FAQ accordion styles added to `assets/css/components.css`

## Filled in (24 Nov 2026)
- **Price:** "starts from $9,000", in both the visible FAQ and the JSON-LD `FAQPage` block
- **Lead time:** "4 to 6 weeks from design sign-off to installation (conditions apply)", in both places
- `.placeholder` style removed from `components.css` (no placeholders left on the page)

## Still needed before publishing
1. Confirm whether the $9,000 starting price includes GST and installation, and adjust the wording if needed
2. Confirm the general dimensions in the FAQ (seat ~450 mm high, 450–500 mm deep, ~1.5 m per wall for a corner nook)
3. Confirm the FAQ statements about existing kitchens, under-seat storage, matching cabinetry finishes and measuring on site
4. Swap the three inspiration images for real Stirling Kitchens booth photos when available (can happen after launch)
5. Merge this branch into `master` only when the owner says "publish it"

## Notes
- "Banquette" is the correct spelling; "banquet seating" is mentioned once only, on purpose.
- Site phone number is 09 279 8984 everywhere (the old +64 21 number in `SEO-GUIDE.md` for other pages is out of date).
