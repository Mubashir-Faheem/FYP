const Fertilzer=require('../models/FertilizerModel')
const asyncHandler=require('express-async-handler');

const getFertilizers=asyncHandler(async(req,res)=>{
    const fertilizers=await Fertilzer.find({})
    res.json(fertilizers);
})

const getFertilizer=asyncHandler(async(req,res)=>{
    const fertilizer=await Fertilzer.findById(req.params.id)
    if(fertilizer){
        res.json(fertilizer)
    }else{
        res.status(4040).json({message:"Fertilizer not found"})
    }
})

module.exports={getFertilizer,getFertilizers}