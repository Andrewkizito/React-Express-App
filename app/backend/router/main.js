const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// Handling '/' Request
router.get("/products", (_, res) => {
  Product.getProducts((err, data) => {
    if (err) res.status(400).send(err);
    else res.status(200).send(data);
  });
});

router.post("/products", ({ body }, res) => {
  const product = new Product(
    body.title,
    body.description,
    body.price,
    body.imageUrl
  );
  product
    .save()
    .then(() => res.status(200).send("Product Saved Successfully"))
    .catch((err) => res.status(404).send(err));
});

router.delete("/products/:id", ({ params }, res) => {
  Product.deleteProduct(params.id)
    .then(() => res.status(200).send("Product Deleted Successfully"))
    .catch((err) => res.status(404).send(err));
});

module.exports = router;
