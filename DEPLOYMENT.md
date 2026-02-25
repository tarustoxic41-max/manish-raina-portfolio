# Deploy to Vercel (Static)

This portfolio is now a **static frontend** with no backend requirements. Perfect for Vercel!

## Quick Deploy

### Option 1: Deploy via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Deploy via GitHub (Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

Vercel will auto-detect it's a Vite project and build it correctly.

### Option 3: Deploy via Vercel UI
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your GitHub repo
4. Vercel auto-configures everything
5. Click "Deploy"

## Build Locally (to test before deploying)

```bash
pnpm install
pnpm build
```

The static site will be in: `dist/`

You can also test it:
```bash
pnpm dev  # Local development
```

## Contact Form

The contact form uses **Formspree** (free, no backend needed):
- Submissions are sent to: manishraina2009@gmail.com
- Works entirely client-side on Vercel
- No server required

To change the email:
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form
4. Copy your form ID
5. Update in `client/pages/Index.tsx` line ~360: 
   ```tsx
   action="https://formspree.io/f/YOUR_NEW_FORM_ID"
   ```

## Environment Variables

None needed! This is fully static.

## Notes

- ✅ All animations work perfectly
- ✅ All design/colors unchanged
- ✅ No backend required
- ✅ Works on Vercel, Netlify, GitHub Pages, etc.
- ✅ Contact form fully functional

Enjoy your static portfolio! 🚀
