export const navLinks = [
  { id: "about", title: "About" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const projects = [
  {
    name: "Weather App",
    description:
      "A responsive React weather dashboard that fetches real-time data from the OpenWeather API — supports city search, 5-day forecasts, dark mode, and Celsius/Fahrenheit toggling.",
    tags: ["React", "Vite"],
    link: "https://github.com/TaeDaDev/React-Weather-app",
    live: "https://react-weather-app-1-sable.vercel.app",
  },
  {
    name: "Job Tracker",
    description:
      "A simple Job Tracker app that helps users manage their job applications. Users can create an account, log in, and CRUD job applications they're applying to.",
    tags: ["Node.js", "React", "Vite"],
    link: "https://github.com/TaeDaDev/Job-Tracker",
    live: "https://job-tracker-1-sable.vercel.app",
  },
  {
    name: "Roastly",
    description:
      "A VS Code extension that roasts your code with an LLM instead of sugarcoating it. Built for code review feedback that's actually fun to read.",
    tags: ["TypeScript", "LangChain", "Claude API", "VS Code Extension"],
    link: "https://github.com/TaeDaDev/roastly",
    live: "https://marketplace.visualstudio.com/items?itemName=AsanteBoler.roastly",
  },
  {
    name: "Repo Tracker",
    description:
      "A simple app that tracks GitHub repositories. Users can search for a repository and view its details, including the number of stars, forks, and open issues.",
    tags: ["React", "Vite", "Typescript"],
    link: "https://github.com/TaeDaDev/Repo-Finder",
    live: "https://client-ten-phi-29.vercel.app/",
  },
];

export const about = {
  bio: `Built my first app because I had a problem and nobody solved it the way I wanted. Now I work with React and Three.js, ship things that actually work, and watch too much anime while doing it.`,
  skills: ["JavaScript", "Langchain", "TypeScript", "React", "Three.js", "Node.js", "Express.js", "SQLite3", "CSS", "HTML"],
};
