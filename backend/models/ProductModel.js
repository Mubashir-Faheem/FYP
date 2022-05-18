// import { required} from 'nodemon/lib/config'

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


const productSchema=mongoose.Schema({
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
    countinstock:{
        type:Number,
        required:true
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        // required:true
    },
    numreviews:{
        type:Number,
        required:true
    }



},{timestamps:true})

const Products=mongoose.model('Products',productSchema)
module.exports=Products