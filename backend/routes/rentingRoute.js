const express=require('express');
const {getRenting, getOneRenting} =require( '../controllers/rentingController')
const Renting=require('../models/RentingModel')
const router=express.Router();

//Routing for all products
// router.get("/services",asyncHandler((req,res)=>{
//     const services=await Renting.find({});
//     res.json(services);
// })
// );
router.route("/services").get(getRenting)


// router.get("/products/:id",(req,res)=>{
// //      let {id}=useParam();
//     const product=products.find((p)=>p._id===req.params.id);
// // //     const product=product.find((p)=>p._id===id);
//     res.json(product);


// });

//routing for single product
// productrouter.route("/products/:id").get(getProduct);
router.route("/services/:id").get(getOneRenting);  

module.exports=router;