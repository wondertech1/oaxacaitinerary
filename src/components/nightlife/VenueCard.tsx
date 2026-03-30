interface VenueCardProps {
  name: string;
  type: string;
  address: string;
  hours: string;
  priceRange: string;
  description: string;
  atmosphere: string[];
  bestFor: string;
  accentColor?: string;
}

const glowMap: Record<string, string> = {
  barro: "shadow-barro/20 hover:shadow-barro/40",
  anil: "shadow-anil/20 hover:shadow-anil/40",
  nopal: "shadow-nopal/20 hover:shadow-nopal/40",
  mezcal: "shadow-mezcal/20 hover:shadow-mezcal/40",
};

const textGlowMap: Record<string, string> = {
  barro: "text-barro",
  anil: "text-anil",
  nopal: "text-nopal",
  mezcal: "text-mezcal",
};

export default function VenueCard({
  name,
  type,
  address,
  hours,
  priceRange,
  description,
  atmosphere,
  bestFor,
  accentColor = "mezcal",
}: VenueCardProps) {
  return (
    <div
      className={`bg-copal/[0.97] rounded-[6px] overflow-hidden shadow-lg ${
        glowMap[accentColor] || "shadow-mezcal/20"
      } transition-shadow duration-300`}
    >
      <div className="p-5 md:p-6">
        {/* Type label */}
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-lana/30">
          {type}
        </span>

        {/* Name with neon glow effect */}
        <h3
          className={`mt-1 font-heading text-xl font-bold ${
            textGlowMap[accentColor] || "text-mezcal"
          }`}
          style={{
            textShadow: `0 0 20px color-mix(in srgb, var(--${accentColor}) 30%, transparent)`,
          }}
        >
          {name}
        </h3>

        {/* Address & hours */}
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-mono text-lana/40">
          <span>{address}</span>
          <span>{hours}</span>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-lana/60 leading-relaxed">
          {description}
        </p>

        {/* Data row */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-wrap gap-1.5">
            {atmosphere.map((tag) => (
              <span
                key={tag}
                className="text-[9px] font-mono uppercase tracking-wider text-lana/25 border border-lana/10 rounded-[3px] px-2 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="font-mono text-xs font-bold text-mezcal shrink-0 ml-3">
            {priceRange}
          </span>
        </div>

        {/* Best for */}
        <p className="mt-3 text-[11px] text-lana/35 border-t border-lana/[0.06] pt-3">
          <span className="font-mono uppercase tracking-wider">Best for:</span>{" "}
          {bestFor}
        </p>
      </div>
    </div>
  );
}
