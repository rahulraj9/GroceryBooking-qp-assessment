// Import errorLogger middleware for logging errors
const { errorLogger } = require("../utils/logger");

// Import the grocery model for interacting with the database
const groceryModel = require("../model/grocery.model");

// Controller function for adding grocery items
const addGrocery = async (req, res) => {
  try {
    // Insert the grocery items from the request body into the database
    const grocery = await groceryModel.insertMany(req.body);

    // Respond with a success message and the inserted grocery items
    res.status(201).json({ msg: "Item added", grocery: grocery });
  } catch (error) {
    // Log the error using errorLogger and respond with an error message
    errorLogger.error(`something goes wrong ${error}`);
    res.status(500).json({ error: "grocery insertion failed" });
  }
};

// Controller function for viewing grocery items
const viewGrocery = async (req, res) => {
  try {
    // Find all grocery items in the database and select only specific fields to return
    const grocery = await groceryModel.find({}, "_id name quantity price");

    // Respond with a success message and the fetched grocery items
    res
      .status(200)
      .json({ msg: "successfully fetched grocery list", Grocery: grocery });
  } catch (err) {
    // Log the error using errorLogger and respond with an error message
    errorLogger.error(`something goes wrong ${err}`);
    res.status(500).json({ error: "failed to view" });
  }
};

// Controller function for removing a grocery item by ID
const removeGrocery = async (req, res) => {
  try {
    // Extract the itemId from the request parameters
    const itemId = req.params.itemId;

    // Find and delete the grocery item by its ID
    const deleteItem = await groceryModel.findOneAndDelete({ _id: itemId });

    // If the item is found and deleted, respond with a success message and the deleted item
    if (deleteItem)
      res.status(200).json({ message: "item deleted", item: deleteItem });
    // If the item is not found, respond with a 404 status and a message indicating the item was not found
    else res.status(404).json({ message: "item not found" });
  } catch (err) {
    // Log the error using errorLogger and respond with an error message
    errorLogger.error(`something goes wrong ${err}`);
    res.status(500).json({ error: "failed to remove" });
  }
};

// Function to update a grocery item
const updateGrocery = async (req, res) => {
  try {
    // Extract item ID from request parameters
    const itemId = req.params.itemId;

    // Extract updated item data from request body
    const updatedItem = req.body;

    // Update the item in the database using findByIdAndUpdate
    await groceryModel.findByIdAndUpdate(itemId, updatedItem);

    // Respond with success message if update is successful
    res.status(200).json({ message: "Item updated successfully" });
  } catch (err) {
    // Log the error using errorLogger and respond with an error message
    errorLogger.error(`something goes wrong ${err}`);
    res.status(500).json({ error: "Failed to update the item" });
  }
};

// Function to update a manage inventory
const manageInventory = async (req, res) => {
  try {
    const itemId = req.params.item_id;
    const { quantity } = req.body;

    // Update the quantity in the database using findByIdAndUpdate
    await groceryModel.findByIdAndUpdate(itemId, { quantity: quantity });

    // Respond with success message if update is successful
    res.status(200).json({ message: "Inventory updated successfully" });
  } catch (err) {
    // Log the error using errorLogger and respond with an error message
    errorLogger.error(`something goes wrong ${err}`);
    res.status(500).json({ error: "Failed to update the Inventory" });
  }
};

// Export the controller functions
module.exports = {
  addGrocery,
  viewGrocery,
  removeGrocery,
  updateGrocery,
  manageInventory,
};
