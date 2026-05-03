import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { SiteHeader } from "@/components/site-header";

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-[var(--font-display)] text-3xl font-semibold tracking-tight text-zinc-50 md:text-4xl">
      {children}
    </h2>
  );
}

function PlaceholderBlock() {
  return (
    <div className="mt-8 rounded-2xl border border-dashed border-zinc-700/80 bg-zinc-900/40 px-6 py-16 text-center">
      <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">Content coming soon</p>
      <p className="mt-2 text-zinc-400">You can drop in copy and media in the next pass.</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section
          id="hero"
          aria-label="Hero"
          className="scroll-mt-28 border-b border-zinc-800/60 pt-28 pb-20 md:scroll-mt-32 md:pt-36 md:pb-28"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-200/90">
                  Portfolio
                </p>
                <h1 className="mt-4 font-[var(--font-display)] text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl md:leading-[1.05]">
                  Sulav Timalsina
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl">
                  Layout shell — hero headline and intro will go here.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-heading"
          className="scroll-mt-28 border-b border-zinc-800/60 py-20 md:scroll-mt-32 md:py-28"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <Reveal>
              <div>
                <SectionTitle>
                  <span id="about-heading">About</span>
                </SectionTitle>
                <PlaceholderBlock />
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
                <PlaceholderBlock />
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
                <PlaceholderBlock />
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
                  <span id="contact-heading">Contact</span>
                </SectionTitle>
                <PlaceholderBlock />
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/60 py-10">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-zinc-500 md:px-6">
          © {new Date().getFullYear()} Sulav Timalsina
        </div>
      </footer>
    </>
  );
}
