const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const unitSchema = new Schema({
    unit_no: {
        type: String,
        required: true
    },
    bedrooms: {
        type: Number,
        required: true
    },
    baths: {
        type: Number,
        required: true
    },
    sqft: {
        type: Number,
        required: true
    },
    occupied: {
        type: Boolean,
        required: true,
        default: false
    }, 
    date_available: {
        type: Date,
        default: Date.now,
        required: true
    },
    rent: {
        type: Number,
        required: true
    },    
});

const Unit = mongoose.model("Unit", unitSchema);

module.exports = Unit;
