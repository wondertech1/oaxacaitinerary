import ScrollReveal from "@/components/animation/ScrollReveal";

interface TimeSlot {
  time: string;
  activity: string;
  detail: string;
}

interface EveningTimelineProps {
  slots: TimeSlot[];
}

export default function EveningTimeline({ slots }: EveningTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-[18px] top-0 bottom-0 w-px bg-lana/10" />

      <div className="space-y-0">
        {slots.map((slot, i) => (
          <ScrollReveal key={i} delay={i * 0.06}>
            <div className="flex gap-4 py-4">
              {/* Time dot */}
              <div className="shrink-0 w-9 flex flex-col items-center">
                <div
                  className="w-2.5 h-2.5 rounded-full border-2 mt-1"
                  style={{
                    borderColor: `var(--mezcal)`,
                    backgroundColor:
                      i === 0
                        ? "var(--mezcal)"
                        : "var(--copal)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="min-w-0 pb-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-mezcal">
                  {slot.time}
                </span>
                <h4 className="mt-0.5 font-heading text-base font-bold text-lana">
                  {slot.activity}
                </h4>
                <p className="mt-1 text-sm text-lana/50 leading-relaxed">
                  {slot.detail}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
