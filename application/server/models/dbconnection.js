const mysql = require("mysql");

// Create connection DB
const connection = mysql.createConnection({
  host: "localhost",
  user: "ygSQL",
  password: "helloCSC648team8",
  port: "3306",
  database: "team8db",
});

// Connect DB
connection.connect((err) => {
  if (!err) console.log("SQL Database Connected...");
  else
    console.log(
      "SQL Database NOT connected... " + JSON.stringify(err, undefined, 2)
    );
});

module.exports = connection;
