"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { HeroTile } from "@/src/components/dashboard/HeroTile";
import { ActivityTile } from "@/src/components/dashboard/ActivityTile";
import { CoursesGrid } from "@/src/components/dashboard/CoursesGrid";
import { DashboardSkeleton } from "@/src/components/dashboard/DashboardSkeleton";
import { containerVariants } from "@/src/components/dashboard/BentoTile";

export function DashboardContainer() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-min"
    >
      <HeroTile name="Aria" streak={27} />
      <ActivityTile />
      <Suspense fallback={<DashboardSkeleton />}>
        <CoursesGrid />
      </Suspense>
    </motion.section>
  );
}
