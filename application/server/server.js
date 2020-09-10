const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mysql = require("mysql");
const app = express();
const port = process.env.PORT || 3000;
 
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create connection DB
const connection = mysql.createConnection({
  host: "localhost",
  user: "ygSQL",
  password: `helloTeam8`,
  port: "3306",
  database: "team8db",
});

// Connect DB
connection.connect(function (err) {
  if (err) throw err;
  console.log("SQL Database Connected...");
});

app.listen(port, () => console.log(`Server up on port ${port}...`));

// Get all developer
app.get('/developer', (req, res) => {
  connection.query('SELECT * FROM team8db.developer', (err, rows, fields)=>{
    if (err) throw err;
    else console.log(rows)
    res.send(rows);
  })
});

// Delete a developer
// app.delete('/developer/:id', (req, res) => {
//   connection.query('DELETE * FROM team8db.developer WHERE ID =?', (err, rows, fields)=>{
//     if (err) throw err;
//     else console.log('Deleted successfully.');
//     res.send(rows);
//   })
// });
