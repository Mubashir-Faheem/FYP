const Blog=require('../models/BlogModel')
const asyncHandler=require('express-async-handler')

const getBlogs=asyncHandler(async(req,res)=>{
    const blogs=await Blog.find({});
    // throw new Error("Some error")
    res.json(blogs);
})

const getBlog=asyncHandler(async(req,res)=>{
    const blog=await Blog.findById(req.params.id);
    if(blog){
        res.json(blog);
    }
    else{
        res.status(404).json({message:"Blog not found"});
    }
})


const deleteBlog = asyncHandler(async (req, res) => {
    const blog = await Blog.findById(req.params.id)
  
    if (blog) {
      await blog.remove()
      res.json({ message: 'Blog removed' })
    } else {
      res.status(404)
      throw new Error('Blog not found')
    }
  })
  

  const createBlog = asyncHandler(async (req, res) => {
    const blog = new Blog({
      name: '',
      user: req.user._id,
      image: '',
    //   brand: 'Sample brand',
    //   category: 'Sample category',
    //   countinstock: 0,
    //   numreviews: 0,
      description: '',
    //   rating:"Sample Rating"
    })
  
    const createdBlog = await blog.save()
    res.status(201).json(createdBlog)
  })
  
  const updateBlog = asyncHandler(async (req, res) => {
    const {
      name,
    //   price,
      description,
      image,
    //   brand,
    //   category,
    // countinstock,
    } = req.body
  
    const blog = await Blog.findById(req.params.id)
  
    if (blog) {
      blog.name = name
    //   blog.price = price
      blog.description = description
      blog.image = image
    //   product.brand = brand
    //   product.category = category
    // blog.countinstock = countinstock
  
      const updatedBlog = await blog.save()
      res.json(updatedBlog)
    } else {
      res.status(404)
      throw new Error('Blog not found')
    }
  })

  module.exports={getBlogs,getBlog,createBlog,deleteBlog,updateBlog}
