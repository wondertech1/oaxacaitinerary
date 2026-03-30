"use client";

import ScrollReveal from "@/components/animation/ScrollReveal";

const facts = [
  {
    icon: "🌡️",
    label: "Weather",
    value: "18–28°C year-round",
    detail: "Dry Oct–May, rain Jun–Sep",
  },
  {
    icon: "💵",
    label: "Daily Cost",
    value: "$35–70 USD",
    detail: "1 USD ≈ 18 MXN",
  },
  {
    icon: "🗣️",
    label: "Language",
    value: "Spanish + Zapotec",
    detail: "Limited English",
  },
  {
    icon: "✈️",
    label: "Getting There",
    value: "OAX airport",
    detail: "Or 6hr bus from CDMX",
  },
  {
    icon: "🚶",
    label: "Getting Around",
    value: "Walk + Taxis",
    detail: "Centro is very walkable",
  },
  {
    icon: "⏰",
    label: "Time Zone",
    value: "CST (UTC-6)",
    detail: "Same as Mexico City",
  },
  {
    icon: "💧",
    label: "Water",
    value: "Drink bottled only",
    detail: "Tap water is not safe",
  },
  {
    icon: "⛰️",
    label: "Altitude",
    value: "1,555m / 5,100ft",
    detail: "Mild — stay hydrated",
  },
];

export default function QuickFacts() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-anil/[0.03]">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
            Quick Reference
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
            Oaxaca at a glance
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {facts.map((fact, i) => (
            <ScrollReveal key={fact.label} delay={i * 0.04}>
              <div className="bg-lana border border-copal/[0.06] rounded-[6px] p-4 hover:border-anil/15 transition-colors">
                {/* Top accent bar */}
                <div className="h-[2px] w-full bg-mezcal rounded-full mb-3" />
                <div className="text-lg mb-1">{fact.icon}</div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-copal/40">
                  {fact.label}
                </span>
                <p className="mt-1 text-sm font-heading font-bold text-copal">
                  {fact.value}
                </p>
                <p className="mt-0.5 text-xs text-copal/45">{fact.detail}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
