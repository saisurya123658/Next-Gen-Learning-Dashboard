"use client";
import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";

type BentoTileProps = Omit<HTMLMotionProps<"article">, "children"> & {
  className?: string;
  glow?: boolean;
  children?: React.ReactNode;
};

export const tileVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 260, damping: 26 } },
};

export const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const BentoTile = forwardRef<HTMLElement, BentoTileProps>(
  ({ className = "", glow = false, children, ...rest }, ref) => {
    return (
      <motion.article
        ref={ref}
        variants={tileVariants}
        whileHover={{ scale: 1.015 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={`bento-tile group ${className}`}
        {...rest}
      >
        {/* Hover glow border — opacity-only, no layout shift */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: glow
              ? "0 0 0 1px var(--color-border-glow), 0 0 40px -8px var(--color-border-glow)"
              : "0 0 0 1px var(--color-border-glow), 0 0 30px -12px var(--color-border-glow)",
          }}
        />
        {children}
      </motion.article>
    );
  },
);
BentoTile.displayName = "BentoTile";
