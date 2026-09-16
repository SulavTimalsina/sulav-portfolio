import Image from "next/image";
import Reveal from "@/components/Reveal";
import { appliedAI, research } from "@/content/site";

export default function Research() {
  return (
    <section
      id="research"
      className="relative scroll-mt-16 border-t border-border bg-surface py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6 md:px-14">
        <Reveal>
          <p className="font-mono-label mb-4 text-[11px] uppercase text-accent">
            02 &#8226; Research
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal delay={0.05}>
            <div>
              <div className="relative aspect-[4/3] overflow-hidden border border-border">
                <Image
                  src={research.image}
                  alt="Lost Voices team receiving the Best Project award at JunctionX Kathmandu, FinnoFest 2026"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover grayscale-[10%]"
                />
              </div>
              <div className="flex items-start justify-between gap-4 border border-t-0 border-border px-4 py-3">
                <p className="font-mono-label text-[10px] uppercase text-muted">
                  Exhibit A
                </p>
                <p className="font-mono-label text-right text-[10px] uppercase text-accent">
                  {research.award}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div>
              <p className="text-sm leading-relaxed text-muted">{research.intro}</p>
              <h2 className="font-serif mt-5 text-balance text-3xl font-medium leading-[1.1] tracking-tight md:text-4xl">
                {research.headline}
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-muted">
                {research.body}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 border border-border">
            <div className="flex items-center justify-between border-b border-border px-6 py-3 md:px-8">
              <p className="font-mono-label text-[10px] uppercase text-muted">
                Exhibit B
              </p>
              <p className="font-mono-label text-[10px] uppercase text-accent">
                Applied AI Engineering
              </p>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="font-serif text-xl font-medium tracking-tight md:text-2xl">
                {appliedAI.headline}
              </h3>
              <p className="font-mono-label mt-2 text-[11px] uppercase text-muted">
                {appliedAI.period}
              </p>
              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted">
                {appliedAI.body}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
