const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    itemLocation:{
        type:String,
        required:true,
    },
    dateTime:{
        type:String,
    },
    imageUrl:{
        type:String,
        require:true,
    },
    currentAddress:{
        type:String,
    },
    description:{
        type:String,
    }
});

const itemModel  = mongoose.model("itemsCollection",itemSchema);

module.exports = itemModel;
