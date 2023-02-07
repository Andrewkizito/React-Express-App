const express = require("express");
const authController = require("../controllers/auth");
const { UserModel } = require("../models/models");

const router = express.Router();

router.post("/login", authController.login, (req, res) => {
  res.status(200).send(req.token);
});

router.post("/register", authController.register, (req, res) => {
  if (req.error === undefined) {
    res.status(200).send("User Created Successfully");
  } else {
    res.status(400).send(req.error);
  }
});

module.exports = router;
