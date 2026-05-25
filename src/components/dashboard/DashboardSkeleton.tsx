function Shimmer({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-border bg-card ${className}`}
      style={{ animation: `pulse 1.8s ease-in-out ${delay}s infinite` }}
    >
      <div
        aria-hidden
        className="absolute inset-0 -translate-x-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklab, var(--primary) 14%, transparent), transparent)",
          animation: `shimmer 2.2s ease-in-out ${delay}s infinite`,
        }}
      />
    </div>
  );
}

export function DashboardSkeleton() {
  return (
    <>
      <Shimmer className="md:col-span-2 lg:col-span-3 min-h-[220px]" delay={0} />
      <Shimmer className="min-h-[220px]" delay={0.08} />
      <Shimmer className="md:col-span-2 lg:col-span-2 min-h-[220px]" delay={0.16} />
      <Shimmer className="min-h-[200px]" delay={0.24} />
      <Shimmer className="min-h-[200px]" delay={0.32} />
      <Shimmer className="min-h-[200px]" delay={0.40} />
      <Shimmer className="min-h-[200px]" delay={0.48} />
    </>
  );
}
