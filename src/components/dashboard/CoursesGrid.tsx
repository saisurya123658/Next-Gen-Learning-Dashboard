"use client";
import { CourseTile } from "./CourseTile";

interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
}

export default function CoursesGrid({
  courses,
}: {
  courses: Course[];
}) {
  return (
    <>
      {courses.map((course, i) => (
        <CourseTile
          key={course.id}
          course={course}
          index={i}
        />
      ))}
    </>
  );
}