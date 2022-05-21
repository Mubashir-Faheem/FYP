<<<<<<< HEAD
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

=======
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

>>>>>>> aea0cc64c6ce91305e65eec04cfb3d5d3e256fd5
module.exports={getProducts,getProduct}