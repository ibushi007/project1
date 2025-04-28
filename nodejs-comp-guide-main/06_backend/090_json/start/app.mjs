import * as http from 'http';
import express from 'express';

const PORT = 8080;
const app = express();

app.get('/', function(req, res) {
    res.send('hello');
})

app.listen(PORT, function() {
    console.log(`Server start: http://localhost:${PORT}`)
});
