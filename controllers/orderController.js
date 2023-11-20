const Order =require('../Models/orderModel')
const Cart =require('../Models/addToCartModel')

const OrderController = async(req,res)=>{

const OrderDetails =  req.body

const OrderPlaced = await Order.create({
    "name":OrderDetails.name,
    "phone":OrderDetails.phone,
    "email":OrderDetails.email,
    "Items":OrderDetails.Items,
    
    })
return res.send({msg:"Item Added Successfully",OrderDetails:OrderPlaced})

}

const AddToCartController =async(req,res)=>{
    const ItemDetails  =req.body
    if(ItemDetails){
        // const findItem =await Cart.findOne({"heading":`${ItemDetails.heading}`})
        
           await Cart.create(ItemDetails)
            return res.send({msg:"Product Added", CartItem:Cart})
           
        
        
        
    }
}

module.exports={OrderController,AddToCartController}