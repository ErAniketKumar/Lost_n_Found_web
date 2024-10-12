const express = require("express");
const mongoose = require("mongoose");
const ReviewModel = require("../models/reviewFeedback");
const asyncHandler = require("../middleware/asyncHandler");

const reviewFeedback = asyncHandler(async (req, res) => {
	const { name, starCount, comments } = req.body;
	if (!name || !starCount || !comments) {
		return res
			.status(400)
			.json({ error: "All fields are required: name, starCount, comments" });
	} else {
		try {
			const reviewData = new ReviewModel({
				name,
				starCount,
				comments,
			});
			await reviewData.save();
			return res
				.status(201)
				.json({ message: "Review saved successfully", reviewData });
		} catch (error) {
			res
				.status(500)
				.json({ message: "internal server error while review data" });
			console.log(error);
		}
	}
});

const reviewFeedbackFetch = asyncHandler(async (req, res) => {
	try {
		const response = await ReviewModel.find({}).limit(10);
		if (response.length === 0) {
			res
				.status(404)
				.json({ message: "No data found or error in fetching data" });
		} else {
			res.status(200).json(response);
		}
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
});

module.exports = {
	reviewFeedback,
	reviewFeedbackFetch,
};
