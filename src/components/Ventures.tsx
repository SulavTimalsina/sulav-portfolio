import Reveal from "@/components/Reveal";
import { ventures } from "@/content/site";

const statusStyles: Record<string, string> = {
  active: "text-accent",
  paused: "text-muted",
  concluded: "text-muted",
};

const statusLabel: Record<string, string> = {
  active: "Active",
  paused: "Paused",
  concluded: "Concluded",
};

export default function Ventures() {
  return (
    <section id="work" className="relative scroll-mt-16 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-14">
        <Reveal>
          <p className="font-mono-label mb-4 text-[11px] uppercase text-accent">
            01 &#8226; Ventures
          </p>
          <h2 className="font-display max-w-3xl text-balance text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            Three ventures, three very different problems.
          </h2>
        </Reveal>

        <div className="mt-14 border-y border-border">
          {ventures.map((v, i) => (
            <Reveal key={v.name} delay={i * 0.06}>
              <div className="group grid grid-cols-1 gap-4 border-b border-border py-8 last:border-b-0 md:grid-cols-[3rem_1fr_11rem] md:gap-8">
                <span className="font-mono-label text-xs text-muted md:pt-1.5">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3 className="font-serif text-2xl font-medium tracking-tight md:text-3xl">
                    {v.name}
                  </h3>
                  <p className="font-mono-label mt-2 text-[11px] uppercase text-muted">
                    {v.role} &#8226; {v.period}
                  </p>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                    {v.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
                    {v.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono-label text-[10px] uppercase text-muted/70"
                      >
                        #{tag.replace(/\s+/g, "")}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="md:text-right">
                  <span
                    className={`font-mono-label text-[11px] uppercase ${statusStyles[v.status]}`}
                  >
                    {statusLabel[v.status]}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
