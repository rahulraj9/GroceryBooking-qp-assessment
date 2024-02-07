// Import errorLogger middleware for logging errors
const { errorLogger } = require("../middleware/logger");

// Import the grocery model for interacting with the database
const groceryModel = require("../model/grocery.model");
const orderModel = require("../model/order.model")

// Controller function to book multiple grocery items in a single order

const bookItem = async (req, res) => {
  try {
    const items = req.body.items;
    let totalPrice = 0;
    for (const item of items) {
      const groceryItem = await groceryModel.findById(item.itemId);
      if (!groceryItem) {
        return res.status(404).json({ error: 'Grocery item not found' });
      }
      if (groceryItem.quantity < item.quantity) {
        return res.status(400).json({ error: `Insufficient inventory for item: ${groceryItem.name}` });
      }
      totalPrice += groceryItem.price * item.quantity;
      groceryItem.quantity -= item.quantity;
      await groceryItem.save();
    }
    const orderData = {
      items: req.body.items,
      total_price: totalPrice
    };
    const order = await orderModel.create(orderData);
    res.status(200).json(order);

  } catch (err) {
    // Log the error using errorLogger and respond with an error message
    errorLogger.error(`something goes wrong ${err}`);
    res.status(500).json({ error: "Failed to update the Inventory" });
  }
};

module.exports = {bookItem}