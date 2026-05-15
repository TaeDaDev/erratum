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
    name: "Portfolio",
    description:
      "A portfolio built by someone who learned to code because their brain needed a break. React • Three.js • too much anime • not enough sleep. Welcome to my corner of the internet.",
    tags: ["React", "CSS", "Motion", "Vite"],
    link: "https://github.com/TaeDaDev/erratum",
    live: "https://erratum-one.vercel.app",
  },
];

export const about = {
  bio: `Built my first app because I had a problem and nobody solved it the way I wanted. Now I work with React and Three.js, ship things that actually work, and watch too much anime while doing it.`,
  skills: ["JavaScript", "React", "Three.js", "Node.js", "Express.js", "SQLite3", "CSS", "HTML"],
};
