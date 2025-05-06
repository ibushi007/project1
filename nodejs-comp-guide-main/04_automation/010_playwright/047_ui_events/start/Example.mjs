import { chromium } from "@playwright/test";

// @see セレクターのチェーンの利用方法(>>)
// https://playwright.dev/docs/selectors#chaining-selectors

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  
  await page.waitForTimeout(20000);
  const inputLocator = page.locator("//*[@id=\"__next\"]/div/div[1]/label/input");
  await inputLocator.type('美');
  
  const pager3Locator = page.locator(".page-link.page-number >> nth=2");
  await pager3Locator.click();
  
  // CSS セレクターで要素を取得
  const cardLocator = page.locator(".cards.list-group-item");
  // const parentLocator = await cardLocator.locator('..')
  const cardCount = await cardLocator.count();
  console.log(cardCount);

})();
