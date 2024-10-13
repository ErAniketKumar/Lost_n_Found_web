const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
	{
		itemType: {
			type: String,
			required: true,
			default: "Not Provided",
		},
		title: {
			type: String,
			required: true,
		},
		category: {
			type: String,
			required: true,
		},
		itemLocation: {
			type: String,
			required: true,
		},
		dateTime: {
			type: String,
		},
		imageUrl: {
			type: String,
		},
		currentAddress: {
			type: String,
		},
		description: {
			type: String,
		},
		contactNo: {
			type: String,
			default: "Not Provided",
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'userCol',
			required: true,
		},
	},
	{ timestamps: true }
);

const itemModel = mongoose.model("itemsCollection", itemSchema);

module.exports = itemModel;
