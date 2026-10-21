import { BasePage } from "@qaff-sample-ts/framework-web";
import type { Page, Locator } from "@playwright/test";

/**
 * Expose locators (accessibility-first: getByRole / getByTestId) and let the
 * spec assert with web-first assertions. Avoid boolean load-check methods —
 * they read state once and race; `expect(locator)` retries.
 */
export class DemoSaasHomePage extends BasePage {
  readonly heading: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole("heading", { name: "Demo Saas" });
  }
}
