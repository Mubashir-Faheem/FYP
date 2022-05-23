
const Renting=require('../models/RentingModel')
const asyncHandler=require('express-async-handler')

const getRenting=asyncHandler(async(req,res)=>{
    const services=await Renting.find({});
    // throw new Error("Some error")
    res.json(services);
})
const getOneRenting=asyncHandler(async(req,res)=>{
    const services=await Renting.findById(req.params.id);
    if(services){
        res.json(services);
    }
    else{
        res.status(404).json({message:"Renting not found"});
    }
})



// const getProduct=asyncHandler(async(req,res)=>{
//     const product=await Product.findById(req.params.id);
//     if(product){
//         res.json(product);
//     }
//     else{
//         res.status(404).json({message:"Product not found"});
//     }
// })



const deleteRenting = asyncHandler(async (req, res) => {
    const renting = await Renting.findById(req.params.id)
  
    if (renting) {
      await renting.remove()
      res.json({ message: 'Service removed' })
    } else {
      res.status(404)
      throw new Error('Service not found')
    }
  })
  
  // @desc    Create a product
  // @route   POST /api/products
  // @access  Private/Admin
  const createRenting = asyncHandler(async (req, res) => {
    const renting = new Renting({
      name: '',
      price: 0,
      user: req.user._id,
      image: '',
    //   brand: 'Sample brand',
    //   category: 'Sample category',
      countinstock: 0,
    //   numreviews: 0,
      tool: '',
    //   rating:"Sample Rating"
    })
  
    const createdRenting = await renting.save()
    res.status(201).json(createdRenting)
  })
  
  // @desc    Update a product
  // @route   PUT /api/products/:id
  // @access  Private/Admin
  const updateRenting = asyncHandler(async (req, res) => {
    const {
      name,
      price,
      tool,
      image,
    //   brand,
    //   category,
    countinstock,
    } = req.body
  
    const renting = await Renting.findById(req.params.id)
  
    if (renting) {
        renting.name = name
        renting.price = price
        renting.tool = tool
        renting.image = image
    //   product.brand = brand
    //   product.category = category
      renting.countinstock = countinstock
  
      const updatedRenting = await renting.save()
      res.json(updatedRenting)
    } else {
      res.status(404)
      throw new Error('Service not found')
    }
  })
  
  // @desc    Create new review
  // @route   POST /api/products/:id/reviews
  // @access  Private
  const createRentingReview = asyncHandler(async (req, res) => {
    const { rating, comment } = req.body
  
    const renting = await Renting.findById(req.params.id)
  
    if (renting) {
      const alreadyReviewed = renting.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      )
  
      if (alreadyReviewed) {
        res.status(400)
        throw new Error('Service already reviewed')
      }
  
      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      }
  
      renting.reviews.push(review)
  
      renting.numReviews = renting.reviews.length
  
      renting.rating =
        renting.reviews.reduce((acc, item) => item.rating + acc, 0) /
        renting.reviews.length
  
      await renting.save()
      res.status(201).json({ message: 'Review added' })
    } else {
      res.status(404)
      throw new Error('Service not found')
    }
  })
  
  // @desc    Get top rated products
  // @route   GET /api/products/top
  // @access  Public
  const getTopRenting = asyncHandler(async (req, res) => {
    const renting = await Renting.find({}).sort({ rating: -1 }).limit(3)
  
    res.json(renting)
  })

module.exports={getRenting,getOneRenting,createRenting,deleteRenting,updateRenting,createRentingReview,getTopRenting}

