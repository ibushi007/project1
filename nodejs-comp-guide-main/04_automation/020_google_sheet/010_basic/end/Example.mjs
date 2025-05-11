import env from 'dotenv'
env.config();
import { GoogleSpreadsheet } from "google-spreadsheet";
import { createRequire } from "module";
const require = createRequire(import.meta.url)
const secrets = require('../../../google_secrets.json');
(async () => {
    const doc = new GoogleSpreadsheet('');

   await doc.useServiceAccountAuth ({
        client_email: secrets.client_email,
        private_key: secrets.private_key
    });

    await doc.loadInfo();

    const sheet = doc.sheetByIndex[0];
    await sheet.loadCells('A1:C4');

    const a1 = sheet.getCell(0,0);

    console.log('a1',a1.value);
})();