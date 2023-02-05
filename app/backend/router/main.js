const express = require("express");
const { ProductModel } = require("../models/models");

const router = express.Router();

//Get all products
router.get("/products", (req, res) => {
  console.log(req.session);
  ProductModel.find()
    .then((r) => res.status(200).send(r))
    .catch((e) => res.status(400).send(e.message));
});

//Save products
router.post("/products", (req, res) => {
  const { title, description, details, price, imageUrl } = req.body;
  const item = new ProductModel({
    title: title,
    description: description,
    details: details,
    price: price,
    imageUrl: imageUrl,
  });
  item
    .save()
    .then(() => res.status(200).send("Product Saved Successfully"))
    .catch((err) => res.status(400).send(err.message));
});

module.exports = router;
