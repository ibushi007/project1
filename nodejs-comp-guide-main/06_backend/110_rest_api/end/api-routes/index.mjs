import express from "express";
import productRoutes from "./products.mjs";

const apiRoutes = express.Router();
apiRoutes.use('/products', productRoutes);

export default apiRoutes;