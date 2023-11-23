var Product = require("../product");

var mongoose = require("mongoose");
//mongodb+srv://admin:<password>@cluster0.x0bskjb.mongodb.net/

//mongoose.connect("localhost:27017/shopping");
mongoose.connect('mongodb+srv://admin:password12345#@cluster0.x0bskjb.mongodb.net/shopping')
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
  products[i].save(function(err, result) {
     done++;
     if (done === products.length) {
        exists();
     }
  }
    );
}

mongoose.disconnect();
