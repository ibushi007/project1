# renderに対するデプロイ方法
1. アカウントの作成
[Github](https://github.com/)  
[render](https://render.com/) ※ Githubのアカウントでログイン推奨

2. Githubにリポジトリを作成
3. GithubにコードをPUSH
4. renderで新しい[Web Service]を作成
5. renderで Build Command を登録  
   ```npm install && npm run build```
6. renderで Start Command を登録  
   ```npm start```
7. 環境変数(Environment)にMONGO_URIを追加
8. [mongodb.com](https://mongodb.com/)の接続元IPアドレスを追加

9. renderに自動的にソースがアップロードされて、Build & Start が行われる