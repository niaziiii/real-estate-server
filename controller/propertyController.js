const AppError = require("../utilties/appError");
const catchAsync = require("../utilties/catchAsync");
const PropertySchema = require('../models/propertyModel')
const apiFeatures = require('./../utilties/apiFeatures')

exports.getAllProperty = catchAsync(async (req, res, next) => {
    
    const features = new apiFeatures(PropertySchema.find(), req.query)
    .filter()
    .sorting()
    .limiting()
    .pagination();

// const doc = await features.query.explain()
const property = await features.query;


    res.status(200).json({
        status: 'success',
        size : property.length,
        data : property
    })
})


exports.createProperty = catchAsync(async (req,res,next) => {

     const property = await PropertySchema.create(req.body)
    res.status(200).json({
        status : 'success',
        data : property
    })
})
