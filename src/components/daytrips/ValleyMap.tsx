"use client";

import { useState } from "react";

interface MapMarker {
  id: string;
  name: string;
  x: number;
  y: number;
  distance: string;
  time: string;
}

interface ValleyMapProps {
  markers: MapMarker[];
}

export default function ValleyMap({ markers }: ValleyMapProps) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <svg
        viewBox="0 0 400 320"
        className="w-full h-auto"
        aria-label="Schematic map of Oaxaca Valley day trip destinations"
      >
        {/* Terrain contour lines */}
        {[80, 120, 160, 200, 240].map((y, i) => (
          <ellipse
            key={i}
            cx="200"
            cy="160"
            rx={180 - i * 20}
            ry={y - i * 15}
            fill="none"
            stroke="var(--nopal)"
            strokeWidth="0.6"
            strokeOpacity={0.08 + i * 0.02}
          />
        ))}

        {/* Oaxaca City center dot */}
        <circle cx="200" cy="160" r="6" fill="var(--barro)" fillOpacity="0.3" />
        <circle cx="200" cy="160" r="3" fill="var(--barro)" />
        <text
          x="200"
          y="148"
          textAnchor="middle"
          className="text-[9px] font-mono uppercase"
          fill="var(--copal)"
          fillOpacity="0.6"
        >
          Oaxaca City
        </text>

        {/* Destination markers */}
        {markers.map((m) => {
          const isActive = active === m.id;
          return (
            <g
              key={m.id}
              onMouseEnter={() => setActive(m.id)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(isActive ? null : m.id)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActive(isActive ? null : m.id); } }}
              className="cursor-pointer"
              role="button"
              tabIndex={0}
              aria-label={`${m.name} — ${m.distance}, ${m.time}`}
            >
              {/* Connecting line */}
              <line
                x1="200"
                y1="160"
                x2={m.x}
                y2={m.y}
                stroke="var(--copal)"
                strokeWidth="0.5"
                strokeOpacity="0.1"
                strokeDasharray="3 3"
              />

              {/* Marker */}
              <circle
                cx={m.x}
                cy={m.y}
                r={isActive ? 8 : 5}
                fill={isActive ? "var(--nopal)" : "var(--nopal)"}
                fillOpacity={isActive ? 0.3 : 0.15}
                className="transition-all duration-200"
              />
              <circle
                cx={m.x}
                cy={m.y}
                r="3"
                fill="var(--nopal)"
                fillOpacity={isActive ? 1 : 0.6}
                className="transition-all duration-200"
              />

              {/* Label */}
              <text
                x={m.x}
                y={m.y - 12}
                textAnchor="middle"
                className="text-[8px] font-mono uppercase"
                fill="var(--copal)"
                fillOpacity={isActive ? 0.8 : 0.45}
              >
                {m.name}
              </text>

              {/* Tooltip on hover */}
              {isActive && (
                <g>
                  <rect
                    x={m.x - 45}
                    y={m.y + 12}
                    width="90"
                    height="28"
                    rx="3"
                    fill="var(--copal)"
                    fillOpacity="0.9"
                  />
                  <text
                    x={m.x}
                    y={m.y + 25}
                    textAnchor="middle"
                    className="text-[7px] font-mono"
                    fill="var(--lana)"
                  >
                    {m.distance} · {m.time}
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
