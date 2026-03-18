export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  stack: string[];
};

export type Project = {
  title: string;
  description: string;
  stack: string[];
  note?: string;
  mission?: string;
  link?: string; 
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  details?: string[];
};

export type Portfolio = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  avatar: { src: string; alt: string };
  bio: string;
  highlights: string[];
  links: { github: string; linkedin: string; email: string; cv: string };
  skills: string[];
  quickProfile: { title: string; bullets: string[]; keywords: string[] };
  experiences: Experience[];
  projects: Project[];
  education: Education[];
};

export const portfolio: Portfolio = {
  name: "Yasmine SERIANI",
  role: "DevOps OpenShift (avec base Fullstack)",
  tagline:
    "Du code à la prod : conteneurisation, CI/CD et déploiements sur OpenShift/Kubernetes (Jenkins, Artifactory, XL Deploy/XL Release).",
  location: "Île-de-France, France — CDI à partir d’octobre 2026",

  bio:
    "Alternante DevOps OpenShift chez BPCE-IT. Je développe et déploie des applications sur OpenShift (objets, configuration, persistance) et je contribue aux pipelines CI/CD. Mon background Fullstack (React + Python FastAPI/Flask) me permet de comprendre l’application et de sécuriser sa livraison en production.",
  avatar: {
    src: "/yasmine.jpg",
    alt: "Photo de Yasmine",
  },

  highlights: [
  "OpenShift / Kubernetes • Deployments • Routes • ConfigMap/Secret • PVC",
  "CI/CD • Jenkins • Artifactory • XL Deploy • XL Release • Docker",
  "React • Python (FastAPI/Flask) • APIs • Swagger/OpenAPI",
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
        "Déploiements applicatifs avec XL Deploy et XL Release, gestion des workflows de release et orchestrations.",
        "Gestion des artefacts via Artifactory.",
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
        "XL Release",
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
      title: "RoleApp — OpenShift Role Generator (BPCE-IT)",
      description:
        "Application web (API Flask + front React) qui génère des Role/ClusterRole OpenShift/Kubernetes en YAML, prêts à être appliqués directement sur OpenShift. Profils et ressources configurables, validation des entrées et documentation API.",
      stack: [
        "Python (Flask)",
        "React",
        "Swagger/OpenAPI",
        "Jenkins",
        "Artifactory",
        "XL Deploy",
        "OpenShift",
        "Docker",
      ],
      note: "Projet réalisé chez BPCE-IT",
    },
    {
      title: "Cluster Health Check App (BPCE-IT)",
      description:
        "Application interne développée chez BPCE-IT (API FastAPI + front React) pour valider l’état de santé d’un cluster lors de sa livraison. Déployée sur OpenShift et intégrée à la chaîne CI/CD (Jenkins, Artifactory, XL Deploy). Automatisation de tâches via XL Release.",
      stack: [
        "Python (FastAPI)",
        "React",
        "Jenkins",
        "Artifactory",
        "XL Deploy",
        "XL Release",
        "OpenShift",
      ],
      note: "Projet réalisé chez BPCE-IT",
    },
    {
      title: "LudoKan — Plateforme jeux de société",
      description:
        "Application web moderne pour les passionnés de jeux de société : gestion de bibliothèque, organisation de sessions, recommandations de jeux, interactions entre joueurs et suivi de statistiques. Architecture full-stack avec front React/TypeScript et API Django REST, le tout containerisé via Docker.",
      mission:
        "Développeuse Front-End React : conception et intégration d’une interface moderne et responsive, développement de composants React (TypeScript), consommation de l’API REST, mise en place des bonnes pratiques (ESLint/Prettier) et participation au travail en équipe.",
      stack: [
        "React 18",
        "TypeScript",
        "Vite",
        "ESLint",
        "Prettier",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "Redis",
        "Celery",
        "JWT",
        "Docker",
        "Docker Compose",
      ],
      note: "Projet de fin d'études à Epitech, réalisé en équipe",
    },
  ],

  education: [
    {
      school: "École informatique Paris, Epitech",
      degree: "Master Architecte en Systèmes d’Information",
      period: "2023 — 2026",
      details: [
        "Travail en équipe sur des projets : organisation, collaboration, livrables et documentation.",
        "Conception et architecture d’applications : modularité, choix techniques, patterns et bonnes pratiques.",
        "Data / Big Data : traitement et analyse de données, structuration et exploitation de datasets.",
        "IA : mise en place de modèles simples, évaluation (métriques) et intégration dans des applications.",
        "Développement front-end avec React.",
        "Qualité et méthode : Git, revue de code, tests/validation, maintenance et amélioration continue.",
      ],
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