const mongoose=require('mongoose');
const dotenv=require('dotenv');
const users=require('./data/users');
const User=require('./models/UserModel')
const Order=require('./models/OrderModel')
const Product=require('./models/ProductModel')
const Review =require('./models/ReviewModel')
const products=require('./data/products')
// const connectDB=require('./config/config');
const connectDb = require('./config/config');
dotenv.config();
connectDb();

const importData= async()=>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        // await Review.deleteMany()
        await User.deleteMany()
        const createUser=await User.insertMany(users)
        const adminUser=createUser[0]._id
        const sampleData=products.map(product =>{
            return {...product,user:adminUser}
        })


        await Product.insertMany(sampleData)
        console.log("Done");
        process.exit();
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
};
        // console.log(Object.keys(products));

// const result = Object.keys(products).map(key => {
//   console.log(key);
//   console.log(products[key]); 

//   return {[key]: products[key]};
// });
// console.log(result);

       


const dataDestroy=async()=>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        // await Review.deleteMany()
        await User.deleteMany()
        console.log("Done");
        process.exit();
    } catch (error) {
        
        console.log(`${error}`);
        process.exit(1);
    }
    
};


if(process.argv[2]==='-d')
{
    dataDestroy()
}else{
    importData();
}