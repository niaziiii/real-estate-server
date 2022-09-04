const express = require('express');
const app = express();

const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const AppError = require('./utilties/appError')
const globalErrorHandler = require('./controller/errorController')

const propertyRoute = require('./routes/propertiesRoute')
const visitRoute = require('./routes/visitBookRoute')




app.use(express.static(`${__dirname}/public/`));
app.use(express.json({limit : '10kb'}));
app.use(cookieParser());
app.use(mongoSanitize())
app.use(xss())
app.use(compression())
app.use(cors())



app.use('/api/v1/visit',visitRoute)
app.use('/api/v1',propertyRoute)


app.all('*', (req, res, next) => {
    // console.log(req.originalUrl);
    next(new AppError(`Error :  ${req.originalUrl} <-`, 404))
})

app.use(globalErrorHandler)

module.exports = app; 

