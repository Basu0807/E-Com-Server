const {AddProductController,SpecificProductController, DeleteController, SearchController, AllProductController, DeleteAll} = require('../controllers/productController')


const productRoute = require('express').Router()

productRoute.get('/search/?',SearchController)
productRoute.get('/allproducts',AllProductController)
productRoute.post('/addproducts',AddProductController)
productRoute.get('/product/:id',SpecificProductController)
productRoute.delete('/product/:id',DeleteController)
productRoute.delete('/delete',DeleteAll)


module.exports=productRoute

