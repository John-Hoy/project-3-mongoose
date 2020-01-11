const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const landlordSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    properties: { type: Array, required: false },
    tenants: { type: Array, required: true },
    phone: { type: Number, required: true },
    email: { type: String, required: true },
    password: { type: password, required: true }
    
});

const Landlord = mongoose.model("Landlord", landLordSchema);

module.exports = Landlord;