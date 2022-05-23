const mongoose=require('mongoose');
const dotenv=require('dotenv');
const users=require('./data/users');
const User=require('./models/UserModel')
const Order=require('./models/OrderModel')
const Product=require('./models/ProductModel')
const Fertlizer=require('./models/FertilizerModel')
const Seed=require('./models/SeedModel')
const Review =require('./models/ReviewModel')
const products=require('./data/products')
const fertilizers=require('./data/fertilizers')
const seeds=require('./data/seeds')
const renting=require('./data/renting')
const Renting=require('./models/RentingModel')
const blogs=require('./data/blogs')
const Blog=require('./models/BlogModel')
// const connectDB=require('./config/config');
const connectDb = require('./config/config');
dotenv.config();
connectDb();

const importData= async()=>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await Fertlizer.deleteMany()
        await Seed.deleteMany()
        // await Review.deleteMany()
        await User.deleteMany()
        await Renting.deleteMany()
        await Blog.deleteMany()
        //hadnling admin and general users
        const createUser=await User.insertMany(users)
        const adminUser=createUser[0]._id
        //handling products
        const sampleProducts=products.map((product) =>{
            return {...product,user:adminUser}
        })
        await Product.insertMany(sampleProducts)

        //handling blogs
        const sampleBlogs=blogs.map((blog) =>{
            return {...blog,user:adminUser}
        })
        await Blog.insertMany(sampleBlogs)
        //handling fertilizers
        const sampleFertilizers=fertilizers.map(fertilizer =>{
            return {...fertilizer,user:adminUser}
        })
        await Fertlizer.insertMany(sampleFertilizers)
        //handling seeds

        const sampleSeeds=seeds.map(seed =>{
            return{...seed,user:adminUser}
        })
        await Seed.insertMany(sampleSeeds)

        //handling renting
        const sampleRenting=renting.map(renting =>{
            return {...renting,user:adminUser}
        })
        await Renting.insertMany(sampleRenting)

        

        
        console.log("Done");
        process.exit();
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
};
 

       


const dataDestroy=async()=>{
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        // await Review.deleteMany()
        await User.deleteMany()
        await Fertlizer.deleteMany()
        await Seed.deleteMany()
        await Renting.deleteMany()
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