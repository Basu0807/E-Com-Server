const {OrderController,AddToCartController} = require('../controllers/orderController')

const OrderRoute = require('express').Router()

OrderRoute.post('/placed',OrderController)
OrderRoute.post('/added',AddToCartController)

module.exports=OrderRoute