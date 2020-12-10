const express = require("express");
const router = express.Router();
const {
  getMyProducts,
  // updateMyProduct, // not currently implemented (not P1 function)
  deleteMyProduct,
} = require("../controllers/dashboardController");

/**
 * File name: dashboardRouter.js
 * Purpose: This is the router for post requests made from Dashboard.js -> DashboardListings.js and
 *          Dashboard.js -> DashboardListingCard.js. Only two routes are needed as currently we only allow users to
 *          delete, not list/delist from their dashboard.
 * Authors: YG, Trenton
 */

router.post("/getMyProducts", getMyProducts);
// router.post("/updateMyProduct", updateMyProduct);
router.post("/deleteMyProduct", deleteMyProduct);

module.exports = router;
