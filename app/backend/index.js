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
const session = require("express-session");

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
    credentials: true,
    origin: "http://192.168.128.181:5173",
  })
);

const startServer = () => {
  //Connecting Database
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@main-cluster.g7kqxgx.mongodb.net/?retryWrites=true&w=majority`
    )
    .then(() => {
      //Add middleware
      app.use(bodyParser.urlencoded({ extended: false }));
      app.use(bodyParser.json({ strict: false }));
      app.use(express.static(path.join(__dirname, "public")));
      app.use(
        session({
          secret: "meat-lovers-pizza",
          resave: false,
          saveUninitialized: false,
          cookie: {
            maxAge: new Date().getTime() + 3600 * 1000,
          },
        })
      );

      //Defining Routers
      app.use("/auth", authRouter);
      app.use("/", mainRouter);

      // Server setup
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
