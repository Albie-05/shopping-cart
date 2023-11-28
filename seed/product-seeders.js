var Product = require("../models/product");

var mongoose = require("mongoose");
//mongodb+srv://admin:<password>@cluster0.x0bskjb.mongodb.net/

//mongoose.connect("localhost:27017/shopping");
mongoose.connect('mongodb://127.0.0.1:27017/shopping');

var products = [
  new Product({
    ImagePath:
      "https://th.bing.com/th/id/OIP.hihxM9RoILsIVgV1FNMZ4wAAAA?rs=1&pid=ImgDetMain",
    title: "mobile phone",
    description: "apple iphone",
    price: 10,
  }),
  new Product({
    ImagePath:
      "https://th.bing.com/th/id/OIP.hihxM9RoILsIVgV1FNMZ4wAAAA?rs=1&pid=ImgDetMain",
    title: "mobile phone",
    description: "apple iphone",
    price: 10,
  }),
];

for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}
