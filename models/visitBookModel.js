const mongoose = require('mongoose')
var isEmail = require('validator/lib/isEmail');
const schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name must require']
    },
    location: {
        type: String,
        required: [true, 'location must have category']
    },
    email: {
        type: String,
        required: [true, 'Email isnt provided'],
        // unique: true,
        lowercase: true,
        validate: [isEmail, 'Email isnt provided Correctly']
    },
    phoneNumber: {
        type: Number,
        required: [true, 'Phone number must be provided']
    },
    vistingDate: String,
    duration: {
        type: String,
        enum: ['Morning', 'Afternon', 'Evening'],
        required: [true, 'The visiting duration isnt provided']
    },
    isVisited: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

const BookSchema = mongoose.model('viewbooking', schema);

module.exports = BookSchema;