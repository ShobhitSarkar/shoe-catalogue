// tests/navigation.test.ts
import { test, expect } from '@playwright/test';

test.describe('Site Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('main navigation links are functional', async ({ page }) => {
    // Check navigation links exist
    await expect(page.locator('nav a:has-text("New Arrivals")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Men")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Women")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Collections")')).toBeVisible();

    // Test navigation interaction (based on your implementation)
    // This assumes clicking on "Collections" navigates to a collections page
    await page.click('nav a:has-text("Collections")');
    await expect(page).toHaveURL(/.*collections/);
  });

  test('logo navigates to home page', async ({ page }) => {
    // First navigate away from home
    await page.click('text=Shop Now');
    
    // Then click on logo to return home
    await page.click('text=NOVASTEP');
    await expect(page).toHaveURL('/');
  });
});