import Image from "next/image";
import Reveal from "@/components/Reveal";
import { gallery, leadership } from "@/content/site";

export default function Leadership() {
  return (
    <section id="leadership" className="relative scroll-mt-16 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-14">
        <Reveal>
          <p className="font-mono-label mb-4 text-[11px] uppercase text-accent">
            03 &#8226; Leadership &amp; community
          </p>
          <h2 className="font-display max-w-3xl text-balance text-3xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
            The work that isn&apos;t on a cap table.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {leadership.map((l, i) => (
            <Reveal key={l.name} delay={i * 0.06}>
              <div className="h-full">
                {l.image && (
                  <div className="relative aspect-[4/3] overflow-hidden border border-border">
                    <Image
                      src={l.image}
                      alt={l.name}
                      fill
                      sizes="(min-width: 768px) 40vw, 90vw"
                      className="object-cover grayscale-[10%]"
                    />
                  </div>
                )}
                <div className="border border-t-0 border-border p-6">
                  <p className="font-mono-label mb-2 text-[10px] uppercase text-muted">
                    Fig. {String.fromCharCode(65 + i)}
                  </p>
                  <h3 className="font-serif text-xl font-medium tracking-tight md:text-2xl">
                    {l.name}
                  </h3>
                  <p className="font-mono-label mt-2 text-[11px] uppercase text-accent">
                    {l.role} &#8226; {l.period}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {l.summary}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <div className="relative aspect-[16/11] overflow-hidden border border-border">
                <Image
                  src={gallery.podium}
                  alt="Sulav speaking from a podium"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover grayscale-[15%]"
                />
              </div>
              <p className="font-mono-label border border-t-0 border-border px-4 py-2.5 text-[10px] uppercase text-muted">
                Fig. C &#8226; Public speaking
              </p>
            </div>
            <div>
              <div className="relative aspect-[16/11] overflow-hidden border border-border">
                <Image
                  src={gallery.radio}
                  alt="Sulav being interviewed on radio"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover grayscale-[15%]"
                />
              </div>
              <p className="font-mono-label border border-t-0 border-border px-4 py-2.5 text-[10px] uppercase text-muted">
                Fig. D &#8226; On air
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
