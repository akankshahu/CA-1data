const mongoose=require('mongoose');
const restSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    itemsArr:{
        type:[String],
            
    },
});

const itemdetails=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    Price:{
        type:Number,
        required:true,
    },
});
module.exports=mongoose.model("restSchema","itemdetails");
