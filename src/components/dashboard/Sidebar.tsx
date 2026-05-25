"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  GraduationCap,
  Trophy,
  Calendar,
  MessagesSquare,
  Settings,
  Sparkles,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "courses", label: "Courses", icon: GraduationCap },
  { id: "achievements", label: "Achievements", icon: Trophy },
  { id: "schedule", label: "Schedule", icon: Calendar },
  { id: "community", label: "Community", icon: MessagesSquare },
  { id: "settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
  const [activeId, setActiveId] = useState("dashboard");

  return (
    <aside
      aria-label="Primary"
      className="hidden md:flex shrink-0 flex-col gap-6 border-r border-border bg-surface/60 backdrop-blur-xl p-3 lg:p-4 sticky top-0 h-dvh w-[76px] lg:w-[232px] transition-[width] duration-300"
    >
      <div className="flex items-center gap-2.5 px-1 h-9">
        <div
          className="grid place-items-center size-9 shrink-0 rounded-xl"
          style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
        >
          <Sparkles className="size-5 text-primary-foreground" />
        </div>
        <span className="hidden lg:inline font-semibold tracking-tight text-foreground">
          Nebula
        </span>
      </div>

      <nav aria-label="Main navigation">
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = item.id === activeId;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  title={item.label}
                  aria-label={item.label}
                  aria-current={isActive ? "page" : undefined}
                  className="group/nav relative w-full flex items-center justify-center lg:justify-start gap-3 rounded-xl px-2 lg:px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-xl bg-surface-elevated border border-border-glow/40"
                      style={{ boxShadow: "var(--shadow-glow)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <Icon
                    className={`relative size-[18px] shrink-0 ${isActive ? "text-primary-glow" : ""}`}
                  />
                  <span
                    className={`relative hidden lg:inline ${isActive ? "text-foreground" : ""}`}
                  >
                    {item.label}
                  </span>
                  {/* Tablet tooltip */}
                  <span
                    role="tooltip"
                    className="lg:hidden pointer-events-none absolute left-full ml-3 whitespace-nowrap rounded-md border border-border bg-surface-elevated px-2 py-1 text-xs text-foreground opacity-0 -translate-x-1 group-hover/nav:opacity-100 group-hover/nav:translate-x-0 transition-all duration-150 z-50"
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto hidden lg:block">
        <div className="grain rounded-2xl border border-border bg-surface-elevated p-4 overflow-hidden">
          <div className="grain-overlay" />
          <p className="text-xs font-medium text-muted-foreground">Pro tier</p>
          <p className="mt-1 text-sm font-semibold text-foreground">Upgrade for AI tutor</p>
        </div>
      </div>
    </aside>
  );
}

export function MobileBottomNav() {
  const [activeId, setActiveId] = useState("dashboard");
  return (
    <nav
      aria-label="Mobile navigation"
      className="md:hidden fixed bottom-3 left-3 right-3 z-40 rounded-2xl border border-border bg-surface/90 backdrop-blur-xl p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
    >
      <ul className="flex items-center justify-between gap-1">
        {NAV_ITEMS.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const isActive = item.id === activeId;
          return (
            <li key={item.id} className="flex-1">
              <button
                type="button"
                onClick={() => setActiveId(item.id)}
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className="relative w-full grid place-items-center py-2.5 rounded-xl text-muted-foreground"
              >
                {isActive && (
                  <motion.span
                    layoutId="mobile-active-pill"
                    className="absolute inset-0 rounded-xl bg-surface-elevated border border-border-glow/40"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <Icon className={`relative size-5 ${isActive ? "text-primary-glow" : ""}`} />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
