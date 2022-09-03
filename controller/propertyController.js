const AppError = require("../utilties/appError");
const catchAsync = require("../utilties/catchAsync");
const PropertySchema = require('../models/propertyModel')

exports.getAllProperty = catchAsync(async (req, res, next) => {
    const properties = await PropertySchema.find();

    res.status(200).json({
        status: 'success',
        size : properties.length,
        data : properties
    })
})


exports.createProperty = catchAsync(async (req,res,next) => {

     const property = await PropertySchema.create(req.body)
    res.status(200).json({
        status : 'success',
        data : property
    })
})
