const Seed=require('../models/SeedModel')
const asyncHandler=require('express-async-handler');

const getSeeds=asyncHandler(async(req,res)=>{
    const seeds=await Seed.find({})
    res.json(seeds);
})


const getSeed=asyncHandler(async(req,res)=>{
    const seed=await Seed.findById(req.params.id)
    if(seed){
        res.json(seed)
    }else{
        res.status(4040).json({message:"Seed not found"})
    }
})

module.exports={getSeeds,getSeed}