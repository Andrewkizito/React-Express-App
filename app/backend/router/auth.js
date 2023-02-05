const express = require("express");
const { UserModel } = require("../models/models");

const router = express.Router();

router.post("/", (req, res) => {
  req.session.loggedIn = true;
  res.status(200).send("Done");
});

module.exports = router;
