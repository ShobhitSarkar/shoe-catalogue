// tests/utils/test-utils.ts
import { Page } from '@playwright/test';

export async function navigateToPage(page: Page, path: string) {
  await page.goto(path);
  await page.waitForLoadState('networkidle');
}