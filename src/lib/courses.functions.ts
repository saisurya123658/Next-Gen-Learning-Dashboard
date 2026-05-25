"use server";

import { supabaseAdmin } from "@/src/integrations/supabase/client.server";

export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}

export async function getCourses(): Promise<Course[]> {
  const { data, error } = await supabaseAdmin
    .from("courses")
    .select("id, title, progress, icon_name, created_at")
    .order("created_at", { ascending: true });

  if (error) {
    console.error("[getCourses] error:", error);
    throw new Error("Failed to load courses");
  }

  return data ?? [];
}
