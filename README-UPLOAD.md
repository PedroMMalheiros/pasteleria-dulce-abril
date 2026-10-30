# Dulce Abril — upload through GitHub's website

These visible files are exact copies of the original configuration files. The website source, images, CSS and content have not been changed.

## Upload without Terminal

1. Extract this ZIP and open the dulce-abril-easy-upload folder.
2. In PedroMMalheiros/pasteleria-dulce-abril on GitHub, open the main branch. Select Add file → Upload files. Upload only deploy.yml, gitignore.txt, nvmrc.txt and env-example.txt to the repository root, then commit. Do not upload the ZIP, this guide or the enclosing folder.
3. Open Settings → Pages → Build and deployment → Source and select GitHub Actions.
4. Return to Code. Open nvmrc.txt, select the pencil (Edit file), change its filename to .nvmrc and commit to main. Repeat with gitignore.txt → .gitignore and env-example.txt → .env.example.
5. Rename deploy.yml LAST. Open it, select the pencil (Edit file), and use the filename field above the editor to move it into .github/workflows/deploy.yml. Type the folder names followed by / to create the path, keeping deploy.yml as the final filename. Commit to main.
6. Open Actions → Deploy Dulce Abril to GitHub Pages and inspect the run. If needed, select Run workflow and choose main after Pages is enabled.

GitHub's editor accepts names beginning with a dot. No Finder rename or Terminal command is required. Do not leave the visible temporary filenames as the final configuration names.

| Visible file | Exact final path from the repository root | Required? |
| --- | --- | --- |
| deploy.yml | .github/workflows/deploy.yml | Yes, for automatic GitHub Pages deployment. |
| nvmrc.txt | .nvmrc | Yes, the existing workflow reads the Node.js version from this file. |
| gitignore.txt | .gitignore | Recommended; prevents dependencies, build output, local environment files and caches being committed. |
| env-example.txt | .env.example | Optional; safe public documentation of the existing Vite base path, with no secrets. |

Use this easy-upload package OR the original-structure package. You do not need both in the repository. Do not overwrite any page, component, image or stylesheet.

## Validation

The original configuration file contents are unchanged. npm run build completed successfully locally using the existing locked dependencies. The Vite base is /pasteleria-dulce-abril/; the workflow also obtains the path from GitHub Pages and builds/uploads dist. Generated script, CSS, favicon, font and image paths were checked directly on disk.

Expected URL after a successful deployment:
https://pedrommalheiros.github.io/pasteleria-dulce-abril/

No live GitHub Actions run or live GitHub Pages deployment was performed or tested as part of this packaging task. The site's existing temporary noindex directive remains unchanged.
