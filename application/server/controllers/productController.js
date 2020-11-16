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
  // const category = req.body.category;
  // const condition = req.body.condition;
  // const location = req.body.location;
  const category = req.body.category;
  const condition = req.body.condition;
  const location = req.body.location;
  const visible = 0;
  const approval = 0;
  // const image_id = 0;
  const image = req.body.image;
  const user = req.session.user;
  const sql =
      `INSERT INTO gatorgoods.Product_Listing SET ?`;

  const value = {title: title, price: price, description: description,
    condition: condition, category: category, user: user, location: location, visible: visible, approval: approval};

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
          throw err;
        });
      }

      connection.query(sql2, function(err, result2) {
        if (err) {
          connection.rollback(function() {
            throw err;
          });
        }

        let value3 = {image_blob: image, product: result2[0].product_id}
        connection.query(sql3, value3, function(err, result3) {
          if (err) {
            connection.rollback(function() {
              throw err;
            });
          }

        connection.commit(function(err) {
          if (err) {
            connection.rollback(function() {
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
