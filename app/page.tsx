import type { ReactNode } from "react";
import { HeroSection } from "@/components/hero-section";
import { PageChrome } from "@/components/page-chrome";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";

const ABOUT_SKILLS = [
  "Business Strategy",
  "Market Research",
  "Product Management",
  "Go-to-Market",
  "Operations",
  "Flutter",
  "Python",
  "FastAPI",
  "MySQL",
  "Public Speaking",
  "Pitching",
  "Canva",
] as const;

const WINS = [
  {
    title: "Winner, Asian Hack 2025",
    detail:
      "Built a Flutter app + AI analytics platform to bring traditional kirana shops into the digital economy",
  },
  {
    title: "Winner, Startup Summit 2025",
    detail:
      "Founded a market research platform for consumer goods companies in Nepal",
  },
  {
    title: "Winner, CodeSprint Hackathon 2025",
    detail: "",
  },
  {
    title: "Finalist, ICT Award Rising Star 2025",
    detail: "Co-founded KanoonAI, legal awareness chatbot for Nepal",
  },
  {
    title: "National Finalist, Hult Prize Nepal 2025",
    detail: "BioChar startup for Nepal's energy sector",
  },
  {
    title: "Moderator, Cybersecurity Symposium 2026",
    detail: "National panel with government officials and industry leaders",
  },
  {
    title: "Mentor, TechSprint Hackathon 2026",
    detail: "Mentored 25 teams on business viability",
  },
] as const;

const WORK_EXPERIENCE = [
  {
    role: "Operations, Sulav and Samyog Industries",
    period: "Feb 2025 - Sep 2025",
    detail: "Managed end-to-end operations of an interlock manufacturing company",
  },
  {
    role: "Admission Counsellor, Global School of Science",
    period: "Jun 2022 - Aug 2022",
    detail: "",
  },
] as const;

const PROJECTS: ReadonlyArray<{
  name: string;
  description: string;
  tags: readonly string[];
  achievement?: string;
  link?: string;
}> = [
  {
    name: "KanoonAI",
    description:
      "AI chatbot for legal awareness for everyday Nepali users and a research assistant for lawyers. Co-founded, led business strategy and GTM. Onboarded lawyers onto the platform.",
    tags: ["AI", "Legal Tech", "Nepal", "GTM"],
    achievement: "ICT Awards Nepal 2025 Finalist",
  },
  {
    name: "Pasale App",
    description:
      "Flutter mobile app to bridge Nepal's consumer goods market research gap. Created a business model to onboard retailers and help companies do sampled market research at a fraction of current cost.",
    tags: ["Flutter", "FastAPI", "MySQL", "Market Research"],
    link: "https://github.com/InterAsianHack025/Code2Convert.git",
  },
  {
    name: "SentriMetrics AI",
    description:
      "AI system that calculates the impact of Nepali media sources on NEPSE stock prices by assigning weightages based on news impact on following day's stock movement.",
    tags: ["AI", "FinTech", "Nepal", "Data"],
  },
  {
    name: "Research Paper",
    description:
      "Feasibility Study of Nepal as a Data Centre Hub of South Asia — research on Nepal's potential to serve as a regional data infrastructure leader.",
    tags: ["Research", "Infrastructure", "South Asia"],
  },
];

function TrophyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="h-5 w-5 text-amber-200"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <path d="M8 4h8v2a4 4 0 0 1-8 0V4Z" />
      <path d="M6 6H4a3 3 0 0 0 3 3" />
      <path d="M18 6h2a3 3 0 0 1-3 3" />
      <path d="M12 10v4" />
      <path d="M9 18h6" />
      <path d="M8 20h8" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className="h-3 w-3 text-sky-200"
      stroke="currentColor"
      strokeWidth={1.8}
    >
      <rect x="3" y="7" width="18" height="12" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <PageChrome />
      <main>
        <HeroSection />

        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-28 border-b border-zinc-800/60 py-20 md:scroll-mt-32 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Reveal>
              <div>
                <SectionTitle>
                  <span id="about-heading">About Me</span>
                </SectionTitle>
                <div className="mt-8 max-w-4xl space-y-6 text-base leading-relaxed text-zinc-300 md:text-lg">
                  <p>
                    I&apos;m a Computer Engineering student at Nepal Engineering College who
                    self-studies business — because I believe great technology only matters when
                    it&apos;s grounded in real market need. I founded CQ Tech and have won 6
                    hackathons by focusing on one thing most technical people ignore: the business
                    problem behind the product.
                  </p>
                  <p>
                    I&apos;ve run real operations at a manufacturing company, built AI products,
                    designed go-to-market strategies, and mentored 25 startup teams. I sit at the
                    intersection of tech and business — and I think that&apos;s the most
                    interesting place to be in Nepal right now.
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border border-zinc-700/70 bg-zinc-900/35 p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                    Mission
                  </p>
                  <p className="mt-3 max-w-3xl font-[var(--font-display)] text-2xl leading-tight tracking-tight text-zinc-100 md:text-3xl">
                    Solving business problems with tech. Building from Nepal, for the world.
                  </p>
                </div>

                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
                    Skills
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2.5 md:gap-3">
                    {ABOUT_SKILLS.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-zinc-700/80 bg-zinc-900/55 px-4 py-2 text-sm font-medium text-zinc-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="wins"
          aria-labelledby="wins-heading"
          className="scroll-mt-28 border-b border-zinc-800/60 py-20 md:scroll-mt-32 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Reveal>
              <div>
                <SectionTitle>
                  <span id="wins-heading">Wins &amp; Experience</span>
                </SectionTitle>
                <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-200/80">
                      Wins
                    </p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      {WINS.map((item) => (
                        <article
                          key={item.title}
                          className="group rounded-2xl border border-amber-300/20 bg-gradient-to-b from-amber-100/10 to-zinc-900/70 p-5 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-amber-200/30"
                        >
                          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-100">
                            <TrophyIcon />
                            Achievement
                          </div>
                          <h3 className="mt-4 text-base font-semibold leading-snug text-zinc-50">
                            {item.title}
                          </h3>
                          {item.detail ? (
                            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{item.detail}</p>
                          ) : null}
                        </article>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200/80">
                      Work Experience
                    </p>
                    <div className="mt-4 rounded-2xl border border-zinc-700/70 bg-zinc-900/45 p-5 md:p-6">
                      <div className="space-y-6">
                        {WORK_EXPERIENCE.map((item, index) => (
                          <article key={`${item.role}-${item.period}`} className="relative pl-7">
                            {index < WORK_EXPERIENCE.length - 1 ? (
                              <span
                                aria-hidden
                                className="absolute left-[9px] top-7 h-[calc(100%+1.25rem)] w-px bg-zinc-700"
                              />
                            ) : null}
                            <span className="absolute left-0 top-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-sky-200/30 bg-sky-200/10">
                              <BriefcaseIcon />
                            </span>
                            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                              {item.period}
                            </p>
                            <h3 className="mt-1 text-base font-semibold leading-snug text-zinc-100">
                              {item.role}
                            </h3>
                            {item.detail ? (
                              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.detail}</p>
                            ) : null}
                          </article>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="scroll-mt-28 border-b border-zinc-800/60 py-20 md:scroll-mt-32 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Reveal>
              <div>
                <SectionTitle>
                  <span id="projects-heading">Projects</span>
                </SectionTitle>
                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  {PROJECTS.map((project) => (
                    <article
                      key={project.name}
                      className="group rounded-2xl border border-zinc-700/80 bg-zinc-900/50 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-500/80 hover:bg-zinc-900/75"
                    >
                      <h3 className="font-[var(--font-display)] text-2xl font-semibold tracking-tight text-zinc-100">
                        {project.name}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-zinc-300">{project.description}</p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={`${project.name}-${tag}`}
                            className="rounded-full border border-zinc-600/80 bg-zinc-800/65 px-3 py-1 text-xs font-medium text-zinc-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {project.achievement ? (
                        <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-300/25 bg-amber-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-100">
                          <TrophyIcon />
                          {project.achievement}
                        </p>
                      ) : null}

                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex items-center justify-center rounded-full border border-zinc-500/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-200 transition-all duration-300 ease-out hover:border-zinc-300 hover:text-zinc-100"
                        >
                          View on GitHub
                        </a>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-heading"
          className="scroll-mt-28 py-20 md:scroll-mt-32 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Reveal>
              <div>
                <SectionTitle>
                  <span id="contact-heading">Let&apos;s Talk</span>
                </SectionTitle>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">
                  Whether you&apos;re a founder, builder, or operator — I&apos;d love to connect.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                  <a
                    href="mailto:sulavtimalsina11@gmail.com"
                    className="rounded-2xl border border-zinc-700/80 bg-zinc-900/50 p-5 transition-all duration-300 ease-out hover:border-zinc-500/80 hover:bg-zinc-900/75"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Email</p>
                    <p className="mt-2 break-all text-sm font-medium text-zinc-100">
                      sulavtimalsina11@gmail.com
                    </p>
                  </a>

                  <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      LinkedIn
                    </p>
                    <p className="mt-2 text-sm font-medium text-zinc-300">URL coming soon</p>
                  </div>

                  <div className="rounded-2xl border border-zinc-700/80 bg-zinc-900/50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      Location
                    </p>
                    <p className="mt-2 text-sm font-medium text-zinc-100">
                      Kathmandu, Nepal (Open to remote work globally)
                    </p>
                  </div>
                </div>

                <div className="mt-10 rounded-2xl border border-zinc-700/80 bg-zinc-900/50 p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
                    Send a Message
                  </p>

                  <form className="mt-5 space-y-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      <label className="block">
                        <span className="text-sm font-medium text-zinc-300">Name</span>
                        <input
                          type="text"
                          name="name"
                          className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-100 outline-none transition-all duration-300 ease-out placeholder:text-zinc-500 focus:border-zinc-500"
                          placeholder="Your name"
                        />
                      </label>

                      <label className="block">
                        <span className="text-sm font-medium text-zinc-300">Email</span>
                        <input
                          type="email"
                          name="email"
                          className="mt-2 w-full rounded-xl border border-zinc-700 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-100 outline-none transition-all duration-300 ease-out placeholder:text-zinc-500 focus:border-zinc-500"
                          placeholder="you@example.com"
                        />
                      </label>
                    </div>

                    <label className="block">
                      <span className="text-sm font-medium text-zinc-300">Message</span>
                      <textarea
                        name="message"
                        rows={5}
                        className="mt-2 w-full resize-y rounded-xl border border-zinc-700 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-100 outline-none transition-all duration-300 ease-out placeholder:text-zinc-500 focus:border-zinc-500"
                        placeholder="Tell me what you're building, and how I can help."
                      />
                    </label>

                    <button
                      type="button"
                      className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-100 px-6 text-sm font-semibold text-zinc-950 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/60 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-zinc-500 md:px-6">
          © 2025 Sulav Timalsina · Built with Next.js · Deployed on Vercel
        </div>
      </footer>
    </>
  );
}
