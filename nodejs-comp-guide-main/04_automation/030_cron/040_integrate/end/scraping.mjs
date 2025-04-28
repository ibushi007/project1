import { chromium } from "@playwright/test";

async function getEmployeesByScraping() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

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

  return fetchedCards;
};

export { getEmployeesByScraping };
