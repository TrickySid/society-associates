# Society Associates

Marketing website for Society Associates, a housing society consultancy serving Thane District and Mumbai. The site presents the business, highlights services, showcases clients, and provides a contact form for enquiries.

## Overview

This is a single-page React site with sections for:

- hero and call to action
- services
- company background
- client showcase
- contact information and enquiry form

The site is designed as a static build and is deployed through GitHub Pages.

## Tech stack

- React 18
- Create React App
- AOS for scroll animations
- CSS modules by section via `src/styles/`
- GitHub Actions for deployment
- Formspree for contact form submission

## Project structure

```text
src/
  components/   UI sections such as Header, Services, About, Clients, Contact
  styles/       Section-level CSS files
  img/          Image assets used across the site
.github/
  workflows/    GitHub Pages deployment workflow
```

## Available scripts

- `npm start` runs the app locally in development mode
- `npm run build` creates a production build in `build/`
- `npm test` runs the test runner
- `npm run deploy` publishes the existing build with `gh-pages`

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open `http://localhost:3000`

## Deployment

The primary deployment path is GitHub Pages through `deploy-pages.yml`. On pushes to `main`, GitHub Actions installs dependencies, builds the site, and publishes the `build/` output.

The `homepage` field in `package.json` is set to `https://www.societyassociates.in`.

## Contact form

The contact form in `Contact.jsx` submits to Formspree using a hardcoded public endpoint. Since this is a frontend-only site, that endpoint is visible in the client bundle and is treated as configuration rather than a secret.

The current form also includes:

- inline success and error feedback
- disabled submit state while sending
- a hidden honeypot field to reduce bot spam
