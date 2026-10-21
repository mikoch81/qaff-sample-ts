import { test, expect } from "@playwright/test";
import { DemoSaasHomePage } from "../pages/DemoSaasHomePage";
import * as path from "node:path";

const fixturePath = path.resolve(__dirname, "../fixtures/demo-saas.html");
const fixtureUrl = `file://${fixturePath}`;

test.describe("Demo Saas — smoke", () => {
  test("fixture page loads", async ({ page }) => {
    const homePage = new DemoSaasHomePage(page);
    await homePage.navigate(fixtureUrl);
    // Web-first assertions: they auto-retry until the condition holds,
    // no manual state fetching or fixed timeouts.
    await expect(page).toHaveTitle("Demo Saas");
    await expect(homePage.heading).toBeVisible();
  });
});
