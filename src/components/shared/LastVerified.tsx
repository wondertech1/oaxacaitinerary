interface LastVerifiedProps {
  date: string;
  variant?: "light" | "dark";
}

export default function LastVerified({
  date,
  variant = "light",
}: LastVerifiedProps) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          variant === "dark" ? "bg-nopal/60" : "bg-nopal"
        }`}
      />
      <span
        className={`font-mono text-[10px] uppercase tracking-wider ${
          variant === "dark" ? "text-lana/25" : "text-copal/40"
        }`}
      >
        Updated {date}
      </span>
    </span>
  );
}
