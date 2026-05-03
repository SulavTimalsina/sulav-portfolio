"use client";

import { useEffect, useState } from "react";

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M12 19V5" strokeLinecap="round" />
      <path d="m5 12 7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function PageChrome() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let rafId = 0;

    const update = () => {
      const doc = document.documentElement;
      const max = Math.max(doc.scrollHeight - window.innerHeight, 1);
      const value = Math.min(Math.max((window.scrollY / max) * 100, 0), 100);
      setProgress(value);
      setShowTop(window.scrollY > 520);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 bg-transparent">
        <div
          className="h-full origin-left bg-gradient-to-r from-amber-200 via-sky-300 to-violet-300 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={[
          "fixed right-4 bottom-4 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-600 bg-zinc-900/85 text-zinc-100 shadow-lg backdrop-blur-sm",
          "transition-all duration-300 ease-out hover:-translate-y-1 hover:border-zinc-400 hover:bg-zinc-800",
          showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
        ].join(" ")}
      >
        <ArrowUpIcon />
      </button>
    </>
  );
}
