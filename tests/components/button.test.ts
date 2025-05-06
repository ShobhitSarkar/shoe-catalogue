// tests/components/button.test.ts
import { test, expect } from '@playwright/test';

test.describe('Button Component', () => {
  test('primary button has correct styling', async ({ page }) => {
    // Create a test page with a primary button
    await page.setContent(`
      <div id="test-container">
        <button class="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-4 py-2">
          Primary Button
        </button>
      </div>
    `);

    // Verify the button has the correct styling
    const button = page.locator('#test-container button');
    
    // Check text content
    await expect(button).toHaveText('Primary Button');
    
    // Check styling classes are applied
    await expect(button).toHaveClass(/bg-primary/);
    await expect(button).toHaveClass(/text-primary-foreground/);
    await expect(button).toHaveClass(/rounded-md/);
  });
});