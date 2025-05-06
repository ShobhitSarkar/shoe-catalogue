// tests/responsive.test.ts
import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  test('mobile navigation uses hamburger menu', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check that main nav links are hidden on mobile
    await expect(page.locator('nav a:has-text("New Arrivals")')).not.toBeVisible();
    
    // Check that mobile menu button is visible
    const mobileMenuButton = page.locator('button:has([data-sidebar="trigger"])');
    await expect(mobileMenuButton).toBeVisible();
    
    // Open mobile menu
    await mobileMenuButton.click();
    
    // Now navigation links should be visible
    await expect(page.locator('text=New Arrivals')).toBeVisible();
  });
  
  test('product grid adjusts to screen size', async ({ page }) => {
    // Test desktop layout
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');
    
    const productsSection = page.locator('section:has-text("Trending Now")');
    await expect(productsSection).toBeVisible();
    
    // Get computed grid columns for desktop
    const desktopGridColumns = await productsSection.locator('.grid').evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue('grid-template-columns');
    });
    
    // Expect multiple columns on desktop
    expect(desktopGridColumns.split(' ').length).toBeGreaterThan(2);
    
    // Now check mobile layout
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Get computed grid columns for mobile
    const mobileGridColumns = await productsSection.locator('.grid').evaluate((el) => {
      return window.getComputedStyle(el).getPropertyValue('grid-template-columns');
    });
    
    // Expect fewer columns on mobile
    expect(mobileGridColumns.split(' ').length).toBeLessThanOrEqual(2);
  });
});