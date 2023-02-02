// Importing deps
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const mainRouter = require("./router/main");

//Init env
dotenv.config();

// Initialize the express engine
const app = express();

//Setting cors
app.use(cors());

//Add middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ strict: false, limit: 300 }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", mainRouter);

// Server setup
app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port - ${process.env.PORT}`);
});
