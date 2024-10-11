const createToken = require("../utils/createToken");
const asyncHandler = require("../middleware/asyncHandler");
const itemModel = require("../models/itemModels");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

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

			console.log("req is:", req.body);

			if (!title || !category || !itemLocation) {
				return res
					.status(400)
					.json({ message: "All required inputs are missing" });
			}

			const itemRecord = new itemModel({
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
	try {
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
			return res
				.status(200)
				.json({ message: "Item updated successfully", item: itemInfo });
		} else {
			return res.status(404).json({ message: "Item not found" });
		}
	} catch (error) {
		console.error("Update item error:", error);
		return res.status(500).json({ message: "Internal server error" });
	}
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
		console.log("items filered", items);
	} catch (error) {
		console.error("Error fetching filtered items:", error);
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
	LastFiveItem,
	filterItemByCategoryAndDate,
};
