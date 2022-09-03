const AppError = require("../utilties/appError");
const catchAsync = require("../utilties/catchAsync");

exports.getAllProperties = catchAsync(async (req, res, next) => {

    res.status(200).json({
        status: 'success',
    })
})


// exports.getAllProperties = catchAsync(async (req,res,next) => {

//     res.status(200).json({
//         status : 'success',
//     })
// })
