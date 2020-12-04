// const productModel = require("../models/productModel");
// import {time} from "systeminformation";

const express = require("express");
const connection = require("../models/dbconnection");

//===========================================
//              Product Controller
//===========================================

// Create product listing
exports.createProduct = (req, res) => {
  // const product_id = 50;
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const category = req.body.category;
  const condition = req.body.condition;
  const location = req.body.location;
  const visible = 0;
  const approval = 0;
  // const time = time().current;
  // const image_id = 50;
  const image = req.body.image;
  // function encode (input) {
  //   let file = input.target.files[0];
  //   let reader = new FileReader();
  //   let returnImage;
  //   reader.readAsDataURL(file);
  //   reader.onload = function (e) {
  //     // Since it contains the Data URI, we should remove the prefix and keep only Base64 string
  //     returnImage = e.target.result.replace(/^data:.+;base64,/, '');
  //     // console.log(blob); //-> "R0lGODdhAQABAPAAAP8AAAAAACwAAAAAAQABAAACAkQBADs="
  //     return new Blob([returnImage]);
  //   }
  // }
  // const image2 = encode(image);
  // const blob = new Blob(image);
  const user = req.session.user;
  const sql =
      `INSERT INTO gatorgoods.Product_Listing SET ?`;

  const value = {
    title: title, price: price, description: description,
    condition: condition, category: category, user: user, location: location, visible: visible, approval: approval
  };

  const sql3 =
      `INSERT INTO gatorgoods.Image SET ?`;

  const sql2 =
      `SELECT product_id FROM gatorgoods.Product_Listing WHERE title="${title}" AND user="${user}"`;

  // connection.query(sql, value, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     res.send(err);
  //   } else {
  //     console.log(result);
  //     res.send(result);
  //   }
  // });


  /* Begin transaction */
  connection.beginTransaction(function(err) {
    if (err) { throw err; }
    connection.query(sql, value, function(err, result) {
      if (err) {
        connection.rollback(function() {
          console.log(err);
          throw err;
        });
      }

      connection.query(sql2, function(err, result2) {
        if (err) {
          connection.rollback(function() {
            console.log(err);
            throw err;
          });
        }

        let value3 = {image_blob: image, product: result2[0].product_id}
        connection.query(sql3, value3, function(err, result3) {
          if (err) {
            connection.rollback(function() {
              console.log(err);
              throw err;
            });
          }

        connection.commit(function(err) {
          if (err) {
            connection.rollback(function() {
              console.log(err);
              throw err;
            });
          }
          console.log('Transaction Complete.');
          connection.end();
        });
      });
    });
  });
})};
// }