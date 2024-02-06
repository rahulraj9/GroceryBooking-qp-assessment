const mongoose = require('mongoose');
const { infoLogger, errorLogger } = require('../middleware/logger');

// Connect to the MongoDB database using the provided DBURL from environment variables
mongoose.connect(process.env.DBURL)
  .then(() => {
    // Log a success message when the connection is established
    infoLogger.info('Connection Established successfully');
  })
  .catch((error) => {
    // Log an error message if there's an issue connecting to the database
    errorLogger.error('No connection', error);
  });
