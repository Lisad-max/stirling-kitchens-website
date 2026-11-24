# Project status — read this first

**Last updated:** 25 November 2026

This file is the handover note for picking the work up again. Read it before anything else, then `CLAUDE.md` (house rules) and `STIRLING-KITCHENS-SITE-BRIEF.md` (business facts).

---

## 1. Where things stand

- **Live site:** https://www.stirlingkitchens.co.nz (Netlify publishes the `master` branch automatically).
- **GitHub repo:** https://github.com/Lisad-max/stirling-kitchens-website
- **Everything below is live.** There is no unpublished work waiting, apart from this notes update if it hasn't been merged yet (branch `docs/handover-notes`).
- **Owner's sign-off word is "publish it".** Never merge into or push to `master` until the owner says it in chat.

### Pages on the site
| Page | Notes |
|---|---|
| `index.html` | Home |
| `custom-kitchens.html`, `custom-bathrooms.html`, `custom-furniture.html` | The three service pages |
| `booth-seating.html` | Booth & banquette seating — the main page worked on in Nov 2026 (details below) |
| `booth-seating-render.html` | "Send us your corner" step-by-step render enquiry app. Built by a separate Claude session; short link `/corner` (see `_redirects`) |
| `our-work.html` | Gallery — kitchens, bathrooms, **booth & banquette seating (real jobs)**, custom furniture |
| `about.html`, `contact.html`, `thank-you.html`, `404.html` | |

### `booth-seating.html` — section order (owner-approved)
1. Hero — H1 "Custom Booth & Banquette Seating, Built to Fit Your Kitchen" + dining-table line
2. "A chair is somewhere to sit. A booth is somewhere to stay." (intro)
3. **"Built by us, styled for living"** — 3 real Stirling jobs, each shown as a pair tagged **As built** / **Styled**, with a layout-name caption
4. "Types of booth and banquette seating we build" — 8 layout cards (breakfast nook, corner/L-shaped, U-shaped, curved, window seat, island, back-to-back, banquette & sofa divider). Photos are AI inspiration images: **no title on the photo**, just a small "Inspiration image" label bottom-right
5. "Built-in banquette vs off-the-shelf bench" — storage-drawers image beside four points
6. "From empty corner to finished nook" — 4 steps, then one real job: 3D measure photo → CAD 3D drawing → CAD plan → finished booth
7. Meet Craig (photo + 30 years designing kitchens)
8. "Booth seating ideas and finishes" — 3 style-reference images
9. FAQ (matches the FAQPage JSON-LD — keep both in sync)
10. "Planning a new kitchen too?"
11. Final call to action / render offer

All images on this page zoom slightly on hover and open larger on click (`assets/js/image-viewer.js`).

---

## 2. Owner decisions and preferences (don't undo these)

- **Copy:** short. People won't read long paragraphs — one or two short sentences per item. Warm, plain voice (Seth Godin-style was requested for the booth page).
- **Location:** don't limit to Auckland. "Across Auckland and further afield". Keep "Auckland" in page titles/meta for local SEO, not in the booth H1.
- **Don't keep saying "East Tāmaki workshop"** in copy — the address is already in the footer and structured data.
- **Price:** booth seating "starts from $9,000". **Lead time:** "4 to 6 weeks from design sign-off to installation (conditions apply)".
- **Craig:** 30 years designing kitchens (site-wide; About page and brief updated).
- **3D measuring + CAD design** is a key selling point — mention it, don't over-explain.
- **Booth page has 8 layout cards — stop at 8.** Peninsula seating was considered and dropped (image tools keep producing islands).
- **"Before / After" wording was rejected.** Use **"As built" / "Styled"** for real-job pairs. Using the word "styled" is fine.
- **Our Work booth section:** 7 real-job photos in the normal masonry gallery — **no** before/after layout there (owner rejected it).
- **Image captions:** layout name only (see `CLAUDE.md`). Booth layout cards: no caption on the photo, small "Inspiration image" label instead.
- **No commercial work** anywhere (see `CLAUDE.md`).

---

## 3. Images — how they're organised

All booth images live in `Booth Seating Images/`.

- **`originals/`** — full-size source files (2–6 MB). **Not committed to git on purpose** (too big); keep them on this computer.
- **Web copies** (in `Booth Seating Images/`) — what the site uses. JPEG, quality 82, 1200 px wide:
  - Booth page cards/pairs: cropped to **1200 × 900 (4:3)**, because those frames are 4:3.
  - Our Work gallery (masonry): resized to 1200 wide **without cropping**.
- **Naming:** lowercase, hyphens, descriptive and keyword-rich (e.g. `u-shaped-kitchen-booth-seating-tan-leather.jpg`).
  - `stirling-kitchens-…` prefix = **a real Stirling job photo**.
  - `…-with-cushions` = a real job photo with AI-added cushions/rug (shown as "Styled").
  - Everything else in that folder = AI style/inspiration image — must be labelled as inspiration, never as "our work".
- **When the owner adds a new image:** look at it, rename it to describe the layout, move the original into `originals/`, make the web copy, then place it where it fits.
- **Tools on this PC:** no Python, no ImageMagick. Images were resized/cropped with **PowerShell + System.Drawing**; PDFs rendered with the Windows PDF API (`Windows.Data.Pdf`). Node.js is available for scripted HTML edits and checks.

### Real Stirling jobs available
| Job | Files |
|---|---|
| Corner booth: 3D measure → CAD → finished (on booth page "How it works") | `corner-booth-seating-space-3d-measuring-before.jpg`, `corner-booth-seating-cad-design-3d-drawing.jpg`, `corner-booth-seating-cad-plan-measurements.jpg`, `corner-booth-seating-open-plan-dining-nook.jpg`; CAD source `Seating Area REV-Final.pdf` |
| Green L-shaped bench seating with storage | `stirling-kitchens-green-l-shaped-bench-seating-storage-1/2/3.jpg`, `…-with-cushions.jpg` |
| Kitchen window seat with drawers | `stirling-kitchens-kitchen-window-seat-storage-drawers.jpg`, `…-with-cushions.jpg` |
| Plywood built-in bench seat | `stirling-kitchens-plywood-built-in-bench-seat-storage.jpg`, `…-with-cushions.jpg` |
| Craig's photo | `assets/team/craig-booth-seating.jpg` |

---

## 4. How to make and publish a change

1. `git checkout master && git pull` — **always pull first**; another Claude session has also published to this repo (the render app, PR #1).
2. Create a branch, e.g. `git checkout -b draft/<short-name>`.
3. Make the change. Check: JSON-LD still parses, every `src` path exists, open/close tags balance.
4. Commit and `git push -u origin <branch>` (pushing a branch is fine — it doesn't go live).
5. Show the owner (open the page: `Start-Process "C:\Users\corob\stirling kitchens webiste\booth-seating.html"`).
6. **Only when the owner says "publish it":** `git checkout master`, `git merge --ff-only origin/master`, `git merge --no-ff <branch>` (use `-F <file>` for the message — `git merge` can't read the message from stdin), `git push origin master`.
7. Wait ~30 s, then check the live page with `curl` against `https://www.stirlingkitchens.co.nz/...`.

Notes:
- GitHub push works from this PC (Git Credential Manager). `gh` CLI isn't installed.
- The site address is **www**. Canonicals, sitemap, robots.txt and JSON-LD all use `https://www.stirlingkitchens.co.nz` — keep new pages consistent.
- Viewing locally: open the `.html` file in Chrome/Edge. The Claude app's built-in preview pane shows local files **without** CSS/images, and its `preview_start` may launch a different project's server if the session started in another folder — don't rely on it.

---

## 5. Open items / follow-ups

- **Confirm with owner:** does "$9,000" include GST and installation? If so, say "including GST, built and installed".
- **Confirm FAQ dimensions** (seat ~450 mm high, 450–500 mm deep, ~1.5 m per wall). The CAD job shows 450 mm high and 475 mm seat depth.
- **Google Search Console** (owner to do): add/verify a Domain property, submit `https://www.stirlingkitchens.co.nz/sitemap.xml`, request indexing for `booth-seating.html`.
- **Our Work → Custom Furniture section** text mentions "commercial counters" — conflicts with the no-commercial rule; owner hasn't decided.
- **Back-to-back booth image** is a home bar with whisky/pool table — owner accepted it; could read as hospitality.
- **Optional:** clean URLs without `.html` (both already work on Netlify; canonicals use `.html`).
- **Old git branches** (all published or abandoned — safe to delete if the owner wants tidying): `draft/booth-seating-page`, `draft/our-work-booth-seating`, `draft/booth-before-after`, `draft/layout-inspiration-labels`, `fix/www-site-address`, `draft/photo-enquiry` (other session). **`draft/our-work-before-after` was rejected — never publish it.**
- **Untracked files left alone:** `Booth Seating Images/custom-kitchens.html` (stray copy — check before deleting), `desktop.ini`, old `.webp` duplicates, and unused images in `Landscape/`, `Portrait/`, `AI kitchen images Image/`, `Bathroom Images/`.
