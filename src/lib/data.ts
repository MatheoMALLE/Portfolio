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
    role: "Lead Developer Full-Stack",
    company: "Lumio",
    period: "2022 — présent",
    location: "Paris, France",
    description:
      "Architecture et développement d'une plateforme SaaS B2B. Management d'une équipe de 4 développeurs. Migration complète vers une stack React / Node.js / PostgreSQL.",
    tags: ["React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    role: "Développeur Senior Front-End",
    company: "Qonto",
    period: "2020 — 2022",
    location: "Paris, France",
    description:
      "Refonte de l'interface utilisateur principale de l'application fintech. Implémentation d'un design system avec plus de 80 composants accessibles.",
    tags: ["React", "Design System", "TypeScript", "Storybook"],
  },
  {
    role: "Développeur Full-Stack",
    company: "Agence Pixels",
    period: "2019 — 2020",
    location: "Lyon, France",
    description:
      "Réalisation de projets web sur mesure pour des PME et ETI. Intégration CMS headless, APIs REST, solutions e-commerce performantes.",
    tags: ["Vue.js", "PHP", "MySQL", "WordPress"],
  },
];

export const projects = [
  {
    title: "Lumio Dashboard",
    description:
      "Tableau de bord analytics B2B avec graphiques temps-réel, gestion d'équipes et exports PDF. 0 à 10 000 utilisateurs en 6 mois.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["React", "TypeScript", "D3.js", "Node.js"],
    href: "#",
    repo: "#",
  },
  {
    title: "Forge CLI",
    description:
      "Outil CLI open-source pour scaffolder des projets React/Next.js. Configuration TypeScript, ESLint et tests inclus. 2k+ stars GitHub.",
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["Node.js", "TypeScript", "CLI", "Open Source"],
    href: "#",
    repo: "#",
  },
  {
    title: "Boutique Atelier",
    description:
      "E-commerce headless pour une maison d'édition parisienne. Paiement Stripe, CMS Sanity, edge caching — Lighthouse 98/100.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=500&fit=crop&auto=format&q=80",
    tags: ["Next.js", "Sanity", "Stripe", "Tailwind"],
    href: "#",
    repo: "#",
  },
];
