const { registerController, loginController } = require('../controllers/loginSignup')

const UserRoute = require('express').Router()

UserRoute.post('/register',registerController)
UserRoute.post('/login',loginController)

module.exports=UserRoute