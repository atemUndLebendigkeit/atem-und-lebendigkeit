# Atem und Lebendigkeit

Angular v21 website for [atem-und-lebendigkeit.at](https://atem-und-lebendigkeit.at), deployed to GitHub Pages with a custom domain.

## Tech stack

- Angular 21 (standalone components, `@angular/build:application` builder)
- SCSS
- Hash-based routing (`/#/impressum`) — required for GitHub Pages SPA compatibility
- Deployed via `angular-cli-ghpages`

## Project structure

```
src/
  app/
    components/     # Shared/reusable components
    pages/          # Route-level page components
    app.ts          # Root component
    app.html        # Root template
    app.scss        # Root styles
    app.routes.ts   # Route definitions
    app.config.ts   # App config (providers, router)
public/
  assets/           # Images and static files
  CNAME             # Custom domain (atem-und-lebendigkeit.at)
  favicon.ico
  robots.txt
  sitemap.xml
```

## Local development

Install dependencies (first time only):

```bash
npm install
```

Start the dev server:

```bash
npx ng serve
```

Open [http://localhost:4200](http://localhost:4200). The app reloads automatically on file changes.

> **Note:** If running in PowerShell and `ng` is blocked by execution policy, use `npx ng serve` instead, or run `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser` in an admin PowerShell once.

## Deploy to GitHub Pages

### Prerequisites (one-time setup)

1. **GitHub repository** must exist at `github.com/<your-username>/atem-und-lebendigkeit`

2. **Enable GitHub Pages** in the repo settings:
   - Go to **Settings → Pages**
   - Set source to **Deploy from a branch**
   - Select branch `gh-pages`, folder `/ (root)`
   - Save

3. **Custom domain** is already configured via `public/CNAME` (contains `atem-und-lebendigkeit.at`).
   In GitHub Pages settings, enter `atem-und-lebendigkeit.at` as the custom domain and enable **Enforce HTTPS**.

4. **DNS** — your domain registrar must point to GitHub Pages. Add these DNS records:
   ```
   A     @    185.199.108.153
   A     @    185.199.109.153
   A     @    185.199.110.153
   A     @    185.199.111.153
   CNAME www  <your-username>.github.io
   ```

### Deploy

```bash
npm run deploy
```

This command:
1. Builds the app in production mode (`ng build --configuration production --base-href /`)
2. Pushes the `dist/atem-und-lebendigkeit/browser/` output to the `gh-pages` branch via `angular-cli-ghpages`

After ~1–2 minutes, the live site at [https://atem-und-lebendigkeit.at](https://atem-und-lebendigkeit.at) will reflect your changes.

### What gets deployed

The `gh-pages` branch is fully managed by the deploy script — never edit it manually. Everything in `public/` (including `CNAME`, `robots.txt`, `sitemap.xml`) is automatically included in the build output.

## Generate new components

```bash
npx ng generate component components/my-component
# or for a page:
npx ng generate component pages/my-page
```

## Build only (without deploying)

```bash
npm run build
# output: dist/atem-und-lebendigkeit/browser/
```
