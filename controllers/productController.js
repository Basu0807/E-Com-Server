const ApiFeatures = require('../Apifeatures/apifeatures')
const { dummydata } = require('../Data/data')
const Product =require('../Models/productModel')


const AddProductController= async(req,res,next)=>{
    const NewProduct =dummydata
    
   const existedProduct =await Product.findOne({"heading":`${NewProduct.heading}`})
if(existedProduct){
        return res.send({msg:"Products Already Exist"})
     }
     else{
        const product = await Product.create(NewProduct)
        return res.send({msg:"products added",data:product,})
     }
}
const AllProductController =async(req,res)=>{
    const product =await Product.find({})
    return res.send(product)
}
const SearchController = async(req,res)=>{
    const apiFeature = new ApiFeatures(Product.find(),req.query).search()
const product = await apiFeature.query

    return res.send({msg:"product found",data:product}) 


}

const SpecificProductController= async(req,res)=>{
    const id=req.params.id
    const product = await Product.findById(id)
    if(product){
        return res.send({data:product})
    }
    return res.send({msg:"Product Not Found"})

    
    }

    const DeleteController= async(req,res)=>{
        const id=req.params.id
        const product = await Product.findById(id)
        if(!product){
            return res.send({msg:"Product Not Found"})

        }
        await Product.deleteOne(product);
        return res.send({msg:"Product deleted successfully"})
        
        }

module.exports={AllProductController,SearchController,AddProductController,SpecificProductController,DeleteController}