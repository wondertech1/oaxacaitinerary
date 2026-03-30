interface SunArcProps {
  /** Optimal time as decimal hours (e.g. 7.5 = 7:30 AM, 17 = 5:00 PM) */
  optimalTime: number;
  label?: string;
}

export default function SunArc({ optimalTime, label }: SunArcProps) {
  // Map 6AM-20PM (6-20) to 0-180 degrees on the arc
  const clampedTime = Math.max(6, Math.min(20, optimalTime));
  const angle = ((clampedTime - 6) / 14) * 180;
  const radians = (angle * Math.PI) / 180;

  // Arc center at (40, 32), radius 26
  const cx = 40;
  const cy = 32;
  const r = 26;
  const dotX = cx + r * Math.cos(Math.PI - radians);
  const dotY = cy - r * Math.sin(radians);

  const formatTime = (h: number) => {
    const hour = Math.floor(h);
    const min = Math.round((h - hour) * 60);
    const period = hour >= 12 ? "PM" : "AM";
    const display = hour > 12 ? hour - 12 : hour;
    return min > 0 ? `${display}:${min.toString().padStart(2, "0")} ${period}` : `${display} ${period}`;
  };

  return (
    <div className="inline-flex flex-col items-center">
      <svg width="80" height="40" viewBox="0 0 80 40" aria-hidden="true">
        {/* Horizon line */}
        <line x1="8" y1="33" x2="72" y2="33" stroke="var(--copal)" strokeWidth="0.5" strokeOpacity="0.15" />

        {/* Arc path */}
        <path
          d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`}
          fill="none"
          stroke="var(--mezcal)"
          strokeWidth="0.8"
          strokeOpacity="0.25"
          strokeDasharray="2 2"
        />

        {/* Sun dot */}
        <circle cx={dotX} cy={dotY} r="4" fill="var(--mezcal)" fillOpacity="0.8" />
        <circle cx={dotX} cy={dotY} r="6" fill="var(--mezcal)" fillOpacity="0.15" />
      </svg>
      <span className="text-[9px] font-mono text-copal/40 uppercase tracking-wider -mt-1">
        {label || formatTime(optimalTime)}
      </span>
    </div>
  );
}
