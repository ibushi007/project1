import express from 'express';

/*
# useとexpress
## ルートハンドラとミドルウェア
- request -> (middleware) -> route handler
- use vs get (部分一致 vs 完全一致)

## next()の使い方
- nextの必要性
- next後の処理も実行される
− nextで例外処理を呼び出す 
  - res.sendの多重呼び出しを防ぐ
*/

const PORT = 8080;
const app = express();

app.use(express.json());

// ミドルウェア：ルートハンドラの前後に行われる処理
app.use('/', function(req, res, next) {

});

// ルートハンドラ：パスとメソッドに紐付くメインの処理
app.get('/', function(req, res) {

});
app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});
