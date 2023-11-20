const Order =require('../Models/orderModel')
const Cart =require('../Models/addToCartModel')

const CartItems=Cart.find({})
const OrderController = async(req,res)=>{

const OrderDetails =  req.body

const OrderPlaced = await Order.create({
    "name":OrderDetails.name,
    "phone":OrderDetails.phone,
    "email":OrderDetails.email,
    "Items":OrderDetails.Items,
    
    })
return res.send({msg:"Order Placed",OrderDetails:OrderPlaced})

}

const AddToCartController =async(req,res)=>{
    const ItemDetails  =req.body
    console.log(ItemDetails);
    // const NewItem=await Order.updateMany(
    //     { },
    //     { $unset: { _id: "" } }
    //  )
    if(ItemDetails){
        // const findItem =await Cart.findOne({"heading":`${ItemDetails.heading}`})
           await Order.create(ItemDetails)
            return res.send({msg:"Product Added"})
           
        
        
        
    }
}

module.exports={OrderController,AddToCartController}