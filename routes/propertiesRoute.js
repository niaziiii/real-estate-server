const express = require('express')
const propertyController = require('../controller/propertyController')
const propertyRoute = express.Router()

propertyRoute
.route('/')
.get(propertyController.getAllProperty)
.post(propertyController.createProperty)

module.exports = propertyRoute;