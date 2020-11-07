const connection = require("../models/dbconnection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Signup
// TODO:  Need to check if email already exist.
exports.signup = (req, res) => {
  const user_id = 0;
  const full_name = req.body.username;
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, 12);
  const checkUserquery = `SELECT * FROM gatorgoods.User WHERE email ="${email}"`;
  console.log(email);
  connection.query(checkUserquery, (err, result) => {
    console.log(result);
    if (err) {
      console.log(err);
    }
    if (result.length == 0) {
      const query =
        "INSERT INTO  gatorgoods.User(user_id, full_name, email, password) VALUES ?";
      const values = [[user_id, full_name, email, password]];
      connection.query(query, [values], (err, result) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          res.send("Sucessfully registered.");
          // res.redirect("/");
        }
      });
    } else {
      res.send("User already exist. Try another email.");
    }
  });
};

// Login
// TODO: need to work on webtoken for login user.
exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const query = `SELECT * FROM gatorgoods.User WHERE email = "${email}"`;
  connection.query(query, async (err, result) => {
    if (err) {
      res.send("Something went wrong login.. Try again.");
    } else {
      const match = await bcrypt
        .compare(password, result[0].password)
        .then((match) => {
          console.log(match);
          if (match) {
            res.send(result[0].email);
            console.log("Matched");
            res.redirect("/");
            // alert("password matched");
            // const token = result[0].user_id.generateJwtToken();
            // res.status(200).json({ token });
            // console.log(token);
          } else {
            res.send("WRONG PASSWORD or EMAIL");
          }
        });
    }
  });
};
// const generateJwtToken = () => {
//   return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES,
//   });
// };
//
