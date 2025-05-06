// tests/evaluation.test.ts
import { test, expect } from '@playwright/test';
import { navigateToPage } from './utils/test-utils';

test.describe('Software Testing Tool Evaluation', () => {
  test('can navigate through the application', async ({ page }) => {
    await navigateToPage(page, '/');
    
    // Test navigation
    await page.click('text=Shop Now');
    await expect(page).toHaveURL(/.*shop/);
    
    // Test product interaction
    await page.click('text=NeoFlex Pro 1');
    await expect(page.locator('h3')).toContainText('NeoFlex Pro 1');
  });

  test('form submission works correctly', async ({ page }) => {
    await navigateToPage(page, '/');
    
    // Scroll to newsletter section
    await page.evaluate(() => {
      const element = document.querySelector('h2:has-text("Join The Future")');
      if (element) element.scrollIntoView();
    });
    
    // Fill and submit the form
    await page.fill('input[type="email"]', 'test@example.com');
    await page.click('text=Subscribe');
    
    // Assert success message or other indicators
    await expect(page.locator('text=Thank you for subscribing')).toBeVisible();
  });

  // Add more test cases relevant to your chosen testing technique
});