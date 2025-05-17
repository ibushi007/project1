import * as http from "http";

const server = http.createServer(function(req, res) {
    console.log(req.url);
    // res.writeHead(200,{'content-type': 'text/html; charset=UTF-8'});

    if(req.url === '/hello') {
        res.end(
            `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>こんにちは</h1>
</body>
</html>`);
    } else if(req.url === '/bye') {
        res.end('bye');
    }
});

server.listen(8080);