import express from "express";
const router = express.Router();


const products = [
  { name: "table", price: 1000 },
  { name: "chair", price: 100 },
  { name: "clock", price: 700 },
];

router.get('/', function (req, res) {
  res.json(products);
});

router.get('/:id', function (req, res) {
  const getProduct = req.params.id;
  res.json(products[getProduct]);
});

router.post('/', function (req, res) {
  const newProduct = req.body;
  products.push(newProduct);
  console.log(products);
  res.json({ newProduct });
});

router.delete('/:id', function (req, res) {
  const deleteId = req.params.id;
  products.splice(deleteId, 1);
  console.log(products);
  res.json({ deleteId });
});

router.patch('/:id', function (req, res) {
  const targetProduct = products[req.params.id];
  if(req.body.hasOwnProperty('price')) {
    targetProduct.price = req.body.price;
  }
  res.json({ targetProduct });
});

export default router;
