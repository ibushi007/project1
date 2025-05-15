import { GoogleSpreadsheet } from 'google-spreadsheet';
import { chromium } from '@playwright/test';
import env from 'dotenv';
env.config();
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');

async function addEmployeesToGS() {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: secrets.client_email,
    private_key: secrets.private_key,
  });

  await doc.loadInfo();

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

    const backLocator = page.locator("text=戻る");
    await backLocator.click();
  }

  await browser.close();

  
  let newSheet = doc.sheetsByTitle['scraping'];
  await newSheet.setHeaderRow(['name','company']);
  if(!newSheet) {
    newSheet = await doc.addSheet({
      title: 'scraping'
    });
    await newSheet.setHeaderRow(['name','company']);
  }

  const rowadd = fetchedCards.map(card =>({
    name: card.name,
    company: card.company
  }));

  await newSheet.addRows(rowadd);
}

export { addEmployeesToGS };