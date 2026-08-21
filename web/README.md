# christopherrouleau.com — web

Next.js (App Router) rebuild of [Christopher Rouleau](https://christopherrouleau.com)'s portfolio site, backed by the Sanity Studio in `../sanity`.

## Getting started

Run everything from the repo root (this workspace is part of an npm workspace rooted one level up):

```bash
npm install
npm run dev --workspace=web
```

Copy `.env.example` to `.env.local` and fill in the Sanity project ID/dataset (both public values, safe to check in a local env file but not the repo):

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=
SANITY_REVALIDATE_SECRET=
```

## Scripts

Run with `npm run <script> --workspace=web` from the repo root, or `npm run <script>` from inside `web/`:

- `dev` — start the dev server
- `build` — production build
- `start` — serve a production build
- `lint` — ESLint (flat config, `eslint.config.mjs`)
- `typecheck` — `tsc --noEmit`
- `format` — Prettier write

## Architecture

- **Data**: all Sanity access goes through `src/lib/sanity/` — a typed `client`, an `image` URL builder, and one query module per content area (`queries/home.ts`, `work.ts`, `blog.ts`, etc.). Routes never call `@sanity/client` directly.
- **Routing**: `/[category]`, `/[category]/[work]`, `/[category]/[work]/[child]` (series works), `/blog`, `/blog/[slug]`, `/about`, `/`.
- **Components**: `components/ui/` holds generic, content-agnostic primitives (`Button`, `TextLink`, `CardGrid`, `Wordmark`); `components/common/` holds cross-page composed pieces (`Header`, `Footer`, `Banner`, `Layout`, `ItemCard`, `ShareButton`, `StatusPage`); everything else under `components/` is colocated with the one route that uses it.
- **Revalidation**: `POST /api/revalidate` is a Sanity webhook target — see the header comment in `src/app/api/revalidate/route.ts` for why it uses `revalidatePath` rather than `revalidateTag`.

## Deploying

This app targets Vercel. Set `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, and `SANITY_REVALIDATE_SECRET` as environment variables on the Vercel project, then register `https://<your-domain>/api/revalidate` as a webhook in the Sanity project's settings (with a matching `x-revalidate-secret` header) so content edits go live without a full redeploy.
