const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  req.session.loggedIn = true;
  setTimeout(() => {
    console.log(req.session);
    res.status(200).send("Done");
  }, 2000);
});

module.exports = router;
