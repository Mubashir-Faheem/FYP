const Product=require('../models/ProductModel')
const asyncHandler=require('express-async-handler')

const getProducts=asyncHandler(async(req,res)=>{
    const products=await Product.find({});
    // throw new Error("Some error")
    res.json(products);
})

const getProduct=asyncHandler(async(req,res)=>{
    const product=await Product.findById(req.params.id);
    if(product){
        res.json(product);
    }
    else{
        res.status(404).json({message:"Product not found"});
    }
})


const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)
  
    if (product) {
      await product.remove()
      res.json({ message: 'Product removed' })
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
  
  // @desc    Create a product
  // @route   POST /api/products
  // @access  Private/Admin
  const createProduct = asyncHandler(async (req, res) => {
    const product = new Product({
      name: '',
      price: 0,
      user: req.user._id,
      image: '',
    //   brand: 'Sample brand',
    //   category: 'Sample category',
      countinstock: 0,
      numreviews: 0,
      description: '',
    //   rating:"Sample Rating"
    })
  
    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
  })
  
  // @desc    Update a product
  // @route   PUT /api/products/:id
  // @access  Private/Admin
  const updateProduct = asyncHandler(async (req, res) => {
    const {
      name,
      price,
      description,
      image,
    //   brand,
    //   category,
    countinstock,
    } = req.body
  
    const product = await Product.findById(req.params.id)
  
    if (product) {
      product.name = name
      product.price = price
      product.description = description
      product.image = image
    //   product.brand = brand
    //   product.category = category
      product.countinstock = countinstock
  
      const updatedProduct = await product.save()
      res.json(updatedProduct)
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
  
  // @desc    Create new review
  // @route   POST /api/products/:id/reviews
  // @access  Private
  const createProductReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body
  
    const product = await Product.findById(req.params.id)
  
    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      )
  
      if (alreadyReviewed) {
        res.status(400)
        throw new Error('Product already reviewed')
      }
  
      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      }
  
      product.reviews.push(review)
  
      product.numReviews = product.reviews.length
  
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length
  
      await product.save()
      res.status(201).json({ message: 'Review added' })
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  })
  
  // @desc    Get top rated products
  // @route   GET /api/products/top
  // @access  Public
  const getTopProducts = asyncHandler(async (req, res) => {
    const products = await Product.find({}).sort({ rating: -1 }).limit(3)
  
    res.json(products)
  })

module.exports={getProducts,getProduct,createProduct,deleteProduct,updateProduct,createProductReview,getTopProducts}