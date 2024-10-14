const createToken = require("../utils/createToken");
const asyncHandler = require("../middleware/asyncHandler");
const itemModel = require("../models/itemModels");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const userModel = require("../models/userModel");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "public/api/Images");
	},
	filename: function (req, file, cb) {
		cb(
			null,
			file.fieldname + "_" + Date.now() + path.extname(file.originalname)
		);
	},
});

const upload = multer({ storage: storage }).single("image");

const AddItem = asyncHandler(async (req, res) => {
	upload(req, res, async (err) => {
		if (err) {
			return res.status(500).json({ message: "File upload failed" });
		}
		try {
			const {
				itemType,
				title,
				category,
				itemLocation,
				dateTime,
				currentAddress,
				description,
				contactNo,
			} = req.body;

			if (!title || !category || !itemLocation) {
				return res
					.status(400)
					.json({ message: "All required inputs are missing" });
			}

			const user = req.user.userId;
			const itemRecord = new itemModel({
				user,
				itemType,
				title,
				category,
				itemLocation,
				dateTime,
				imageUrl: `${req.file.filename}`,
				currentAddress,
				description,
				contactNo,
			});
			await itemRecord.save();

			await userModel.findByIdAndUpdate(
				user,
				{ $push: { itemsList: itemRecord._id } }, // Push the item ID into the user's items array
				{ new: true } // Optionally return the updated document
			);
			res.status(201).json({ message: "Item record added successfully" });
		} catch (error) {
			console.error("Add item error:", error);
			res.status(500).json({ message: "Internal server error" });
		}
	});
});

//show single/specific items details
const ItemInfo = asyncHandler(async (req, res) => {
	const { id } = req.params;
	try {
		const itemInfo = await itemModel.findById(id);
		if (itemInfo) {
			return res.status(200).json(itemInfo);
		} else {
			return res.status(404).json({ message: "No record found" });
		}
	} catch (error) {
		console.error("Item info error:", error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

// show all items record;

const ShowAllItem = asyncHandler(async (req, res) => {
	try {
		const allItems = await itemModel.find({});
		if (allItems && allItems.length > 0) {
			return res.status(200).json(allItems);
		} else {
			return res.status(404).json({ message: "No items found" });
		}
	} catch (error) {
		console.error("Show all items error:", error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

// by category

const ItemByCategory = asyncHandler(async (req, res) => {
	const { category } = req.params;
	try {
		const itemInfo = await itemModel.find({ category });
		if (itemInfo && itemInfo.length > 0) {
			return res.status(200).json(itemInfo);
		} else {
			return res
				.status(404)
				.json({ message: "No items found in this category" });
		}
	} catch (error) {
		console.error("Item by category error:", error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

//last 5 items added get

const LastFiveItem = asyncHandler(async (req, res) => {
	try {
		const lastFiveItems = await itemModel
			.find({})
			.sort({ createdAt: -1 })
			.limit(5);
		if (lastFiveItems) {
			return res.status(200).json(lastFiveItems);
		} else {
			return res.status(404).json({ message: "No record found" });
		}
	} catch (error) {
		console.error("show last 5 items error:", error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

const DeleteItem = asyncHandler(async (req, res) => {
	const { id } = req.params;
	try {
		const item = await itemModel.findByIdAndDelete(id);
		if (item) {
			return res.status(200).json({ message: "Item deleted successfully" });
		} else {
			return res.status(404).json({ message: "Item not found" });
		}
	} catch (error) {
		console.error("Delete item error:", error);
		return res.status(500).json({ message: "Internal server error" });
	}
});

const UpdateItem = asyncHandler(async (req, res) => {
	upload(req, res, async (err) => {
		if (err) {
			return res.status(500).json({ message: "File upload failed" });
		}
		try {
			const { id } = req.params;
			const {
				title,
				category,
				itemLocation,
				dateTime,
				currentAddress,
				description,
				contactNo,
			} = req.body;

			// Find the existing item
			const existingItem = await itemModel.findById(id);
			if (!existingItem) {
				return res.status(404).json({ message: "Item not found" });
			}

			// Validate required fields
			if (!title && !category && !itemLocation) {
				return res.status(400).json({ message: "Title, category, and item location are required." });
			}

			// Prepare updated data, using existing values if new ones are not provided
			const updatedData = {
				title: title || existingItem.title,
				category: category || existingItem.category,
				itemLocation: itemLocation || existingItem.itemLocation,
				dateTime: dateTime || existingItem.dateTime,
				currentAddress: currentAddress || existingItem.currentAddress,
				description: description || existingItem.description,
				contactNo: contactNo || existingItem.contactNo,
			};

			// Check if a new file was uploaded
			if (req.file) {
				updatedData.imageUrl = req.file.filename; // Update imageUrl if a new file is uploaded
			}

			// Update the item
			const updatedItem = await itemModel.findByIdAndUpdate(
				id,
				{ $set: updatedData },
				{ new: true, runValidators: true }
			);

			// Check if the item was updated
			if (!updatedItem) {
				return res.status(404).json({ message: "Item not found" });
			}

			return res.status(200).json({ message: "Item updated successfully", item: updatedItem });
		} catch (error) {
			console.error("Update item error:", error);
			return res.status(500).json({ message: "Internal server error" });
		}
	});
});


const filterItemByCategoryAndDate = asyncHandler(async (req, res) => {
	const { category, startDate, endDate, itemLocation } = req.body;
	let filter = {};

	if (category && category !== "noselect") {
		filter.category = category;
	}
	if (startDate && endDate) {
		filter.datetime = {
			$gte: new Date(startDate),
			$lte: new Date(endDate),
		};
	}
	if (itemLocation) {
		filter.itemLocation = { $regex: itemLocation, $options: "i" };
	}
	try {
		const items = await itemModel.find(filter);
		res.status(200).json(items);
	} catch (error) {
		console.error("Error fetching filtered items:", error);
		res.status(500).json({ message: "Internal server error" });
	}
});

const specificUserCreatedPostDetails = asyncHandler(async (req, res) => {
	const { id } = req.params;
	try {
		const data = await itemModel.find({ user: id });
		if (data) {
			res.status(200).json(data);
		} else {
			res.status(500).json({ message: "item not found!" });
		}
	} catch (error) {
		res.status(500).json({ message: "internal error" });
	}
});

module.exports = {
	AddItem,
	ItemInfo,
	ShowAllItem,
	ItemByCategory,
	DeleteItem,
	UpdateItem,
	LastFiveItem,
	filterItemByCategoryAndDate,
	specificUserCreatedPostDetails,
};
