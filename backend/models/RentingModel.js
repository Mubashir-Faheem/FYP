
const mongoose=require('mongoose')
// const { default: Reviews } = require('./ReviewModel')
const reviewSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
},{timestamps:true})


const rentingSchema=mongoose.Schema({
    User:{
    type:mongoose.Schema.Types.ObjectId,
    // required:true,
    ref:'User'
    // ref:`User`
    },
    name:{
    type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    product:{
        type:String,
        required:true
    },
    product_price:{
        type:Number,
        required:true
    },

    

},{timestamps:true})

const Renting=mongoose.model('Renting',rentingSchema)
module.exports=Renting
