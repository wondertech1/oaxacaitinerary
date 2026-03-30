interface MarquetryBorderProps {
  className?: string;
  colors?: string[];
}

export default function MarquetryBorder({
  className = "",
  colors = ["var(--barro)", "var(--anil)", "var(--nopal)", "var(--mezcal)"],
}: MarquetryBorderProps) {
  return (
    <div className={`h-1 flex ${className}`} aria-hidden="true">
      {colors.map((color, i) => (
        <div
          key={i}
          className="flex-1"
          style={{ backgroundColor: color, opacity: 0.6 }}
        />
      ))}
    </div>
  );
}
