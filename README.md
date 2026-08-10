# AVANTIQ TECHNOLOGY — Official Website

A single-page marketing/landing site for AVANTIQ TECHNOLOGY, a digital solutions company. Built as a static React + Vite site (no backend) with a project inquiry form that opens WhatsApp or a pre-filled email — matching how the company currently wants to receive leads.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

Build for production:

```bash
npm run build
```

Output goes to `dist/` — deploy to any static host (Vercel, Netlify, etc.).

## About the logo

No logo or banner image file was attached to the brief this site was generated from, so the header/footer currently use a simple placeholder wordmark (`src/components/Logo.jsx`) built from text + a small SVG mark — not the real AVANTIQ logo. **Replace this before launch:**

1. Add the real logo file (SVG or PNG) to `public/`, e.g. `public/logo.svg`.
2. In `src/components/Logo.jsx`, swap the placeholder markup for an `<img src="/logo.svg" alt="AVANTIQ TECHNOLOGY" />`.

The hero and about sections also use hand-built CSS/SVG mockups (laptop/phone/chart shapes) rather than the real promotional banner, for the same reason — swap in real photography/renders there if you have them.

## Project structure

```
src/
  components/   Header, Hero, TrustStrip, Services, Solutions, WhyUs,
                About, Process, Technology, Projects, CallToAction,
                Contact, Footer, FloatingCTA, Logo, SocialIcons
  data/         company.js   — name, tagline, phone, email, WhatsApp number, socials
                services.js  — the 6 service cards
                content.js   — solutions, why-us points, process steps,
                               tech stack badges, project types, trust strip
  utils/        contact.js   — builds WhatsApp links and mailto links
```

This is a single page with anchor-linked sections (`#services`, `#about`, etc.) rather than separate routes, matching the brief's nav structure.

## Editing company details

Open `src/data/company.js` to update the phone number, email, WhatsApp number (digits only, with country code), and social links (currently `#` placeholders — add real profile URLs once available).

## Content notes

- All statistics mentioned in the original brief (250+ projects, 120+ clients, 98% success rate) were intentionally **left out** of the site, since they were marketing example numbers, not confirmed facts. Add them back in only once they're real and approved.
- No client names, testimonials, or awards were invented, per the brief.

## Notes

- No backend, database, login, or payment system — this is a frontend marketing site by design.
- The contact form has two submit actions: "Send Project Inquiry" opens WhatsApp with the message pre-filled, and "Send via Email Instead" opens the visitor's email client with a pre-filled draft to `contact.avantiqtechnologies@gmail.com`.
