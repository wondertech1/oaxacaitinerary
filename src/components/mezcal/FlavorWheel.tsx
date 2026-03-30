interface FlavorProfile {
  smoky: number;
  herbal: number;
  citrus: number;
  floral: number;
  earthy: number;
  sweet: number;
}

interface FlavorWheelProps {
  profile: FlavorProfile;
  size?: number;
}

const labels: { key: keyof FlavorProfile; label: string; color: string }[] = [
  { key: "smoky", label: "Smoky", color: "var(--barro)" },
  { key: "herbal", label: "Herbal", color: "var(--nopal)" },
  { key: "citrus", label: "Citrus", color: "var(--mezcal)" },
  { key: "floral", label: "Floral", color: "var(--anil)" },
  { key: "earthy", label: "Earthy", color: "var(--copal)" },
  { key: "sweet", label: "Sweet", color: "var(--barro)" },
];

export default function FlavorWheel({ profile, size = 120 }: FlavorWheelProps) {
  const r = size / 2;
  const center = r;
  const maxR = r - 16;
  const angleStep = (2 * Math.PI) / labels.length;

  // Build polygon points from profile values (0-5 scale)
  const points = labels.map((item, i) => {
    const angle = angleStep * i - Math.PI / 2;
    const value = profile[item.key] / 5;
    const px = center + maxR * value * Math.cos(angle);
    const py = center + maxR * value * Math.sin(angle);
    return `${px},${py}`;
  });

  return (
    <div className="inline-flex flex-col items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="opacity-80"
        role="img"
        aria-label={`Flavor profile: smoky ${profile.smoky}, herbal ${profile.herbal}, citrus ${profile.citrus}, floral ${profile.floral}, earthy ${profile.earthy}, sweet ${profile.sweet}`}
      >
        {/* Guide rings */}
        {[0.2, 0.4, 0.6, 0.8, 1].map((scale) => (
          <circle
            key={scale}
            cx={center}
            cy={center}
            r={maxR * scale}
            fill="none"
            stroke="var(--copal)"
            strokeWidth="0.5"
            strokeOpacity="0.08"
          />
        ))}

        {/* Axis lines and labels */}
        {labels.map((item, i) => {
          const angle = angleStep * i - Math.PI / 2;
          const x2 = center + maxR * Math.cos(angle);
          const y2 = center + maxR * Math.sin(angle);
          const lx = center + (maxR + 10) * Math.cos(angle);
          const ly = center + (maxR + 10) * Math.sin(angle);
          return (
            <g key={item.key}>
              <line
                x1={center}
                y1={center}
                x2={x2}
                y2={y2}
                stroke="var(--copal)"
                strokeWidth="0.5"
                strokeOpacity="0.1"
              />
              <text
                x={lx}
                y={ly}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-[7px] font-mono uppercase"
                fill="var(--copal)"
                fillOpacity="0.4"
              >
                {item.label}
              </text>
            </g>
          );
        })}

        {/* Profile polygon */}
        <polygon
          points={points.join(" ")}
          fill="var(--mezcal)"
          fillOpacity="0.15"
          stroke="var(--mezcal)"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />

        {/* Profile dots */}
        {labels.map((item, i) => {
          const angle = angleStep * i - Math.PI / 2;
          const value = profile[item.key] / 5;
          const px = center + maxR * value * Math.cos(angle);
          const py = center + maxR * value * Math.sin(angle);
          return (
            <circle
              key={item.key}
              cx={px}
              cy={py}
              r="2.5"
              fill={item.color}
              fillOpacity="0.8"
            />
          );
        })}
      </svg>
    </div>
  );
}
