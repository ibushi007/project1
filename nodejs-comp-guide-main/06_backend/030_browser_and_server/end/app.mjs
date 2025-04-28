import * as http from "http";

// http://localhost:8080/hello -> hello
// http://localhost:8080/bye -> bye

const server = http.createServer(function(req, res) {
    console.log(req.url);
    // window.alert("frontend"); エラーが発生！
    if(req.url === '/hello') {
        res.end('<script>window.alert("frontend")</script>');
    } else if(req.url === '/bye') {
        res.end('bye');
    }
});

server.listen(8080);