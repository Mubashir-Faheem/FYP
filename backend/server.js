// const param=require("react-router-dom")
// import {useParams} from "react-router-dom"
const express=require ('express');
const cors=require ('cors')
// const {products}=require ("./data/products");
const {errorHandler}=require("./middlewares/errorMiddleware")
const products=require ("./data/products");
const productRoutes=require('./routes/productsRoute')
const fertilizerRoutes=require('./routes/fertilizersRoute')
const seedRoutes=require('./routes/seedsRoute')


const dotenv=require("dotenv");
require('dotenv').config()
dotenv.config();
const connectDb=require('./config/config');
// dotenv.config();

connectDb(); //connecting to mongodb

// var param=express.useParam();
// const { uuid } = require('uuidv4');
const app= express();
app.use(cors());

//dotenv config
// dotenv.config();
app.get("/",(req,res)=>{
res.send("<h1>Welcome to node server</h1>");
});

app.use("/api",productRoutes);
app.use("/api",fertilizerRoutes)
app.use("/api",seedRoutes)
app.use(errorHandler);

app.get("/",(req,res)=>{
    res.send("<h1>Node app</h1>");

});

// app.get('/product/:id', function(req, res) { // url: /path/test
//     console.log(req.params.id);  // result: test
//   });
  

const PORT=8080;
app.listen(process.env.PORT || PORT,() =>{
    console.log(`Server is in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`);
})

// app.listen(8080,() =>{
//     console.log("server is running on 8080 port");
// });