import type { ReactNode } from "react";

interface DayTripCardProps {
  name: string;
  tagline: string;
  description: ReactNode;
  distance: string;
  timeNeeded: string;
  transport: string;
  cost: ReactNode;
  verdict: "worth-it" | "skip-it" | "conditional";
  verdictNote: string;
  accentColor?: string;
}

const borderMap: Record<string, string> = {
  barro: "border-l-barro",
  anil: "border-l-anil",
  nopal: "border-l-nopal",
  mezcal: "border-l-mezcal",
};

const verdictConfig = {
  "worth-it": { label: "Worth It", bg: "bg-nopal/10", text: "text-nopal" },
  "skip-it": { label: "Skip It", bg: "bg-barro/10", text: "text-barro" },
  conditional: { label: "It Depends", bg: "bg-mezcal/10", text: "text-mezcal" },
};

export default function DayTripCard({
  name,
  tagline,
  description,
  distance,
  timeNeeded,
  transport,
  cost,
  verdict,
  verdictNote,
  accentColor = "nopal",
}: DayTripCardProps) {
  const v = verdictConfig[verdict];

  return (
    <div
      className={`bg-lana rounded-[6px] border-l-4 ${
        borderMap[accentColor] || "border-l-nopal"
      } overflow-hidden`}
    >
      <div className="p-5 md:p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-lg font-bold text-copal">
              {name}
            </h3>
            <p className="text-sm text-copal/50 italic mt-0.5">{tagline}</p>
          </div>
          <span
            className={`shrink-0 text-[10px] font-mono uppercase tracking-wider ${v.bg} ${v.text} rounded-full px-2.5 py-0.5`}
          >
            {v.label}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-copal/70 leading-relaxed">
          {description}
        </p>

        {/* Data grid */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {[
            { label: "Distance", value: distance },
            { label: "Time Needed", value: timeNeeded },
            { label: "Transport", value: transport },
            { label: "Cost", value: cost },
          ].map((item) => (
            <div key={item.label}>
              <span className="font-mono text-[9px] uppercase tracking-wider text-copal/35">
                {item.label}
              </span>
              <p className="text-sm text-copal/70 font-medium">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Verdict note */}
        <p className="mt-4 text-xs text-copal/50 italic border-t border-copal/[0.06] pt-3">
          {verdictNote}
        </p>
      </div>
    </div>
  );
}
