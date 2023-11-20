const express =require('express')
const port =4000

const cors =require('cors')
const {connection} =require('./Config/db');
const productRoute = require('./Routes/productRoute');
const UserRoute = require('./Routes/userRoute');
const OrderRoute = require('./Routes/orderRoute');


const app =express();
app.use(cors({
  origin:"*"
}))

app.use(express.json()) // body parser( to read the data from the client side)
app.use('/store',productRoute)
app.use('/user',UserRoute)
app.use('/order',OrderRoute)


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