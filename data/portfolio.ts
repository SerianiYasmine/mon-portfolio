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

  experiences: [
  {
    title: "Alternante DevOps OpenShift",
    company: "BPCE Infogérance & Technologies",
    location: "Paris, France",
    period: "2024 — 2026",
    bullets: [
      "Conteneurisation et déploiement d’applications sur OpenShift / Kubernetes.",
      "Gestion des namespaces et des politiques de ressources.",
      "Mise en œuvre des objets Kubernetes/OpenShift : Deployment, Service, Route, ConfigMap, Secret.",
      "Gestion de la persistance via PVC (PersistentVolumeClaim) pour les pods et conteneurs.",
      "Utilisation et compréhension de pipelines CI/CD pour automatiser le build et le déploiement.",
      "Rédaction et maintenance de Jenkinsfiles, Dockerfiles et scripts Bash.",
      "Déploiements applicatifs avec XL Deploy et gestion des artefacts via Artifactory.",
      "Travail en environnement Bitbucket (Git) et suivi des tickets/tâches via Jira.",
      "Développement d’APIs Python (Flask, FastAPI) et front React intégrés à la chaîne CI/CD.",
    ],
    stack: [
      "OpenShift",
      "Kubernetes",
      "CI/CD",
      "Jenkins",
      "Docker",
      "XL Deploy",
      "Artifactory",
      "Bitbucket",
      "Jira",
      "Python (Flask/FastAPI)",
      "React",
      "Bash",
    ],
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
    school: "École informatique Paris, Epitech",
    degree: "Master en Big Data",
    period: "2023 — 2026",
    details: [],
  },
  {
    school: "Université Badji Mokhtar, Annaba",
    degree: "Licence en systèmes informatiques",
    period: "2020 — 2023",
    details: [
      "Licence en systèmes informatiques (tronc commun mathématiques et informatique).",
    ],
  },
  {
    school: "Lycée Boutaba Bachir, Annaba",
    degree: "Baccalauréat scientifique",
    period: "2019 — 2020",
    details: [],
  },
],
};
