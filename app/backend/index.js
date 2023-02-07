/* -------------------------------------------------------------------- */
/* Importing all the dependencies that will be used in our application. */
/* -------------------------------------------------------------------- */
//Core deps
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");

//Session Management Deps
const mongoose = require("mongoose");

//Importing routers
const mainRouter = require("./router/main");
const authRouter = require("./router/auth");

//Initializing env
dotenv.config();

//Initialize app
const app = express();

//Setting cors
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://main.diorsljjalcyq.amplifyapp.com",
    ],
  })
);

//DB Connection String
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@main-cluster.g7kqxgx.mongodb.net/?retryWrites=true&w=majority`;

const startServer = () => {
  //Connecting Database
  mongoose
    .connect(mongoUri)
    .then(() => {
      /* -------------------------------------------------- */
      /* ----------------- Add middleware ----------------- */
      /* -------------------------------------------------- */
      //Body-parser middleware
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json({ strict: false }));
      //Setting folder for static assets
      app.use(express.static(path.join(__dirname, "app", "backend", "public")));
      console.log(path.join(__dirname, "public"));

      //Defining Routers
      app.use("/auth", authRouter);
      app.use("/", mainRouter);

      //Starting the server
      app.listen(8000, () => {
        console.log(`Server Listening on port - ${8000}`);
      });
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
};

startServer();
