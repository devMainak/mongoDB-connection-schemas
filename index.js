const { initializeDatabase } = require("./db/db.connect")
const fs = require('fs')
const Movie = require('./models/movies.models')


initializeDatabase();

const newMovie = {
  title: "New Movie",
  releaseYear: 2023,
  genre: ["Drama"],
  director: "David Fincher",
  actors: ["Actor1", "Actor2"],
  language: "English",
  country: "USA",
  rating: 8.2,
  plot: "A young programmer creates a simulation world and looses difference between reality and virtual world.",
  awards: "Oscar Nomination",
  posterUrl: "https://example.com/poster9.jpg",
  trailerUrl: "https://example.com/trailer9.mp4"
}

async function createMovie(newMovie){
  try {
    const movie = new Movie(newMovie)
    const saveMovie = await movie.save()
    console.log("New Movie data:", saveMovie)
  } catch(error) {
    throw error
  }
}