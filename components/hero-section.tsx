import { HeroStatCounters } from "@/components/hero-stat-counters";
import { Reveal } from "@/components/reveal";

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero"
      className="hero-surface scroll-mt-28 border-b border-zinc-800/50 pt-28 pb-24 md:scroll-mt-32 md:pt-36 md:pb-32"
    >
      <div className="hero-noise" aria-hidden />

      <div className="relative z-[1] mx-auto max-w-6xl px-4 md:px-6">
        <Reveal>
          <div>
            <h1 className="max-w-[14ch] font-[var(--font-display)] text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl md:text-7xl md:leading-[0.95] lg:text-8xl">
              Sulav Timalsina
            </h1>

            <p className="mt-6 max-w-3xl font-[var(--font-display)] text-2xl font-medium leading-snug tracking-tight text-zinc-100 sm:text-3xl md:mt-8 md:text-4xl md:leading-tight lg:text-[2.75rem] lg:leading-[1.12]">
              I solve business problems with tech.
            </p>

            <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed text-zinc-300 md:mt-10 md:text-lg">
              CS Student · Founder @ CQ Tech · 6× Hackathon Winner from Nepal
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:mt-6 md:text-lg md:leading-relaxed">
              Building products that bridge the gap between technology and real market needs — from
              kirana shops to legal chatbots.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-12">
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-100 px-8 text-sm font-semibold text-zinc-950 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white"
              >
                View My Work
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-600 bg-zinc-950/50 px-8 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-zinc-500 hover:bg-zinc-900/80"
              >
                Download CV
              </a>
            </div>

            <HeroStatCounters />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
