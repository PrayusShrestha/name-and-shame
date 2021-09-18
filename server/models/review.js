const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
	timestamp: {
		type: Date,
		required: true,
		unique: false,
	},
	trashiness: {
		type: Number,
        required: true,
		unique: false,
	},
	description: {
		type: String, 
		required: true,
        unique: false,
	},
	tags: {
		type: [{}],
		unique: false,
	},
});

module.exports = mongoose.model("Review", reviewSchema);