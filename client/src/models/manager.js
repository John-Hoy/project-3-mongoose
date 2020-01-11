const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')

const managerSchema = new Schema({
	firstName: { type: String, unique: false },
	lastName: { type: String, unique: false },
	local: {
		username: { type: String, unique: false, required: false },
		password: { type: String, unique: false, required: false }
	},
	google: {
		googleId: { type: String, required: false }
	},
	photos: []
})

managerSchema.methods = {
	checkPassword: function (inputPassword) {
		return bcrypt.compareSync(inputPassword, this.local.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 10)
	}
}

// MUST HASH BEFORE SAVE
managerSchema.pre('save', function (next) {
	if (!this.local.password) {
		next()
	} else {
		this.local.password = this.hashPassword(this.local.password)
		next()
	}
})


const Manager = mongoose.model('Manager', managerSchema)

module.exports = Manager
