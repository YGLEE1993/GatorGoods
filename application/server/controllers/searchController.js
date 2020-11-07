const connection = require("../models/dbconnection");

exports.searchProducts = (req, res) => {
  const searchTerm = req.body.searchTerm;
  const category = req.body.category;
  // 1. get All product
  let query = "SELECT * FROM team8db.product_listing";
  // 2. get products by Category
  if (searchTerm == "" && category != "") {
    query = `SELECT * FROM team8db.product_listing WHERE category="${category}"`;
    // 3. get products by Category and Title
  } else if (searchTerm != "" && category != "") {
    query = `SELECT * FROM team8db.product_listing WHERE title LIKE '%${searchTerm}%' AND category LIKE '%${category}%'`;
    // 4. get products by Title
  } else if (searchTerm != "" && category == "") {
    query = `SELECT * FROM team8db.product_listing WHERE title LIKE '%${searchTerm}%' OR category LIKE '%${searchTerm}%'`;
  }
  connection.query(query, (err, result) => {
    if (err) res.send(err);
    // console.log(result);
    else res.send(result);
  });
};
