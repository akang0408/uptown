# Uptown Grill & Deli — Website

Complete redesign of [uptowngrillanddeli.com](https://uptowngrillanddeli.com) built with React + Vite + React Router.

## Quick Start

```bash
npm install
npm run dev
# http://localhost:5173
```

## Project Structure

```
src/
├── main.jsx                  # Entry point
├── App.jsx                   # Router + layout
├── styles/
│   └── global.css            # Design tokens, resets, shared utilities & buttons
├── data/
│   └── siteData.js           # ALL content: menu, hours, reviews, featured items
├── components/
│   ├── Nav.jsx / .module.css
│   └── Footer.jsx / .module.css
└── pages/
    ├── Home.jsx / .module.css        # Hero, featured, about, categories, reviews, find us
    ├── Menu.jsx / .module.css        # Full tabbed menu with expandable options
    ├── About.jsx / .module.css       # Story, values, reviews, hours & location
    └── Contact.jsx / .module.css     # Map, contact info, form
```

## Pages

| Route      | Description |
|------------|-------------|
| `/`        | Hero with live hours, featured items, about strip, menu categories, reviews, find us |
| `/menu`    | Full menu — 7 categories, sticky tabs, expandable add-ons |
| `/about`   | Story, values, reviews, hours & location |
| `/contact` | Contact form, map embed, full hours |

## Customizing Content

All content lives in **`src/data/siteData.js`**:

- `hours` — hours of operation (drives the live "open today" indicator)
- `reviews` — Google review quotes
- `featured` — the spotlight items shown on the homepage
- `menuCategories` — the full menu with all items, prices, descriptions, and add-on options

## Design System

The color palette in `src/styles/global.css` uses forest green (`--green`), warm mustard (`--mustard`), and red (`--red`) as accents over warm off-white backgrounds — conveying a fresh, community-owned deli feel.

To adjust brand colors, change the variables under `:root` in `global.css`.

## Wiring Up the Contact Form

The form currently shows a success state on submit. To connect it to a real backend:

**Formspree (easiest):**
```js
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

**Netlify Forms:** Add `data-netlify="true"` and `name="contact"` to the `<form>` tag.

## Build & Deploy

```bash
npm run build   # outputs to /dist
```

Deploy `/dist` to Netlify, Vercel, or any static host.
