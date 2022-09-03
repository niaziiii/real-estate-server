const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nameProperty :{
        type:String,
        required:[true,'Property name must require']
    },
    category :{
        type:String,
        required:[true,'Property must have category']
    },
    type: {
        type: String,
        enum: ['sale','rent'],
        default: 'sell'
    },
    price: {
        type: Number,
        required: [true, 'Property price isnt given']
    },
    location :{
        type:String,
        required:[true,'Property location must have category']
    },
    area :{
        type:String,
        required:[true,'Property area not provided']
    },
    beds :{
        type:Number,
        required:[true,'Property Beds not provided']
    },
    bathrooms :{
        type:String,
        required:[true,'Property Bathrooms not provided']
    },
    description :{
        type:Array,
        required:[true,'Property description not provided']
    },
    coverImages :{
        type:Array,
        required:[true,'Property Bathrooms not provided']
    },
    amenities :{
        type:Array,
        required:[true,'Property Bathrooms not provided']
    },
    details :{
        type:Array,
        required:[true,'Property Bathrooms not provided']
    },

}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

const PropertySchema = mongoose.model('properties', schema);

module.exports = PropertySchema;