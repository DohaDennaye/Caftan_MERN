const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  category: String, // e.g., "Traditionnel", "Moderne"
  stock: Number
});
module.exports = mongoose.model('Product', productSchema);