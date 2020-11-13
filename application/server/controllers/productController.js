// const productModel = require("../models/productModel");
const connection = require("../models/dbconnection");

//===========================================
//              Product Controller
//===========================================

// Create product listing
exports.createProduct = (req, res) => {
  const id = 0;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const category = req.body.category;
  const query =
    "INSERT INTO  team8db.product_listing(id, title, price, description, image, category) VALUES ?";
  const values = [[id, title, price, description, image, category]];
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
