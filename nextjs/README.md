# Team OmniAI — Next.js + Node

Marketing site rebuilt as a Next.js 14 App Router frontend with an Express (Node) backend for the contact form.

## ⚠️ One manual step after download
This environment can't create bracketed folder names. Rename:

```
app/work/-slug-/  →  app/work/[slug]/
```

## Structure
```
app/
  layout.js            root layout: fonts, nav, footer, cursor canvas
  page.js              home (hero, problems, process, services carousel, work, why, contact)
  services/page.js
  work/page.js         case-study gallery
  work/[slug]/page.js  case-study template (static params from lib/site.js)
  about/page.js
  pricing/page.js
  contact/page.js
components/            Nav, Footer, ContactSection, ServicesCarousel, NetworkCursor, HeroParticles, Reveal, FloatingActions
lib/site.js            all copy + data (contact details, services, case studies)
server/index.js        Express API
public/                images, videos (see below)
```

## Assets to add under `public/`
- `logo.png` — the network-node logo
- `media/1.mp4`, `media/2.mp4`, `media/3.mp4` — service card videos
- `media/ch.mp4` — inline avatar video in the contact headline
- `team/haseeb.png`, `team/danish.png`, `team/zeeshan.png`
- `work/project-1-cover.png` … `project-6-cover.png`, plus `project-1-before/desktop-1/desktop-2/mobile-1..3/collage.png`

## Run
```bash
npm install
cp .env.example .env      # fill SMTP creds
npm run dev               # frontend  → http://localhost:3000
npm run server            # API       → http://localhost:4000
# or both:
npm run dev:all
```

## Contact API
`POST /api/contact` → `{ name, email, problem, interests[], budget }`
- validates name + email
- logs the lead and emails it via SMTP (nodemailer) when configured
- `GET /api/health`, `GET /api/leads?key=ADMIN_KEY`

Frontend calls `${NEXT_PUBLIC_API_URL}/api/contact`. For a single-service deploy (Vercel), move the handler into `app/api/contact/route.js` and leave `NEXT_PUBLIC_API_URL` empty.

## Design system kept intact
Near-black `#0d0d0f`, cyan `#00e5ff`, Space Grotesk headings / Inter body (via `next/font`), glassmorphism cards, glow effects, pinned horizontal services carousel (touch → snap scroll, reduced-motion → grid), site-wide constellation cursor.
