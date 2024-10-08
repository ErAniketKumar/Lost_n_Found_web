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
    const {id} = req.params;
    try{
        const itemInfo = await itemModel.findById({_id:id});
        if(itemInfo) {
            res.status(200).json(itemInfo);
        } else {
            res.status(404).json({message:"some error to fetch details!"});
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({message:error});
    }
})


// show all items record;

const ShowAllItem = asyncHandler(async(req, res)=>{
    try{    
        const allitem = await itemModel.find({});
        if(allitem) {
            res.status(200).json(allitem);
        } else {
            res.status(500).json({message:"error to fetching"});
        }
    } catch(error) {
        res.status(500).json({message:`internal issue: ${error}`});
    }
});

// by category

const ItemByCategory = asyncHandler(async (req, res) => {
    const {category} = req.params;
    try{
        let itemInfo = await itemModel.find({});

        if(itemInfo) {
            console.log("itemInfo");
            res.status(200).json(itemInfo);
        } else {
            res.status(404).json({message:"some error to fetch details!"});
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({message:error});
    }
})








module.exports = {
	AddItem,
    ItemInfo,
    ShowAllItem,

};
