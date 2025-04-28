# タスク自動化

## Google Spread Sheet操作

### Google スプレッドシートを操作してみよう
インストール方法  
```
npm i google-spreadsheet --save
```

### Googleスプレッドシートでの設定
Google APIコンソールにアクセス  
新しいプロジェクト」からプロジェクトを作成  
プロジェクト名を入力。作成。  
[APIとサービス]からAPIとサービスの有効化を選択  
「Google Drive API」と「Google Sheets API」を有効化する  
認証情報を作成  
API: Google Drive API  
アクセスするデータの種類->アプリケーションデータを選択  
〜でこのAPIを使用する予定はありますか？-> いいえ、使用していませんを選択  
サービスアカウント名を入力  
ロールを選択後、基本->編集者に変更  
鍵を追加->新規作成、JSONを選択    

Google spreadsheetにアクセス  
Google spreadsheet作成後右上共有をクリック  
アクセスできるユーザーにJSONでダウンロードしたclient_emailを追加    
以下に詳しく載っている
https://qiita.com/Lotus_ollz/items/fac213f60e2a2db6299c
https://cloud.google.com/iam/docs/service-accounts

### データを入力してみよう
接続
```javascript
const { GoogleSpreadsheet } = require('google-spreadsheet');


const doc = new GoogleSpreadsheet('<the sheet ID from the url>');

//private_keyにreplace(/\\n/g, "\n")が必要
await doc.useServiceAccountAuth({
  client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
});

await doc.loadInfo(); // loads document properties 
```
env  
```
//ダウンロードしたJSONに記載されているものを入力
GOOGLE_SERVICE_ACCOUNT_EMAIL=
GOOGLE_PRIVATE_KEY=
```

Playrightでprocess.envを用いる場合下記必要
```js
import env from "dotenv";
env.config();
// or
require('dotenv').config();
```
### データを取得してみよう
```javascript
await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];
  await sheet.loadCells('A1:E10'); 
  const a1 = sheet.getCell(0, 0); 
  const b1 = sheet.getCell(0, 1); 
  const a2 = sheet.getCell(1, 0); 
  const c6 = await sheet.getCellByA1('C6');
  console.log(a1.value);
  console.log(b1.value);
  console.log(a2.value);
  console.log(c6.value);
```
### データを書き込んでみよう
```javascript
await doc.loadInfo();
const sheet = doc.sheetsByIndex[0];
await sheet.loadCells('A1:E10'); 
const a1 = sheet.getCell(0, 0); 
const c6 = await sheet.getCellByA1('C6');
a1.value = '書き込みテスト';
c6.formula = '=A1';
a1.textFormat = { bold: true };
c6.note = 'ノートに記載'; 
await sheet.saveUpdatedCells();   
console.log(a1.value);
console.log(c6.value);
```

###スクレイピングしたデータをスプレッドシートに書き込んでみよう
```javascript
await page.goto('http://localhost:3000/todos/');
let next = page.locator("text=/next/");
const data = [];
  
for (let currentPage = 0; currentPage < 10; currentPage++) {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < currentPage; j++) {
        await next.click();
      }
      let cssLocator = page.locator('.todo').nth(i);
      //ページ遷移
      await cssLocator.click();
      //詳細画面
      let userId = page.locator("text=/userId:/");
      let id = page.locator("text=/id:/");
      let title = page.locator("text=/title:/");
      let completed = page.locator('text=/completed:/');
      let button = page.locator('.btn');
      data.push({
        userId:(await userId.innerText()).substring(8),
        id:(await id.innerText()).substring(4),
        title:(await title.innerText()).substring(7),
        completed:(await completed.innerText()).substring(11)
      })

      //戻るボタンクリック
      await button.click();
    }
}

  const { GoogleSpreadsheet } = require('google-spreadsheet');

  const doc = new GoogleSpreadsheet('1ttqrUxo8O0IDNNKAyXPdKerex42rbIAE17PiPZbJ9sI');

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  });

const sheet = await doc.addSheet({ headerValues: ["userId","id","title","completed"] });

const moreRows = await sheet.addRows(data);
```
