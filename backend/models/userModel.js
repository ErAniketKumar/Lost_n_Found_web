const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		itemsList: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'itemsCollection', 
		}],
	},
	{ timestamps: true }
);

const userModel = mongoose.model("userCol", userSchema);

module.exports = userModel;
