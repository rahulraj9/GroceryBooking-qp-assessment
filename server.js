const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const {infoLogger,errorLogger} = require('./middleware/logger')
dotenv.config()

const app = express();

app.listen(process.env.PORT,()=>{
  infoLogger.info(`Server Stated at Port::: ${process.env.PORT}`)
})

