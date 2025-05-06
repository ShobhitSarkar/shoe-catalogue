// tests/forms.test.ts
import { test, expect } from '@playwright/test';

test.describe('Form Interactions', () => {
  test('newsletter subscription form validation', async ({ page }) => {
    await page.goto('/');
    
    // Initial Approach with ambigous selector 
    // const newsletterSection = page.locator('section:has-text("Join The Future")');
    // await expect(newsletterSection).toBeVisible();

    const newsLetterSection = page.getByRole('button', {name: 'Subscribe'}); 
    await expect(newsLetterSection).toBeVisible(); 
    
    // Try submitting empty form (should show validation error)
    const emailInput = newsletterSection.locator('input[type="email"]');
    const submitButton = newsletterSection.locator('text=Subscribe');
    
    await submitButton.click();
    
    // Check validation message (HTML5 validation)
    // This assumes HTML5 validation is enabled
    const isValid = await emailInput.evaluate((el: HTMLInputElement) => el.validity.valid);
    expect(isValid).toBe(false);
    
    // Now fill with valid email and submit
    await emailInput.fill('test@example.com');
    await submitButton.click();
    
    // Check success message appears
    // This depends on your implementation, but could check for a toast notification:
    await expect(page.locator('text=Thank you for subscribing')).toBeVisible({ timeout: 5000 });
  });
});