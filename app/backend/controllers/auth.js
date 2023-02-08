const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/models");

exports.login = (req, res, next) => {
  console.log(req.body);
  UserModel.find({ username: req.body.username })
    .then((user) => {
      console.log(user[0]);
      if (user[0] !== undefined) {
        if (bcrypt.compareSync(req.body.password, user[0].password)) {
          req.token = jwt.sign(
            {
              username: user[0].username.split("#")[0],
            },
            process.env.APP_SECRET,
            { expiresIn: 60 * 60 }
          );
          next();
        } else {
          req.error = "Password Is Invalid.";
          next();
        }
      } else {
        req.error = "Account Not Found.";
        next();
      }
    })
    .catch((err) => {
      req.error = err.message;
      next();
    });
};

exports.register = async (req, res, next) => {
  const { email, password } = req.body;
  //Checking to see if user exists
  UserModel.find({ username: email })
    .then(async (user) => {
      if (user[0].username) {
        req.error = "Email Exists Already";
        next();
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
        next();
      }
    })
    .catch((err) => {
      req.error = err.message;
      next();
    });
};
