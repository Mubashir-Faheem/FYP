// const param=require("react-router-dom")
// import {useParams} from "react-router-dom"
const express=require ('express');
// const {products}=require ("./data/products");
const products=require ("./data/products");
const dotenv=require("dotenv");
require('dotenv').config()
dotenv.config();
const connectDb=require('./config/config');
// dotenv.config();

connectDb(); //connecting to mongodb

// var param=express.useParam();
// const { uuid } = require('uuidv4');
const app= express();


//dotenv config
// dotenv.config();
app.get("/",(req,res)=>{
res.send("<h1>Welcome to node server</h1>");
});



app.get("/",(req,res)=>{
    res.send("<h1>Node app</h1>");

});
app.get("/products",(req,res)=>{
    res.json(products);
});

app.get("/products/:id",(req,res)=>{
//      let {id}=useParam();
    const product=products.find((p)=>p._id===req.params.id);
// //     const product=product.find((p)=>p._id===id);
    res.json(product);


})
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