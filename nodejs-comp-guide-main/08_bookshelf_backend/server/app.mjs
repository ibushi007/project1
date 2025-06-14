import express from "express";
import apiRoutes from "."
const app = express();
const port = process.env.PORT || 8080;
app.use(express.json());

//API
app.use(apiRoutes);

app.listen(port, () => {
    console.log(`server start: http://localhost:${port}`);
});