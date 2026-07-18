# Muhammad Zain — AI Product Studio Portfolio

A production-ready portfolio website built for Muhammad Zain — "Building AI That Solves Real Problems." Designed to feel premium, intelligent, and trustworthy from the first scroll.

## Tech Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS** — custom premium design token system
- **Framer Motion** — scroll reveals, page-load sequence, micro-interactions
- **Lucide React** — icon set

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx          Root layout: fonts, metadata, global chrome (nav/footer/preloader/cursor)
  page.tsx             Assembles all homepage sections
  globals.css          Design tokens, base styles, accessibility & reduced-motion rules
  api/contact/route.ts Contact form submission endpoint (stub — see below)
  robots.ts / sitemap.ts   SEO metadata routes

components/
  Hero.tsx, About.tsx, Services.tsx, Projects.tsx, Process.tsx,
  WhyChooseMe.tsx, FAQ.tsx, Contact.tsx, Navbar.tsx, Footer.tsx,
  Preloader.tsx, CustomCursor.tsx, NeuralBackground.tsx
  ui/                  Reusable primitives: Button, SectionHeading, Container

lib/
  data.ts              All site copy and structured content (services, projects, FAQ, etc.)
  utils.ts             Tailwind class merge helper
```

## Wiring Up the Contact Form

The contact form posts to `app/api/contact/route.ts`, which currently validates input and logs the submission. To actually receive messages in your inbox, connect an email provider — for example [Resend](https://resend.com):

```bash
npm install resend
```

```ts
// app/api/contact/route.ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Portfolio <notifications@yourdomain.com>",
  to: "helllo2455@gmail.com",
  subject: `New project inquiry — ${name}`,
  text: `${name} (${email})\nProject type: ${projectType}\n\n${message}`,
});
```

Add `RESEND_API_KEY` to your environment variables (locally in `.env.local`, and in your Vercel project settings for production).

## Editing Content

All copy lives in `lib/data.ts` — services, featured projects, process steps, "why choose me" cards, FAQs, and contact details. Update it there rather than inside components.

## Deployment (Vercel)

1. Push this project to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — no configuration needed.
4. Add any environment variables (e.g. `RESEND_API_KEY`) under Project Settings → Environment Variables.
5. Deploy.

Before going live, update the placeholder domain `https://zain-ai.dev` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts` to your real domain.

## Accessibility & Performance Notes

- Keyboard focus is visible everywhere (`:focus-visible` styling in `globals.css`).
- All motion respects `prefers-reduced-motion` — the preloader, custom cursor, and neural background all degrade gracefully.
- The custom cursor and preloader only activate for fine-pointer (desktop) devices; touch devices get the native cursor and skip straight to content.
- Semantic HTML and heading hierarchy are used throughout; the contact form and FAQ accordion are fully keyboard-operable with proper ARIA attributes.
