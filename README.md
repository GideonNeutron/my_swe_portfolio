# Gideon Appiah · Portfolio

A responsive, personal portfolio built with React, TypeScript, Vite, and CSS. Includes dark/light themes, three detailed project pages, experience, skills, and email contact. No resume downloads, backend, analytics, API keys, or contact-form service.

## Run locally

Install Node.js 24 LTS and pnpm 11.25.0, then run these commands **inside this folder**:

```sh
pnpm install
pnpm dev
```

Open the local URL printed by Vite. To check the production build:

```sh
pnpm build
pnpm preview
```

`pnpm build` performs TypeScript checking before creating `dist/`.

## Copy My Style

| What to change                                                   | File                                |
| ---------------------------------------------------------------- | ----------------------------------- |
| Email, profile links, project descriptions, experience, skills   | `src/content.ts`                    |
| Introduction, personal story, education, internship availability | `src/App.tsx`                       |
| Colors, typography, spacing, responsive layouts, animation       | `src/styles.css`                    |
| Main portrait                                                    | `public/images/gideon-portrait.jpg` |
| Browser title, sharing description, metadata                     | `index.html`                        |
| Site icon                                                        | `public/favicon.svg`                |

The education and career development sections are in `src/LearningSections.tsx`, with styles in `src/learning.css`. Edit development takeaways and coursework in `src/learning.ts`.

Organization logos are stored locally in `public/images/logos/`. The Grambling wordmark comes from [the university's website](https://www.gram.edu/_resources/images/_redesign/logo.png); the square Grambling mark comes from your existing public portfolio. Career development artwork and coursework icons are illustrative graphics, not organization logos. The TMCF entry includes your cloud services and NotebookLM learning details.


For a new, empty GitHub repository, after reviewing your changes:

```sh
git init
git add .
git status
git commit -m "Build personal portfolio"
git branch -M main
git remote add origin https://github.com/GideonNeutron/YOUR-REPOSITORY.git
git push -u origin main
```

## Update the technology section

The technology section is maintained in `src/techData.ts`, with its component in
`src/TechStack.tsx` and styling in `src/techStack.css`. It combines technologies from
all reference resumes, plus NotebookLM from the Google Cloud mentorship clarification.
React, TypeScript, and Vite are also credited separately as this website's stack.
Logo assets are local in `public/images/tech`; their sources and licenses are recorded
in `ASSET-CREDITS.md`. Update the data file to add, remove, or recategorize technologies.

## Publish with GitHub Pages when ready

Nothing has been published automatically. The included workflow runs **only when you trigger it manually**:

1. Push this project's files to your GitHub repository.
2. Open **Settings → Pages → Build and deployment** and choose **GitHub Actions** as the source.
3. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow** and select your branch.
4. After deployment succeeds, GitHub displays the Pages URL in the workflow and Pages settings.
5. After subsequent changes, push and run the workflow again.


Official reference: [Vite's GitHub Pages deployment guide](https://vite.dev/guide/static-deploy.html#github-pages).
