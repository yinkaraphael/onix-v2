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

## Publishing Guardrail

Automated public GitHub Pages deployment on push in `.github/workflows/deploy.yml` has been disabled (`workflow_dispatch:` only) so this preview is not exposed publicly by accident. Keep the repository **private** until all withheld operational claims and legal reviews in `HANDOFF.md` are signed off.
