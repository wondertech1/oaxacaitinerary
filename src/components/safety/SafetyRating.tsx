interface SafetyRatingProps {
  level: 1 | 2 | 3 | 4 | 5;
  label?: string;
}

const levelLabels = ["", "Very Safe", "Safe", "Use Caution", "Be Careful", "Avoid"];
const levelColors = ["", "text-nopal", "text-nopal", "text-mezcal", "text-barro", "text-barro"];

export default function SafetyRating({ level, label }: SafetyRatingProps) {
  return (
    <div className="inline-flex items-center gap-2">
      <div className="flex items-center gap-0.5" aria-label={`Safety level ${level} of 5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            width="14"
            height="18"
            viewBox="0 0 14 18"
            className={`transition-opacity ${
              i < level ? "opacity-80" : "opacity-15"
            }`}
            aria-hidden="true"
          >
            {/* Chile pepper shape */}
            <path
              d="M7 1 C4 1 2 4 2 8 C2 12 5 17 7 17 C9 17 12 12 12 8 C12 4 10 1 7 1Z"
              fill={i < level ? "var(--barro)" : "var(--copal)"}
            />
            <path
              d="M7 1 C7 0 6 0 6 1 C5 0 4 1 5 2 C6 1 7 1 7 1Z"
              fill={i < level ? "var(--nopal)" : "var(--copal)"}
              opacity="0.6"
            />
          </svg>
        ))}
      </div>
      <span className={`text-[10px] font-mono uppercase tracking-wider ${levelColors[level]}`}>
        {label || levelLabels[level]}
      </span>
    </div>
  );
}
