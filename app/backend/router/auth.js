//Importing modules
const express = require("express");
const authController = require("../controllers/auth");

//Create Router
const router = express.Router();

router.post("/login", authController.login, (req, res) => {
  if (req.token) res.status(200).send({ authToken: req.token });
  else res.status(200).json({ error: req.error });
});

router.post("/register", authController.register, (req, res) => {
  if (req.error === undefined)
    res.status(200).send("User Created Successfully");
  else res.status(200).json({ error: req.error });
});

module.exports = router;
