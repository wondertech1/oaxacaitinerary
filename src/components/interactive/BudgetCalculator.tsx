"use client";

import { useState } from "react";

type Tier = "backpacker" | "midrange" | "comfort";
type Currency = "MXN" | "USD";

const EXCHANGE_RATE = 18; // 1 USD = 18 MXN

interface CategoryCost {
  label: string;
  mxn: number;
  color: string;
}

const TIER_DATA: Record<Tier, { name: string; categories: CategoryCost[] }> = {
  backpacker: {
    name: "Backpacker",
    categories: [
      { label: "Accommodation", mxn: 400, color: "var(--nopal)" },
      { label: "Food", mxn: 350, color: "var(--mezcal)" },
      { label: "Transport", mxn: 80, color: "var(--anil)" },
      { label: "Activities", mxn: 100, color: "var(--barro)" },
      { label: "Drinks", mxn: 100, color: "var(--copal)" },
    ],
  },
  midrange: {
    name: "Mid-Range",
    categories: [
      { label: "Accommodation", mxn: 1200, color: "var(--nopal)" },
      { label: "Food", mxn: 700, color: "var(--mezcal)" },
      { label: "Transport", mxn: 200, color: "var(--anil)" },
      { label: "Activities", mxn: 250, color: "var(--barro)" },
      { label: "Drinks", mxn: 200, color: "var(--copal)" },
    ],
  },
  comfort: {
    name: "Comfort",
    categories: [
      { label: "Accommodation", mxn: 2500, color: "var(--nopal)" },
      { label: "Food", mxn: 1200, color: "var(--mezcal)" },
      { label: "Transport", mxn: 350, color: "var(--anil)" },
      { label: "Activities", mxn: 400, color: "var(--barro)" },
      { label: "Drinks", mxn: 350, color: "var(--copal)" },
    ],
  },
};

function formatCurrency(amount: number, currency: Currency): string {
  if (currency === "USD") {
    return `$${Math.round(amount / EXCHANGE_RATE).toLocaleString()} USD`;
  }
  return `${amount.toLocaleString()} MXN`;
}

export default function BudgetCalculator() {
  const [days, setDays] = useState(5);
  const [tier, setTier] = useState<Tier>("midrange");
  const [currency, setCurrency] = useState<Currency>("MXN");

  const tierData = TIER_DATA[tier];
  const dailyTotal = tierData.categories.reduce((sum, c) => sum + c.mxn, 0);
  const tripTotal = dailyTotal * days;
  const maxCategoryAmount = Math.max(...tierData.categories.map((c) => c.mxn));

  return (
    <div className="rounded-[6px] bg-lana overflow-hidden" role="group" aria-label="Budget calculator">
      {/* Day Count Selector — diamond thread counter */}
      <div className="px-5 py-5 border-b border-copal/[0.06]">
        <label className="block font-mono text-[11px] uppercase tracking-[0.3em] text-copal/50 mb-3">
          Trip Length
        </label>
        <div className="flex items-center gap-1 flex-wrap">
          {Array.from({ length: 14 }, (_, i) => i + 1).map((d) => (
            <button
              key={d}
              onClick={() => setDays(d)}
              aria-label={`${d} day${d > 1 ? "s" : ""}`}
              className="group relative flex items-center justify-center w-7 h-7 transition-transform hover:scale-110"
            >
              {/* Diamond shape */}
              <span
                className={`block w-3.5 h-3.5 rotate-45 rounded-[2px] transition-colors ${
                  d <= days
                    ? "bg-barro"
                    : "bg-copal/10 group-hover:bg-copal/20"
                }`}
              />
              {/* Day number on active */}
              {d === days && (
                <span className="absolute inset-0 flex items-center justify-center font-mono text-[9px] font-bold text-white z-10">
                  {d}
                </span>
              )}
            </button>
          ))}
        </div>
        <p className="mt-2 font-mono text-xs text-copal/40">
          {days} day{days > 1 ? "s" : ""}
        </p>
      </div>

      {/* Tier Selector */}
      <div className="px-5 py-5 border-b border-copal/[0.06]">
        <label className="block font-mono text-[11px] uppercase tracking-[0.3em] text-copal/50 mb-3">
          Budget Tier
        </label>
        <div className="flex gap-2">
          {(
            [
              { key: "backpacker" as Tier, label: "Backpacker", accent: "nopal" },
              { key: "midrange" as Tier, label: "Mid-Range", accent: "mezcal" },
              { key: "comfort" as Tier, label: "Comfort", accent: "barro" },
            ] as const
          ).map(({ key, label, accent }) => (
            <button
              key={key}
              onClick={() => setTier(key)}
              aria-pressed={tier === key}
              className={`flex-1 py-2.5 px-3 rounded-[4px] font-heading text-sm font-bold transition-all ${
                tier === key
                  ? accent === "nopal"
                    ? "bg-nopal text-white"
                    : accent === "mezcal"
                      ? "bg-mezcal text-white"
                      : "bg-barro text-white"
                  : "bg-copal/[0.06] text-copal/50 hover:bg-copal/[0.1] hover:text-copal/70"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Currency Toggle */}
      <div className="px-5 py-4 border-b border-copal/[0.06] flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-copal/50">
          Currency
        </span>
        <div className="flex rounded-[4px] overflow-hidden border border-copal/10">
          {(["MXN", "USD"] as Currency[]).map((c) => (
            <button
              key={c}
              onClick={() => setCurrency(c)}
              aria-pressed={currency === c}
              className={`px-4 py-1.5 font-mono text-xs font-bold transition-colors ${
                currency === c
                  ? "bg-anil text-white"
                  : "bg-transparent text-copal/40 hover:text-copal/60"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Total Display */}
      <div className="px-5 py-6 text-center border-b border-copal/[0.06]">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-copal/40 mb-1">
          Estimated Total
        </p>
        <p className="font-mono text-4xl md:text-5xl font-bold text-barro leading-none">
          {formatCurrency(tripTotal, currency)}
        </p>
        <p className="mt-2 font-mono text-xs text-copal/40">
          {formatCurrency(dailyTotal, currency)}/day &times; {days} day
          {days > 1 ? "s" : ""}
        </p>
      </div>

      {/* Category Breakdown */}
      <div className="px-5 py-5 space-y-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-copal/50">
          Daily Breakdown
        </p>
        {tierData.categories.map((cat) => {
          const percentage = Math.round((cat.mxn / dailyTotal) * 100);
          const barWidth = Math.round((cat.mxn / maxCategoryAmount) * 100);

          return (
            <div key={cat.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-heading text-copal/70">
                  {cat.label}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] text-copal/30">
                    {percentage}%
                  </span>
                  <span className="font-mono text-xs font-bold text-mezcal">
                    {formatCurrency(cat.mxn * days, currency)}
                  </span>
                </div>
              </div>
              <div className="w-full bg-copal/[0.06] rounded-full h-2 overflow-hidden" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100} aria-label={`${cat.label}: ${percentage}%`}>
                <div
                  className="h-2 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: `${barWidth}%`,
                    backgroundImage: `repeating-linear-gradient(90deg, ${cat.color} 0px, ${cat.color} 3px, transparent 3px, transparent 5px)`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
