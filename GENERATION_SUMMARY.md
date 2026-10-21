# Generation Summary

`qaff create` produced a real, buildable TypeScript/npm/Playwright
framework from the inputs below.

## Inputs

- **Config:** `qaff-sample-ts.yaml`
- **Project:** `qaff-sample-ts`
- **Node.js target:** `20`
- **Blueprint:** `ts-npm-playwright` v0.1.0

## Selected blueprint

- **id:** `ts-npm-playwright`
- **version:** 0.1.0
- **name:** TypeScript + npm + Playwright
- **maturity:** stable
- **description:** Web-automation blueprint for TypeScript projects. Generates an npm-workspaces multi-package framework with Playwright and a fixture-based smoke test. Targets Node.js 20 (default) with Node.js 22 as an option.
- **language:** typescript
- **buildTool:** npm
- **testRunner:** playwright
- **automationTools:** playwright
- **reportingTools:** playwright-html
- **supportedChannels:** web-desktop, web-mobile
- **supportedIntegrations:** github-actions, jenkins, azure-pipelines, gitlab-ci
- **supportedQualityPacks:** integration, api, performance
- **outputStructure:** package.json, playwright.config.ts, tsconfig.json, framework-core/, framework-web/, framework-api/, framework-performance/, apps/, qa-factory.lock.json
- **manifest path:** `ts-npm-playwright/blueprint.yaml`

## Applications

- `apps/demo-saas` — Demo SaaS  (layers: web-desktop)

## Files written

```
package.json
playwright.config.ts
tsconfig.json
.gitignore
README.md
docs/HOW_TO_USE_ALLURE.md
AGENTS.md
CLAUDE.md
.github/workflows/playwright.yml
framework-core/package.json
framework-core/tsconfig.json
framework-core/src/index.ts
framework-core/src/helpers/waitHelper.ts
framework-web/package.json
framework-web/tsconfig.json
framework-web/src/index.ts
framework-web/src/BasePage.ts
framework-web/src/PageComponent.ts
apps/demo-saas/web-desktop/package.json
apps/demo-saas/web-desktop/tsconfig.json
apps/demo-saas/web-desktop/pages/DemoSaasHomePage.ts
apps/demo-saas/web-desktop/tests/smoke.spec.ts
apps/demo-saas/web-desktop/fixtures/demo-saas.html
docs/notifications.md
qa-factory.lock.json
GENERATION_SUMMARY.md
```

## Post-generation validation

- **Dependency direction:** PASSED
- **Modules checked:** 3
- **Rule:** `apps/* -> framework-*` allowed; `framework-* -> apps/*` forbidden.

## Build it

```bash
npm test
```
