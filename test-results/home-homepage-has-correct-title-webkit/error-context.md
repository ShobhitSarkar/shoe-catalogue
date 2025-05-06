# Test info

- Name: homepage has correct title
- Location: /Users/shobhit/Developer/futuristic-shoe-catalogue/tests/home.test.ts:3:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)

Locator: locator(':root')
Expected pattern: /NOVASTEP/
Received string:  "v0 App"
Call log:
  - expect.toHaveTitle with timeout 5000ms
  - waiting for locator(':root')
    9 × locator resolved to <html lang="en">…</html>
      - unexpected value "v0 App"

    at /Users/shobhit/Developer/futuristic-shoe-catalogue/tests/home.test.ts:5:22
```

# Page snapshot

```yaml
- banner:
  - link "NOVASTEP":
    - /url: /
  - navigation:
    - link "New Arrivals":
      - /url: "#"
    - link "Men":
      - /url: "#"
    - link "Women":
      - /url: "#"
    - link "Collections":
      - /url: "#"
  - button "Shopping cart":
    - img
    - text: Shopping cart
  - button "Shop Now"
- text: New Collection 2025
- heading "The Future of Footwear Is Here" [level=1]
- paragraph: Experience the perfect blend of cutting-edge design, sustainable materials, and unmatched comfort.
- button "Explore Collection"
- button "Watch Showcase"
- img "Featured shoe"
- heading "Featured Categories" [level=2]
- link "View all categories":
  - /url: "#"
  - text: View all categories
  - img
- img "Running"
- heading "Running" [level=3]
- link "Shop Collection":
  - /url: "#"
  - text: Shop Collection
  - img
- img "Lifestyle"
- heading "Lifestyle" [level=3]
- link "Shop Collection":
  - /url: "#"
  - text: Shop Collection
  - img
- img "Training"
- heading "Training" [level=3]
- link "Shop Collection":
  - /url: "#"
  - text: Shop Collection
  - img
- heading "Trending Now" [level=2]
- text: New
- img "Shoe 1"
- heading "NeoFlex Pro 1" [level=3]
- img
- text: "4.0"
- paragraph: Ultralight performance shoe with adaptive cushioning
- text: $149
- button "Add to Cart"
- text: New
- img "Shoe 2"
- heading "NeoFlex Pro 2" [level=3]
- img
- text: "4.5"
- paragraph: Ultralight performance shoe with adaptive cushioning
- text: $159
- button "Add to Cart"
- text: New
- img "Shoe 3"
- heading "NeoFlex Pro 3" [level=3]
- img
- text: "4.0"
- paragraph: Ultralight performance shoe with adaptive cushioning
- text: $169
- button "Add to Cart"
- text: New
- img "Shoe 4"
- heading "NeoFlex Pro 4" [level=3]
- img
- text: "4.5"
- paragraph: Ultralight performance shoe with adaptive cushioning
- text: $179
- button "Add to Cart"
- text: New
- img "Shoe 5"
- heading "NeoFlex Pro 5" [level=3]
- img
- text: "4.0"
- paragraph: Ultralight performance shoe with adaptive cushioning
- text: $189
- button "Add to Cart"
- text: New
- img "Shoe 6"
- heading "NeoFlex Pro 6" [level=3]
- img
- text: "4.5"
- paragraph: Ultralight performance shoe with adaptive cushioning
- text: $199
- button "Add to Cart"
- text: New
- img "Shoe 7"
- heading "NeoFlex Pro 7" [level=3]
- img
- text: "4.0"
- paragraph: Ultralight performance shoe with adaptive cushioning
- text: $209
- button "Add to Cart"
- text: New
- img "Shoe 8"
- heading "NeoFlex Pro 8" [level=3]
- img
- text: "4.5"
- paragraph: Ultralight performance shoe with adaptive cushioning
- text: $219
- button "Add to Cart"
- button "Load More"
- img "Technology showcase"
- text: Revolutionary Technology
- heading "Adaptive Cushioning System" [level=2]
- paragraph: Our proprietary technology adapts to your unique foot shape and movement pattern, providing personalized support and unmatched comfort with every step.
- list:
  - listitem:
    - img
    - text: Responsive Energy Return
  - listitem:
    - img
    - text: Impact Protection
  - listitem:
    - img
    - text: Lightweight Design
  - listitem:
    - img
    - text: Sustainable Materials
- button "Learn More"
- heading "Join The Future" [level=2]
- paragraph: Subscribe to our newsletter and be the first to know about new releases, exclusive offers, and innovation updates.
- textbox "Enter your email"
- button "Subscribe"
- contentinfo:
  - link "NOVASTEP":
    - /url: /
  - paragraph: Redefining footwear with futuristic design and cutting-edge technology.
  - heading "Shop" [level=3]
  - list:
    - listitem:
      - link "Shop Link 1":
        - /url: "#"
    - listitem:
      - link "Shop Link 2":
        - /url: "#"
    - listitem:
      - link "Shop Link 3":
        - /url: "#"
    - listitem:
      - link "Shop Link 4":
        - /url: "#"
  - heading "Company" [level=3]
  - list:
    - listitem:
      - link "Company Link 1":
        - /url: "#"
    - listitem:
      - link "Company Link 2":
        - /url: "#"
    - listitem:
      - link "Company Link 3":
        - /url: "#"
    - listitem:
      - link "Company Link 4":
        - /url: "#"
  - heading "Support" [level=3]
  - list:
    - listitem:
      - link "Support Link 1":
        - /url: "#"
    - listitem:
      - link "Support Link 2":
        - /url: "#"
    - listitem:
      - link "Support Link 3":
        - /url: "#"
    - listitem:
      - link "Support Link 4":
        - /url: "#"
  - paragraph: © 2025 NovaStep. All rights reserved.
  - link "Terms":
    - /url: "#"
  - link "Privacy":
    - /url: "#"
  - link "Cookies":
    - /url: "#"
- button "Open Next.js Dev Tools":
  - img
- alert
```

# Test source

```ts
  1 | import { test, expect } from '@playwright/test';
  2 |
  3 | test('homepage has correct title', async ({ page }) => {
  4 |   await page.goto('/');
> 5 |   await expect(page).toHaveTitle(/NOVASTEP/);
    |                      ^ Error: Timed out 5000ms waiting for expect(locator).toHaveTitle(expected)
  6 | });
```