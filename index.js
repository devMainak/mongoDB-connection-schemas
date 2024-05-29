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

// createMovie(newMovie)

// find a movie with a perticular title
async function readMovieByTitle(movieTitle){
  try{
    const movie = await Movie.findOne({title: movieTitle})
    console.log(movie)
  } catch(error) {
    throw error
  }
}

// readMovieByTitle("Dilwale Dulhania Le Jayenge")

// To get all the movies in the database

async function readAllMovies(){
  try {
    const allMovies = await Movie.find()
    console.log(allMovies)
  } catch(error) {
    throw error
  }
}

// readAllMovies()

// get movie by director name
async function readMovieByDirector(directorName){
  try {
    const movieByDirector = await Movie.findOne({director: directorName})
    console.log(movieByDirector)
  } catch(error) {
    throw error
  }
}

// readMovieByDirector("David Fincher")

// find a movie by id and update it's rating
async function updateMovie(movieId, dataToUpdate)
{
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, dataToUpdate, {new: true})
    console.log(updatedMovie)
  } catch(error){
    console.error("Error in updating Movie rating", error)
  }
}

// updateMovie("66502d24f48516b96b43ec70", {releaseYear: 2002})

// find one data and update its value
async function updateMovieDetail(movieTitle, dataToUpdate){
  try {
    const updatedMovie = await Movie.findOneAndUpdate({title: movieTitle}, dataToUpdate, {new: true})
    console.log(updatedMovie)
  } catch(error){
    console.error("Error in changing data:", error)
  }
}

updateMovieDetail('Kabhi Khushi Kabhie Gham', {releaseYear: 2001})