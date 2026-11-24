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

## Still needed before publishing
1. **Price range** — replace the yellow placeholder in the FAQ "How much does custom banquette seating cost in Auckland?"
2. **Lead time** — replace the placeholder in the FAQ "How long does it take to build custom booth seating?"
3. Update the same two answers in the JSON-LD `FAQPage` block at the top of `booth-seating.html` (search for `PLACEHOLDER`)
4. Confirm the general dimensions in the FAQ (seat ~450 mm high, 450–500 mm deep, ~1.5 m per wall for a corner nook)
5. Swap the three inspiration images for real Stirling Kitchens booth photos when available
6. Once placeholders are gone, remove the `.placeholder` style at the end of `components.css` and merge this branch into `master`

## Notes
- "Banquette" is the correct spelling; "banquet seating" is mentioned once only, on purpose.
- Site phone number is 09 279 8984 everywhere (the old +64 21 number in `SEO-GUIDE.md` for other pages is out of date).
