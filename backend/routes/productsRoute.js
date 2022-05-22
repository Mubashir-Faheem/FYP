const express=require('express');
const {getProducts,getProduct,createProduct,deleteProduct,updateProduct,createProductReview,getTopProducts} =require( '../controllers/productsController')

const router=express.Router();
const {protect,admin}=require ('../middlewares/authMiddleware')
//Routing for all products
// router.get("/products",asyncHandler((req,res)=>{
//     const products=await Product.find({});
//     res.json(products);
// })
// );
router.route('/').get(getProducts).post(protect,admin,createProduct)


// router.get("/products/:id",(req,res)=>{
// //      let {id}=useParam();
//     const product=products.find((p)=>p._id===req.params.id);
// // //     const product=product.find((p)=>p._id===id);
//     res.json(product);


// });
router.route('/:id/reviews').post(protect,admin,createProductReview)
router.get('/top',getTopProducts)
//routing for single product
router.route("/:id").get(getProduct).delete(protect,admin,deleteProduct)
.put(protect,admin,updateProduct); 

module.exports=router;