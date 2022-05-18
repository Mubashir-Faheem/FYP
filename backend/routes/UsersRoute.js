const express=require('express');
const {authController,getUserProfile} =require( '../controllers/usersController')
const {protect} =require('../middlewares/authMiddleware')
const userrouter=express.Router();
 
userrouter.route('/login').post(authController)

//get user profile private route
userrouter.route('/profile').get(protect,getUserProfile)

module.exports=userrouter;