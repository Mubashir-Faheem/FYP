import { required } from 'nodemon/lib/config'

const mongoose=require('mongoose')
const { default: Reviews } = require('./reviews')


const productSchema=mongoose.Schema({
    User:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'User'
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
    reviews:[Reviews],
    rating:{
        type:Number,
        required:true
    },
    numreviews:{
        type:Number,
        required:true
    }



},{timestamps:true})

const Products=mongoose.Model('Products',productSchema)
export default Products