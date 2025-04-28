import { GoogleSpreadsheet } from 'google-spreadsheet';
import env from 'dotenv';
env.config();
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');

/**
 * 問題：
 * 以下の値をシートを完成させてください。
 * * `cart` シートの作成、name, priceの挿入は手動で行ってください。
 * name   | price
 * Orange | 120
 * Banana | 50
 * Apple  | 100
 * 合計    | 270
 */
(async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: secrets.client_email,
    private_key: secrets.private_key,
  });

  await doc.loadInfo();

  const cartSheet = doc.sheetsByTitle['cart'];
  const newRows = await cartSheet.addRows([
    { name: 'Orange', price: 120 },
    { name: 'Banana', price: 50 },
    { name: 'Apple', price: 100 },
    { name: '合計', price: '=sum(B2:B4)' },
  ]);

  /* 
  修正とお詫び
  save()メソッドが必要なのは値を "更新する" ときでした。
  そのため、addRows()を実行するだけでGoogle Spreadシートに書き込みが行われます。
  値を更新する際はsave()を呼ばないと反映されません。
  また、動画内ではnewRows.forEach(row => async () => await row.save());としていますが、
  これではasync () => await row.save()は実行されないため、
  仮に書くとしても正しくはnewRows.forEach(async (row) => await row.save());となります。
   */
  // newRows.forEach(row => async () => await row.save());

})();
