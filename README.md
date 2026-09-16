# sulavtimalsina.com.np — source

Your personal site. Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion (scroll reveals) + Lenis (smooth scroll). Fonts are self-hosted via `@fontsource-variable` (Bricolage Grotesque for display type, Inter for body), so there's no external font-loading dependency at build or runtime.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Structure

- `src/content/site.ts` — all copy and structured data (ventures, research, leadership, recognition, contact info). Edit this file to update content without touching layout code.
- `src/components/` — one component per section (Hero, Ventures, Research, Leadership, Recognition, Contact) plus `Nav`, `SmoothScroll` (Lenis), and `Reveal` (scroll-triggered animation wrapper).
- `public/images/` — your photos. Filenames are referenced directly in `site.ts`.
- `public/resume.pdf` — **not included yet**, see "Before you launch" below.

## Deploy

The fastest path with your `.com.np` domain:

1. Push this folder to a GitHub repo.
2. Import it at vercel.com (New Project → your repo). Vercel auto-detects Next.js, no config needed.
3. In the Vercel project's Domains settings, add `sulavtimalsina.com.np` and follow the DNS instructions it gives you (usually an A record or CNAME at your domain registrar, wherever `.com.np` is registered).
4. Every push to your main branch redeploys automatically.

Any other Next.js-friendly host (Netlify, Cloudflare Pages, your own server) works too, `npm run build && npm start` is the standard production entry point.

## Before you launch, a few things need your input

1. **Resume PDF.** The "Download Resume" and nav "Resume" buttons link to `/resume.pdf`, which doesn't exist yet. Drop your resume PDF into `public/resume.pdf` (exact filename) and it'll work immediately, or tell me and I'll wire one up from your existing resume content.
2. **Contact email.** The site currently shows `sulavtimalsina11@gmail.com` (from your background doc). I noticed your job-search notes elsewhere reference `sulavtimalsina00@gmail.com`, so double check `src/content/site.ts` (`person.email`) has the address you actually want public.
3. **Open Graph image.** There's no social-share preview image (`opengraph-image`) yet, worth adding one before you share the link widely, otherwise links you post will preview with no image.
4. **Favicon.** Still the default Next.js icon. Swap `src/app/favicon.ico` for something of yours.

Everything else (copy, dates, titles, hackathon list) is sourced from your background doc and cross-checked against your accuracy rules (no em dashes, correct venture dates, NL2SQL never described as deployed, etc.).
