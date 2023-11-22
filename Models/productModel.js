const mongoose =require('mongoose')

const ProductSchema = mongoose.Schema({
    id:{
type:Number
    },
    heading:{
        type:String,
        // required:[true,'please enter product heading']
    },
    Model:{
        type:String,
        // required:[true,'please enter product name']
    },
    Brand:{
        type:String,
        // required:[true,'please enter product brand']
    },
    image:{
        type:String,
        // required:[true,'please enter product image']
    },
    price:{
        type:Number,
        // required:[true,'please enter product price']
    },
    description:{
        type:String,
        // required:[true,'please enter product description']
    },
    category:{
        type:String,
        // required:[true,'please enter product category']
    },
    quantity:{
        type:Number,
        // required:[true,'please enter product category']
    },
  


})

    module.exports=mongoose.model("Product",ProductSchema)