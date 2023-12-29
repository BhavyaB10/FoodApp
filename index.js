const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 10;


mongoose.connect("mongodb://127.0.0.1:27017/FoodApp",{ useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const foodSchema = new mongoose.Schema({
    itemNo:Number,
    name:String,
    price:Number,
    description:String

});

const foodModel = mongoose.model("Desert",foodSchema);

app.get("/getFood",async(req,res)=>{
  try{
   const Data = await foodModel.find();
   res.json(Data);
  }catch(err){
    console.error(err);
    res.status(500).json({ err: 'Internal Server Error' });
  }
})


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});