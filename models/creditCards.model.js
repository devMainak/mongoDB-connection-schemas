const mongoose = require('mongoose')

// Credit Card Model
const creditCardSchema = new mongoose.Schema({
  cardNumber: Number,
  cardHolderName: String,
  activePeriod: Date,
  bankIconUrl: String
})

const Card = mongoose.model('Card', creditCardSchema)

module.exports = Card