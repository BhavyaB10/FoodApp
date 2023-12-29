const mongoose = require("mongoose")

const foodSchema = new mongoose.Schema({
    itemNo:Number,
    name:String,
    price:Number,
    description:String

});

const foodModel = mongoose.model("Desert",foodSchema);

module.exports=foodModel;