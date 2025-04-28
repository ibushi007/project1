import { chromium } from "@playwright/test";
import * as fs from "fs";

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  const cardLocator = page.locator(".cards.list-group-item >> nth=1");
  const cardText = await cardLocator.textContent();

  await browser.close();

  fs.writeFileSync("./text-data.csv", cardText);
})();
