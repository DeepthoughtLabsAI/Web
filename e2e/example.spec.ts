import { test, expect } from '@playwright/test';
import { percySnapshot } from '@percy/playwright';

test('homepage has title and takes a Percy snapshot', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Create Next App/); // Assuming default Next.js title

  // Take a Percy snapshot
  await percySnapshot(page, 'Homepage');
});
