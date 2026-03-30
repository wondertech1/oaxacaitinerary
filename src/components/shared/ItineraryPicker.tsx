"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animation/ScrollReveal";

const itineraries = [
  { days: 1, label: "1 Day", slug: "/oaxaca-1-day-itinerary", tagline: "Essential Sprint" },
  { days: 2, label: "2 Days", slug: "/oaxaca-2-day-itinerary", tagline: "Perfect Weekend" },
  { days: 3, label: "3 Days", slug: "/oaxaca-3-day-itinerary", tagline: "Long Weekend" },
  { days: 4, label: "4 Days", slug: "/oaxaca-city-4-day-itinerary", tagline: "Local Feeling" },
  { days: 5, label: "5 Days", slug: "/oaxaca-5-day-itinerary", tagline: "Ideal Trip" },
  { days: 7, label: "7 Days", slug: "/oaxaca-7-day-itinerary", tagline: "Full Immersion" },
];

interface ItineraryPickerProps {
  currentDays: number;
  className?: string;
}

export default function ItineraryPicker({ currentDays, className = "" }: ItineraryPickerProps) {
  return (
    <section className={`py-12 md:py-16 px-4 sm:px-6 ${className}`}>
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
            All Itineraries
          </span>
          <h2 className="mt-2 font-heading text-xl md:text-2xl font-bold text-copal">
            Need more time? Less time?
          </h2>
          <p className="mt-2 text-sm text-copal/50">
            Pick the duration that fits your trip.
          </p>
        </ScrollReveal>

        <div className="mt-6 flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {itineraries.map((item, i) => {
            const isCurrent = item.days === currentDays;

            if (isCurrent) {
              return (
                <ScrollReveal key={item.days} delay={0.05 + i * 0.04}>
                  <div className="relative flex-shrink-0 w-28 rounded-[6px] bg-barro p-4 text-center">
                    <div className="absolute inset-0 weave-diagonal opacity-[0.06] rounded-[6px]" />
                    <div className="relative z-10">
                      <span className="block font-heading text-2xl font-bold text-lana">
                        {item.days}
                      </span>
                      <span className="block font-mono text-[9px] uppercase tracking-wider text-lana/70 mt-0.5">
                        {item.days === 1 ? "day" : "days"}
                      </span>
                      <span className="block text-[10px] text-lana/50 mt-1.5">
                        {item.tagline}
                      </span>
                      <span className="block font-mono text-[8px] uppercase tracking-wider text-lana/40 mt-2">
                        You are here
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            }

            return (
              <ScrollReveal key={item.days} delay={0.05 + i * 0.04}>
                <Link href={item.slug} className="group block">
                  <div className="relative flex-shrink-0 w-28 rounded-[6px] border border-copal/10 bg-lana p-4 text-center hover:border-barro/30 hover:-translate-y-0.5 transition-all duration-300">
                    <div className="relative z-10">
                      <span className="block font-heading text-2xl font-bold text-copal/20 group-hover:text-barro transition-colors">
                        {item.days}
                      </span>
                      <span className="block font-mono text-[9px] uppercase tracking-wider text-copal/30 mt-0.5">
                        {item.days === 1 ? "day" : "days"}
                      </span>
                      <span className="block text-[10px] text-copal/40 mt-1.5">
                        {item.tagline}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
