# Orion Website - GitHub Pages Setup

This folder contains the source files and build output for the Orion website, configured for GitHub Pages deployment.

## Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

The build will output files to the current directory (docs/), including:
- `index.html` - Main HTML file
- `assets/` - Compiled JavaScript and CSS files
- `404.html` - Redirect file for GitHub Pages SPA routing

## GitHub Pages Deployment

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

A GitHub Actions workflow (`.github/workflows/deploy.yml`) is configured to automatically build and deploy on every push to `main` or `master`.

**Setup:**
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Under "Source", select **"GitHub Actions"** (not "Deploy from a branch")
4. The workflow will automatically run on every push and deploy your site

**Manual trigger:** You can also manually trigger the workflow from the Actions tab → "Deploy to GitHub Pages" → "Run workflow"

### Option 2: Manual Build and Deploy

1. Build the project: `npm run build`
2. Commit the built files (index.html, assets/, 404.html, .nojekyll)
3. In GitHub repository settings → Pages:
   - Source: Deploy from a branch
   - Branch: main (or master)
   - Folder: /docs
4. Your site will be live at: `https://[username].github.io/[repository-name]/`

## Notes

- Uses HashRouter for client-side routing (URLs will have `#` like `/#/our-work`)
- `.nojekyll` file prevents Jekyll processing
- `404.html` handles redirects for direct URL access
- Build outputs to current directory (overwrites source index.html)

