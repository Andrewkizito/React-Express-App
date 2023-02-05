const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  req.session.loggedIn = true;
  res.status(200).send("Done");
});

module.exports = router;
