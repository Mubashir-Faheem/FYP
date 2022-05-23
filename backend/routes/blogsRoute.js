const express=require('express');
const {getBlogs,getBlog,createBlog,deleteBlog,updateBlog}=require('../controllers/blogController')

const router=express.Router();
const {protect,admin}=require ('../middlewares/authMiddleware')

router.route('/').get(getBlogs).post(protect,admin,createBlog)

router.route("/:id").get(getBlog).delete(protect,admin,deleteBlog)
.put(protect,admin,updateBlog); 

module.exports=router
