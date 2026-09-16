"use client";

import { useLenis } from "lenis/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { person } from "@/content/site";

const links = [
  { href: "#top", label: "Cover", index: "00" },
  { href: "#work", label: "Ventures", index: "01" },
  { href: "#research", label: "Research", index: "02" },
  { href: "#leadership", label: "Leadership", index: "03" },
  { href: "#recognition", label: "Recognition", index: "04" },
  { href: "#contact", label: "Contact", index: "05" },
];

export default function Nav() {
  const lenis = useLenis();
  const [active, setActive] = useState("#top");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el && lenis) {
      lenis.scrollTo(el as HTMLElement, { offset: -80 });
    } else if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop fixed sidebar */}
      <header className="fixed inset-y-0 left-0 z-50 hidden w-[260px] flex-col border-r border-border bg-background md:flex">
        <a
          href="#top"
          onClick={go("#top")}
          className="flex items-baseline justify-between border-b border-border px-8 py-7"
        >
          <span className="font-display text-lg font-semibold tracking-tight">
            S. Timalsina
          </span>
        </a>

        <p className="font-mono-label px-8 pt-6 text-[10px] uppercase text-muted">
          File index
        </p>

        <nav className="flex-1 px-4 pt-3">
          <ul className="space-y-0.5">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={go(l.href)}
                    className={`font-mono-label group flex items-center gap-3 rounded-sm px-4 py-2.5 text-xs uppercase transition-colors ${
                      isActive
                        ? "bg-accent/10 text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    <span
                      className={`w-5 shrink-0 ${isActive ? "text-accent" : "text-muted/60"}`}
                    >
                      {l.index}
                    </span>
                    {l.label}
                    {isActive && (
                      <span className="ml-auto h-1 w-1 rounded-full bg-accent" />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="font-mono-label border-t border-border px-8 py-6 text-[10px] uppercase text-muted">
          <a
            href={person.resumeHref}
            className="mb-3 flex items-center justify-between rounded-sm border border-border px-3 py-2.5 text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Resume (PDF)
            <span aria-hidden>&#8594;</span>
          </a>
          <p>{person.location}</p>
        </div>
      </header>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between border-b border-border bg-background/95 px-5 py-4 backdrop-blur-md md:hidden">
        <a href="#top" onClick={go("#top")} className="font-display text-base font-semibold">
          S. Timalsina
        </a>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation"
          className="font-mono-label flex items-center gap-2 rounded-sm border border-border px-3 py-1.5 text-[10px] uppercase"
        >
          {open ? "Close" : "Index"}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-[57px] z-40 border-b border-border bg-background px-5 py-4 md:hidden"
          >
            <ul className="space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={go(l.href)}
                    className={`font-mono-label flex items-center gap-3 py-2.5 text-xs uppercase ${
                      active === l.href ? "text-accent" : "text-muted"
                    }`}
                  >
                    <span className="w-5">{l.index}</span>
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={person.resumeHref}
                  className="font-mono-label flex items-center justify-between rounded-sm border border-border px-3 py-2.5 text-xs uppercase"
                >
                  Resume (PDF)
                  <span aria-hidden>&#8594;</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
