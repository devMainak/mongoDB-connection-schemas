const mongoose = require('mongoose')

// Fruit Data Model
const fruitSchema = new mongoose.Schema({
  fruitName: String,
  fruitInfo: String,
  fruitImg: String,
  calories: Number,
  carbohydrates: Number,
  protein: Number,
  fat: Number
})

const Fruit = mongoose.model('Fruit', fruitSchema)

module.exports = Fruit