import express from 'express';
import apiRoutes from './api-routes/index.mjs';

const PORT = 8080;
const app = express();

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, function () {
  console.log(`Server start: http://localhost:${PORT}`);
});
