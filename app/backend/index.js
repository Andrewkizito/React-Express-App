// Importing deps
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mainRouter = require("./router/main");
const authRouter = require("./router/auth");

//Init env
dotenv.config();

//Initialize app
const app = express();

//Setting cors
app.use(
  cors({
    credentials: true,
    allowedHeaders: ["content-type"],
    origin: "http://192.168.128.181:5173",
  })
);

//Add middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ strict: false, limit: 300 }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: "my-secret-is-here",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: new Date().getTime() + 3600 * 1000,
    },
  })
);

console.log(new Date().getTime() + 3600 * 1000);

//Defining Routers
app.use("/auth", authRouter);
app.use("/", mainRouter);

// Server setup
app.listen(process.env.PORT, () => {
  console.log(`Server Listening on port - ${process.env.PORT}`);
});
