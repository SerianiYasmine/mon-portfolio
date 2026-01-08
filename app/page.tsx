import Image from "next/image";
import { portfolio } from "../data/portfolio";
import ThemeToggle from "../components/ThemeToggle";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-full border border-neutral-200/80 bg-white/55 px-3 py-1 text-sm text-neutral-800 backdrop-blur
                 hover:border-blue-200/80 hover:bg-blue-50/40
                 dark:border-neutral-800/80 dark:bg-neutral-950/35 dark:text-neutral-100 dark:hover:border-blue-600/50 dark:hover:bg-blue-950/25"
    >
      {children}
    </span>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-sm text-neutral-700 hover:text-blue-800 hover:underline underline-offset-4
                 dark:text-neutral-300 dark:hover:text-blue-300"
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
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}

const cardClass =
  "rounded-2xl border border-neutral-200/70 bg-white/45 backdrop-blur-xl p-6 shadow-sm " +
  "dark:border-neutral-800/70 dark:bg-neutral-950/30";

export default function Home() {
  const emailText = portfolio.links.email?.replace("mailto:", "") ?? "";

  return (
    <main className="min-h-screen bg-blue-ambient text-neutral-900 dark:text-neutral-100">
      {/* NAVBAR */}
      <div
        className="sticky top-0 z-10 border-b border-neutral-200/70 bg-white/35 backdrop-blur-xl
                   dark:border-neutral-800/70 dark:bg-[#020617]/35"
      >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            {portfolio.name}
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-5 sm:flex">
              <NavLink href="#looking-for">Recherche</NavLink>
              <NavLink href="#experience">Expériences</NavLink>
              <NavLink href="#projects">Projets</NavLink>
              <NavLink href="#education">Formations</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </div>

            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14">
        {/* HERO */}
        <header className="space-y-7">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <div
              className="relative h-28 w-28 overflow-hidden rounded-2xl border border-neutral-200/70 bg-white/45 shadow-sm backdrop-blur-xl
                         dark:border-neutral-800/70 dark:bg-neutral-950/30 sm:h-32 sm:w-32"
            >
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
              <p className="mb-1 text-sm text-neutral-700 dark:text-neutral-400">{portfolio.location}</p>

              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {portfolio.name} — {portfolio.role}
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

          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-blue-700 px-5 py-2.5 text-white hover:bg-blue-800
                         focus:outline-none focus:ring-2 focus:ring-blue-300/70
                         dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-500/40"
              href="#contact"
            >
              Me contacter
            </a>

            <a
              className="rounded-xl border border-neutral-200/70 bg-white/45 px-4 py-2.5 backdrop-blur-xl hover:bg-white/65
                         dark:border-neutral-800/70 dark:bg-neutral-950/30 dark:hover:bg-neutral-900/40"
              href={portfolio.links.cv}
              target="_blank"
              rel="noreferrer"
            >
              Télécharger mon CV
            </a>

            <a
              className="rounded-xl border border-neutral-200/70 bg-white/45 px-4 py-2.5 backdrop-blur-xl hover:bg-white/65
                         dark:border-neutral-800/70 dark:bg-neutral-950/30 dark:hover:bg-neutral-900/40"
              href={portfolio.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="rounded-xl border border-neutral-200/70 bg-white/45 px-4 py-2.5 backdrop-blur-xl hover:bg-white/65
                         dark:border-neutral-800/70 dark:bg-neutral-950/30 dark:hover:bg-neutral-900/40"
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {portfolio.skills.map((s) => (
              <Badge key={s}>{s}</Badge>
            ))}
          </div>
        </header>

        {/* PROFIL 30 SECONDES */}
        <section className="mt-10">
          <div className={cardClass}>
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

        <div className="my-14 border-t border-neutral-200/60 dark:border-neutral-800/60" />

        {/* LOOKING FOR */}
        <Section id="looking-for" title={portfolio.lookingFor.title}>
          <div className={cardClass}>
            <p className="font-medium text-neutral-900 dark:text-neutral-100">{portfolio.lookingFor.role}</p>

            <div className="mt-3 grid gap-2 text-neutral-800/90 dark:text-neutral-300 sm:grid-cols-2">
              <p>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">Localisation :</span>{" "}
                {portfolio.lookingFor.location}
              </p>
              <p>
                <span className="font-medium text-neutral-900 dark:text-neutral-100">Disponibilité :</span>{" "}
                {portfolio.lookingFor.start}
              </p>
              <p className="sm:col-span-2">
                <span className="font-medium text-neutral-900 dark:text-neutral-100">Rythme :</span>{" "}
                {portfolio.lookingFor.rhythm}
              </p>
            </div>

            <ul className="mt-4 list-disc space-y-1 pl-5 text-neutral-800/90 dark:text-neutral-300">
              {portfolio.lookingFor.interests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </Section>

        <div className="my-14 border-t border-neutral-200/60 dark:border-neutral-800/60" />

        {/* EXPERIENCES */}
        <Section id="experience" title="Expériences">
          <div className="space-y-4">
            {portfolio.experiences.map((exp) => (
              <div key={`${exp.title}-${exp.period}`} className={cardClass}>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                      {exp.title} —{" "}
                      <span className="text-neutral-800/90 dark:text-neutral-300">{exp.company}</span>
                    </p>
                    <p className="text-sm text-neutral-700 dark:text-neutral-400">{exp.location}</p>
                  </div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-400">{exp.period}</p>
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

        <div className="my-14 border-t border-neutral-200/60 dark:border-neutral-800/60" />

        {/* PROJECTS */}
        <Section id="projects" title="Projets">
          <div className="grid gap-4 md:grid-cols-2">
            {portfolio.projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className={
                  cardClass +
                  " transition hover:-translate-y-1 hover:shadow-xl hover:border-blue-200/80 " +
                  "dark:hover:border-blue-600/45 dark:hover:shadow-[0_22px_55px_rgba(0,0,0,0.45)]"
                }
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

        <div className="my-14 border-t border-neutral-200/60 dark:border-neutral-800/60" />

        {/* EDUCATION */}
        <Section id="education" title="Formations">
          <div className="space-y-4">
            {portfolio.education.map((e) => (
              <div key={`${e.school}-${e.period}`} className={cardClass}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{e.school}</p>
                    <p className="text-neutral-800/90 dark:text-neutral-300">{e.degree}</p>
                  </div>
                  <p className="text-sm text-neutral-700 dark:text-neutral-400">{e.period}</p>
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

        <div className="my-14 border-t border-neutral-200/60 dark:border-neutral-800/60" />

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <div className={cardClass + " space-y-4"}>
            <p className="text-neutral-800/90 dark:text-neutral-300">
              Email :{" "}
              <a
                className="underline underline-offset-4 hover:text-blue-800 dark:hover:text-blue-300"
                href={portfolio.links.email}
              >
                {emailText || "Me contacter"}
              </a>
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                className="rounded-xl border border-neutral-200/70 bg-white/45 px-4 py-2.5 backdrop-blur-xl hover:bg-white/65
                           dark:border-neutral-800/70 dark:bg-neutral-950/30 dark:hover:bg-neutral-900/40"
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="rounded-xl border border-neutral-200/70 bg-white/45 px-4 py-2.5 backdrop-blur-xl hover:bg-white/65
                           dark:border-neutral-800/70 dark:bg-neutral-950/30 dark:hover:bg-neutral-900/40"
                href={portfolio.links.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                className="rounded-xl border border-neutral-200/70 bg-white/45 px-4 py-2.5 backdrop-blur-xl hover:bg-white/65
                           dark:border-neutral-800/70 dark:bg-neutral-950/30 dark:hover:bg-neutral-900/40"
                href={portfolio.links.cv}
                target="_blank"
                rel="noreferrer"
              >
                CV
              </a>
            </div>
          </div>
        </Section>

        <footer className="mt-14 text-sm text-neutral-700 dark:text-neutral-400">
          © {new Date().getFullYear()} {portfolio.name}
        </footer>
      </div>
    </main>
  );
}
