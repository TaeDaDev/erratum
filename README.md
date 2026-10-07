# erratum

Personal portfolio site built with React, WebGL, and anime.js, with a live AI code-roasting demo powered by Claude.

## Stack

- **React** for the component-based UI
- **OGL (WebGL)** for the animated line-wave shader in the hero
- **anime.js** for the entrance and scroll-triggered animations
- **Vite** for build tooling
- **Vercel Functions + Anthropic SDK** for the `/api/roast` endpoint behind the live demo
- **CSS** for custom styling, with no UI framework

## Sections

- **Hero**: animated line waves with a typewriter subtitle
- **About**: bio and skills
- **Projects**: case studies for Roastly, Repo Finder, Job Tracker, and Weather App (the hard part, key decisions, and what's next)
- **Get Roasted**: paste a snippet and Claude scores it, roasts it, and suggests fixes (a trimmed-down [Roastly](https://github.com/TaeDaDev/roastly))
- **Contact**: email, GitHub, LinkedIn, and resume links

Animations respect `prefers-reduced-motion`. The hero renders a single still frame, and entrance animations are skipped.

## Getting Started

```bash
cd portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

The roast demo calls `/api/roast`, a Vercel serverless function in `portfolio/api/`. Plain `npm run dev` doesn't serve it, so use `vercel dev` to test it locally.

### Environment variables

| Name | Required | Purpose |
|---|---|---|
| `ANTHROPIC_API_KEY` | yes (for the demo) | Key used by `/api/roast` |
| `ROAST_MODEL` | no | Override the model (defaults to `claude-opus-5-5`) |

The endpoint caps input at 4,000 characters and allows 5 roasts per IP every 15 minutes, with a 30s timeout. The per-IP limit is per warm instance, so also set a spend limit on the API key.

## Build

```bash
npm run build
```

## Contact
- Website: [erratum](https://erratum-one.vercel.app/)
- GitHub: [TaeDaDev](https://github.com/TaeDaDev)
- LinkedIn: [Asante Boler](https://www.linkedin.com/in/asante-boler-4356aa360/)
- Email: uhsaantae@gmail.com
