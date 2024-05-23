const mongoose = require('mongoose')

// Product Card Model
const productCardSchema = new mongoose.Schema({
  productName: String,
  price: Number,
  discountPercentage: Number,
  isDeliveryFree: Boolean,
  productDetails: [{
    type: String
  }],
  productRating: Number,
  peopleRated: Number,
  reviews: Number
})

const ProductCard = mongoose.model('ProductCard', productCardSchema)

module.exports = ProductCard