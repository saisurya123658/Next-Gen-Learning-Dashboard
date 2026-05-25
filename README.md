# Aura Learn — Next.js (App Router)

Migrated from TanStack Start (Vite) to **Next.js 15 App Router**.  
Zero code changes — only the folder structure and framework-specific entry files were updated.

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
aura-learn/
├── app/                          # Next.js App Router (replaces src/routes/)
│   ├── layout.tsx                # ← was src/routes/__root.tsx
│   ├── page.tsx                  # ← was src/routes/index.tsx
│   ├── DashboardContainer.tsx    # Client component (motion animations)
│   ├── providers.tsx             # QueryClientProvider wrapper
│   ├── not-found.tsx             # ← was NotFoundComponent in __root.tsx
│   └── error.tsx                 # ← was ErrorComponent in __root.tsx
│
├── src/
│   ├── components/
│   │   ├── dashboard/            # Unchanged — all dashboard tiles
│   │   └── ui/                   # Unchanged — all shadcn/ui components
│   ├── hooks/                    # Unchanged
│   ├── integrations/
│   │   └── supabase/             # Unchanged — client, client.server, types
│   ├── lib/
│   │   ├── courses.functions.ts  # ← createServerFn → "use server" action
│   │   ├── error-capture.ts      # Unchanged
│   │   ├── error-page.ts         # Unchanged
│   │   └── utils.ts              # Unchanged
│   └── styles.css                # Unchanged — Tailwind v4 theme
│
├── supabase/                     # Unchanged — migrations & config
├── next.config.ts                # ← replaces vite.config.ts
├── postcss.config.mjs            # Required for Tailwind v4 + Next.js
├── tsconfig.json                 # Updated for Next.js
└── package.json                  # Updated — next replaces vite + tanstack-start
```

---

## Key Migration Mapping

| TanStack Start | Next.js App Router |
|---|---|
| `src/routes/__root.tsx` | `app/layout.tsx` + `app/providers.tsx` |
| `src/routes/index.tsx` | `app/page.tsx` + `app/DashboardContainer.tsx` |
| `createFileRoute("/")` | `export default function Page()` |
| `notFoundComponent` | `app/not-found.tsx` |
| `errorComponent` | `app/error.tsx` |
| `createServerFn()` | `"use server"` async function |
| `loader` + `ensureQueryData` | `prefetchQuery` in Server Component + `HydrationBoundary` |
| `src/router.tsx` | Built-in Next.js routing |
| `src/routeTree.gen.ts` | Built-in Next.js routing |
| `src/start.ts` / `src/server.ts` | Built-in Next.js server |
| `vite.config.ts` | `next.config.ts` |

---

## Environment Variables

Same `.env` variables — just rename for Next.js conventions:

```env
# Public (exposed to browser)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-anon-key

# Server-only
SUPABASE_URL=https://your-project-ref.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

> Update `src/integrations/supabase/client.ts` to use `process.env.NEXT_PUBLIC_SUPABASE_URL` and `process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`.
