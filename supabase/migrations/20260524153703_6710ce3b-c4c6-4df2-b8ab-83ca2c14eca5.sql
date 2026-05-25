
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  progress INTEGER NOT NULL DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
  icon_name TEXT NOT NULL DEFAULT 'BookOpen',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Courses are viewable by everyone"
  ON public.courses FOR SELECT
  USING (true);

INSERT INTO public.courses (title, progress, icon_name) VALUES
  ('Advanced React Patterns', 78, 'Atom'),
  ('TypeScript Mastery', 52, 'Code2'),
  ('System Design Fundamentals', 34, 'Network'),
  ('Framer Motion in Depth', 91, 'Sparkles');
