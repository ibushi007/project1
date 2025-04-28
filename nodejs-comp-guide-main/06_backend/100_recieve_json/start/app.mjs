import * as http from 'http';
import express from 'express';

const PORT = 8080;
const app = express();

app.get('/', function (req, res) {
  res.send(`
    <form action="/result" method="POST">
      <input type="text" name="title">
      <input type="text" name="description">
      <input type="submit">
    </form>
    `);
});

app.post('/result', function (req, res) {
  const params = req.body;
  console.log(params);
});

app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});
