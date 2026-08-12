export const nav = [
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Expérience", href: "#experience" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const aboutStats = [
  { value: "4", label: "Projets Suivis" },
  { value: "3", label: "Années d’expérience en JE" },
  { value: "6", label: "mois en entreprise" },
];

export const skillGroups = [
  {
    title: "Programming",
    icon: "monitor" as const,
    tags: ["C", "Java", "Python", "prolog"],
  },
  {
    title: "Web Development",
    icon: "navigation" as const,
    tags: ["HTML", "CSS", "JavaScript", "PHP", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: " Data & Databases",
    icon: "database" as const,
    tags: ["R","MySQL", "MariaDB", "PostgreSQL"],
  },
  {
    title: "DevOps",
    icon: "cloud" as const,
    tags: ["Shell", "Docker", "AWS", "Vercel"],
  },

  {
    title: "Tools",
    icon: "wrench" as const,
    tags: ["Git", "GitHub", "Unix", "Apache"],
  },
  {
    title: "Design",
    icon: "layers" as const,
    tags: ["Figma", "Design Systems", "Prototyping", "UX Research"],
  },
];

export const experiences = [
  {
    role: "IA / web Développeur ",
    company: "NailixIA",
    period: "Juin 2026 — Août 2026",
    location: "Paris, France",
    description:
      "développement d'outils pour l'entreprise, Maintien en condition opérationnel et débelopement d'outils (IA) avec N8N.",
    tags: ["Next.js", "N8N", "Supabase"],
  },
  {
    role: "Président",
    company: "CY Junior Engineering",
    period: "Mars 2026 — Aujourd'hui",
    location: "Cergy, France",
    description:
      "Pilotage de la structure incluant l’encadrement des équipes, la mise en œuvre de la stratégie commerciale, le recrutement et la formation des collaborateurs, ainsi que l’organisation d’audits et le déploiement de plans d’actions d’amélioration.",
    tags: ["Management", "Leadership", "Stratégie","communication assertive"],
  },
  {
    role: "Responsable du suivi des études",
    company: "CY Junior Engineering",
    period: "Octobre 2025 — Mars 2026",
    location: "Cergy, France",
    description:
      "Management de l’équipe de chefs de projet, suivi des missions et des clients, mise en place de process et d’outils pour améliorer la qualité des livrables.",
    tags: ["gestion de projet", "team management", "organisation", "performance"],
  },
];

export const projects = [
  {
    title: "CyBreathe",
    description:
      "Simulation de la propagation de la polution et de l'impact des diférente forme d'urbanisme sur celle-ci",
    image:
      "/CyBreathe.png",
    tags: ["Java","JavaFX", "Gradle"],
    href: "#",
    repo: "",
  },
  {
    title: "Conception d'un processeur",
    description:
      "Conception des différentes parties d’un processeur sur logisim",
    image:
      "/Conception d'un processeur.png",
    tags: ["processeur", "logisim"],
    href: "#",
    repo: "https://github.com/MatheoMALLE/Conception-et-Simulation-d-un-Processeur",
  },
  {
    title: "CyNapse",
    description:
      "Création d’un site modélisant un bâtiment de l’école et permettant de gérer l’ensemble des appareils informatique connectés.",
    image:
      "/CyNapse.png",
    tags: ["React", "Spring", "MariaDB", "Tailwind css","vitejs"],
    href: "#",
    repo: "",
  },
  {
    title: "Portfolio",
    description:
      "site de présentation de mes projets et compétences.",
    image:
      "/Portfolio.png",
    tags: ["Next.js", "TypeScript", "Vercel","npm"],
    href: "#",
    repo: "https://github.com/MatheoMALLE/Portfolio",
  },
  {
    title: "Coin-Rush",
    description:
      "Développement d'un jeu vidéo 2D de type dungeon crawler avec exploration de donjons et système de combats au tour par tour",
    image:
      "/Coin-Rush.png",
    tags: ["Java","JavaFX"],
    href: "#",
    repo: "https://github.com/MatheoMALLE/Coin-Rush",
  },
 {
    title: "projet-c-wire",
    description:
      "simulation de gestion du réseaux éléctrique français. Optimisation des flux et filtrage de données.",
    image:
      "/projet-c-wire.png",
    tags: ["C", "Shell", "Gnuplot"],
    href: "#",
    repo: "https://github.com/MatheoMALLE/projet-c-wire",
  },
 {
    title: "ramsauer-townsend-effect",
    description:
      "Physique quandtique. Simulation de l'effet Ramsauer-Townsend et étude des paquets d'ondes.",
    image:
      "/ramsauer-townsend-effect.gif",
    tags: ["python","physique théorique"],
    href: "#",
    repo: "https://github.com/MatheoMALLE/ramsauer-townsend-effect",
  },
  {
    title: "Cosmic-Yonder",
    description:
      "Création d'un jeu vidéo de type Rogue-Lite généré procéduralement",
    image:
      "/Cosmic-Yonder.png",
    tags: ["C"],
    href: "#",
    repo: "https://github.com/MatheoMALLE/Cosmic-Yonder",
  },
];
