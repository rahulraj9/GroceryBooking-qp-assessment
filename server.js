// Import required modules
const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')

// Import custom middleware
const {infoLogger,errorLogger} = require('./middleware/logger')

// Load environment variables from .env file into process.env
dotenv.config()

// Create Express application instance
const app = express();

// Import route handler for admin-related routes
const adminRoute = require('./routes/grocery.routes')

// Middleware to parse JSON bodies of incoming requests
app.use(bodyParser.json())

// Mount admin routes to the /admin endpoint
app.use('/admin',adminRoute)

// Start the Express server and listen on the specified port
app.listen(process.env.PORT,()=>{
  infoLogger.info(`Server Stated at Port::: ${process.env.PORT}`) 
  // Establish database connection
  require('./db_config/db.connection')
})

