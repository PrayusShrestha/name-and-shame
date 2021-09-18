const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	votes: {
		type: Number,
        required: true,
		unique: false,
	},
});

module.exports = mongoose.model("Tag", tagSchema);