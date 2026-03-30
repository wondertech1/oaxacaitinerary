import SunArc from "./SunArc";

interface PhotoSpotCardProps {
  name: string;
  category: string;
  description: string;
  direction: string;
  lightingNote: string;
  crowdTip: string;
  optimalTime: number;
  accentColor?: string;
}

const bgMap: Record<string, string> = {
  barro: "from-barro/[0.06]",
  anil: "from-anil/[0.06]",
  nopal: "from-nopal/[0.06]",
  mezcal: "from-mezcal/[0.06]",
};

export default function PhotoSpotCard({
  name,
  category,
  description,
  direction,
  lightingNote,
  crowdTip,
  optimalTime,
  accentColor = "mezcal",
}: PhotoSpotCardProps) {
  return (
    <div className="relative bg-lana rounded-[6px] overflow-hidden border border-copal/[0.04] hover:border-copal/[0.08] transition-all duration-300 group">
      {/* Color gradient field */}
      <div
        className={`h-24 bg-gradient-to-br ${
          bgMap[accentColor] || "from-mezcal/[0.06]"
        } to-transparent relative`}
      >
        {/* Viewfinder overlay */}
        <div className="absolute inset-2 border border-copal/[0.06] rounded-[2px]" />
        {/* Corner brackets */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-copal/[0.12]" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-copal/[0.12]" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-copal/[0.12]" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-copal/[0.12]" />

        {/* Sun arc in corner */}
        <div className="absolute top-2 right-2">
          <SunArc optimalTime={optimalTime} />
        </div>
      </div>

      <div className="p-4">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-copal/35">
          {category}
        </span>
        <h3 className="mt-0.5 font-heading text-base font-bold text-copal leading-tight">
          {name}
        </h3>
        <p className="mt-2 text-sm text-copal/60 leading-relaxed">
          {description}
        </p>

        <div className="mt-3 space-y-1.5 text-xs text-copal/50">
          <div className="flex items-start gap-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-copal/30 shrink-0 w-12 mt-0.5">
              Find it
            </span>
            <span>{direction}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-copal/30 shrink-0 w-12 mt-0.5">
              Light
            </span>
            <span>{lightingNote}</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-[9px] uppercase tracking-wider text-copal/30 shrink-0 w-12 mt-0.5">
              Crowds
            </span>
            <span>{crowdTip}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
