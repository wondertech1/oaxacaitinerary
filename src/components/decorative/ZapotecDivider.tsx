interface ZapotecDividerProps {
  className?: string;
  count?: number;
  color?: string;
}

export default function ZapotecDivider({
  className = "",
  count = 5,
  color = "currentColor",
}: ZapotecDividerProps) {
  const diamondSize = 12;
  const spacing = 32;
  const totalWidth = count * spacing;
  const startX = 600 - totalWidth / 2;

  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 28"
        className="w-full h-5 md:h-7"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Left line */}
        <line
          x1="40"
          y1="14"
          x2={startX - 8}
          y2="14"
          stroke={color}
          strokeWidth="1"
          opacity="0.08"
        />
        {/* Right line */}
        <line
          x1={startX + totalWidth + 8}
          y1="14"
          x2="1160"
          y2="14"
          stroke={color}
          strokeWidth="1"
          opacity="0.08"
        />
        {/* Diamond shapes */}
        {Array.from({ length: count }).map((_, i) => {
          const cx = startX + i * spacing + spacing / 2;
          return (
            <g key={i} opacity="0.12">
              {/* Outer diamond */}
              <rect
                x={cx - diamondSize / 2}
                y={14 - diamondSize / 2}
                width={diamondSize}
                height={diamondSize}
                fill="none"
                stroke={color}
                strokeWidth="1"
                transform={`rotate(45 ${cx} 14)`}
              />
              {/* Inner diamond */}
              <rect
                x={cx - diamondSize / 4}
                y={14 - diamondSize / 4}
                width={diamondSize / 2}
                height={diamondSize / 2}
                fill={color}
                opacity="0.4"
                transform={`rotate(45 ${cx} 14)`}
              />
              {/* Stepped extensions — top and bottom */}
              <rect
                x={cx - 1.5}
                y={14 - diamondSize / 2 - 3}
                width="3"
                height="3"
                fill={color}
                opacity="0.3"
              />
              <rect
                x={cx - 1.5}
                y={14 + diamondSize / 2}
                width="3"
                height="3"
                fill={color}
                opacity="0.3"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}
