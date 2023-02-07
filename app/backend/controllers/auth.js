const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/models");

exports.login = (req, res, next) => {
  req.token = jwt.sign(
    {
      ...req.headers,
    },
    process.env.APP_SECRET,
    { expiresIn: 60 * 60 }
  );
  next();
};

exports.register = async (req, res, next) => {
  const { email, password } = req.body;
  //Checking to see if user exists
  UserModel.find({ username: email })
    .then(async (user) => {
      if (user[0] !== undefined) {
        req.error = "Email Exists Already";
      } else {
        //Hashing password
        const hashedPassword = await bcrypt.hash(password, 10);
        //Creating new user
        const newUser = new UserModel({
          username: email,
          password: hashedPassword,
        });
        try {
          await newUser.save();
        } catch (error) {
          req.error = error.message;
        }
      }
    })
    .catch((err) => {
      req.error = err.message;
    });
  next();
};
