import * as http from "http";

const server = http.createServer(function(req, res) {
    console.log(req.url);
    if(req.url === '/hello') {
        res.writeHead(302, {location: '/redirected'});
        res.end(`<h1>こんにちは</h1>`)
    } else if(req.url === '/bye') {
        res.end('bye');
    } else {
        res.end(req.url);
    }
});

server.listen(8080);