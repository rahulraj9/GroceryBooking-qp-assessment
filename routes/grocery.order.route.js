// Import Express Router
const route = require('express').Router()

// Import the grocery controller module
const groceryController = require('../controller/grocery.controller')
const groceryOrderController = require('../controller/grocery.order.controller')
route.get('/view-items',groceryController.viewGrocery)
route.post('/book-items',groceryOrderController.bookItem)

// Export the router instance
module.exports = route