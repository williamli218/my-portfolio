# My Portfolio

Personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS — showcasing education, work experience, projects, technical skills, and leadership/extracurricular activities.

🔗 **Live site:** [my-portfolio-big-willy2006.vercel.app](https://my-portfolio-big-willy2006.vercel.app)

## Features

- **Sticky navigation** with active-section highlighting — the current section is detected via scroll position and highlighted in the nav as you scroll, with a responsive mobile menu (hamburger toggle)
- **Flip-card Education section** — a 3D CSS flip card (`perspective` + `backface-visibility`) that reveals relevant coursework on the back face
- **Timeline-style Experience section** — a vertical timeline with external links to each organization
- **Interactive Projects grid** — each project opens in a full-screen modal (blurred backdrop, scroll-lock, animated open/close) with more detail, tools used, and a GitHub link
- **Infinite auto-scrolling marquee** for technical skills — a seamless, pixel-precise looping strip of icons (measured at runtime to avoid any visual seam/snap)
- **Swipeable image carousel** for leadership/extracurricular highlights — supports arrow navigation (desktop), touch swipe (mobile), autoplay with a visual progress-bar indicator, and dot navigation
- **Scroll-triggered fade-in animations** across sections, using a custom `useFadeIn` hook built on the Intersection Observer API
- **SEO & social metadata** — Open Graph and Twitter card previews, custom favicon

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) for icons
- [Geist](https://vercel.com/font) font, via `next/font`
- Deployed on [Vercel](https://vercel.com)

## Project Structure

```
├── app/                # App Router pages, layout, and global metadata
├── components/         # Section and UI components (Nav, Hero, About,
│                        # Education, Experience, Projects, Skills,
│                        # Leadership, Footer, etc.)
├── hooks/               # Custom hooks (useFadeIn, useActiveSection)
├── public/              # Static assets (images, icons, logos)
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page auto-updates as you edit files under `app/` or `components/`.

## Available Scripts

```bash
npm run dev      # start the local development server
npm run build    # create a production build
npm run start    # run the production build locally
npm run lint     # run ESLint
```

## Notable Implementation Details

A few things worth mentioning under the hood:

- **Marquee precision**: the Skills marquee measures the real rendered width of one icon group (`offsetWidth`) plus the actual computed `column-gap`, rather than assuming an even split of total scroll width — this avoids a subtle rounding error that otherwise causes a visible "snap" at the loop point.
- **Carousel**: built as a single continuous flex track shifted via `translateX(-index * 100%)`, rather than mounting/unmounting individual slides — this keeps all slides "physically" adjacent for a seamless scroll feel, and supports touch gestures via `touchstart`/`touchmove`/`touchend` handlers with a configurable swipe distance threshold.
- **Active nav highlighting**: rather than relying purely on Intersection Observer thresholds (which behaved inconsistently across sections of very different heights), the active section is determined by checking which section's top edge has most recently scrolled past a fixed offset — calculated on scroll with `requestAnimationFrame` throttling.

## Deployment

This project is deployed on [Vercel](https://vercel.com), the platform built by the creators of Next.js. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details on deploying your own instance.

## Author

**William Li**
[GitHub](https://github.com/williamli218)
