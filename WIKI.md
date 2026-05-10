# Creative Agency Rise at Seven - Project Wiki

## Overview
A premium, modern digital agency website built with a bold, editorial aesthetic. This project showcases Rise at Seven's services including Digital PR, SEO, Content, and Strategy.

## Tech Stack

### Core Framework
- **React 19.2.0** - UI library
- **TanStack Start 1.167.50** - Full-stack React framework with SSR
- **TanStack Router 1.168.25** - Type-safe routing
- **TanStack Query 5.83.0** - Data fetching and state management
- **TypeScript 5.8.3** - Type safety

### Styling & Animation
- **Tailwind CSS 4.2.1** - Utility-first CSS framework
- **Framer Motion 12.38.0** - Animation library
- **GSAP 3.15.0** - Advanced animations
- **Lenis 1.3.23** - Smooth scrolling

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **Recharts** - Chart components
- **Sonner** - Toast notifications

### Build & Development
- **Vite 7.3.1** - Build tool
- **Bun** - Package manager and runtime
- **ESLint & Prettier** - Code quality and formatting
- **Cloudflare** - Deployment platform

## Project Structure

```
creative-agency-riseatseven/
├── public/              # Static assets
│   ├── hero.mp4        # Hero section video
│   └── favicon.svg/    # Favicon files
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components (Radix-based)
│   │   ├── Cursor.tsx # Custom cursor
│   │   ├── FeaturedWork.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Marquee.tsx
│   │   ├── Navbar.tsx
│   │   ├── News.tsx
│   │   ├── Services.tsx
│   │   └── SmoothScroll.tsx
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utilities and helpers
│   ├── routes/        # TanStack Router routes
│   │   ├── __root.tsx # Root layout and meta tags
│   │   └── index.tsx  # Home page
│   ├── router.tsx     # Router configuration
│   ├── server.ts      # SSR server entry
│   ├── start.ts       # Client entry
│   └── styles.css     # Global styles
├── package.json
├── vite.config.ts
├── tsconfig.json
└── wrangler.jsonc     # Cloudflare Workers config
```

## Key Components

### Hero
Full-screen hero section with video background and animated text.

### Navbar
Sticky navigation with smooth scroll behavior and custom cursor interactions.

### Services
Grid layout showcasing agency services with hover effects.

### FeaturedWork
Portfolio/case studies section with image galleries.

### Marquee
Animated scrolling text for client logos or testimonials.

### News
Latest updates and blog posts section.

### Footer
Newsletter signup, sitemap links, and dynamic copyright year.

### SmoothScroll
Lenis-powered smooth scrolling wrapper for the entire site.

### Cursor
Custom animated cursor that follows mouse movement.

## Scripts

```bash
# Development server
bun run dev

# Production build
bun run build

# Development build
bun run build:dev

# Preview production build
bun run preview

# Lint code
bun run lint

# Format code
bun run format
```

## Configuration Files

### vite.config.ts
Uses `@lovable.dev/vite-tanstack-config` which includes:
- TanStack Start plugin
- React plugin
- Tailwind CSS
- TypeScript paths
- Cloudflare adapter
- Error logging

### wrangler.jsonc
Cloudflare Workers configuration for deployment.

### tsconfig.json
TypeScript compiler options with path aliases.

### components.json
Shadcn/UI component configuration.

## Styling

### Design System
- **Primary Color**: Mint green (`--mint`)
- **Background**: Ink/dark (`--ink`)
- **Typography**: Display font for headings, sans-serif for body
- **Grain Effect**: Subtle texture overlay on dark sections

### Responsive Design
- Mobile-first approach
- Breakpoints: `md:` (768px), `lg:` (1024px)
- Max content width: 1600px

## Features

- ✅ Server-side rendering (SSR)
- ✅ Smooth scrolling with Lenis
- ✅ Custom animated cursor
- ✅ Video hero section
- ✅ Newsletter subscription form
- ✅ Dynamic copyright year
- ✅ Responsive navigation
- ✅ Accessible UI components
- ✅ SEO meta tags
- ✅ Error boundaries
- ✅ 404 page

## Security Notes

⚠️ **Known Issues** (from code review):
1. **Log Injection** (High) - `src/server.ts:64-65`: User input in logs needs sanitization
2. **XSS Vulnerability** (High) - `src/components/ui/chart.tsx:73-87`: User input in HTML needs sanitization

## Deployment

Configured for Cloudflare Workers via Wrangler. Build artifacts are optimized for edge deployment.

## Development Guidelines

1. Use TypeScript for all new files
2. Follow existing component patterns
3. Keep components small and focused
4. Use Radix UI for accessible primitives
5. Maintain responsive design across all breakpoints
6. Test smooth scroll behavior
7. Ensure custom cursor works on all interactive elements

## Environment

- **Node Version**: Compatible with Bun runtime
- **Package Manager**: Bun (lockfile: bun.lock)
- **Target Platform**: Cloudflare Workers

## Links

- [TanStack Start Docs](https://tanstack.com/start)
- [TanStack Router Docs](https://tanstack.com/router)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cloudflare Workers](https://workers.cloudflare.com/)
