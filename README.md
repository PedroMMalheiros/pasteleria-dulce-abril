# Pastelería Dulce Abril — GitHub Pages preview

Complete React, TypeScript and Vite source for the approved Dulce Abril website, prepared for the `PedroMMalheiros/pasteleria-dulce-abril` repository.

## Upload and enable GitHub Pages

1. Extract the ZIP and open the `pasteleria-dulce-abril` folder.
2. Create or open **PedroMMalheiros/pasteleria-dulce-abril** with a **main** branch. Use a public repository, or a GitHub plan that supports Pages for your chosen repository visibility.
3. Upload **the contents of the extracted folder to the repository root**. `package.json`, `index.html`, `src/`, `public/` and `.github/` must be at that root. Include `.github/workflows/deploy.yml`, `.gitignore`, `.nvmrc` and `.env.example`; do not upload the ZIP itself or an extra parent folder. On macOS, press **Command + Shift + .** in Finder to show these dotfiles. GitHub Desktop is another way to commit the complete folder.
4. In the repository, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
5. Open **Actions → Deploy Dulce Abril to GitHub Pages**. If the first run happened before Pages was enabled, select **Run workflow**, choose **main** and run it again.

After the workflow succeeds, the preview URL will be:

`https://pedrommalheiros.github.io/pasteleria-dulce-abril/`

This is the expected URL for the supplied account and repository. The workflow's deployment result and **Settings → Pages** show the actual URL after deployment.

## Update the website later

Edit or upload the changed source files and commit them to **main**. The workflow installs the locked dependencies, builds the site and deploys `dist/` automatically. Do not upload `node_modules/` or commit `dist/`; GitHub Actions creates the production output.

## Run locally

Use Node.js **22** (the version in `.nvmrc` used by the workflow) or a compatible newer version.

```bash
npm ci
npm run dev
```

Open the URL printed by Vite, including `/pasteleria-dulce-abril/`.

To build and inspect production output:

```bash
npm run build
npm run preview
```

## Repository name and custom domain

`vite.config.ts` defaults to `/pasteleria-dulce-abril/`. Images use `import.meta.env.BASE_URL`, and Vite generates the appropriate paths for JavaScript, CSS, fonts and the favicon.

During deployment, the workflow reads the base path from **GitHub Pages configuration**. A repository rename is therefore picked up automatically. For a custom domain, configure it in **Settings → Pages** and follow GitHub's DNS instructions; the workflow uses `/` when Pages reports a root domain. No domain name or DNS record is invented in this project.

For an explicit override, add an **Actions repository variable** named `VITE_BASE_PATH` under **Settings → Secrets and variables → Actions → Variables**. Use `/another-repository/` for another project path, or `/` for a domain root. Re-run the workflow after changing the variable or domain.

For a local override, copy `.env.example` to `.env.local` and change `VITE_BASE_PATH` there. Local environment files are ignored by Git.

## Commercial preview and indexing

`index.html` contains a temporary `<meta name="robots" content="noindex" />` directive.

**Remove that directive before official client publication**, then commit to `main` to rebuild and publish. The directive discourages indexing; it does not make a public preview private or require a login.

## Included source and assets

| Path | Contents |
| --- | --- |
| `src/` | All approved components, styles, interactions, contact configuration and the base-aware image helper. |
| `public/assets/logo-original.png` | Original supplied Dulce Abril logo. |
| `public/assets/storefront-original.png` | Original supplied storefront photograph. |
| `public/assets/storefront-enhanced-source.png` | Approved higher-quality replacement photograph. |
| `public/assets/` | WebP versions, the favicon and all other existing image assets. |
| `package.json`, `package-lock.json` | Original dependency definitions and exact dependency lockfile. |
| `.github/workflows/deploy.yml` | Automatic build and GitHub Pages publication. |

Fonts are bundled locally from the existing dependencies. Navigation anchors, the mobile menu, photo enlargement, WhatsApp messages and Maps directions retain their approved behaviour. The telephone URI remains in `src/config.ts`; the approved footer displays WhatsApp as its contact link.

No backend, analytics, invented legal details, credentials or local hosting-provider configuration are included.

## Verification

- `npm ci` and the TypeScript/Vite production build completed successfully in the preparation environment (Node.js 24.22.1). The workflow is configured to use Node.js 22.
- Production output was checked directly for both `/pasteleria-dulce-abril/` and `/`: HTML, JavaScript, CSS, favicon, font files and image references resolve to files in the generated output. No HTTP preview is required for these checks.
- The deployment workflow was parsed and checked for the `main` trigger, locked installation, build, Pages permissions, `dist/` artifact and deployment dependency. Action references were checked against the official action definitions.
- Original image files, approved styling, content, interaction code and the dependency lockfile were preserved. The only component edits resolve public image URLs using Vite's configured base path.

Browser verification was limited by a preview-tool HTTP 500 error; no further browser checks were required for delivery. A full final browser/mobile check and an actual GitHub Actions run remain untested. This export has not been deployed to or inspected on live GitHub Pages.

The workflow follows the [official Vite GitHub Pages deployment guide](https://vite.dev/guide/static-deploy.html#github-pages) and uses the official GitHub Pages actions.
