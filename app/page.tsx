import Image from "next/image";
import { portfolio } from "../data/portfolio";
import ThemeToggle from "../components/ThemeToggle";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="
        rounded-full px-3 py-1 text-sm
        bg-white/55 text-neutral-800 shadow-sm ring-1 ring-black/5 backdrop-blur
        hover:bg-white/75
        dark:bg-white/5 dark:text-neutral-100 dark:ring-white/10 dark:hover:bg-white/10
      "
    >
      {children}
    </span>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="
        text-sm text-neutral-700 hover:text-violet-800
        dark:text-neutral-300 dark:hover:text-violet-300
      "
    >
      {children}
    </a>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-14 scroll-mt-24">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-violet-300/60 to-transparent dark:from-violet-500/30" />
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

const card =
  `
  rounded-3xl p-6
  bg-white/55 shadow-[0_10px_30px_rgba(2,6,23,0.08)]
  ring-1 ring-black/5 backdrop-blur
  dark:bg-white/5 dark:shadow-[0_20px_60px_rgba(0,0,0,0.35)]
  dark:ring-white/10
`;

export default function Home() {
  const emailText = portfolio.links.email?.replace("mailto:", "") ?? "";

  return (
    <main className="min-h-screen bg-violet-ambient text-neutral-900 dark:text-neutral-100">
      {/* Background overlay (subtle vignette) */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white/40 dark:to-black/40" />
      </div>

      {/* NAVBAR */}
      <div className="sticky top-0 z-10">
        <div className="mx-auto max-w-5xl px-6 pt-5">
          <div
            className="
              flex items-center justify-between
              rounded-2xl px-4 py-3
              bg-white/45 backdrop-blur-xl
              ring-1 ring-black/5 shadow-sm
              dark:bg-white/5 dark:ring-white/10
            "
          >
            <a href="#" className="font-semibold tracking-tight">
              <span className="text-neutral-900 dark:text-neutral-100">{portfolio.name}</span>
              <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400"></span>
            </a>

            <div className="flex items-center gap-5">
              <div className="hidden items-center gap-5 sm:flex">
                <NavLink href="#experience">Expériences</NavLink>
                <NavLink href="#projects">Projets</NavLink>
                <NavLink href="#education">Formations</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-12">
        {/* HERO */}
        <header className="space-y-7">
          <div className={`${card}`}>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-2xl ring-1 ring-black/10 dark:ring-white/10 sm:h-32 sm:w-32">
                <Image
                  src={portfolio.avatar.src}
                  alt={portfolio.avatar.alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 112px, 128px"
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">{portfolio.location}</p>

                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  <span className="bg-gradient-to-r from-violet-700 to-fuchsia-600 bg-clip-text text-transparent dark:from-violet-300 dark:to-fuchsia-200">
                    {portfolio.name}
                  </span>{" "}
                  <span className="text-neutral-900 dark:text-neutral-100">— {portfolio.role}</span>
                </h1>

                <p className="max-w-2xl text-lg text-neutral-800/90 dark:text-neutral-300">
                  {portfolio.bio}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {portfolio.highlights.map((h) => (
                    <Badge key={h}>{h}</Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="
                  rounded-xl px-5 py-2.5 text-white
                  bg-gradient-to-r from-violet-700 to-fuchsia-600
                  hover:from-violet-800 hover:to-fuchsia-700
                  shadow-sm
                  focus:outline-none focus:ring-2 focus:ring-violet-300/60
                  dark:focus:ring-violet-500/40
                "
                href="#contact"
              >
                Me contacter
              </a>

              <a
                className="
                  rounded-xl px-4 py-2.5
                  bg-white/60 hover:bg-white/80
                  text-neutral-900
                  ring-1 ring-black/5
                  dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-100 dark:ring-white/10
                "
                href={portfolio.links.cv}
                target="_blank"
                rel="noreferrer"
              >
                Télécharger mon CV
              </a>

              <a
                className="
                  rounded-xl px-4 py-2.5
                  bg-white/60 hover:bg-white/80
                  text-neutral-900
                  ring-1 ring-black/5
                  dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-100 dark:ring-white/10
                "
                href={portfolio.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                className="
                  rounded-xl px-4 py-2.5
                  bg-white/60 hover:bg-white/80
                  text-neutral-900
                  ring-1 ring-black/5
                  dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-100 dark:ring-white/10
                "
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {portfolio.skills.map((s) => (
                <Badge key={s}>{s}</Badge>
              ))}
            </div>
          </div>
        </header>

        {/* PROFIL 30 SECONDES */}
        <section className="mt-10">
          <div className={`${card}`}>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                  {portfolio.quickProfile.title}
                </p>

                <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-800/90 dark:text-neutral-300">
                  {portfolio.quickProfile.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 sm:justify-end">
                {portfolio.quickProfile.keywords.map((k) => (
                  <Badge key={k}>{k}</Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIENCES */}
        <Section id="experience" title="Expériences">
          <div className="space-y-4">
            {portfolio.experiences.map((exp) => (
              <div key={`${exp.title}-${exp.period}`} className={`${card}`}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {exp.title} —{" "}
                      <span className="text-neutral-800/90 dark:text-neutral-300">{exp.company}</span>
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">{exp.location}</p>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{exp.period}</p>
                </div>

                <ul className="mt-4 list-disc space-y-1 pl-5 text-neutral-800/90 dark:text-neutral-300">
                  {exp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projets">
          <div className="grid gap-4 md:grid-cols-2">
            {portfolio.projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className={`
                  ${card}
                  transition
                  hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(2,6,23,0.14)]
                  dark:hover:shadow-[0_22px_70px_rgba(0,0,0,0.55)]
                `}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{p.title}</h3>
                  <span className="text-neutral-400" aria-hidden>
                    ↗
                  </span>
                </div>

                <p className="mt-2 text-neutral-800/90 dark:text-neutral-300">{p.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <Badge key={t}>{t}</Badge>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="Formations">
          <div className="space-y-4">
            {portfolio.education.map((e) => (
              <div key={`${e.school}-${e.period}`} className={`${card}`}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{e.school}</p>
                    <p className="text-neutral-800/90 dark:text-neutral-300">{e.degree}</p>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{e.period}</p>
                </div>

                {e.details?.length ? (
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-neutral-800/90 dark:text-neutral-300">
                    {e.details.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <div className={`${card} space-y-4`}>
            <p className="text-neutral-800/90 dark:text-neutral-300">
              Email :{" "}
              <a
                className="underline underline-offset-4 hover:text-violet-800 dark:hover:text-violet-300"
                href={portfolio.links.email}
              >
                {emailText || "Me contacter"}
              </a>
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                className="
                  rounded-xl px-4 py-2.5
                  bg-white/60 hover:bg-white/80
                  text-neutral-900
                  ring-1 ring-black/5
                  dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-100 dark:ring-white/10
                "
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="
                  rounded-xl px-4 py-2.5
                  bg-white/60 hover:bg-white/80
                  text-neutral-900
                  ring-1 ring-black/5
                  dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-100 dark:ring-white/10
                "
                href={portfolio.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="
                  rounded-xl px-4 py-2.5
                  bg-white/60 hover:bg-white/80
                  text-neutral-900
                  ring-1 ring-black/5
                  dark:bg-white/5 dark:hover:bg-white/10 dark:text-neutral-100 dark:ring-white/10
                "
                href={portfolio.links.cv}
                target="_blank"
                rel="noreferrer"
              >
                CV
              </a>
            </div>
          </div>
        </Section>

        <footer className="mt-14 text-sm text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} {portfolio.name}
        </footer>
      </div>
    </main>
  );
}
