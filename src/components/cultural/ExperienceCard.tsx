import type { ReactNode } from "react";

interface ExperienceCardProps {
  name: string;
  type: string;
  description: ReactNode;
  price: string;
  duration: string;
  booking: string;
  verified: string;
  accentColor?: string;
  rotation?: number;
}

const bgMap: Record<string, string> = {
  barro: "bg-barro",
  anil: "bg-anil",
  nopal: "bg-nopal",
  mezcal: "bg-mezcal",
};

export default function ExperienceCard({
  name,
  type,
  description,
  price,
  duration,
  booking,
  verified,
  accentColor = "anil",
  rotation = 0,
}: ExperienceCardProps) {
  return (
    <div
      className="bg-lana rounded-[6px] overflow-hidden border border-copal/[0.04] hover:border-copal/[0.08] transition-all duration-300"
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* Top color bar */}
      <div className={`h-1.5 ${bgMap[accentColor] || "bg-anil"} opacity-60`} />

      <div className="p-5 relative">
        {/* Postmark stamp */}
        <div className="absolute top-3 right-3 w-14 h-14 rounded-full border border-copal/[0.06] flex flex-col items-center justify-center opacity-30">
          <span className="text-[6px] font-mono uppercase tracking-wider text-copal">
            Verified
          </span>
          <span className="text-[8px] font-mono font-bold text-copal">
            {verified}
          </span>
        </div>

        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-copal/40">
          {type}
        </span>
        <h3 className="mt-1 font-heading text-lg font-bold text-copal pr-16">
          {name}
        </h3>
        <p className="mt-2 text-sm text-copal/70 leading-relaxed">
          {description}
        </p>

        {/* Data row */}
        <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-copal/35">
              Price
            </span>
            <p className="font-mono text-xs font-bold text-mezcal">{price}</p>
          </div>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-copal/35">
              Duration
            </span>
            <p className="text-sm text-copal/70">{duration}</p>
          </div>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-copal/35">
              Booking
            </span>
            <p className="text-sm text-copal/70">{booking}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
