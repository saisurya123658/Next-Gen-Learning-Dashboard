"use client";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { BentoTile } from "./BentoTile";

interface HeroTileProps {
  name: string;
  streak: number;
}

export function HeroTile({ name, streak }: HeroTileProps) {
  return (
    <BentoTile glow className="md:col-span-2 lg:col-span-3 row-span-1 min-h-[220px] p-7 grain">
      <div className="grain-overlay" />
      <div
        aria-hidden
        className="absolute inset-0 opacity-90"
        style={{ background: "var(--gradient-mesh-1)" }}
      />
      <div className="relative flex flex-col md:flex-row md:items-end justify-between gap-6 h-full">
        <header>
          <p className="text-sm font-medium text-muted-foreground">Welcome back,</p>
          <h1 className="mt-1 text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            {name}
          </h1>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            You're closer than you think. Three lessons today keep the streak alive.
          </p>
        </header>

        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.2 }}
          className="inline-flex items-center gap-2 self-start md:self-end rounded-full border border-border bg-background/40 backdrop-blur-md px-3 py-1.5"
        >
          <Flame className="size-3.5 text-primary" />
          <span className="text-xs font-medium text-foreground tabular-nums">
            {streak}
          </span>
          <span className="text-[11px] text-muted-foreground">day streak</span>
        </motion.div>
      </div>
    </BentoTile>
  );
}
