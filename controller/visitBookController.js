const BookSchema = require('./../models/visitBookModel');
const AppError = require("../utilties/appError");
const catchAsync = require("../utilties/catchAsync");

exports.getAllVisits = catchAsync(async (req, res, next) => {
    const visitors = await BookSchema.find({ isVisited: false }).populate('property')

    res.status(200).json({
        status: 'success',
        size: visitors.length,
        data: visitors
    })
})


exports.createVisit = catchAsync(async (req, res, next) => {
    const visit = await BookSchema.create(req.body)

    res.status(201).json({
        status: 'success',
        data: visit
    })
})

exports.getVisit = catchAsync(async (req, res, next) => {
    const visitor = await BookSchema.findById(req.params.id).populate('property')
    res.status(200).json({
        status: 'success',
        data: visitor
    })
})

exports.updateVisit = catchAsync(async (req, res, next) => {
    const { isVisited } = req.body;
    if (!isVisited) return next(new AppError('Furthur action could not procede', 404))

    const visit = await BookSchema.findByIdAndUpdate(req.params.id, req.body , {
        new: true,
        runValidators: true
    })

    res.status(200).json({
        status: 'success',
        visit
    })
})

exports.deleteVisit = catchAsync(async (req, res, next) => {
    console.log(req.params.id);
    const id = req.params.id
    const visit = await BookSchema.findByIdAndDelete(id)

    res.status(200).json({
        status: 'success',
        data: visit
    })
})