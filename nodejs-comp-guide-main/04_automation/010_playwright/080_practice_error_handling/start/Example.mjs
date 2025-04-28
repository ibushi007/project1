import { chromium } from "@playwright/test";

/**
 * 練習問題
 * 3ページ目の役職が係長の人物名と会社名をすべてtest-data.csvに出力しなさい。
 * ※会社名が取れない場合にも処理が止まらないように例外処理を追加してください。
 * 
 * "company","name"
 * "山本金属株式会社","28 伊藤 友美"
 */
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto(process.env.TARGET_URL);

  await browser.close();
})();
