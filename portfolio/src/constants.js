export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "roast", title: "Get Roasted" },
  { id: "contact", title: "Contact" },
];

export const heroTaglines = [
  "Full-stack developer",
  "I build the tools I wish existed",
  "Currently teaching AI to roast code",
  "Powered by anime and late-night commits",
];

// Each project reads as a mini case study: what it is, what was hard, what I'd change.
export const projects = [
  {
    name: "Roastly",
    featured: true,
    icon: "/projects/roastly-icon.webp",
    summary:
      "A VS Code extension that roasts your code with Claude, then hands you the real fix. Funny enough to read, specific enough to act on.",
    challenge:
      "LLM output is unpredictable, and an editor extension needs exact line numbers and fixes it can apply. I bound a shared Zod schema to Claude through LangChain's structured output, so every roast comes back validated. That one schema drives the sidebar panel, the inline squiggles, and a one-click \"Fix It ⚡\" quick action.",
    decisions: [
      "Turborepo monorepo: the extension and the Express API share one types package, so they can't drift apart",
      "Cost guardrails: a per-IP rate limit, a 20k-character cap, and a 30s timeout, with auth checked before rate limiting so bad keys don't burn the budget",
      "API key stored in VS Code SecretStorage, never in a plain file",
    ],
    next: "Per-user accounts with roast history, and a web version that roasts a whole GitHub repo.",
    tags: ["TypeScript", "LangChain", "Claude API", "Express", "Turborepo"],
    link: "https://github.com/TaeDaDev/roastly",
    live: "https://marketplace.visualstudio.com/items?itemName=AsanteBoler.roastly",
    liveLabel: "Marketplace",
  },
  {
    name: "Repo Finder",
    image: "/projects/repofinder.webp",
    summary:
      "Search any GitHub user's public repos and save favorites to your account. TypeScript end to end, from React to Express to Postgres.",
    challenge:
      "Building auth from scratch. Passwords are hashed with bcrypt, sessions are JWTs checked by Express middleware, and every query is parameterized. Login returns the same error for an unknown email and a wrong password, so attackers can't use it to discover which emails have accounts.",
    decisions: [
      "Search calls GitHub's public API straight from the client and handles its rate-limit errors",
      "Favorites live behind authenticated routes, backed by a pooled Postgres connection",
    ],
    next: "Move the token out of localStorage into an httpOnly cookie, and proxy GitHub search to cache results and avoid rate limits.",
    tags: ["TypeScript", "React", "Express", "PostgreSQL", "JWT"],
    link: "https://github.com/TaeDaDev/Repo-Finder",
    live: "https://client-ten-phi-29.vercel.app/",
  },
  {
    name: "Job Tracker",
    image: "/projects/jobtracker.webp",
    summary:
      "A full-stack CRUD app for tracking job applications by status, from Applied to Offer.",
    challenge:
      "Deploying a React client and an Express API as a single Vercel project. The API runs as a serverless function behind a rewrite, backed by Supabase Postgres. It validates input on the server and turns Supabase's \"no rows\" error into a proper 404.",
    decisions: [
      "One repo, one deploy: Vite builds the client, and /api/* is routed to Express",
      "Required fields and dates are validated on the server, not just in the form",
    ],
    next: "Add accounts with Supabase row-level security, so each user only sees their own applications.",
    tags: ["React", "Express", "Supabase", "Vercel"],
    link: "https://github.com/TaeDaDev/Job-Tracker",
    live: "https://job-tracker-1-sable.vercel.app",
  },
  {
    name: "Weather App",
    image: "/projects/weather.webp",
    summary:
      "A responsive weather dashboard with city search, a 5-day forecast, a °C/°F toggle, and dark mode.",
    challenge:
      "OpenWeather's forecast endpoint returns 40 readings at 3-hour intervals, so I sample one per day to build the 5-day view. Temperatures arrive in Kelvin and are converted at render time, so switching units never needs another request. The last city searched is saved and reloaded on the next visit.",
    decisions: [
      "Unit conversion is derived at render time from one source of truth instead of being stored twice",
      "Loading and invalid-city states are handled explicitly",
    ],
    next: "Move the API key behind a serverless proxy instead of shipping it in the client bundle.",
    tags: ["React", "Vite", "Tailwind", "OpenWeather API"],
    link: "https://github.com/TaeDaDev/React-Weather-app",
    live: "https://react-weather-app-1-sable.vercel.app",
  },
];

export const about = {
  bio: `Built my first app because I had a problem and nobody solved it the way I wanted. Now I work across the stack with React, TypeScript, and Node, and lately I've been wiring LLMs into developer tools. I ship things that actually work, and I watch too much anime while doing it.`,
  skills: ["JavaScript", "TypeScript", "React", "Node.js", "Express.js", "PostgreSQL", "Supabase", "LangChain", "Claude API", "SQLite", "HTML", "CSS"],
};
