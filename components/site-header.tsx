"use client";

import { useState } from "react";

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#wins", label: "Wins & Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md supports-[backdrop-filter]:bg-zinc-950/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a
          href="#hero"
          onClick={close}
          className="font-[var(--font-display)] text-lg font-semibold tracking-tight text-zinc-100 transition-colors hover:text-white"
        >
          Sulav Timalsina
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:bg-zinc-800/60 hover:text-zinc-100"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-950 transition-colors hover:bg-white"
          >
            Let&apos;s Talk
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#contact"
            onClick={close}
            className="rounded-full bg-zinc-100 px-3 py-2 text-xs font-semibold text-zinc-950"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 text-zinc-200 hover:bg-zinc-800/80"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-zinc-800/80 bg-zinc-950/95 px-4 py-4 md:hidden"
      >
        <nav className="flex flex-col gap-1" aria-label="Mobile primary">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={close}
              className="rounded-lg px-3 py-3 text-sm font-medium text-zinc-300 hover:bg-zinc-800/70 hover:text-white"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
