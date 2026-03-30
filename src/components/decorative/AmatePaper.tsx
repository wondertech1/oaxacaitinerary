interface AmatePaperProps {
  children: React.ReactNode;
  className?: string;
}

export default function AmatePaper({ children, className = "" }: AmatePaperProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        clipPath:
          "polygon(0% 2%, 3% 0%, 8% 1%, 15% 0%, 22% 2%, 30% 0%, 38% 1%, 45% 0%, 52% 2%, 60% 0%, 68% 1%, 75% 0%, 82% 2%, 90% 0%, 95% 1%, 100% 0%, 100% 98%, 97% 100%, 92% 99%, 85% 100%, 78% 98%, 70% 100%, 62% 99%, 55% 100%, 48% 98%, 40% 100%, 32% 99%, 25% 100%, 18% 98%, 10% 100%, 5% 99%, 0% 100%)",
      }}
    >
      {/* Subtle paper grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "150px 150px",
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
