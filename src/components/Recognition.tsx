import Reveal from "@/components/Reveal";
import { recognition } from "@/content/site";

export default function Recognition() {
  return (
    <section id="recognition" className="relative scroll-mt-16 border-t border-border bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-14">
        <Reveal>
          <p className="font-mono-label mb-4 text-[11px] uppercase text-accent">
            04 &#8226; Recognition
          </p>
          <h2 className="font-display max-w-2xl text-balance text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Six wins, one running ledger.
          </h2>
        </Reveal>

        <div className="mt-14 border-t border-border">
          {recognition.map((r, i) => (
            <Reveal key={r.event} delay={i * 0.04}>
              <div className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 border-b border-border py-4 transition-colors hover:border-l-2 hover:border-l-accent md:grid-cols-[3rem_auto_1fr_auto] md:gap-6">
                <span className="font-mono-label text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono-label hidden text-[11px] uppercase text-accent md:inline">
                  {r.title}
                </span>
                <span className="font-serif text-base font-medium tracking-tight md:text-lg">
                  {r.event}
                  <span className="font-mono-label ml-2 text-[10px] uppercase text-accent md:hidden">
                    {r.title}
                  </span>
                </span>
                <span className="font-mono-label text-right text-[11px] text-muted">
                  {r.year}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
