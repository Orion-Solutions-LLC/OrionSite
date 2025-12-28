# OrionSite
Website for Orion Solutions LLC

A modern, professional B2B software contracting website built with React, TypeScript, and Tailwind CSS.

## Features

- **4 Main Pages**: Home, Our Work, Meet Us, Contact
- **Responsive Design**: Mobile-friendly with hamburger navigation
- **Dark Blue Theme**: Professional slate-950/900 backgrounds with blue accents
- **Contact Form**: Ready for Bolt Database integration
- **Portfolio Showcase**: Display of completed projects
- **Team Page**: Team member profiles and company statistics

## Setup

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

The build output will be generated in the `docs` folder, ready for GitHub Pages deployment.

## GitHub Pages Deployment

The project is configured to build to the `docs` folder for GitHub Pages:

1. Build the project: `npm run build`
2. Commit and push the `docs` folder to your repository
3. In GitHub repository settings, go to Pages and select "Deploy from a branch"
4. Choose the `main` (or `master`) branch and `/docs` folder
5. Your site will be available at `https://[username].github.io/[repository-name]/`

## Database Integration

To enable contact form submissions, update `src/utils/database.ts` with your Bolt Database endpoint and API credentials.

## Tech Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Lucide React (icons)
- Bolt Database (for contact submissions)
