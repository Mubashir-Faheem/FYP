const express=require('express');
const {getProducts,getProduct} =require( '../controllers/productsController')

const productrouter=express.Router();

//Routing for all products
// router.get("/products",asyncHandler((req,res)=>{
//     const products=await Product.find({});
//     res.json(products);
// })
// );
productrouter.route("/products").get(getProducts)


// router.get("/products/:id",(req,res)=>{
// //      let {id}=useParam();
//     const product=products.find((p)=>p._id===req.params.id);
// // //     const product=product.find((p)=>p._id===id);
//     res.json(product);


// });

//routing for single product
productrouter.route("/products/:id").get(getProduct); 

module.exports=productrouter;