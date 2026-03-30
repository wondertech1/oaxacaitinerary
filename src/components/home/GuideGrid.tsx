"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { guideLinks } from "@/lib/constants/guides";

const categoryConfig: Record<
  string,
  { label: string; color: string; textColor: string; borderColor: string }
> = {
  food: {
    label: "Food & Drink",
    color: "bg-barro",
    textColor: "text-barro",
    borderColor: "group-hover:text-barro",
  },
  culture: {
    label: "Culture & Nightlife",
    color: "bg-anil",
    textColor: "text-anil",
    borderColor: "group-hover:text-anil",
  },
  planning: {
    label: "Planning & Practical",
    color: "bg-mezcal",
    textColor: "text-mezcal",
    borderColor: "group-hover:text-mezcal",
  },
  "day-trips": {
    label: "Day Trips",
    color: "bg-nopal",
    textColor: "text-nopal",
    borderColor: "group-hover:text-nopal",
  },
};

const categoryOrder = ["food", "planning", "day-trips", "culture"] as const;

export default function GuideGrid() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    config: categoryConfig[cat],
    guides: guideLinks.filter((g) => g.category === cat),
  }));

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
            All Guides
          </span>
          <h2 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal">
            Everything you need for Oaxaca
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {grouped.map((group, gi) => (
            <ScrollReveal key={group.category} delay={gi * 0.08}>
              <div className="bg-lana rounded-[6px] overflow-hidden border border-copal/[0.04]">
                {/* Awning header */}
                <div
                  className={`${group.config.color} px-5 py-3 flex items-center gap-3`}
                >
                  <span className="text-white/90 font-mono text-[10px] uppercase tracking-[0.2em]">
                    {group.config.label}
                  </span>
                  <span className="text-white/40 font-mono text-[10px]">
                    {group.guides.length} guides
                  </span>
                </div>

                {/* Guide items */}
                <div className="divide-y divide-copal/[0.04]">
                  {group.guides.map((guide) => (
                    <Link
                      key={guide.href}
                      href={guide.href}
                      className="group flex items-start gap-3 px-5 py-3.5 hover:bg-copal/[0.015] transition-colors"
                    >
                      {/* Dot */}
                      <div
                        className={`shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full ${group.config.color} opacity-30 group-hover:opacity-70 transition-opacity`}
                      />
                      <div className="min-w-0">
                        <span
                          className={`font-heading text-sm font-bold text-copal ${group.config.borderColor} transition-colors leading-tight`}
                        >
                          {guide.label}
                          {guide.kicker && (
                            <span className="ml-2 text-[9px] font-mono uppercase tracking-wider text-mezcal align-middle">
                              {guide.kicker}
                            </span>
                          )}
                        </span>
                        {guide.description && (
                          <p className="mt-0.5 text-xs text-copal/45 leading-relaxed line-clamp-1">
                            {guide.description}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
