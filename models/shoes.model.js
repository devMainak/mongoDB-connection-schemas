const mongoose = require('mongoose')

// Shoe Data Model
const shoeSchema = new mongoose.Schema({
  status: String,
  shoeName: String,
  category: String,
  productInfo: String,
  shoeColor: [{
    type: String,
    enum: ['blue', 'red', 'green', 'orange', 'black']
  }],
  shoeSize: [{
    type: Number,
    enum: [7, 8, 9, 10, 11]
  }],
  price: Number
})

const Shoe = mongoose.model('Shoe', shoeSchema)

module.exports = Shoe