const { env } = require("process");
const dotenv = require("dotenv");
const mysql = require("mysql2");

//Init env
dotenv.config();

const pool = mysql.createPool({
  host: env.DB_HOST,
  user: env.DB_USER,
  database: env.DB_NAME,
  password: env.DB_PASSWORD,
});

module.exports = pool.promise();
