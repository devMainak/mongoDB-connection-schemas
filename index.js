const express = require("express")
const app = express()

const { initializeDatabase } = require("./db/db.connect")
const Movie = require('./models/movies.models')

app.use(express.json())

initializeDatabase();




// find a movie with a perticular title
async function readMovieByTitle(movieTitle){
  try{
    const movie = await Movie.findOne({title: movieTitle})
    return movie
  } catch(error) {
    throw error
  }
}

app.get("/movies/:title", async (req, res) => {
  try {
    const movie = await readMovieByTitle(req.params.title)
    if (movie) {
      res.json(movie)
    } else {
      res.status(404)
      .json({error: "Movie not found"})
    }
  } catch(error) {
    res.status(500).json({error: "Failed to fetch movie"})
  }
})

// To get all the movies in the database

async function readAllMovies(){
  try {
    const allMovies = await Movie.find()
    return allMovies
  } catch(error) {
    throw error
  }
}

app.get("/movies", async (req, res) => {
  try {
    const movies = await readAllMovies()
    if (movies.length != 0){
      res.json(movies)
    } else {
      res.status(404).json({error: "No movies found."})
    }
  } catch(err) {
    res.status(500).json({error: "Failed to fetch movies."})
  }
})

// get movie by director name
async function readMovieByDirector(directorName){
  try {
    const movieByDirector = await Movie.find({director: directorName})
    return movieByDirector
  } catch(error) {
    throw error
  }
}

app.get("/movies/director/:directorName", async (req, res) => {
  try {
    const movies = await readMovieByDirector(req.params.directorName)
    if (movies.length != 0){
      res.json(movies)
    } else {
      res.status(404).json({error: "No movies found"})
    }
  } catch(err) {
    res.status(500).json({error: "Failed to fetch movies."})
  }
})

// find a movie by movie genre
async function readMovieByGenre(movieGenre){
  try {
    const moviesByGenre = await Movie.find({genre: movieGenre})
    return moviesByGenre
  } catch(err) {
    throw err
  }
}

app.get("/movies/genres/:movieGenre", async(req, res) => {
  try {
    const movies = await readMovieByGenre(req.params.movieGenre)
    if (movies.length != 0){
      res.json(movies)
    } else {
      res.status(404).json({error: "No movies found"})
    }
  } catch(err) {
    res.status(500).json({error: "Failed to fetch movies."})
  }
})

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

// updateMovieDetail('Kabhi Khushi Kabhie Gham', {releaseYear: 2001})
 
// find a movie by id and delete from the database
async function deleteMovie(movieId){
  try {
    const deletedMovie = await Movie.findByIdAndDelete(movieId)
    console.log(deletedMovie)
  } catch(err){
    throw err
  }
}

// deleteMovie('6652d1af443f38bc0d266689')


// find movie by param and delete
async function deleteMovieFromDb(movieTitle)
{
  try {
    const deletedMovie = await Movie.findOneAndDelete({title: movieTitle})
    console.log(deletedMovie)
  } catch(err)
  {
    console.error("Error in movie deletion ", err)
  }
}

// deleteMovieFromDb("3 Idiots")

const PORT = 3000
app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`)
})