"use client";

import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/animation/ScrollReveal";
import { getGuideImage } from "@/lib/constants/guides";

const guides = [
  {
    href: "/where-to-stay-oaxaca",
    kicker: "Neighborhoods",
    title: "Where to Stay in Oaxaca City",
    desc: "Four neighborhoods honestly compared — walkability, price ranges, and who each area is best for.",
    color: "border-anil",
    kickerColor: "text-anil",
    hoverColor: "group-hover:text-anil",
  },
  {
    href: "/oaxaca-street-food-guide",
    kicker: "Street Food",
    title: "12 Things to Eat on the Street",
    desc: "Tlayudas, memelas, chapulines, tejate — with exact locations and prices in MXN.",
    color: "border-barro",
    kickerColor: "text-barro",
    hoverColor: "group-hover:text-barro",
  },
  {
    href: "/monte-alban-day-trip",
    kicker: "Day Trip",
    title: "Monte Albán: Worth a Half-Day?",
    desc: "How to get there, what to see, and whether you should skip it for more market time.",
    color: "border-nopal",
    kickerColor: "text-nopal",
    hoverColor: "group-hover:text-nopal",
  },
  {
    href: "/oaxaca-budget-guide",
    kicker: "Budget",
    title: "Realistic Daily Costs for 2026",
    desc: "Three budget tiers — backpacker, mid-range, comfort — with every cost broken down.",
    color: "border-mezcal",
    kickerColor: "text-mezcal",
    hoverColor: "group-hover:text-mezcal",
  },
  {
    href: "/getting-around-oaxaca",
    kicker: "Transport",
    title: "Getting Around Without a Car",
    desc: "Walking, taxis, DiDi, colectivos, and ADO buses — what works, what doesn\u2019t.",
    color: "border-anil",
    kickerColor: "text-anil",
    hoverColor: "group-hover:text-anil",
  },
  {
    href: "/mercado-20-de-noviembre-guide",
    kicker: "Market Guide",
    title: "Mercado 20 de Noviembre",
    desc: "Stall-by-stall guide to Oaxaca\u2019s famous food market. What to order and how.",
    color: "border-nopal",
    kickerColor: "text-nopal",
    hoverColor: "group-hover:text-nopal",
  },
];

export default function FeaturedArticle() {
  const primaryImage = getGuideImage("/oaxaca-city-4-day-itinerary");

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-lana-dark">
      <div className="mx-auto max-w-4xl">
        <ScrollReveal>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-anil">
            Featured Guide
          </span>
        </ScrollReveal>

        {/* Primary article — 4-day itinerary */}
        <ScrollReveal delay={0.1}>
          <Link
            href="/oaxaca-city-4-day-itinerary"
            className="group block mt-6"
          >
            <div className="relative bg-lana border-t-4 border-barro rounded-[6px] hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Image side */}
                {primaryImage && (
                  <div className="relative w-full md:w-2/5 h-[200px] md:h-auto md:min-h-[280px]">
                    <Image
                      src={primaryImage.image}
                      alt={primaryImage.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-lana/20 hidden md:block" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lana/30 md:hidden" />
                  </div>
                )}

                {/* Text side */}
                <div className="relative p-6 md:p-10 flex-1">
                  <div className="absolute inset-0 weave-diagonal opacity-[0.03] group-hover:opacity-[0.06] transition-opacity" />
                  <div
                    className="absolute bottom-0 right-0 w-8 h-8"
                    style={{
                      clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                      backgroundColor: "var(--lana-dark)",
                    }}
                  />
                  <div className="relative z-10">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-barro">
                      Start Here &middot; 4-Day Itinerary
                    </span>
                    <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-copal group-hover:text-barro transition-colors">
                      4 Days in Oaxaca City: A Local-Feeling Itinerary
                    </h3>
                    <p className="mt-3 text-sm text-copal/55 leading-relaxed max-w-2xl">
                      Day-by-day with specific times, prices, and the opinionated
                      picks that separate a great trip from a generic one. Morning
                      markets, afternoon mezcal, evening mole — the Oaxaca rhythm.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      {[
                        "Day-by-Day Schedule",
                        "Prices in MXN",
                        "Spanish Phrases",
                        "Skip/Do Picks",
                      ].map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono uppercase tracking-wider text-copal/40 border border-copal/10 rounded-[3px] px-2.5 py-1"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* 6 secondary guides in a 2-column grid */}
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {guides.map((guide, i) => {
            const img = getGuideImage(guide.href);
            return (
              <ScrollReveal key={guide.href} delay={0.15 + i * 0.05}>
                <Link href={guide.href} className="group block h-full">
                  <div
                    className={`relative h-full bg-lana border-t-4 ${guide.color} rounded-[6px] hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
                  >
                    {/* Card image */}
                    {img && (
                      <div className="relative h-32 overflow-hidden">
                        <Image
                          src={img.image}
                          alt={img.imageAlt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lana/80" />
                      </div>
                    )}

                    <div className="absolute inset-0 weave-diagonal opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none" />
                    <div
                      className="absolute bottom-0 right-0 w-6 h-6"
                      style={{
                        clipPath: "polygon(100% 0, 0 100%, 100% 100%)",
                        backgroundColor: "var(--lana-dark)",
                      }}
                    />
                    <div className="relative z-10 p-5">
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.2em] ${guide.kickerColor}`}
                      >
                        {guide.kicker}
                      </span>
                      <h3
                        className={`mt-1 font-heading text-lg font-bold text-copal ${guide.hoverColor} transition-colors`}
                      >
                        {guide.title}
                      </h3>
                      <p className="mt-2 text-sm text-copal/50">{guide.desc}</p>
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
