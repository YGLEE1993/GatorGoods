const connection = require("../models/dbconnection");

// Create User
exports.signup = (req, res) => {
  const user_id = 0;
  const full_name = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const query =
    "INSERT INTO  gatorgoods.User(user_id, full_name, email, password) VALUES ?";
  const values = [[user_id, full_name, email, password]];
  connection.query(query, [values], (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
};
