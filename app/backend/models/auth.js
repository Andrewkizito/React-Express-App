const { Schema, model } = require("mongoose");

//Auth Setup
const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = model("User", UserSchema);
