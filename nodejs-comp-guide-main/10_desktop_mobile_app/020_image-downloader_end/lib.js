// import { chromium } from "@playwright/test";
const { chromium } = require('@playwright/test');

// fetchImgUrls();
async function fetchImgUrls(targetUrl) {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto(targetUrl);

  const imgLocators = page.locator("img");
  const imgCount = await imgLocators.count();

  const imgUrls = [];
  for(let i = 0; i < imgCount; i++) {
    const imgLocator = imgLocators.locator(`nth=${i}`);
    const imgSrc = await imgLocator.getAttribute('src');
    imgUrls.push(imgSrc);
  }

  await browser.close();

  return imgUrls;
}

async function saveImgs(targetDir) {
  const win = BrowserWindow.getFocusedWindow();
    const result = await dialog.showSaveDialog(
      win,
      {
        properties: ["openDirectory"],
      }
    );
    // キャンセルした場合
    if (result.canceled) {
      // 処理を中断
      return null;
    }
    return result.filePath;
}
