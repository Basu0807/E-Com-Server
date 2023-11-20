const mongoose =require('mongoose')
const validator=require('validator')

const OrderSchema = mongoose.Schema({
    name:{
        type:String,
        maxLength:[30,"Name should not exceed 30 character"],
        minLength:[4,"Name should have atleast 4 character"]
    },

  phone:{
type:Number,
},

email:{
    type:String,
    required:true,
    // validate:[validator.isEmail,"Please Enter a valid Email"]
},
    Items:{
        name:{
            type:String,
        },
        price:{
            type:Number
        }, 
        quantity:{
            type:Number
        }
    }
    
    


})

module.exports=mongoose.model("OrderDetails",OrderSchema)