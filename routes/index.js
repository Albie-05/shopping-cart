var express = require("express");
var router = express.Router();
var Product = require("../models/product");

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const docs = await Product.find();
    const productChuncks = [];
    const chunckSize = 3;
    for (var i = 0; i < docs.length; i+= chunckSize){
      productChuncks.push(docs.slice(i, i + chunckSize))
    }
    res.render("shop/index", { title: "shopping cart", products: productChuncks });
  } catch (err) {
    // Handle the error appropriately, e.g., send an error response or log it
    res.status(500).send("An error occurred: " + err.message);
  }
});

module.exports = router;
