import Reveal from "@/components/Reveal";
import { person } from "@/content/site";

export default function Contact() {
  return (
    <footer id="contact" className="relative scroll-mt-16 border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6 md:px-14">
        <Reveal>
          <p className="font-mono-label mb-4 text-[11px] uppercase text-accent">
            05 &#8226; Contact
          </p>
          <h2 className="font-serif text-balance text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Building something worth a conversation?
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            Open to founder&apos;s office, GTM/BD, and applied AI roles, and always
            open to hearing about interesting problems.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${person.email}`}
              className="bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-85"
            >
              {person.email}
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono-label border border-border px-7 py-3.5 text-xs uppercase transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn
            </a>
            <a
              href={person.resumeHref}
              className="font-mono-label border border-border px-7 py-3.5 text-xs uppercase transition-colors hover:border-accent hover:text-accent"
            >
              Download Resume
            </a>
          </div>
        </Reveal>

        <div className="font-mono-label mt-20 flex flex-col gap-2 border-t border-border pt-6 text-[11px] uppercase text-muted md:flex-row md:items-center md:justify-between">
          <p>
            &#169; {new Date().getFullYear()} {person.name} &#8226; {person.location}
          </p>
          <p>End of file &#8226; 05/05</p>
        </div>
      </div>
    </footer>
  );
}
