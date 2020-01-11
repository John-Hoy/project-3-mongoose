const mongoose = require('mongoose')
const Schema = mongoose.Schema

const propertiesSchema = new Schema({
	address: { type: String, unique: true },
	city: { type: String, unique: false },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    tenant: { type: String, required: false, unique: true },
    images: { type: Array }
    
})

const Properties = mongoose.model('Properties', propertiesSchema)

module.exports = Properties