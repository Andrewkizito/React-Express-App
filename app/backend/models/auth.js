const { Schema, model, default: mongoose } = require("mongoose");
const passportLoginMongoose = require("passport-local-mongoose");

//Auth Setup
const User = new Schema({
  username: String,
  password: String,
});

User.plugin(passportLoginMongoose);

module.exports = model("User", User);
