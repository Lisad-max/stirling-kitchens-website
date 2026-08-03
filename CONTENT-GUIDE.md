# Content Guide — Stirling Kitchens Website

How to update text, images, and other content on the site. No coding knowledge required for most of these changes — it's just editing text inside HTML files.

---

## Editing text

Open the relevant HTML file in a text editor (Notepad, VS Code, Notepad++, etc.). Find the text you want to change and replace it. Save the file and upload it to Netlify.

**Tip:** use Ctrl+F (Find) to locate specific phrases quickly.

---

## Updating phone number or email

The phone number appears in:
- Every page's header (the "Call Us" button)
- Every page's footer
- Every CTA block
- `index.html` — multiple CTAs
- `contact.html` — contact details section

**Current number:** `+64 21 144 3301`
**Current email:** `admin@stirlingkitchens.co.nz`

To change, do a Find & Replace across all `.html` files. Replace:
- `+64211443301` (in `href="tel:"` links)
- `+64 21 144 3301` (display text)
- `admin@stirlingkitchens.co.nz`

---

## Updating the address

The address appears in the footer of every page and on `contact.html`.
Current address: `3/32 Neilpark Drive, East Tāmaki, Auckland 2014`

---

## Adding a real project photo

### Gallery pages

1. Add the photo to the relevant image folder:
   - Kitchens: `AI kitchen images Image/` (rename the folder when switching to real photos — see note below)
   - Bathrooms: `Bathroom Images/`
   - Furniture: `Booth Seating Images/`

2. On `our-work.html` and the relevant service page, copy an existing `<figure class="gallery-item">` block and update the `src` and `alt` attributes.

3. Remove the `<figcaption>Style reference only</figcaption>` line — that disclaimer is only needed for AI reference images.

4. Remove the gallery note disclaimer block once all images are real:
   ```html
   <div class="gallery-note" ...>About these images:...</div>
   ```

### Hero and feature images

Find the `<img>` tag near the relevant section and update the `src` to the new file path. Always write a descriptive `alt` attribute.

---

## Updating the gallery-note disclaimer

The disclaimer ("About these images: ...") appears on `our-work.html`, `custom-kitchens.html`, `custom-bathrooms.html`, and `custom-furniture.html`. Update it by editing the `<div class="gallery-note">` block on each page.

Remove it entirely when all gallery images are real project photographs.

---

## Adding a testimonial

Testimonials appear on `index.html` and `custom-kitchens.html`. Find a `<div class="testimonials-grid">` block and copy/paste an existing `<div class="testimonial-card">`:

```html
<div class="testimonial-card">
  <blockquote>
    <p>Testimonial text goes here.</p>
  </blockquote>
  <cite>— Customer Name</cite>
</div>
```

---

## Updating team member bios (About page)

Open `about.html` and find `<article class="team-card">` for the person you want to update. Edit the `<p class="team-card__bio">` paragraph.

### Adding a real team photo

Replace the SVG placeholder inside `<div class="team-photo">`:

```html
<div class="team-photo">
  <img src="assets/images/team-craig.jpg" alt="Craig, Designer at Stirling Kitchens" width="160" height="160">
</div>
```

Remove the `<p class="team-photo-placeholder-label">Photo coming soon</p>` line beneath it.

---

## Updating page meta (title, description)

Each page has these tags near the top inside `<head>`:

```html
<title>Page Title Here</title>
<meta name="description" content="Meta description here.">
```

The meta description is what appears in Google search results. Keep it under 160 characters.

---

## Updating structured data (JSON-LD)

The `<script type="application/ld+json">` blocks near the top of each page contain structured data that helps Google understand the business. If the phone number, address, or business name changes, update it in every page's JSON-LD block.

---

## Adding a new page

1. Copy the closest existing page as a starting point
2. Update the `<title>`, meta description, canonical URL, and `aria-current="page"` nav attribute
3. Add it to `sitemap.xml`
4. Add it to the nav on every other page
5. Add it to the footer nav where appropriate

---

## Updating the sitemap

`sitemap.xml` lists all pages. If you add, remove, or rename pages, update the sitemap accordingly. See `sitemap.xml` in the root folder.
