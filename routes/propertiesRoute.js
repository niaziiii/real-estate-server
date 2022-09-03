const express = require('express')
const propertyController = require('../controller/propertiesController')
const propertyRoute = express.Router()

propertyRoute
.route('/')
.get(propertyController.getAllProperties)

module.exports = propertyRoute;