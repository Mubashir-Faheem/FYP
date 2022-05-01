const express=require ('express')
const Seed=require('../models/SeedModel')
const asyncHandler=require('express-async-handler');


const seedrouter=express.Router();

//Routing for all seeds
seedrouter.get("/seeds",asyncHandler(async(req,res)=>{
    const seeds=await Seed.find({})
    res.json(seeds);
})
);

//Routing for single seed
seedrouter.get("/seeds/:id",asyncHandler(async(req,res)=>{
    const seed=await Seed.findById(req.params.id)
    if(seed){
        res.json(seed)
    }else{
        res.status(4040).json({message:"Seed not found"})
    }
}));
module.exports=seedrouter