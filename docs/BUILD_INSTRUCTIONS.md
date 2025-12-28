# Build Instructions

If you're seeing a white screen, follow these steps:

## For Development (Local Testing)

1. Install dependencies:
```bash
cd docs
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open the URL shown (usually http://localhost:5173)

## For Production (GitHub Pages)

1. Install dependencies (if not already done):
```bash
cd docs
npm install
```

2. Build the project:
```bash
npm run build
```

3. This will create:
   - Updated `index.html` with correct script paths
   - `assets/` folder with compiled JavaScript and CSS

4. Commit and push the built files to GitHub

5. Configure GitHub Pages to serve from `/docs` folder

## Troubleshooting White Screen

If you see a white screen:

1. **Check browser console** (F12) for errors
2. **Verify build completed** - look for `assets/` folder
3. **Check script paths** - built index.html should reference `./assets/...`
4. **Verify base path** - should be `./` for relative paths
5. **Check HashRouter** - URLs should have `#` (e.g., `/#/our-work`)

## Common Issues

- **No assets folder**: Run `npm run build`
- **404 errors**: Check that script paths in index.html are relative (`./`)
- **Routing not working**: Ensure using HashRouter (URLs have `#`)
- **CSS not loading**: Verify Tailwind is configured and built

