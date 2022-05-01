const express=require ('express')
const Fertilzer=require('../models/FertilizerModel')
const asyncHandler=require('express-async-handler');
// const Fertilizers = require('../models/FertilizerModel');

const fertilizerrouter=express.Router();

//Routing for all fertilizers
fertilizerrouter.get("/fertilizers",asyncHandler(async(req,res)=>{
    const fertilizers=await Fertilzer.find({})
    res.json(fertilizers);
})
);

//Routing for single fertilizer
fertilizerrouter.get("/fertilizers/:id",asyncHandler(async(req,res)=>{
    const fertilizer=await Fertilzer.findById(req.params.id)
    if(fertilizer){
        res.json(fertilizer)
    }else{
        res.status(4040).json({message:"Fertilizer not found"})
    }
}));
module.exports=fertilizerrouter