const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
	timestamp: {
		type: Number,
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

export const model = mongoose.model("Review", reviewSchema);