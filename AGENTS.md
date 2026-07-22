# AGENTS.md

## Project type

Static site — no build tools, no bundler, no package manager, no test framework. Open HTML files directly or serve with any static server. Paths use leading `/` (e.g. `/css/main.css`), so a server is required for correct asset loading.

## Structure

- `index.html` — Landing page (single promo + social links + Hypeddit modal)
- `home.html` — Main site (bio, single, influences, social feed)
- `css/variables.css` — @font-face declarations + CSS custom properties (spacing scale)
- `css/main.css` — Base reset, imports variables.css
- `css/landing.css` — Landing page styles, imports variables.css
- `css/home.css` — Home page styles, imports variables.css
- `js/main.js` — Landing modal logic (Hypeddit iframe)
- `js/home.js` — Bandcamp floating player + terminal typewriter effect
- `js/components/`, `js/utils/`, `lib/` — Empty, reserved for future use
- `assets/fonts/` — 5 families: Aqua Grotesque, IBM Plex Mono, Rajdhani, Exo 2, Titillium Web

## CSS architecture

`variables.css` is imported by both `main.css` and the page-specific CSS files. When adding global tokens (fonts, spacing, colors), put them in `variables.css`. Page-specific styles go in `landing.css` or `home.css`.

## Responsive design

- `clamp()` for fluid typography and padding (no media query needed)
- `@media (max-width: 768px)` for structural changes (grid columns, hamburger menu, icon sizing)
- Footer padding and social icons on landing page may still need attention
- See `home.css` media query section (bottom of file) for current breakpoints

## External integrations

- **Hypeddit**: iframe in landing modal (`index.html`)
- **Bandcamp**: embedded player in floating panel (`home.html`)
- **YouTube**: iframe embed in single section (`home.html`)
- **Behold**: Instagram feed widget script (`home.html`)

## Language

Content is in Spanish. HTML `lang="es"`.

## Conventions

- No comments in CSS/JS unless explicitly requested
- CSS uses custom properties from `variables.css` for spacing (`--spacing-1` through `--spacing-10`)
- JS is vanilla, no modules, no transpilation
- Git commits in Spanish
