import { chromium } from "@playwright/test";

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  await page.waitForTimeout(2000);

  const inputLocator = page.locator("//*[@id=\"__next\"]/div/div[1]/label/input");
  await inputLocator.type('美');

  const pager3Locator = page.locator(".page-link.page-number >> nth=-1");
  await pager3Locator.click();

  const cardLocator = page.locator(".cards.list-group-item");

  const cardCount = await cardLocator.count();
  console.log(cardCount);

  // await browser.close();

})();
