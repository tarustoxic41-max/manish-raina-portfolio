# Fusion Starter - AI/ML Portfolio

A production-ready static React SPA (Single Page Application) template for building fast, modern portfolio websites. This is a **frontend-only, zero-backend** project designed for easy deployment on static hosting platforms.

## Tech Stack

- **Package Manager**: PNPM (recommended)
- **Frontend**: React 18 + React Router 6 (SPA) + TypeScript + Vite
- **Styling**: TailwindCSS 3 + Framer Motion animations
- **Testing**: Vitest
- **UI Components**: Radix UI + TailwindCSS 3 + Lucide React icons
- **Form Handling**: Formspree (client-side form service)

## Project Structure

```
client/                   # React SPA frontend
├── pages/                # Route components (Index.tsx = home)
├── components/           # Reusable UI components
│   ├── AnimatedBackground.tsx    # Canvas-based starfield animation
│   ├── ProfileImage.tsx          # Profile picture with glow effects
│   └── ui/               # Pre-built Radix UI components
├── App.tsx               # App entry point + React Router setup
└── global.css            # TailwindCSS variables and global styles

shared/                   # Shared types (for potential future backend)
├── api.ts                # API interface definitions

public/                   # Static assets
├── favicon.ico
├── robots.txt
└── placeholder.svg

dist/                     # Production build output (generated)
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── [other static files]
```

## Key Features

### 🎨 Animated Frontend

- **Canvas-based starfield** background with twinkling effects
- **CSS animations** for smooth transitions and floating elements
- **Framer Motion** support for complex animations
- **Responsive design** that works on all devices
- **Dark theme** with neon accent colors

### 🔀 SPA Routing System

Powered by React Router 6:

- `client/pages/Index.tsx` = Home page
- `client/pages/ProjectDetail.tsx` = Individual project pages
- `client/pages/BlogDetail.tsx` = Individual blog post pages
- `client/pages/NotFound.tsx` = 404 fallback

Routes are defined in `client/App.tsx`:

```typescript
import { BrowserRouter, Routes, Route } from "react-router-dom";

<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/project/:id" element={<ProjectDetail />} />
  <Route path="/blog/:id" element={<BlogDetail />} />
  {/* Catch-all for 404 */}
  <Route path="*" element={<NotFound />} />
</Routes>
```

### 🎯 Styling System

- **Primary**: TailwindCSS 3 utility classes
- **Theme tokens**: CSS variables in `client/global.css`
- **UI Components**: Radix UI pre-built library in `client/components/ui/`
- **Utility**: `cn()` function (clsx + tailwind-merge) for conditional styling

```typescript
// Example: conditional styling
className={cn(
  "base-classes",
  { "conditional-class": condition },
  props.className  // User overrides
)}
```

### 📧 Contact Form (Frontend-Only)

The contact form uses **Formspree** — no backend server required:

```typescript
<form 
  action="https://formspree.io/f/mgvnnzql" 
  method="POST"
>
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

Emails are sent directly to: `manishraina2009@gmail.com`

## Development Commands

```bash
pnpm dev        # Start Vite dev server (port 8080)
pnpm build      # Production build (outputs to dist/)
pnpm typecheck  # TypeScript validation
pnpm test       # Run Vitest tests
pnpm format.fix # Format code with Prettier
```

## Development Workflow

1. **Start dev server**: `pnpm dev`
2. Open browser to `http://localhost:8080`
3. Edit files in `client/` - hot reload works automatically
4. Build for production: `pnpm build`
5. Output is in `dist/` - ready to deploy

## Adding Features

### Add a New Page/Route

1. Create component in `client/pages/MyPage.tsx`:
```typescript
export default function MyPage() {
  return (
    <div className="my-page">
      {/* Page content */}
    </div>
  );
}
```

2. Add route in `client/App.tsx`:
```typescript
<Route path="/my-page" element={<MyPage />} />
```

3. Link to it from another page:
```typescript
<Link to="/my-page">My Page</Link>
```

### Add New Theme Colors

Edit `client/global.css` and `tailwind.config.ts`:

```css
/* client/global.css */
:root {
  --my-color: 220 13% 50%;
}

.dark {
  --my-color: 220 13% 20%;
}
```

```typescript
// tailwind.config.ts
colors: {
  'my-color': 'hsl(var(--my-color) / <alpha-value>)',
}
```

### Add Animations

Use TailwindCSS animations or Framer Motion:

```typescript
import { motion } from "framer-motion";

export function AnimatedElement() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      Animated content
    </motion.div>
  );
}
```

## Production Deployment

This project is **100% static frontend** — no server required.

### Deploy to Vercel (Recommended)

```bash
pnpm build
npm push  # Push to GitHub
# Connect repo to Vercel — auto-deploys on push
```

Vercel auto-detects Vite + builds with `npm run build`, outputs to `dist/`.

### Deploy to GitHub Pages

```bash
pnpm build
# Upload dist/ folder contents to gh-pages branch
```

### Deploy to Netlify

```bash
pnpm build
# Upload dist/ folder to Netlify
# Or: Connect GitHub repo for auto-deploy
```

### Deploy Anywhere (Static Host)

1. Build: `pnpm build`
2. Upload `dist/` folder to any static host (AWS S3, CloudFlare Pages, etc.)

## Configuration Files

### `vite.config.ts`

```typescript
build: {
  outDir: "dist",  // Build output directory
},
```

The build output generates only **static files** (HTML, CSS, JS) with no server required.

### `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Points Netlify to build with `npm run build` and publish the `dist/` folder.

### `tsconfig.json`

```json
{
  "include": ["client/**/*", "shared/**/*", "vite.config.ts"]
}
```

Includes only client code and shared types (no server code).

### `package.json`

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "typecheck": "tsc",
    "test": "vitest --run"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.1",
    "framer-motion": "^12.23.12"
  }
}
```

Contains **frontend dependencies only** — no Express, Nodemailer, or Node runtime packages.

## SPA Routing Notes

React Router handles all routing **client-side** (in the browser). For this to work on static hosts:

- **Vercel, Netlify, GitHub Pages**: Auto-configured for SPA routing
- **Custom static host**: May need to configure redirects to serve `index.html` for all routes

### Vercel Configuration

Auto-detected for Vite + React Router — no extra config needed.

### Netlify Configuration

Uses `netlify.toml` with `publish = "dist"` — SPA routing is auto-enabled.

### GitHub Pages Configuration

May need a `404.html` → `index.html` redirect depending on your setup.

## No Backend / No Server

This project contains **zero backend code**:

- ✅ No Express server
- ✅ No Node APIs
- ✅ No database connections
- ✅ No environment secrets (.env files)
- ✅ Contact form uses external Formspree service
- ✅ All code runs in the browser

This makes it:
- **Fast**: No network round-trips for server
- **Cheap**: No server hosting costs
- **Secure**: No private keys in code
- **Simple**: Single deployment step (upload dist/)

## Customization

All portfolio content (projects, blog posts, experience, etc.) is defined in `client/pages/Index.tsx`. Edit the hardcoded data arrays to customize:

```typescript
const projects = [
  {
    id: "1",
    title: "Project Name",
    description: "...",
    technologies: ["React", "TypeScript"],
  },
  // Add more projects...
];
```

## Troubleshooting

**Q: Routes aren't working after deployment?**  
A: Ensure your host is configured for SPA routing (redirects all routes to `index.html`). Vercel/Netlify handle this automatically.

**Q: Contact form not working?**  
A: Verify the Formspree form ID (`mgvnnzql`) is correct. Test at `formspree.io`.

**Q: Build fails?**  
A: Run `pnpm typecheck` to check for TypeScript errors. Ensure all imports are correct.

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Router Guide](https://reactrouter.com/)
- [TailwindCSS Docs](https://tailwindcss.com/)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Formspree Docs](https://formspree.io/)
