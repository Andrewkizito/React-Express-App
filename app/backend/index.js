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
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const sessionStore = require("connect-mongodb-session")(session);

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

//DB Connection String
const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@main-cluster.g7kqxgx.mongodb.net/?retryWrites=true&w=majority`;

//Setting Up Session Store
const store = new sessionStore({
  uri: mongoUri,
  collection: "sessions",
});

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
      app.use(express.static(path.join(__dirname, "public")));
      //Adding session middleware
      app.use(
        session({
          secret: "meat-lovers-pizza",
          resave: false,
          saveUninitialized: false,
          store: store,
          cookie: {
            maxAge: new Date().getTime() + 3600 * 1000,
          },
        })
      );
      //Set up passport
      app.use(passport.initialize());
      app.use(passport.session());

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
