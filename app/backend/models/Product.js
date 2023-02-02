const db = require("../database/db");

class Product {
  constructor(title, description, price, imageUrl) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  save = () => {
    return db.execute(
      "INSERT INTO products (title, description, imageUrl, price) VALUES(?, ?, ?, ?)",
      [this.title, this.description, this.imageUrl, this.price]
    );
  };

  static getProduct = (id) => {
    return db.execute(`SELECT * FROM products WHERE id = ${id}`);
  };

  static deleteProduct = (id) => {
    return db.execute(`DELETE FROM products WHERE id = ${id}`);
  };

  static fetchAll = (cb) => {
    db.execute(`SELECT * FROM products`)
      .then(([data]) => cb(null, data))
      .catch((err) => {
        console.log(err);
        cb(err.message);
      });
  };
}

module.exports = Product;
