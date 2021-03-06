// const param=require("react-router-dom")
// import {useParams} from "react-router-dom"
const express=require ('express');
const cors=require ('cors')
const morgan=require('morgan')
// const {products}=require ("./data/products");
const {errorHandler}=require("./middlewares/errorMiddleware")
// const products=require ("./data/products");
const productRoutes=require('./routes/productsRoute')
const fertilizerRoutes=require('./routes/fertilizersRoute')
const seedRoutes=require('./routes/seedsRoute')
const usersRoutes=require('./routes/UsersRoute')
const orderRoutes=require('./routes/orderRoute')
const rentingRoutes=require('./routes/rentingRoute')
const uploadRoutes=require('./routes/uploadRoutes')
const blogRoutes=require('./routes/blogsRoute')

const dotenv=require("dotenv");
require('dotenv').config()
dotenv.config();
const connectDb=require('./config/config');
// dotenv.config();

connectDb(); //connecting to mongodb

// 


const app= express();
app.use(express.json()); //middleware
app.use(cors());

if(process.env.NODE_ENV==='development'){
        app.use(morgan('dev'))
    }



//dotenv config
// dotenv.config();
app.get("/",(req,res)=>{
res.send("<h1>Welcome to node serverss</h1>");
});

app.use("/api/products",productRoutes);
app.use("/api/blogs",blogRoutes);
app.use("/api",fertilizerRoutes)
app.use("/api",seedRoutes)
app.use("/api/users",usersRoutes)
app.use("/api/orders",orderRoutes)
app.use("/api",rentingRoutes)
app.use('/api/upload',uploadRoutes)
app.use(errorHandler);
app.use(express.static('public'))
app.use(express.static('backend'))
app.get("/",(req,res)=>{
    res.send("<h1>Node app</h1>");

});

// app.get('/product/:id', function(req, res) { // url: /path/test
//     console.log(req.params.id);  // result: test
//   });

// const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

const PORT=8080;
app.listen(process.env.PORT || PORT,() =>{
    console.log(`Server is in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`);
})

