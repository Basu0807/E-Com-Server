const express =require('express')
require("dotenv").config()

const port =4000

const cors =require('cors')
const {connection} =require('./Config/db');
const productRoute = require('./Routes/productRoute');
const UserRoute = require('./Routes/userRoute');
const OrderRoute = require('./Routes/orderRoute');
const stripe=require("stripe")("sk_test_51OHNDNSEW2AXc16ZBAEHpvqalk8PlE6NnomLVaNBKct3I65YWgGqW7vkw8xlhNha0xCXyVOeaISEDIZ52ty1UOcy00BbHHzkqv")


const app =express();
app.use(cors({
  origin:"*"
}))

app.use(express.json()) // body parser( to read the data from the client side)
app.use('/store',productRoute)
app.use('/user',UserRoute)
app.use('/order',OrderRoute)

app.post("/checkout",async(req,res)=>{
  const {products}=req.body
  console.log(products)
  const lineItems =products.map((product)=>({
      price_data:{
          currency:"inr",
          product_data:{
              name:product.heading,
          },
          unit_amount:product.price * 100
      },
      quantity:product.quantity
     }))
     const session =await stripe.checkout.sessions.create({
      payment_method_types:["card"],
       line_items:lineItems,
      mode:"payment",
      success_url:"https://dainty-pothos-8d469f.netlify.app/",
      cancel_url:"https://dainty-pothos-8d469f.netlify.app/",
  })
  res.json({id:session.id})
  })
app.get('/',(req,res)=>{
res.send("This is our HomePage")
console.log("Home page");
})


app.listen(port, async()=>{
  try {
      await connection();
   console.log(`my server is running after making connection on port no. ${port}`);
   
  } catch (error) {
   console.log(`Error occured`);
  }
})