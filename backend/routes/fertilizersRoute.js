const express=require ('express')
const {getFertilizers,getFertilizer}=require ('../controllers/fertilizerController')
// const Fertilizers = require('../models/FertilizerModel');

const fertilizerrouter=express.Router();

//Routing for all fertilizers
fertilizerrouter.route("/fertilizers").get(getFertilizers)

//Routing for single fertilizer
fertilizerrouter.route("/fertilizers/:id").get(getFertilizer);
module.exports=fertilizerrouter