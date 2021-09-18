const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	industy: {
		type: String,
		unique: false,
	},
	reviews: {
		type: [{}],
		unique: false,
	},
	tags: {
		type: [{}],
		unique: false,
	},
});

module.exports = mongoose.model("Company", companySchema);