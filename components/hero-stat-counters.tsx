"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );
}

function StatCell({
  value,
  label,
  delayMs,
  started,
  reducedMotion,
}: {
  value: number;
  label: string;
  delayMs: number;
  started: boolean;
  reducedMotion: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!started || reducedMotion) return;

    const duration = 2000;
    const t0 = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const elapsed = now - t0 - delayMs;
      if (elapsed < 0) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const p = Math.min(elapsed / duration, 1);
      setDisplay(Math.round(easeOutCubic(p) * value));
      if (p < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [started, value, delayMs, reducedMotion]);

  const shown = !started ? 0 : reducedMotion ? value : display;

  return (
    <div className="rounded-2xl border border-zinc-800/70 bg-zinc-900/40 px-4 py-5 shadow-[inset_0_1px_0_0_rgb(255_255_255/0.04)] md:px-6 md:py-6">
      <p className="font-[var(--font-display)] text-3xl font-semibold tabular-nums tracking-tight text-white md:text-4xl">
        {shown}
      </p>
      <p className="mt-2 text-sm leading-snug text-zinc-400">{label}</p>
    </div>
  );
}

const STATS = [
  { value: 6, label: "Hackathons Won" },
  { value: 3, label: "Products Built" },
  { value: 7, label: "Months Ops Experience" },
  { value: 1, label: "Research Paper" },
] as const;

export function HeroStatCounters() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:mt-20 md:grid-cols-4"
      aria-label="Highlights"
    >
      {STATS.map((s, i) => (
        <StatCell
          key={s.label}
          value={s.value}
          label={s.label}
          delayMs={i * 110}
          started={started}
          reducedMotion={reducedMotion}
        />
      ))}
    </div>
  );
}
