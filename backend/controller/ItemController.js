const createToken = require("../utils/createToken");
const asyncHandler = require("../middleware/asyncHandler");
const itemModel = require("../models/itemModels");
const mongoose = require("mongoose");

const AddItem = asyncHandler(async (req, res) => {
	const {
		title,
		category,
		itemLocation,
		dateTime,
		imageUrl,
		currentAddress,
		description,
	} = req.body;

	if (!title || !category || !itemLocation || !imageUrl) {
		res.status(500).json({ message: "All input are Required" });
	}
	try {
		const itemRecord = new itemModel({
			title,
			category,
			itemLocation,
			dateTime,
			imageUrl,
			currentAddress,
			description,
		});
		await itemRecord.save();
		res.status(201).json({ message: "item record added Successfully" });
	} catch (error) {
		console.error("Signup error:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

//show single/specific items details
const ItemInfo = asyncHandler(async (req, res) => {
	const { id } = req.params;
	try {
		const itemInfo = await itemModel.findById({ _id: id });
		if (itemInfo) {
			res.status(200).json(itemInfo);
		} else {
			res.status(404).json({ message: "no record found" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error });
	}
});

// show all items record;

const ShowAllItem = asyncHandler(async (req, res) => {
	try {
		const allitem = await itemModel.find({});
		if (allitem) {
			res.status(200).json(allitem);
		} else {
			res.status(500).json({ message: "error to fetching not found" });
		}
	} catch (error) {
		res.status(500).json({ message: `internal issue: ${error}` });
	}
});

// by category

const ItemByCategory = asyncHandler(async (req, res) => {
	const { category } = req.params;
	try {
		let itemInfo = await itemModel.find({});

		if (itemInfo) {
			const filteredItem = itemInfo.filter((item) => {
				return item.category == category;
			});
			if (filteredItem.length > 0) {
				res.status(200).json(filteredItem);
			} else {
				res.status(404).json({ message: "No item in this Category" });
			}
		} else {
			res
				.status(404)
				.json({ message: "Some error occurred while fetching details!" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error.message });
	}
});

const DeleteItem = asyncHandler(async (req, res) => {
	const { id } = req.params;
	try {
		const item = await itemModel.findByIdAndDelete({ _id: id });
		if (item) {
			res.status(200).json({ message: "item deleted successfully" });
		} else {
			res.status(404).json({ message: "item not found" });
		}
	} catch (error) {
		console.log(error);
		res.status(500).json({ message: error });
	}
});

const UpdateItem = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const {
		title,
		category,
		itemLocation,
		dateTime,
		imageUrl,
		currentAddress,
		description,
	} = req.body;
	try {
		const itemInfo = await itemModel.findByIdAndUpdate(
			id,
			{
				$set: {
					title,
					category,
					itemLocation,
					dateTime,
					imageUrl,
					currentAddress,
					description,
				},
			},
			{ new: true, runValidators: true }
		);
		if (itemInfo) {
			res
				.status(200)
				.json({ message: "Item updated successfully", item: itemInfo });
		} else {
			res.status(404).json({ message: "somthing went wrong" });
		}
	} catch (error) {
		console.error("Update error:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

module.exports = {
	AddItem,
	ItemInfo,
	ShowAllItem,
	ItemByCategory,
	DeleteItem,
	UpdateItem,
};
