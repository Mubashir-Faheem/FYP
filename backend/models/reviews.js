const mongoose=require('mongoose')

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

const Reviews=mongoose.Model('Reviews',reviewSchema)
export default Reviews