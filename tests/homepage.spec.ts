import { test, expect } from '@playwright/test';

test('homepage has title and takes a screenshot', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/La Despensa de la Mascota/);
  await page.screenshot({ path: 'tests/screenshots/homepage.png', fullPage: true });
});
