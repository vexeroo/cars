# Vexeroo Cars

Vexeroo Cars is a modern web application for car recommendations, rentals, and management, built with Next.js, TypeScript, and Appwrite. It features a modular UI, AI-powered car recommendation agent, and robust backend integration for authentication and data management.

## Features
- AI-powered car recommendation using Genkit
- User authentication and session management (Appwrite)
- Car rental and management flows
- Modular, reusable UI components (Radix UI, Tailwind CSS)
- Type-safe, scalable codebase with strict TypeScript

## Getting Started
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Set up environment variables:**
   - Create a `.env.local` file with your Appwrite endpoint and project ID:
     ```env
     NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
     NEXT_PUBLIC_APPWRITE_PROJECT=your-appwrite-project-id
     ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```

## Project Structure
- `src/app/` – Next.js app entry and pages
- `src/components/ui/` – UI primitives and components
- `src/ai/flows/` – AI/Genkit flows (e.g., car recommendation)
- `src/lib/appwrite/` – Appwrite client, auth, and database helpers
- `src/lib/utils.ts` – Shared utility functions
- `src/hooks/` – Custom React hooks

## Scripts
- `npm run dev` – Start development server
- `npm run build` – Build for production
- `npm run start` – Start production server
- `npm run lint` – Lint code
- `npm run typecheck` – Typecheck code

## License
MIT
