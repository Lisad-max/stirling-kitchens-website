# Design System — Stirling Kitchens Website

Colours, typography, spacing, and component patterns. All values are defined as CSS custom properties in `assets/css/tokens.css`.

---

## Colours

| Token | Value | Usage |
|-------|-------|-------|
| `--clr-green` | `#6ed533` | Primary brand green — buttons, highlights, accents |
| `--clr-green-dark` | `#53a527` | Green hover states, secondary text accents |
| `--clr-green-tint` | `#f0faeb` | Light green background for light-theme sections |
| `--clr-navy` | `#0d1c2e` | Primary dark — header, footer, dark sections, hero |
| `--clr-navy-light` | `#162a42` | Cards on dark backgrounds |
| `--clr-white` | `#ffffff` | Background, reverse text |
| `--clr-dark` | `#1a202c` | Body text |
| `--clr-mid` | `#4a5568` | Secondary body text, descriptions |
| `--clr-muted` | `#718096` | Placeholder text, captions, small labels |
| `--clr-light` | `#f7f8fa` | Light section backgrounds, form inputs |
| `--clr-border` | `#e2e8f0` | Borders, dividers |

---

## Typography

**Font family:** System font stack (no external fonts)
```
system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif
```

**Type scale:**

| Token | Size | Usage |
|-------|------|-------|
| `--text-xs` | 0.75rem / 12px | Labels, captions, small print |
| `--text-sm` | 0.875rem / 14px | Secondary body, card text |
| `--text-base` | 1rem / 16px | Body text |
| `--text-md` | 1.125rem / 18px | Large body, sub-headings |
| `--text-lg` | 1.25rem / 20px | Sub-headings |
| `--text-xl` | 1.5rem / 24px | Section sub-titles |
| `--text-2xl` | 1.75rem / 28px | H3 |
| `--text-3xl` | 2rem / 32px | H2 at small sizes |
| `--text-4xl` | 2.5rem / 40px | H2 desktop |
| `--text-5xl` | 3rem / 48px | H1 desktop |

H1 and H2 use `clamp()` for fluid scaling between mobile and desktop.

**Weights:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)

---

## Spacing

8px base unit. Scale: `--sp-1` = 0.25rem (4px) through `--sp-24` = 6rem (96px).

Common values: `--sp-4` (16px), `--sp-6` (24px), `--sp-8` (32px), `--sp-10` (40px), `--sp-12` (48px), `--sp-16` (64px).

---

## Buttons

Three variants, all with `min-height: 48px` for touch targets:

| Class | Use case |
|-------|----------|
| `.btn.btn-primary` | Main CTA — green fill, navy text |
| `.btn.btn-secondary` | Alternate action — green border, green text |
| `.btn.btn-ghost` | On dark backgrounds — white border, white text |
| `.btn.btn-lg` | Larger variant for hero/CTA block contexts |

---

## Section colours

| Class | Background |
|-------|-----------|
| (no modifier) | White |
| `.section--light` | `--clr-light` (near-white) |
| `.section--green-tint` | `--clr-green-tint` (very light green) |
| `.section--dark` | `--clr-navy` (dark navy) — reverses text colours |

---

## Layout

- `--max-w: 1200px` — max page width
- `--max-w-text: 720px` — max text column width
- `--header-h: 72px` — fixed header height
- Container: `.container` — max-width + auto margins + `var(--sp-6)` inline padding
- Breakpoints: 480px, 640px, 768px, 1024px

---

## Key components

### Service cards (`.service-card`)
Full-link cards with image, title, description. 1→2→3 columns across breakpoints.

### Testimonial cards (`.testimonial-card`)
Blockquote with decorative open-quote, cite name. 1→2→3 columns.

### Gallery grid (`.gallery-grid`)
`aspect-ratio: 4/3` items with cover image and hover-reveal caption. 1→2→3 columns.

### Gallery note (`.gallery-note`)
Left-bordered info box for disclaimers. Remove when all images are real project photos.

### Booth features (`.booth-features`, `.booth-feature`)
Icon + heading + text layout. 1→2 columns.

### Process steps (`.process-steps`, `.process-step`)
Auto-numbered via CSS counter. 1→2→3 columns.

### Team cards (`.team-grid`, `.team-card`)
Circular photo placeholder + name + role + bio. 1→2→4 columns.

### Contact layout (`.contact-layout`)
Contact details left, enquiry form right. Stacks on mobile.

### CTA block (`.cta-block`)
Full-width dark navy with centred heading, paragraph and button group.

### Stats strip (`.stats-strip`)
Dark navy bar with flexbox stat items — number in green, label in soft white.

### Page hero (`.page-hero`)
Inner page header — dark navy, white heading, white/faded paragraph.

---

## Accessibility notes

- All interactive elements have `:focus-visible` styles using `outline: 3px solid var(--clr-green)`
- Skip link (`.skip-link`) becomes visible on keyboard focus
- All images have descriptive `alt` text (or `alt=""` for decorative images)
- `aria-current="page"` on current nav link
- `aria-label` on icon-only buttons
- Form fields all have associated `<label>` elements
- Touch targets minimum 48×48px
