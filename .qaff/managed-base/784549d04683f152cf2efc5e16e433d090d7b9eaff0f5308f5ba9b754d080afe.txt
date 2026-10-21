# qaff-sample-ts — QA automation framework

A generated, **owned** end-to-end test framework: TypeScript + Playwright in
an npm-workspaces monorepo. It has no runtime dependency on the generator
that produced it — edit everything freely.

## Quickstart

```bash
npm install
npx playwright install
npm test               # builds + typechecks the workspace, then runs Playwright
npm run test:report    # open the HTML report of the last run
```

The generated smoke tests run fully offline against bundled `file://` HTML
fixtures — the first `npm test` should be green with no application running.

## Layout

| Package | Purpose |
| --- | --- |
| `framework-core` | framework-agnostic helpers |
| `framework-web` | `BasePage` / `PageComponent` base classes |
| `apps/<id>/<layer>` | one package per application and layer |

Each app package holds `pages/` (page objects), `tests/` (specs) and
`fixtures/` (offline test targets). Run a single app's suite with
`npm test -w @qaff-sample-ts/<app-id>-<layer>`.

## Pointing tests at your real application

Replace the `file://` fixture URL in a spec (or set a `baseURL` in
[playwright.config.ts](playwright.config.ts)) and drive your deployed app.
Keep the offline smoke tests — they protect the framework itself.

## Writing your first test

1. Add a page object under `apps/<id>/<layer>/pages/` extending `BasePage`
   and exposing `getByRole`/`getByTestId` locators.
2. Add a spec under `apps/<id>/<layer>/tests/` asserting with web-first
   assertions (`await expect(locator).toBeVisible()`).
3. `npm test`. The pretest `tsc --build` typechecks your code first.

Conventions, dependency-direction rules and AI-assistant guidance:
[AGENTS.md](AGENTS.md).

## Allure HTML report

`ci.<provider>.allureReport` is on: `npm test` also writes raw
`allure-playwright` results to `allure-results/`, and the CI pipeline builds
an Allure HTML report from them after the tests (even when they fail) and keeps
it as the `allure-report` artifact. Locally:

```bash
npm run allure:report            # allure-results/ -> allure-report/
npx allure open allure-report
```

### Pages publishing (opt-in)

`ci.<provider>.pagesPublish` is on: the `allure-report` artifact is published to Pages.

- **GitHub Pages:** `pages` job in `.github/workflows/playwright.yml`. Enable once under
  **Settings → Pages → Source: GitHub Actions**; URL `https://<owner>.github.io/<repository>/`.

Main / default branch only — pull and merge requests never deploy — and also
after failed tests; when no report was built, nothing is deployed. Only the
`pages` job gets the Pages permissions. Each deploy replaces the previous report.

See [docs/HOW_TO_USE_ALLURE.md](docs/HOW_TO_USE_ALLURE.md).
