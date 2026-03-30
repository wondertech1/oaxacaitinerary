interface AgaveDividerProps {
  className?: string;
  color?: string;
}

export default function AgaveDivider({
  className = "",
  color = "var(--nopal)",
}: AgaveDividerProps) {
  return (
    <div className={`py-6 flex justify-center ${className}`}>
      <svg
        width="180"
        height="32"
        viewBox="0 0 180 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="opacity-15"
      >
        {/* Left line */}
        <line x1="0" y1="16" x2="55" y2="16" stroke={color} strokeWidth="1" />
        {/* Agave piña — stylized cross-section */}
        <path
          d="M90 2 L98 10 L96 16 L100 24 L90 30 L80 24 L84 16 L82 10 Z"
          stroke={color}
          strokeWidth="1.2"
          fill="none"
        />
        {/* Inner diamond */}
        <path
          d="M90 8 L94 16 L90 24 L86 16 Z"
          stroke={color}
          strokeWidth="0.8"
          fill={color}
          fillOpacity="0.1"
        />
        {/* Side leaves */}
        <path d="M82 10 L72 6" stroke={color} strokeWidth="0.8" />
        <path d="M98 10 L108 6" stroke={color} strokeWidth="0.8" />
        <path d="M80 24 L72 26" stroke={color} strokeWidth="0.8" />
        <path d="M100 24 L108 26" stroke={color} strokeWidth="0.8" />
        {/* Right line */}
        <line x1="125" y1="16" x2="180" y2="16" stroke={color} strokeWidth="1" />
      </svg>
    </div>
  );
}
