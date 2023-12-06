var Product = require("../models/product");
var mongoose = require("mongoose");

// Connect to the MongoDB database
mongoose.connect("mongodb://127.0.0.1:27017/shopping");

// Function to save products to the database
async function saveProducts(products) {
  try {
    for (let i = 0; i < products.length; i++) {
      await products[i].save();
    }
    console.log("Products saved successfully!");
  } catch (err) {
    console.error("Error saving products:", err);
  } finally {
    exit(); // Disconnect from the database after saving (or encountering an error)
  }
}

// Function to disconnect from the database
function exit() {
  mongoose.disconnect();
}

// Array of product instances
var products = [
  new Product({
    imagepath: "https://tpmobile.vn/wp-content/uploads/2019/11/637037652462548298_11-trang-768x768.jpg",
    title: "apple iphone",
    description: "iphone 11",
    price: 20,
  }),
  new Product({
    imagepath: "https://sotohit.ru/d/iphone_12_black.png",
    title: "apple iphone",
    description: "iphone 12",
    price: 30,
  }),
  new Product({
    imagepath: "https://th.bing.com/th/id/OIP.GADafLPEaobF4-IjDGJhyAHaHa?rs=1&pid=ImgDetMain",
    title: "apple iphone",
    description: "iphone 13",
    price: 40,
  }),
  new Product({
    imagepath: "https://4gpackages.com/wp-content/uploads/2022/03/Apple-iPhone-13-Mini.jpg",
    title: "apple iphone",
    description: "iphone 14 ",
    price: 50,
  }),
  new Product({
    imagepath: "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/09/iPhone-15-Pro.jpg?w=1024&quality=82&strip=all&ssl=1",
    title: "apple iphone",
    description: "iphone 15",
    price: 60,
  }),
  // Add other products similarly...
];

// Save the products to the database
saveProducts(products);
