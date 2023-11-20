const mongoose =require('mongoose')

const CartSchema = mongoose.Schema({

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
                type:String,
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


})

module.exports=mongoose.model("CartDetails",CartSchema)