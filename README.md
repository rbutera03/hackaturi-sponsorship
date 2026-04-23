# Hack@URI Sponsorship Report Site

Single-page React + Vite site used for the Hack@URI sponsorship impact report.

## Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [npm](https://www.npmjs.com/) (bundled with Node.js)

## Setup

1. Clone and enter the repo:
   ```bash
   git clone <your-repo-url>
   cd hackaturi-sponsorship
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

## Scripts

- Start dev server:
  ```bash
  npm run dev
  ```
- Build production bundle:
  ```bash
  npm run build
  ```
- Preview production build locally:
  ```bash
  npm run preview
  ```
- Run lint:
  ```bash
  npm run lint
  ```

## Current Project Structure

```text
src/
├── app/
│   └── App.jsx
├── features/
│   ├── impact-hero/
│   ├── our-story/
│   ├── by-the-numbers/
│   ├── why-sponsor/
│   ├── tracks/
│   ├── highlights/
│   ├── sponsorship-cta/
│   └── layout/
│       ├── components/
│       │   ├── Header.jsx
│       │   └── Header.css
│       └── index.js
├── shared/
│   ├── components/
│   │   ├── PlaceholderImage.jsx
│   │   ├── PlaceholderImage.css
│   │   └── index.js
│   └── styles/
│       ├── shared.css
│       └── section.css
├── index.jsx
└── index.css
```

## Architecture Notes

- Single-page section report (no React Router).
- `App.jsx` composes section components in display order.
- Optional fixed header navigation is controlled by `SHOW_HEADER` in `src/app/App.jsx`.
- Feature folders expose entry points through `index.js` barrels.

## Naming Conventions

Use these conventions for all new code and when touching existing files.

### JavaScript / JSX
- `camelCase` for variables and functions
- `PascalCase` for React components
- `CONSTANT_CASE` for module-level constants/config objects

### CSS
- `kebab-case` class names
- Avoid feature-local BEM element naming with `__`; use kebab-case equivalents

### Comments
- Add concise file headers for major JSX/CSS files
- Add short logic comments around non-trivial helpers/effects/handlers
- Keep section comments consistent with neighboring files

## Content Update Hotspots

### Header visibility and navigation
- `src/app/App.jsx`
  - `SHOW_HEADER`
- `src/features/layout/components/Header.jsx`
  - `NAV_ITEMS`

### Hero and section copy
- `src/features/impact-hero/ImpactHero.jsx`
- `src/features/our-story/OurStory.jsx`
- `src/features/why-sponsor/WhySponsor.jsx`
- `src/features/tracks/TracksSection.jsx`
- `src/features/highlights/Highlights.jsx`
- `src/features/sponsorship-cta/SponsorshipCta.jsx`

### Impact metrics
- `src/features/by-the-numbers/ByTheNumbers.jsx`
  - `STATS`

### Contact + outbound links
- `src/features/sponsorship-cta/SponsorshipCta.jsx`
  - `CONTACT_EMAIL`
  - `MAIN_SITE`

## Styling

- App shell/theme tokens: `src/shared/styles/shared.css`
- Shared section primitives: `src/shared/styles/section.css`
- Feature styles are colocated with each feature component.

## Adding a New Section

1. Create `src/features/<feature>/<FeatureName>.jsx`
2. Create `src/features/<feature>/<FeatureName>.css`
3. Export it from `src/features/<feature>/index.js`
4. Import and render it in `src/app/App.jsx`
5. Add a nav entry in `Header.jsx` if it should be navigable
6. Follow naming conventions (JS/JSX/CSS) in this README

## Contributing Checklist

- Naming conventions are followed
- Comment style remains consistent
- No stale renamed symbol/class references remain
- Lint passes:
  ```bash
  npm run lint
  ```

## Deployment

Build and deploy the `dist/` output:

```bash
npm run build
```

Deploy `dist/` to your static host (Netlify, Vercel, GitHub Pages, S3, etc.).

## License

MIT
