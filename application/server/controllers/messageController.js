const connection = require("../models/dbconnection");

exports.sendMessage = (req, res) => {
  // message = req.body.message
  // contact = req.body.contact;
  // buyer = req.session.user;
  // seller = req.body.seller;
  // product = req.body.prodcut;

  query = `INSERT INTO gatorgoods.Message SET ?`;
  value = {
    product: req.body.product,
    message: req.body.message,
    contact: req.body.contact,
    buyer: req.session.user,
    seller: req.body.seller,
  };

  connection.query(query, value, function (err, result) {
    if (err) {
      connection.rollback(function () {
        console.log(err);
        throw err;
      });
    }
  });
};

// exports.getMessages = (req, res) => {};
