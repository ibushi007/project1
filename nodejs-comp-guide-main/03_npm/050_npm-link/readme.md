# パッケージを跨いだ開発方法

## npm link を使う
1. lib-prj で `npm link` を実行  
   -> リンクの作成
2. main-prj で `npm link lib-prj` を実行  
   -> `lib-prj` を使用することが出来る

**注） npm install で他のパッケージをインストールすると npm link が切れる場合がある**


## dependencies に直接追記する

```json:package.json
  "dependencies": {
    "lib-prj": "file:../lib-prj"
  }
```