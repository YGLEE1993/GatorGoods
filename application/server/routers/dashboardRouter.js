const express = require("express");
const router = express.Router();
const {
  getMyProducts,
  //   updateMyProduct,
    deleteMyProduct,
} = require("../controllers/dashboardController");

//===========================================
//                 Dashboard
//===========================================

router.post("/getMyProducts", getMyProducts);
// router.post("/updateMyProduct", updateMyProduct);
router.post("/deleteMyProduct", deleteMyProduct);

module.exports = router;
