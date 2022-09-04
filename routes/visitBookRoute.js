const express = require('express')
const visitBookController = require('../controller/visitBookController')

const visitRoute = express.Router()
visitRoute
.route('/')
.get(visitBookController.getAllVisits)
.post(visitBookController.createVisit)

visitRoute
.route('/:id')
.get(visitBookController.getVisit)
.patch(visitBookController.updateVisit)
.delete(visitBookController.deleteVisit)

module.exports = visitRoute;