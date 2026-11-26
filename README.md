# Onix Data Centres — Website Redesign (Private Preview)

Updated front-end build for **Onix Data Centres**, distinguishing the Uptime Institute Tier IV Constructed Facility in Accra (`Onix Accra #1, Phase 1`) from carrier-neutral colocation at the 2Africa cable landing station in Dakar.

## Local Preview Instructions

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (http://localhost:3000)
npm run dev

# 3. Typecheck / lint
npm run lint

# 4. Run route unit tests
node --test src/utils/*.test.ts

# 5. Build & preview production bundle
npm run build
npm run preview
```

## GitHub Pages Deployment Notes

- In **Repository Settings → Pages → Build and deployment → Source**, choose **GitHub Actions** (do not choose **Deploy from a branch / root**, as serving the unbuilt root `index.html` references `/src/main.tsx` and produces a blank screen).
- `.github/workflows/deploy.yml` defaults to manual `workflow_dispatch:` so a private preview repo is not published publicly by accident. Trigger **Deploy to GitHub Pages (Manual Only)** from the Actions tab (or add `push: branches: [main]` when ready for automated deploys).
- `vite.config.ts` and `public/404.html` automatically align Vite's `base` path (`steps.pages.outputs.base_path` in CI, `GITHUB_REPOSITORY`, or relative `./` with deferred SPA URL restoration) so direct loads and refreshes on nested routes such as `/fr/senegal` or `/the-facility` work cleanly under `<user>.github.io/<repo>/` as well as root/custom domains.
