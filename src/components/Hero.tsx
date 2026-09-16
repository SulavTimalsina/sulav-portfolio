"use client";

import { motion } from "framer-motion";
import { person } from "@/content/site";

const nameLine1 = "Sulav";
const nameLine2 = "Timalsina";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.1 } },
};

const letter = {
  hidden: { opacity: 0, y: "100%" },
  show: {
    opacity: 1,
    y: "0%",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

function KineticWord({ word }: { word: string }) {
  return (
    <span className="inline-flex overflow-hidden">
      {word.split("").map((ch, i) => (
        <motion.span key={i} variants={letter} className="inline-block">
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

const stats = [
  { label: "Ventures", value: "03" },
  { label: "Hackathon wins", value: "06" },
  { label: "Sunuwar speakers", value: "79K" },
  { label: "USYC cohort", value: "1/55" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] scroll-mt-16 flex-col justify-between overflow-hidden pt-24 md:pt-16"
    >
      <div className="ledger-lines pointer-events-none absolute inset-0 opacity-[0.35]" />

      <div className="relative mx-auto w-full max-w-5xl flex-1 px-6 pt-10 md:px-14 md:pt-16">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono-label mb-8 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] uppercase text-muted"
        >
          <span>File No. 2026&#8211;01</span>
          <span className="text-line-strong">/</span>
          <span>{person.location}</span>
          <span className="text-line-strong">/</span>
          <span className="text-accent">Founder&apos;s File</span>
        </motion.p>

        <div className="relative">
          <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className="font-display text-balance text-[16vw] font-semibold leading-[0.86] tracking-tight md:text-[7.4vw]"
          >
            <KineticWord word={nameLine1} />
            <br />
            <KineticWord word={nameLine2} />
          </motion.h1>

          {/* Seal / stamp */}
          <motion.div
            initial={{ opacity: 0, scale: 2.2, rotate: -14 }}
            animate={{ opacity: 1, scale: 1, rotate: -10 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute -right-2 top-0 hidden h-28 w-28 md:block lg:h-32 lg:w-32"
          >
            <svg viewBox="0 0 200 200" className="h-full w-full">
              <circle
                cx="100"
                cy="100"
                r="94"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1.5"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="var(--accent)"
                strokeWidth="1"
              />
              <path
                id="sealCircle"
                fill="none"
                d="M 100,100 m -87,0 a 87,87 0 1,1 174,0 a 87,87 0 1,1 -174,0"
              />
              <text fontSize="9.5" fill="var(--accent)" letterSpacing="2.5">
                <textPath href="#sealCircle" startOffset="0%">
                  FOUNDER &#8226; OPERATOR &#8226; RESEARCHER &#8226; SIX-TIME WINNER &#8226;
                </textPath>
              </text>
              <text
                x="100"
                y="94"
                textAnchor="middle"
                fontFamily="var(--font-display)"
                fontWeight="700"
                fontSize="30"
                fill="var(--accent)"
              >
                6X
              </text>
              <text
                x="100"
                y="114"
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="8.5"
                letterSpacing="1.5"
                fill="var(--accent)"
              >
                WINNER
              </text>
            </svg>
          </motion.div>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.7 }}
          className="mt-10 max-w-2xl border-l-2 border-accent pl-5 md:mt-14"
        >
          <p className="font-serif text-balance text-xl italic leading-snug text-foreground md:text-2xl">
            &ldquo;{person.positioning}&rdquo;
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.85 }}
          className="mt-10 flex flex-wrap gap-3 md:mt-12"
        >
          <a
            href="#work"
            className="bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-85"
          >
            See what I run
          </a>
          <a
            href="#contact"
            className="font-mono-label border border-border px-7 py-3.5 text-xs uppercase text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="relative grid grid-cols-2 border-t border-border sm:grid-cols-4"
      >
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-6 py-5 md:px-10 ${i !== 0 ? "border-l border-border" : ""}`}
          >
            <p className="font-display text-2xl font-semibold md:text-3xl">{s.value}</p>
            <p className="font-mono-label mt-1 text-[10px] uppercase text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
