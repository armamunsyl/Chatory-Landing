# Chatory Landing Page

Minimal responsive landing page + public Privacy Policy for Chatory.

## Stack

- Vite
- React
- JavaScript
- Tailwind CSS
- React Router
- Lucide React

The visual system uses a small custom CSS layer on top of Tailwind so the marketing layout stays consistent and easy to edit.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Chrome Web Store URL

Copy `.env.example` to `.env` and add the final listing URL after publication:

```bash
VITE_CHROME_STORE_URL=https://chromewebstore.google.com/detail/...
```

Without that variable, CTA buttons display `Chrome Web Store soon` instead of linking to a placeholder.

## Routes

- `/` — Landing page
- `/privacy` — Public Privacy Policy

A `vercel.json` rewrite is included so React Router routes work when deployed to Vercel.

## Privacy contact

The Privacy Policy currently directs users to the public support contact on Chatory's Chrome Web Store listing. If you later create a dedicated support email, update the Contact section in `src/pages/Privacy.jsx`.

## Brand

Chatory is presented as an independent product brand across the landing page, metadata, footer, and Privacy Policy.
