# Task Manager

The app lets users create tasks, view them, update their status, delete them, and keeps data persisted in the browser.

## Tech Stack
- Next.js 16 (App Router)
- TypeScript 
- Tailwind CSS v4
- shadcn/ui style component patterns
- Zustand + localStorage persistence

## Quick Start
```bash
npm install
npm run dev
```
Then open `http://localhost:3000`.

## Useful Scripts
```bash
npm run lint
npm run typecheck
npm run build
npm test
```

## shadcn Setup Commands (reference)
```bash
npx shadcn@latest init
npx shadcn@latest add card button input checkbox badge separator
```

## Deploy to Vercel
1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Deploy with default Next.js settings.

## Architecture Notes
- `store/task-store.ts`: single source of truth for task actions and persistence.
- `components/task/*`: feature components for add/list/item flows.
- `components/ui/*`: reusable, design-consistent primitives.