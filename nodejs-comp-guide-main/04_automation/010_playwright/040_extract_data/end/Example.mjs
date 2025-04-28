import { chromium } from "@playwright/test";

// @see Locatorで要素を取得する方法
// https://playwright.dev/docs/selectors

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  // CSS セレクターで要素を取得
  const pageTitleLocator = await page.locator(".navbar-brand");
  const pageTitle = await pageTitleLocator.innerText();
  // console.log(pageTitle);

  // 文字列で要素を取得
  const textLocator = await page.locator("text=名刺管理アプリ");
  const pageText = await textLocator.innerText();
  // console.log(pageText);

  // xpathで要素を取得
  const xpathLocator = await page.locator("xpath=//*[@id=\"__next\"]/nav/div/a");
  const xpathText = await xpathLocator.innerText();
  console.log(xpathText);

  await browser.close();

})();
