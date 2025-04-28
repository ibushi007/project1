import * as http from "http";

// content-type: 
// ブラウザとサーバーが通信しているコンテンツの
// フォーマットと文字コードの情報

// content-type: text/html; charset=UTF-8

const server = http.createServer(function(req, res) {
    console.log(req.url);
    // res.writeHead(200, {'content-type': 'text/html; charset=UTF-8'});
    if(req.url === '/hello') {
        res.end(`<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        
        <body>
            <h1>こんにちは</h1>
        </body>
        
        </html>`)
    } else if(req.url === '/bye') {
        res.end('bye');
    }
});

server.listen(8080);