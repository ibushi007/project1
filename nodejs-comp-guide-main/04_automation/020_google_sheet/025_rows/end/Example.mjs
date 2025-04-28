import { GoogleSpreadsheet } from 'google-spreadsheet';
import env from 'dotenv';
env.config();
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const secrets = require('../../../google_secrets.json');

// see https://theoephraim.github.io/node-google-spreadsheet/#/classes/google-spreadsheet-row
(async () => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: secrets.client_email,
    private_key: secrets.private_key,
  });

  await doc.loadInfo();

  const personSheet = doc.sheetsByTitle['persons'];
  const rows = await personSheet.addRows([
    {
      name: 'Tom',
      age: 18,
      gender: 'M',
    },
    {
      name: 'Hanako',
      age: 20,
      gender: 'F',
    },
    {
      name: 'John',
      age: 25,
      gender: 'M',
    },
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
  // rows.forEach(row => async () => {
  //   await row.save();
  // });
})();
