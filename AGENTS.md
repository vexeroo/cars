# AGENTS.md

## Build, Lint, and Typecheck
- **Start dev server:** `npm run dev`
- **Build for production:** `npm run build`
- **Start production server:** `npm run start`
- **Lint code:** `npm run lint`
- **Typecheck:** `npm run typecheck`
- **Tests:** _No test scripts or test files present._

## Code Style Guidelines
- **Language:** TypeScript (strict mode, noEmit)
- **Imports:**
  - Use absolute imports with `@/` alias for `src`.
  - Use `import type` for type-only imports.
  - Group imports: external, then internal, then styles.
- **Formatting:**
  - Prefer double quotes in UI components, single quotes elsewhere.
  - Use semicolons consistently.
- **Types & Naming:**
  - camelCase for variables/functions, PascalCase for types/components.
  - Export types and functions as needed.
- **React:**
  - Use functional components and hooks.
  - Use `forwardRef` for UI primitives.
- **Validation:** Use zod for schema validation.
- **Utilities:** Place shared utilities in `src/lib/utils.ts`.
- **Error Handling:** Use async/await; handle errors at the flow or component level.

_If you add tests, document how to run a single test here._
