# Stirling Kitchens Website

Static HTML website for Stirling Kitchens Ltd — custom kitchen, bathroom and furniture manufacturing, East Tāmaki, Auckland.

## Tech stack

- Plain HTML/CSS/JS — no build tools, no framework, no dependencies
- CSS custom properties for the design token system
- Netlify Forms for the contact form (no server required)
- JSON-LD structured data on every page
- WCAG 2.2 AA accessibility

## Pages

| File | URL | Description |
|------|-----|-------------|
| `index.html` | / | Home |
| `custom-kitchens.html` | /custom-kitchens.html | Custom Kitchens service page |
| `custom-bathrooms.html` | /custom-bathrooms.html | Custom Bathrooms service page |
| `custom-furniture.html` | /custom-furniture.html | Custom Furniture & Booth Seating |
| `our-work.html` | /our-work.html | Gallery (style/inspiration images) |
| `about.html` | /about.html | About Us & team bios |
| `contact.html` | /contact.html | Contact details & enquiry form |
| `404.html` | /404.html | Custom 404 — Netlify uses this automatically |

## Running locally

Open any `.html` file directly in a browser. No server required.

For Netlify Forms to work (the contact form), the site must be deployed to Netlify. The form will silently fail locally.

## File structure

```
/
├── index.html
├── custom-kitchens.html
├── custom-bathrooms.html
├── custom-furniture.html
├── our-work.html
├── about.html
├── contact.html
├── 404.html
├── sitemap.xml
├── robots.txt
├── stirling-kitchens-logo-dark-background.png
├── assets/
│   ├── css/
│   │   ├── tokens.css     — Design tokens (colours, spacing, type)
│   │   ├── base.css       — Reset, typography, utilities
│   │   └── components.css — UI components
│   └── js/
│       └── main.js        — Mobile nav, form validation
├── AI kitchen images Image/   — Kitchen reference images
├── Bathroom Images/           — Bathroom reference images
└── Booth Seating Images/      — Booth seating reference images
```

## Deploying to Netlify

1. Push this directory to a GitHub repo
2. Connect the repo to Netlify
3. No build command needed — set publish directory to `/` (root)
4. Netlify will automatically handle the 404.html page and the contact form

## Content edits

See `CONTENT-GUIDE.md` for how to update text, images, and testimonials.
