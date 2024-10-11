const mongoose = require("mongoose");

const reviewFeedbackSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		starCount: {
			type: Number,
			required: true,
		},
		comments: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const reviewFeedbackModel = mongoose.model("reviewFeedback=ollection", reviewFeedbackSchema);