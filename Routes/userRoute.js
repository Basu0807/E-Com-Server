const middleware = require('../AuthMiddleware/authmiddleware')
const { registerController, loginController, ProfileController } = require('../controllers/loginSignup')

const UserRoute = require('express').Router()

UserRoute.post('/register',registerController)
UserRoute.post('/login',loginController)
UserRoute.get('/profile',middleware,ProfileController)


module.exports=UserRoute