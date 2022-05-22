

const mongoose=require('mongoose')
// const { default: Reviews } = require('./ReviewModel')

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
    // image:{
    //     type:String
    // },
    tool:{
        type:String
    },
    price:{
        type:Number,
        required:true
    },
    

    

},{timestamps:true})

const Renting=mongoose.model('Renting',rentingSchema)
module.exports=Renting
