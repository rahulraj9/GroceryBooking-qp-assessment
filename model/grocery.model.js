const mongoose = require('mongoose');

// Define the schema for grocery items
const grocerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true // Name is required
  },
  quantity: {
    type: Number,
    required: true // Quantity is required
  },
  price: {
    type: Number,
    required: true // Price is required
  }
});

// Create a Mongoose model based on the schema, named "Grocery"
module.exports = mongoose.model('Grocery', grocerySchema);
