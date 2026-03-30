"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const pills = [
  { label: "14 In-Depth Guides", icon: "📖" },
  { label: "Street Food & Markets", icon: "🌮" },
  { label: "Budget Breakdowns", icon: "💰" },
  { label: "Updated Mar 2026", icon: "✓" },
];

export default function LoomHero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex flex-col justify-center overflow-hidden bg-lana">
      {/* Loom textile background pattern */}
      <div
        className="absolute inset-0 loom-texture pointer-events-none"
        aria-hidden="true"
      />

      {/* Giant watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[18vw] font-heading font-bold text-copal/[0.03] leading-none tracking-tighter">
          OAXACA
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 mx-auto max-w-5xl w-full">
        {/* Kicker */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="inline-block font-mono text-[11px] uppercase tracking-[0.3em] text-barro mb-4"
        >
          Oaxaca City 2026
        </motion.span>

        {/* Main title with shuttle-weave reveal */}
        <motion.h1
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-copal leading-[1.08] max-w-4xl"
        >
          The city where every meal is a{" "}
          <span className="text-barro italic">ceremony</span> and every street
          leads to a <span className="text-anil">discovery</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-5 text-base md:text-lg text-copal/55 max-w-xl leading-relaxed"
        >
          Mole negro, mezcal tastings, Zapotec ruins, and the best market food
          in Mexico. Opinionated, day-by-day guides for Oaxaca City.
        </motion.p>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {pills.map((pill) => (
            <span
              key={pill.label}
              className="flex items-center gap-2 bg-copal/[0.05] rounded-[4px] px-4 py-2 text-xs font-mono text-copal/60"
            >
              <span>{pill.icon}</span>
              {pill.label}
            </span>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="mt-8"
        >
          <Link
            href="/oaxaca-city-4-day-itinerary"
            className="inline-flex items-center gap-2 px-6 py-3 bg-barro text-lana rounded-[4px] font-mono text-sm uppercase tracking-wider hover:bg-barro/90 transition-colors"
          >
            Start with the 4-Day Itinerary
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-copal/25">
        <span className="text-[10px] font-mono uppercase tracking-widest">
          Scroll
        </span>
        <ChevronDown
          size={16}
          className="animate-[shuttle-bounce_2s_ease-in-out_infinite]"
        />
      </div>
    </section>
  );
}
