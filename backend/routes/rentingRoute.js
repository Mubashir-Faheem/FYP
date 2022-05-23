const express=require('express');
const {getRenting, getOneRenting,createRenting,deleteRenting,updateRenting,createRentingReview,getTopRenting} =require( '../controllers/rentingController')
const Renting=require('../models/RentingModel')
const router=express.Router();
const {protect,admin}=require ('../middlewares/authMiddleware')
//Routing for all products
// router.get("/services",asyncHandler((req,res)=>{
//     const services=await Renting.find({});
//     res.json(services);
// })
// );
router.route("/services").get(getRenting).post(protect,admin,createRenting)


// router.get("/products/:id",(req,res)=>{
// //      let {id}=useParam();
//     const product=products.find((p)=>p._id===req.params.id);
// // //     const product=product.find((p)=>p._id===id);
//     res.json(product);


// });
router.route('/services/:id/reviews').post(protect,admin,createRentingReview)
router.get('/services/top',getTopRenting)
//routing for single product
// productrouter.route("/products/:id").get(getProduct);
router.route("/services/:id").get(getOneRenting).delete(protect,admin,deleteRenting)
.put(protect,admin,updateRenting); ;  

module.exports=router;