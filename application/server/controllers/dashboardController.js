const connection = require("../models/dbconnection");
//===========================================
//        Dashboard Controller
//===========================================

exports.getMyProducts = (req, res) => {
  const query = `SELECT
                  gatorgoods.Product_Listing.*,
                  gatorgoods.Image.*
                 FROM
                  gatorgoods.Product_Listing
                 INNER JOIN
                  gatorgoods.Image
                 ON
                  gatorgoods.Product_Listing.product_id=gatorgoods.Image.product
                 WHERE
                  user = "${req.body.user_id}" AND visible= "1"`;

  connection.query(query, (err, result) => {
    // console.log(result);
    if (err) {
      // res.json({
      //   sucess: false,
      //   message: "Something went wrong. Please try again.",
      // });
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
// exports.updataeMyProducts = (req, res) => {};
exports.deleteMyProduct = (req, res) => {
  const product_id = req.body.product_id;
  const query = `UPDATE
                  gatorgoods.Product_Listing
                 SET 
                  visible="0"
                 WHERE 
                  gatorgoods.Product_Listing.product_id = "${product_id}"`

  connection.query(query, (err, result) => {
    // console.log(result);
    if (err) {
      // res.json({
      //   sucess: false,
      //   message: "Something went wrong. Please try again.",
      // });
      console.log(err);
    } else {
      res.send(result);
    }
  });
};
