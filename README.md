# Society Associates

Marketing website for Society Associates, a housing society consultancy serving Thane District and Mumbai. The site presents the business, highlights services, showcases clients, and provides a contact form for enquiries.

## Overview

This is a single-page React site with sections for:

- hero and call to action
- services
- company background
- client showcase
- contact information and enquiry form

The site is built as a static frontend and deployed through GitHub Pages.

## Tech stack

- React 18
- Vite
- AOS for scroll animations
- section-level CSS files in `src/styles/`
- GitHub Actions for deployment
- Formspree for contact form submission

## Project structure

```text
index.html       Vite app shell
public/          Static assets copied as-is at build time
src/
  components/    UI sections such as Header, Services, About, Clients, Contact
  styles/        Section-level CSS files
  img/           Image assets used across the site
.github/
  workflows/     GitHub Pages deployment workflow
```

## Available scripts

- `npm run dev` starts the Vite development server
- `npm start` starts the same Vite development server
- `npm run build` creates a production build in `dist/`
- `npm run preview` serves the production build locally
- `npm test` prints a placeholder message because no test runner is configured
- `npm run deploy` publishes the existing `dist/` build with `gh-pages`

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown by Vite, typically `http://localhost:5173`

## Deployment

The primary deployment path is GitHub Pages through [deploy-pages.yml](c:/Users/siddh/society-associates/.github/workflows/deploy-pages.yml). On pushes to `main`, GitHub Actions installs dependencies, builds the site with Vite, and publishes the `dist/` output.

## Contact form

The contact form in [Contact.jsx](c:/Users/siddh/society-associates/src/components/Contact.jsx) submits to Formspree using a hardcoded public endpoint. Since this is a frontend-only site, that endpoint is visible in the client bundle and is treated as configuration rather than a secret.

The current form also includes:

- inline success and error feedback
- disabled submit state while sending
- a hidden honeypot field to reduce bot spam

## Notes

- `.env` is gitignored, but it is not required for the current contact form setup.
- The app shell lives in [index.html](c:/Users/siddh/society-associates/index.html), and the React entrypoint is [main.jsx](c:/Users/siddh/society-associates/src/main.jsx).
