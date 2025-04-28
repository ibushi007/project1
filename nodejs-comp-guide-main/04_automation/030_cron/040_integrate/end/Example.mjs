import cron from 'node-cron';

import { addEmployeesToGS } from './google-sheet.mjs';
import { sendEmail } from './email.mjs';

cron.schedule('46 20 * * *', () => {
  main();
});

async function main() {
  const dt = new Date;
  const dtStr = dt.toDateString();
  const sheetUrl = `https://docs.google.com/spreadsheets/d/${process.env.GOOGLE_SHEET_ID}`;
  try {
    await addEmployeesToGS();
    sendEmail('処理が成功しました。', `処理時刻：${dtStr}\n${sheetUrl}`)
  } catch(e) {
    sendEmail('エラーが発生しました。', `エラー発生時刻：${dtStr}\n${e}`)
  }
}
