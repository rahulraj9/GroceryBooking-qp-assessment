// Import Express Router
const route = require('express').Router()

// Import the grocery controller module
const groceryController = require('../controller/grocery.controller')

// Define routes and their corresponding controller functions
route.post('/add-items',groceryController.addGrocery)
route.get('/view-items',groceryController.viewGrocery)
route.delete('/remove-item/:itemId',groceryController.removeGrocery)
route.put('/update-item/:itemId',groceryController.updateGrocery)
route.put('/manage-inventory/:item_id',groceryController.manageInventory)



// Export the router instance
module.exports = route