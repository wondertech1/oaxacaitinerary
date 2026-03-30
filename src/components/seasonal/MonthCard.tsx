interface MonthCardProps {
  month: string;
  shortMonth: string;
  tempHigh: number;
  tempLow: number;
  rain: string;
  crowds: 1 | 2 | 3 | 4 | 5;
  price: 1 | 2 | 3 | 4 | 5;
  festivals?: string[];
  verdict: string;
  accentColor?: string;
}

const crowdLabels = ["", "Empty", "Quiet", "Moderate", "Busy", "Packed"];
const priceLabels = ["", "Cheapest", "Low", "Moderate", "High", "Peak"];

export default function MonthCard({
  month,
  shortMonth,
  tempHigh,
  tempLow,
  rain,
  crowds,
  price,
  festivals,
  verdict,
  accentColor = "barro",
}: MonthCardProps) {
  return (
    <div className="snap-center shrink-0 w-[260px] sm:w-[280px] bg-lana rounded-[6px] overflow-hidden border border-copal/[0.04]">
      {/* Warp-weft header — crowd bars */}
      <div className="h-8 flex" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="flex-1"
            style={{
              backgroundColor:
                i < crowds * 2.4
                  ? `var(--${accentColor})`
                  : "var(--copal)",
              opacity: i < crowds * 2.4 ? 0.15 + (i * 0.03) : 0.03,
            }}
          />
        ))}
      </div>

      <div className="p-4">
        {/* Month name */}
        <div className="flex items-baseline justify-between">
          <h3 className="font-heading text-base font-bold text-copal">
            {month}
          </h3>
          <span className="font-mono text-[10px] uppercase tracking-wider text-copal/30">
            {shortMonth}
          </span>
        </div>

        {/* Weather */}
        <div className="mt-3 flex items-center gap-3">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-copal/35">
              Temp
            </span>
            <p className="text-sm text-copal/70">
              {tempLow}–{tempHigh}°C
            </p>
          </div>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-copal/35">
              Rain
            </span>
            <p className="text-sm text-copal/70">{rain}</p>
          </div>
        </div>

        {/* Crowds & Price */}
        <div className="mt-3 flex gap-4">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-copal/35">
              Crowds
            </span>
            <div className="flex items-center gap-1 mt-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < crowds ? "bg-barro/50" : "bg-copal/[0.06]"
                  }`}
                />
              ))}
              <span className="text-[10px] text-copal/40 ml-1">
                {crowdLabels[crowds]}
              </span>
            </div>
          </div>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-wider text-copal/35">
              Price
            </span>
            <div className="flex items-center gap-1 mt-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < price ? "bg-mezcal/50" : "bg-copal/[0.06]"
                  }`}
                />
              ))}
              <span className="text-[10px] text-copal/40 ml-1">
                {priceLabels[price]}
              </span>
            </div>
          </div>
        </div>

        {/* Festivals */}
        {festivals && festivals.length > 0 && (
          <div className="mt-3">
            <span className="font-mono text-[9px] uppercase tracking-wider text-copal/35">
              Festivals
            </span>
            <div className="mt-1 flex flex-wrap gap-1">
              {festivals.map((f) => (
                <span
                  key={f}
                  className="text-[10px] font-mono text-anil bg-anil/[0.06] rounded-[3px] px-1.5 py-0.5"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Verdict */}
        <p className="mt-3 text-xs text-copal/50 italic border-t border-copal/[0.06] pt-3">
          {verdict}
        </p>
      </div>
    </div>
  );
}
