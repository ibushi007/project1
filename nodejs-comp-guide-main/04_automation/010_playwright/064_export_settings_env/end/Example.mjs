import { chromium } from "@playwright/test";
import * as fs from "fs";
import { Parser } from "json2csv";
import env from "dotenv";
env.config();

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 500 });
  const page = await browser.newPage();
  await page.goto(process.env.TARGET_URL);

  const cardLocators = page.locator(".cards.list-group-item");
  const cardCount = await cardLocators.count();

  const fetchedCards = [];
  for(let i = 0; i < cardCount; i++) {
    const cardLocator = cardLocators.locator(`nth=${i} >> a`);
    const cardText = await cardLocator.textContent();
    
    await cardLocator.click();
    const companyLocator = page.locator('.card-title.company');
    const companyText = await companyLocator.textContent();

    fetchedCards.push({
      company: companyText,
      name: cardText
    });

    const backLocator = page.locator('text=戻る');
    await backLocator.click();

  }

  await browser.close();

  const parser = new Parser();
  const csv = parser.parse(fetchedCards);
  
  fs.writeFileSync(process.env.OUTPUT_FILE, csv);
})();
