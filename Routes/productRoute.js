const {AddProductController,SpecificProductController, DeleteController, SearchController, AllProductController} = require('../controllers/productController')


const productRoute = require('express').Router()

productRoute.get('/search/?',SearchController)
productRoute.get('/allproducts',AllProductController)
productRoute.post('/addproducts',AddProductController)
productRoute.get('/product/:id',SpecificProductController)
productRoute.delete('/product/:id',DeleteController)


module.exports=productRoute

