const AppError = require("../utilties/appError");
const catchAsync = require("../utilties/catchAsync");
const PropertySchema = require('../models/propertyModel')
const apiFeatures = require('./../utilties/apiFeatures');

exports.getAllProperty = catchAsync(async (req, res, next) => {
    const features = new apiFeatures(PropertySchema.find(), req.query)
        .filter()
        .sorting()
        .limiting()
        .pagination();

    const property = await features.query;

    res.status(200).json({
        status: 'success',
        size: property.length,
        data: property
    })
})

exports.createProperty = catchAsync(async (req, res, next) => {
    const property = await PropertySchema.create(req.body)

    res.status(201).json({
        status: 'success',
        data: property
    })
})

exports.getProperty = catchAsync(async (req, res, next) => {
    const property = await PropertySchema.findById(req.params.id)
    if (!property) return next(new AppError('resource is not available', 404))
    const totalPropertyBasedOnType = await PropertySchema.find({ type: property.type })
    const othersProperty = totalPropertyBasedOnType.slice(0, 3)

    res.status(200).json({
        status: 'success',
        size: othersProperty.length + 1,
        data: {
            result: property,
            others: othersProperty
        }
    })
})


exports.updateProperty = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const updates = req.body
    const property = await PropertySchema.findByIdAndUpdate(id,updates,{
        new: true,
        runValidators: true
    })
    res.status(202).json({
        status: 'success',
        data : property
    })
})

exports.deleteProperty = catchAsync(async (req, res, next) => {

    const property = await PropertySchema.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data : property
    })
})