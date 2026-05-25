import { Sidebar, MobileBottomNav } from "@/src/components/dashboard/Sidebar";
import { HeroTile } from "@/src/components/dashboard/HeroTile";
import { ActivityTile } from "@/src/components/dashboard/ActivityTile";
import CoursesGrid from "@/src/components/dashboard/CoursesGrid";

import { createServerSupabase } from "@/src/lib/supabase/server";

export default async function HomePage() {
  const supabase = createServerSupabase();

  const { data: courses, error } = await supabase
    .from("courses")
    .select("*");

  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center text-red-400">
        Failed to fetch courses.
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex">
      <Sidebar />

      <section className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

          <HeroTile
            name="Aria"
            streak={27}
          />

          <ActivityTile />

          <CoursesGrid courses={courses || []} />

        </div>
      </section>

      <MobileBottomNav />
    </main>
  );
}