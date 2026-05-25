"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BentoTile } from "./BentoTile";

interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

function resolveIcon(name: string): LucideIcon {
  const lib = Icons as unknown as Record<string, LucideIcon>;
  return lib[name] ?? Icons.BookOpen;
}

export function CourseTile({
  course,
  index,
}: {
  course: Course;
  index: number;
}) {
  const Icon = resolveIcon(course.icon_name);

  const meshes = [
    "var(--gradient-mesh-1)",
    "var(--gradient-mesh-2)",
    "var(--gradient-mesh-3)",
  ];

  return (
    <BentoTile
      glow
      className="min-h-[200px] p-6 grain flex flex-col justify-between"
    >
      <div className="grain-overlay" />

      <div
        aria-hidden
        className="absolute inset-0 opacity-80 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: meshes[index % meshes.length],
        }}
      />

      {/* Animated gradient border */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          padding: "1px",
          background:
            "conic-gradient(from 180deg at 50% 50%, var(--primary), var(--accent), var(--primary-glow), var(--primary))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />

      <header className="relative flex items-start justify-between gap-4">
        <div
          className="grid place-items-center size-11 rounded-xl border border-border-glow/30 bg-background/40 backdrop-blur-md"
          style={{
            boxShadow: "0 0 20px -8px var(--color-border-glow)",
          }}
        >
          <Icon
            className="size-5 text-primary-glow"
            aria-hidden
          />
        </div>

        <span className="text-xs font-medium text-muted-foreground tabular-nums">
          {course.progress}%
        </span>
      </header>

      <div className="relative mt-6">
        <h3 className="text-lg font-semibold text-foreground leading-snug">
          {course.title}
        </h3>

        <p className="mt-1 text-xs text-muted-foreground">
          Continue where you left off
        </p>

        <div
          className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-surface-elevated"
          role="progressbar"
          aria-valuenow={course.progress}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${course.title} progress`}
        >
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${course.progress}%` }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 18,
              delay: 0.3 + index * 0.08,
            }}
            className="h-full rounded-full"
            style={{
              background: "var(--gradient-primary)",
            }}
          />
        </div>
      </div>
    </BentoTile>
  );
}