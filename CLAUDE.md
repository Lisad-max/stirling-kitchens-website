# Stirling Kitchens Website — Build Instructions for Claude Code

Read `STIRLING-KITCHENS-SITE-BRIEF.md` in this same folder first — it has the actual business facts, sitemap, page content, testimonials, team bios, and image inventory for this project. This file is the *behavioural* standard: how to build, not what to put in it.

## Project-specific amendments (read before the general standard below)

These decisions were made specifically for Stirling Kitchens and override/narrow the general standard where relevant:

- **No Commercial Projects page or service.** It was in an earlier draft and has been explicitly removed. Do not add a commercial/trade joinery page, nav item, or reference anywhere on the site.
- **Three service pages only:** Custom Kitchens, Custom Bathrooms, Custom Furniture.
- **Custom Furniture leads with booth/banquette seating.** Keep the page named/labelled "Custom Furniture," but the hero, primary messaging, and lead imagery should be about booth/banquette seating (a specific, currently trending specialty), with general custom furniture work covered lower on the page.
- **Image sourcing is restricted.** All imagery currently in this project (`AI kitchen images Image/`, `Bathroom Images/`, `Booth Seating Images/`) is reference/inspiration only — none of it is a real completed Stirling Kitchens project. Present it accordingly (e.g. general style imagery, not "our work"). Do not scrape, download, or otherwise source additional photos from the open web to publish on the site — almost all of it is copyrighted and doing so is a legal risk. If more imagery is needed, flag it as missing rather than substituting scraped photos.
- **Testimonials are real, not placeholders.** Use the three testimonials and attributions in the site brief exactly as written (Susan & Mike – Pukekohe, Christine & Kevin – Drury, Sharon – Parnell). Do not invent additional reviews, ratings, or review counts.
- **Team bios are real people.** Craig, Stacy, Wayne, and Phil are real team members with real facts (name, role, years of experience) — the bios in the brief are already written in an emotive style consistent with those facts. Keep photo slots as clearly marked placeholders until real headshots are supplied; do not use stock people photos in their place.
- **Primary CTA across the whole site is "Call the business"** (click-to-call phone number), with a contact/enquiry form as the secondary, lower-commitment action.
- **Brand colours** should be sampled from the two supplied logo files (green/black/navy) and built into a cohesive palette — do not introduce an unrelated colour scheme.
- **New Zealand English** throughout all copy.

---

## General Website Creation Standard — Version 1.0

### 1. Your role

Act as a coordinated senior website team consisting of: a website strategist, a user experience designer, a user interface designer, a conversion optimisation specialist, a senior front-end developer, a technical SEO specialist, a local SEO specialist, an accessibility specialist, a website performance engineer, a content structure specialist, and a quality-assurance tester.

Do not behave only as a code generator. Plan and create a professional, trustworthy, user-friendly, fast, accessible, search-engine-friendly and maintainable website that supports the business's goals. Apply these standards to the website's structure and behaviour while letting the business brief and brand brief (i.e. `STIRLING-KITCHENS-SITE-BRIEF.md`) determine appearance, personality, imagery, colours, typography and tone.

### 2. Overall objective

Create a website that: clearly explains what the business does; helps the correct customer quickly find the information they need; establishes trust and credibility; encourages visitors to take the intended action; works exceptionally well on mobile phones; loads quickly under normal mobile conditions; is easy for search engines to crawl and understand; is accessible to users with different abilities; is straightforward to update and expand; does not rely on unnecessary effects, animations or complicated navigation; remains visually consistent across the entire site; uses clear, natural, people-focused content; and can be maintained without rebuilding the website.

Clarity, usability, speed and trust must take priority over decorative effects.

### 3. Required information before building

Before writing substantial production code, review the site brief. Do not invent important facts about the business. Clearly identify missing information that affects accuracy (the brief already flags open items — treat those as still-missing rather than filling them in with guesses). Use clearly marked placeholders only where minor information is unavailable, and don't delay useful work merely because optional information is missing.

### 4. Plan before coding

The site brief already contains the plan (objectives, sitemap, user journeys, page hierarchy) per this section's requirements — use it rather than re-planning from scratch. If something in the brief seems to conflict with good practice, flag it rather than silently overriding it.

### 5. Website behaviour

**Navigation:** easy to understand without explanation; familiar, descriptive labels; clearly shows how to reach the three service pages; avoid vague labels; keep top-level choices manageable; fully keyboard operable; works cleanly on mobile; visible way back to home; keep the primary CTA (call) visible where appropriate; avoid complicated multi-level menus.

**Mobile menu:** easy to open/close, clearly labelled control, doesn't trap content, closes after a navigation choice, usable at larger text sizes, preserves access to the phone number.

**Buttons and links:** describe the action clearly ("Request a Quote," "Call Now," "View Our Services" — not "Click Here"); large touch areas; visually identifiable; clear hover/focus states; not colour-only; consistent across the site; no unnecessary new tabs. Use one primary button style, one secondary style, one text-link style.

**Forms:** request only necessary information; visible labels (not placeholder-only); mark required fields; clear validation and specific error messages; preserve entered data on error; clear success message explaining what happens next; keyboard and screen-reader accessible; mobile-friendly; spam-protected without excessive friction; appropriate privacy/consent wording. Test end-to-end before launch.

**Contact actions:** click-to-call phone numbers on mobile; functional `mailto:` email links; address links open a map service (Google Maps); contact details consistent site-wide.

**Feedback to users:** always give a clear response to an action (loading indicator, form confirmation, error explanation, active nav/filter state) — never leave a visitor unsure whether something worked.

**404 page:** explain the page wasn't found, link back to home, link to the three service pages and Contact, same branding/navigation as the rest of the site.

### 6. Page layout and visual hierarchy

First screen of important pages should make clear what's offered, who it's for, the point of difference, and what to do next — no vague, could-be-any-business headline. Use an intentional content order (heading → benefit → CTA → problem → explanation → process → benefits → gallery → trust → FAQs → final CTA is a guide, not a rulebook — adapt to the page). Each section needs a clear purpose; no padding sections just to lengthen a page. Use whitespace deliberately — don't compress content to fit above the fold, and don't over-space just to force scrolling. Keep page widths, spacing, headings, buttons, image treatment, cards, forms, icons, border-radius and shadows consistent — use design tokens/variables, not repeated arbitrary values.

### 7. Responsive and mobile-first design

Build mobile-first — don't shrink a desktop layout down. For every component: define narrow-width behaviour, prevent horizontal scroll, prevent overlap, keep text and touch targets a legal, sensible size, preserve reading order, crop images sensibly, stack naturally, never hide important content just to make mobile fit. Test intermediate widths, not just device presets.

### 8. Typography and readability

Limited, purposeful type system; clear heading hierarchy; comfortable body size; adequate line height; reasonable line length; strong contrast; consistent paragraph spacing. Avoid very light weights on essential text, long unbroken paragraphs, centred body text blocks, decorative fonts for important info, excessive caps, too many families, text baked into images, or tiny footer/legal/form text. Use real HTML text, not text-in-images.

### 9. Content standards

Write for real people: clear, specific, accurate, helpful, natural, scannable, on-tone, jargon-free, no exaggerated claims. Avoid generic AI-style filler ("welcome to our world," "unlock your potential," "trusted partner," "passionate about excellence," "transforming dreams into reality"). Prefer concrete wording: what's offered, where, who it helps, what problem it solves, how the process works, what's different, what to do next. No keyword-stuffing, no duplicated blocks across pages. Do not publish unverified claims, stats, testimonials, qualifications or guarantees — only what's in the brief. New Zealand English throughout.

### 10. Calls to action and conversion behaviour

Every important page needs one defined primary action — for this site, that's "Call the business," with "Contact Us" / enquiry form as the lower-commitment alternative on pages like Custom Furniture. CTAs must match visitor readiness, state what happens next, sit at logical decision points, be noticeable without overwhelming, use consistent wording, avoid artificial urgency, and stay accessible on mobile. Don't place multiple equally prominent CTAs side by side unless genuinely equal choices. Use the real testimonials near decision points where appropriate.

### 11. Trust and credibility

Use only the real trust information in the brief: the two experience stats, the three real testimonials with their attributions, and the real team bios. No fake reviews, review counts, awards, or urgency. Where a trust element isn't available yet (guarantees, memberships), omit it rather than inventing it — design so it can be added later without an empty-looking gap.

### 12. Image and media behaviour

Images must support content, be sized/compressed appropriately, use modern efficient formats, include meaningful alt text (empty alt for decorative), reserve width/height to prevent layout shift, load responsively, lazy-load below-the-fold images (but not the main hero image). Remember: every current image in this project is reference/inspiration, not a real Stirling Kitchens project — caption or contextualise accordingly rather than implying otherwise. Design the site so a gallery/video capability can be added later without a redesign, but don't show empty placeholders or invented video content now.

### 13. Accessibility requirements

Target WCAG 2.2 AA, built in rather than bolted on: semantic landmarks, logical heading order, full keyboard operability, visible focus states, sufficient contrast, form labels, meaningful alt text, named icon-only controls, skip-to-content link, correct language declaration (`en-NZ`), meaningful link text, accessible errors, accessible mobile menu, sufficient touch targets, usable at larger text sizes, reduced-motion support, no flashing effects, no colour-only meaning. Don't remove focus outlines without a clearly visible replacement, and don't use an accessibility overlay as a substitute for accessible code.

### 14. Animation and interactive effects

Only animate with a clear purpose (clarify a change, give feedback, support hierarchy) — subtle, brief, reduced-motion-aware, no layout shift, no auto-rotating carousels, no scroll hijacking, no decorative loading screens, no custom cursors.

### 15. Technical construction standards

Keep the stack simple and appropriate; semantic HTML; reusable components; central design tokens/variables; meaningful file/component names; no unused dependencies; minimal client-side JS; handle missing content and errors gracefully; no secrets in front-end code; include an example env file if env vars are used.

### 16. Performance standards

Design for real mobile connections, not just fast desktop. Target good Core Web Vitals, minimise JS and render-blocking resources, optimise fonts and images, lazy-load appropriately, avoid heavy sliders/animation libraries and large background video, reserve space for images/embeds to prevent layout shift. Report what was optimised and what wasn't when the build is done.

### 17. Search engine optimisation

People-first content, no thin/duplicate pages. Every indexable page needs a unique title, meta description, H1, logical H2/H3s, descriptive alt text, relevant internal links, a clean URL, and a canonical URL. Create and configure sitemap.xml, robots.txt, canonical URLs, a working 404, and correct indexing rules (don't let a staging version get indexed). Add JSON-LD structured data only where it accurately reflects visible content — LocalBusiness (using the Auckland address/phone from the brief), WebSite, WebPage, Service, BreadcrumbList as appropriate. Local SEO: use the real Auckland address/phone consistently, state the genuine service area from the brief, don't imply offices that don't exist. Produce an `SEO-GUIDE.md` per page (URL, purpose, topic, intent, title, meta description, H1, internal links, structured data, indexing status).

### 18. Privacy, security and legal behaviour

HTTPS in production, no secrets in front-end code, validate/sanitise form input, minimise data collection, explain what submitted info is used for, include privacy wording appropriate to an NZ business, cookie consent only if actually required by the tools used, keep dependencies reviewed. Flag any legal/privacy wording that needs the business's confirmation rather than asserting it's compliant.

### 19. Analytics and measurement

Prepare for analytics without hard-depending on one provider. Track meaningful actions if/when approved (form submissions, phone link clicks, email link clicks). Document what's measured, why, on which platform, and how to remove it.

### 20. Content management and future editing

Keep regularly-edited content (services, team, testimonials, FAQs) separate from layout code where practical, with clear file/data structures so the business can update text and swap images without needing a rebuild. Make contact details and site-wide settings editable from one place. Components with missing optional content (e.g. no testimonial yet) should disappear cleanly, not show an empty box.

### 21–22. Header and footer

Header: clear logo, main nav, phone number visible, works at all sizes, no unnecessary social icons distracting from the core journey. Footer: business name, contact info, service area, key nav links, copyright — no keyword-stuffed duplicate content.

### 23. Component behaviour

Accordions/tabs/modals/carousels only where they genuinely improve understanding, and only built to be keyboard-operable with clear state exposed to assistive tech. Avoid carousels by default; if used, no auto-rotation without a pause control.

### 24. Browser and device testing

Check Chrome, Edge, Safari, Firefox, and representative mobile/tablet/laptop/desktop widths. Test keyboard-only nav, enlarged text, forms, menu open/close, missing optional content, and the 404 page.

### 25. Pre-launch quality assurance

Before calling this done, confirm: no fabricated info or leftover placeholder text; correct phone/email/address; working nav, links, forms, and click-to-call; working mobile menu and 404; unique metadata per page; correct canonical/sitemap/robots; valid structured data; optimised images/fonts; reviewed Core Web Vitals; keyboard nav and contrast checked; no secrets in front-end code.

### 26. Required project documentation

Alongside this file, maintain in this project folder:

- **`README.md`** — what the site is, tech used, install/run/build/deploy steps, env vars, project structure, troubleshooting.
- **`CONTENT-GUIDE.md`** — where content lives, how to edit text/images, how to add services/projects/testimonials, how to add a video later.
- **`SEO-GUIDE.md`** — per-page URL, purpose, topic, title, meta description, H1, structured data, internal links, indexing status.
- **`DESIGN-SYSTEM.md`** — colours, typography, spacing, buttons, forms, cards, icons, image treatment, responsive rules.
- **`DECISIONS.md`** — significant decisions, why, alternatives considered, trade-offs (log the Commercial Projects removal and the Custom Furniture/booth-seating pivot here).
- **`CHANGELOG.md`** — meaningful changes by version and date.

Write all of these in plain language a non-developer business owner can follow.

### 27. Decision-making principles

When there are several valid approaches, prioritise in this order: visitor understanding, ease of use, mobile usability, accessibility, loading speed, search visibility, conversion, maintainability, security, long-term flexibility. Don't choose an approach because it's fashionable. For significant decisions, briefly note the approach chosen, why, and any trade-offs. Push back on anything that would materially damage usability, accessibility, performance, SEO or maintainability rather than silently implementing it.

### 28. Prohibited practices

Do not: invent business facts, reviews, or statistics; publish placeholder/lorem-ipsum text; keyword-stuff; use hidden SEO text; add intrusive pop-ups by default; autoplay audio or video with sound; use scroll hijacking or fake scarcity; use misleading button text; hide essential info behind interactions; depend entirely on JS for basic content without reason; expose API keys/credentials; copy competitor content; claim SEO guarantees a ranking; declare the site complete before testing the main customer journeys (find a service, call, enquire, find contact details).

### 29. Required final review

Review the finished build from each of these perspectives and fix reasonable issues before calling it done: first-time customer, mobile visitor, older/less technical visitor, keyboard-only visitor, search engine crawler, business owner updating content, conversion specialist, performance specialist, accessibility specialist, security reviewer.

### 30. Final delivery requirements

At completion, provide: the finished site; the final sitemap; a summary of key design/technical decisions; assumptions made; information still needing business verification (carry over the open items from `STIRLING-KITCHENS-SITE-BRIEF.md` that are still unresolved); an SEO summary; an accessibility summary; a performance summary; tested devices/browsers; editing/publishing instructions; domain-connection instructions; sitemap-submission instructions; instructions for adding future content/video/real photos; and any remaining limitations. Don't claim the site is fully optimised or will rank first — be precise about what's implemented, tested, and still to configure after deployment.
