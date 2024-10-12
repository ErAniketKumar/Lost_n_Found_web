const mongoose = require("mongoose");

const reviewFeedbackSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Name is required"],
		},
		starCount: {
			type: Number,
			required: [true, "Star count is required"],
		},
		comments: {
			type: String,
			required: [true, "Comments are required"],
		},
	},
	{ timestamps: true }
);

const ReviewModel = mongoose.model(
	"reviewFeedbackcollection",
	reviewFeedbackSchema
);

module.exports = ReviewModel;
