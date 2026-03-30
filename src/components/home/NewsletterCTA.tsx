"use client";

import { useState } from "react";
import ScrollReveal from "@/components/animation/ScrollReveal";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <div className="relative bg-lana-dark rounded-t-[6px] px-6 py-10 md:px-10 md:py-14 text-center overflow-hidden">
            {/* Subtle weave texture */}
            <div className="absolute inset-0 loom-texture pointer-events-none" />

            <div className="relative z-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-barro">
                Stay Updated
              </span>
              <h2 className="mt-2 font-heading text-xl md:text-2xl font-bold text-copal">
                Get notified when we add new guides
              </h2>
              <p className="mt-3 text-sm text-copal/50 max-w-md mx-auto">
                No spam. Just an email when we publish something new about
                Oaxaca. Unsubscribe anytime.
              </p>

              {submitted ? (
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-sm text-nopal font-mono">
                    <span className="w-2 h-2 rounded-full bg-nopal" />
                    You&apos;re on the list
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="mt-8 flex flex-col sm:flex-row items-center gap-3 max-w-sm mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full bg-transparent border-b-2 border-copal/10 focus:border-barro text-sm text-copal px-1 py-2 outline-none transition-colors font-mono placeholder:text-copal/25"
                  />
                  <button
                    type="submit"
                    className="shrink-0 px-5 py-2 bg-barro text-lana text-sm font-mono uppercase tracking-wider rounded-[4px] hover:bg-barro/90 transition-colors cursor-pointer"
                  >
                    Notify Me
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Fringe bottom edge */}
          <div className="h-3 flex" aria-hidden="true">
            {Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className="flex-1"
                style={{
                  backgroundColor: `var(--${
                    ["barro", "anil", "nopal", "mezcal"][i % 4]
                  })`,
                  opacity: 0.15 + (i % 3) * 0.05,
                  borderRadius: "0 0 1px 1px",
                }}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
