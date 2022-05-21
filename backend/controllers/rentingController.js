const Renting=require('../models/RentingModel')
const asyncHandler=require('express-async-handler')

const getProducts=asyncHandler(async(req,res)=>{
    const products=await Product.find({});
    // throw new Error("Some error")
    res.json(products);
})

const getProduct=asyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }
    else{
        res.status(404).json({message:"Product not found"});
    }
})

module.exports={getProducts,getProduct}