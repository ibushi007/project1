import express from 'express';

const PORT = 8080;
const app = express();

app.get('/', function (req, res) {
  res.json({ message: 'hello', number: 1, array: ['banana', 'orange', 1], });
});

app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});
