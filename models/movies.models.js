const mongoose = require('mongoose')

// Movie model
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  genre: [{
    type: String,
    enum: ['Action', 'Drama', 'Comedy', 'Romance', 'Thriller', 'Fantasy','Sci-Fi', 'Horror', 'Sports', 'Musical', 'Other']
  }],
  director: {
    type: String,
    required: true
  },
  actors: [{
    type: String
  }],
  country: {
    type: String,
    default: "India"
  },
  rating: {
    type: Number,
    min: 0,
    max: 10,
    default: 0
  },
  awards: {
    type: String
  },
  posterUrl: {
    type: String
  },
  trailerUrl: {
    type: String
  }
}, {timestamps: true})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie