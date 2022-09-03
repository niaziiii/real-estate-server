const mongoose = require('mongoose')

const schema = mongoose.Schema({

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

const PropertySchema = mongoose.model('properties', schema);

module.exports = PropertySchema;