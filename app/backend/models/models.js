const { Schema, model } = require("mongoose");

//Setting Up Schemas
const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

const ProductSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  details: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

//Setting Up Models
const UserModel = model("users", UserSchema);
const ProductModel = model("products", ProductSchema);

module.exports = { ProductModel, UserModel };
