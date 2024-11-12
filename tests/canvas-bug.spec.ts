import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:1234/');

  await page.waitForTimeout(1000);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Canvas with Overlay");
});
