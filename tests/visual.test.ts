// tests/visual.test.ts
import { test, expect } from '@playwright/test';

test.describe('Visual Regression', () => {
  test('hero section renders correctly', async ({ page }) => {
    await page.goto('/');
    
    // Check hero section screenshot against baseline
    await expect(page.locator('section:first-of-type')).toHaveScreenshot('hero-section.png', {
      maxDiffPixelRatio: 0.05
    });
  });
  
  test('product card renders correctly', async ({ page }) => {
    await page.goto('/');
    
    // Get first product card
    const productCard = page.locator('div.group.bg-zinc-900.rounded-xl:first-child');
    await expect(productCard).toBeVisible();
    
    // Take screenshot and compare
    await expect(productCard).toHaveScreenshot('product-card.png', {
      maxDiffPixelRatio: 0.05
    });
  });
});