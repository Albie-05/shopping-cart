var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Schema = new Schema({
  imagepath: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("product", Schema);
