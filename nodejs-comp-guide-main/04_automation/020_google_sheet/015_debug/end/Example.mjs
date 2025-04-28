import path from "path";
import * as url from 'url';
import { GoogleSpreadsheet } from "google-spreadsheet";
import env from 'dotenv';
env.config();
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const secrets = require(path.resolve(__dirname, '../../../google_secrets.json'));


(async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
        client_email: secrets.client_email,
        private_key: secrets.private_key
    });
    
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    await sheet.loadCells('A1:C4');

    const a1 = sheet.getCell(0,0);
    const b1 = sheet.getCell(0,1);
    const b2 = sheet.getCellByA1('B2');

    console.log('a1', a1.value);
    console.log('b1', b1.value);
    console.log('b2', b2.value);
})();