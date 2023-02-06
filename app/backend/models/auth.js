const bcrypt = require("bcrypt");
const { Schema, model } = require("mongoose");
const { use } = require("passport");
const passportLoginMongoose = require("passport-local-mongoose");

//Auth Setup
const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

UserSchema.methods.login = function (password) {
  const user = this;
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) reject(err);
      resolve();
    });
  });
};

UserSchema.plugin(passportLoginMongoose);

module.exports = model("User", UserSchema);
