"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SeasonalStripProps {
  children: React.ReactNode;
}

export default function SeasonalStrip({ children }: SeasonalStripProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 290;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-8 h-8 rounded-full bg-lana border border-copal/[0.08] flex items-center justify-center text-copal/40 hover:text-copal hover:border-copal/20 transition-colors shadow-sm hidden md:flex cursor-pointer"
        aria-label="Scroll left"
      >
        <ChevronLeft size={16} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-8 h-8 rounded-full bg-lana border border-copal/[0.08] flex items-center justify-center text-copal/40 hover:text-copal hover:border-copal/20 transition-colors shadow-sm hidden md:flex cursor-pointer"
        aria-label="Scroll right"
      >
        <ChevronRight size={16} />
      </button>

      {/* Scrollable strip */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-1"
        role="region"
        aria-label="Monthly weather and event guide — scroll horizontally"
        tabIndex={0}
      >
        {children}
      </div>

      {/* Scroll hint gradient */}
      <div className="absolute top-0 right-0 bottom-4 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none" />
    </div>
  );
}
