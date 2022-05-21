const express=require ('express')
const {getSeeds,getSeed} =require('../controllers/seedsController')


const seedrouter=express.Router();

//Routing for all seeds
seedrouter.route("/seeds").get(getSeeds)


//Routing for single seed
seedrouter.route("/seeds/:id").get(getSeed);

module.exports=seedrouter
