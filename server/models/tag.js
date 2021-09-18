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

export const model = mongoose.model("Tag", tagSchema);