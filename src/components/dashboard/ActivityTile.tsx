"use client";
import { motion } from "framer-motion";
import { BentoTile } from "./BentoTile";

// Deterministic mock: 7 weeks x 7 days
const DAYS = Array.from({ length: 49 }, (_, i) => {
  const seed = Math.sin(i * 12.9898) * 43758.5453;
  const v = seed - Math.floor(seed);
  return Math.round(v * 4); // 0..4
});

const LEVEL_OPACITY = [0.08, 0.25, 0.45, 0.7, 1];

export function ActivityTile() {
  return (
    <BentoTile className="md:col-span-2 lg:col-span-2 row-span-1 min-h-[220px] p-6 grain">
      <div className="grain-overlay" />
      <header className="relative flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Activity
          </p>
          <h2 className="mt-1 text-xl font-semibold text-foreground">Last 7 weeks</h2>
        </div>
        <p className="text-sm font-medium text-foreground tabular-nums">
          412 <span className="text-muted-foreground font-normal">lessons</span>
        </p>
      </header>

      <div className="relative mt-6 grid grid-cols-[repeat(7,minmax(0,1fr))] gap-1.5">
        {DAYS.map((level, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 20,
              delay: 0.4 + i * 0.012,
            }}
            className="aspect-square rounded-md"
            style={{
              background: "var(--gradient-primary)",
              opacity: LEVEL_OPACITY[level],
            }}
            aria-hidden
          />
        ))}
      </div>

      <footer className="relative mt-5 flex items-center justify-between text-[11px] text-muted-foreground">
        <span>Less</span>
        <div className="flex items-center gap-1">
          {LEVEL_OPACITY.map((o, i) => (
            <span
              key={i}
              className="size-2.5 rounded-sm"
              style={{ background: "var(--gradient-primary)", opacity: o }}
            />
          ))}
        </div>
        <span>More</span>
      </footer>
    </BentoTile>
  );
}
