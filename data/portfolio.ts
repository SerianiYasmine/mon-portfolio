export const portfolio = {
  name: "Yasmine",
  role: "Développeuse Fullstack",
  tagline: "Je construis des applications web claires, rapides et bien structurées.",
  location: "Paris, France",

  // Ta photo (mets ton fichier dans /public)
  avatar: {
    src: "/yasmine.jpg", // ⚠️ mets bien ta photo dans public/yasmine.jpg
    alt: "Photo de Yasmine",
  },

  // Petite présentation (tu peux la modifier)
  bio:
    "Développeuse fullstack basée à Paris. J’aime construire des applications web claires, maintenables et orientées utilisateur, du front (React/Next.js) au back (API, base de données).",

  // 3 points rapides qui se lisent vite
  highlights: [
    "React / Next.js • UI responsive",
    "API REST • Validation • Auth",
    "PostgreSQL • Docker • Git",
  ],

  links: {
    github: "https://github.com/TON_GITHUB",
    linkedin: "https://www.linkedin.com/in/yasmine-seriani-123ab4291/",
    email: "mailto:y.seriani23@gmail.com",
    cv: "/cv.pdf",
  },

  skills: [
    "React",
    "Next.js",
    "Vue.js",
    "Elixir / Phoenix",
    "Python / Flask",
    "PostgreSQL",
    "Docker",
    "Git",
    "Swagger / OpenAPI",
  ],

  // ✅ Profil “recruteur” rapide
  quickProfile: {
    title: "Profil en 30 secondes",
    bullets: [
      "Fullstack (React/Next.js + API) — focus sur code propre et UX.",
      "À l’aise avec PostgreSQL, Docker, Git, Swagger/OpenAPI.",
      "Projets orientés entreprise : Time Manager, Role Generator Kubernetes.",
    ],
    keywords: ["Fullstack", "React/Next", "API", "PostgreSQL", "Docker"],
  },

  // ✅ Expériences (à compléter)
  experiences: [
    {
      title: "Alternante / Développeuse (à compléter)",
      company: "Entreprise (à compléter)",
      period: "2025 — 2026",
      location: "Paris",
      bullets: [
        "Développement de fonctionnalités front (React/Next.js) et intégration API.",
        "Participation à la conception d’API (validation, endpoints, documentation).",
        "Amélioration UI/UX et correction de bugs, travail en équipe (Git).",
      ],
      stack: ["React", "Next.js", "API", "PostgreSQL", "Git"],
    },
  ],

  projects: [
    {
      title: "Time Manager",
      description:
        "API + front pour gérer horaires, clocks et working times, avec visualisation via dashboard.",
      stack: ["Vue.js", "Phoenix", "PostgreSQL"],
      link: "https://github.com/TON_GITHUB/time-manager",
    },
    {
      title: "Kubernetes Role Generator",
      description:
        "API Flask + front React pour générer des Role/ClusterRole YAML depuis un fichier config, avec profils et ressources.",
      stack: ["Flask", "React", "Swagger"],
      link: "https://github.com/TON_GITHUB/k8s-role-generator",
    },
    {
      title: "LudoKan",
      description:
        "Site de jeux vidéo : UI moderne, pages catalogue, composants réutilisables et design responsive.",
      stack: ["React", "Tailwind"],
      link: "https://github.com/TON_GITHUB/ludokan",
    },
  ],

  lookingFor: {
    title: "Ce que je recherche",
    role: "Alternance / CDI — Développeuse Fullstack (ou Front-end)",
    location: "Paris / Remote partiel",
    start: "Disponible à partir de : à préciser",
    rhythm: "Rythme : à préciser (ex: 3 semaines entreprise / 1 semaine école)",
    interests: [
      "Front moderne (React/Next.js) avec composants propres",
      "Back-end solide : API REST, validation, auth, pagination",
      "PostgreSQL : schémas, relations, migrations",
      "Qualité : documentation, tests, bonnes pratiques",
    ],
  },

  education: [
    {
      school: "À compléter : Nom de ton école",
      degree: "À compléter : Formation / diplôme",
      period: "À compléter : 2024 — 2026",
      details: [
        "À compléter : spécialité (Fullstack/Web)",
        "À compléter : projets marquants (Phoenix, React, Docker, PostgreSQL...)",
      ],
    },
  ],
};
