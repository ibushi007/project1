import * as http from 'http';

// HTTP status codes:
// レスポンスの状態を表すコード
// 200番台: 成功
//  - コンテンツ作成成功：201、その他の処理成功：200
// 300番台: リダイレクト
//  - 恒久：301, 一時：302, キャッシュ利用：304
// 400番台: クライアントエラー
//  - 認証失敗：401, アクセス禁止：403, Not Found：404
// 500番台: サーバーエラー
//  - 不明なエラー：500、サービスダウン：503

// see https://developer.mozilla.org/ja/docs/Web/HTTP/Status

const server = http.createServer(function (req, res) {
  console.log(req.url);
  if (req.url === '/hello') {
    res.writeHead(302, { location: '/redirected' });
    res.end(`<h1>こんにちは</h1>`);
  } else if (req.url === '/bye') {
    res.end('bye');
  } else {
    res.end(req.url);
  }
});

server.listen(8080);
