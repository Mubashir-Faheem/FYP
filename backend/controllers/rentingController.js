
const Renting=require('../models/RentingModel')
const asyncHandler=require('express-async-handler')

const getRenting=asyncHandler(async(req,res)=>{
    const services=await Renting.find({});
    // throw new Error("Some error")
    res.json(services);
})
const getOneRenting=asyncHandler(async(req,res)=>{
    const services=await Renting.findById(req.params.id);
    if(services){
        res.json(services);
    }
    else{
        res.status(404).json({message:"Renting not found"});
    }
})



// const getProduct=asyncHandler(async(req,res)=>{
//     const product=await Product.findById(req.params.id);
//     if(product){
//         res.json(product);
//     }
//     else{
//         res.status(404).json({message:"Product not found"});
//     }
// })
module.exports={getRenting,getOneRenting}

