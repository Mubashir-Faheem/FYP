const express=require('express');
const Product=require('../models/ProductModel')
const asyncHandler=require('express-async-handler')

const productrouter=express.Router();

//Routing for all products
// router.get("/products",asyncHandler((req,res)=>{
//     const products=await Product.find({});
//     res.json(products);
// })
// );
productrouter.get("/products.js",asyncHandler(async(req,res)=>{
    const products=await Product.find({});
    res.json(products);
})
);

// router.get("/products/:id",(req,res)=>{
// //      let {id}=useParam();
//     const product=products.find((p)=>p._id===req.params.id);
// // //     const product=product.find((p)=>p._id===id);
//     res.json(product);


// });

//routing for single product
productrouter.get("/products.js/:id",asyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }
    else{
        res.status(404).json({message:"Product not found"});
    }
})); 
module.exports=productrouter;