const express = require('express')
const propertyController = require('../controller/propertyController')
const propertyRoute = express.Router()

propertyRoute
.route('/')
.get(propertyController.getAllProperty)
.post(propertyController.createProperty)

propertyRoute
.route('/:id')
.get(propertyController.getProperty)
.patch(propertyController.updateProperty)
.delete(propertyController.deleteProperty)

module.exports = propertyRoute;