const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Grocery', required: true },
      quantity: { type: Number, required: true }
    }
  ],
  total_price: { type: Number, required: true }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
