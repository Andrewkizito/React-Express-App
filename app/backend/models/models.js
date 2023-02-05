const { Schema, model } = require("mongoose");

//Setting Up Types
class Product {
  constructor(title, description, details, price, imageUrl) {
    this.title = title;
    this.description = description;
    this.details = details;
    this.price = price;
    this.imageUrl = imageUrl;
  }
}

//Setting Up Schemas
const ProductSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  details: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

//Setting Up Models
const ProductModel = model("products", ProductSchema);

module.exports = { Product, ProductModel };
