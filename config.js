const mysql = require("mysql")

var pool = mysql.createPool({
  user: "root",
  password: "",
  database: "",
  host: "localhost",
  port: 3306,
})

module.exports = pool
