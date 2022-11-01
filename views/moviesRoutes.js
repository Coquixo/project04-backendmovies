const express = require('express');
const router = express.Router()
const movieController = require('../controllers/moviesControllers')

const models = require('../models/index')

const db = require('../db/db');



// CRUD READ MOVIE. LISTADO DE TODAS LAS PELICULAS
router.get('/', movieController.getMovies)

// CRUD READ MOVIE. LISTADO DE PELICULAS TOP RATED
router.get('/topMovies' , movieController.getTopMovies)

// CRUD READ MOVIE. PELICULA SEGUN SU ID
router.get("/id/:id", movieController.getMovieById);

// CRUD READ MOVIE. PELICULA SEGUN SU TITULO
router.get("/title/:title", movieController.getMovieByTitle);

// CRUD READ MOVIE. PELICULA SEGUN SU GENERO
router.get("/genre/:genre", movieController.getMoviesByGenre);

// CRUD CREATE MOVIE. REGISTAR NUEVA PELICULA
router.post('/newMovie', movieController.postNewMovie);
   
// CRUD DELETE MOVIE
router.delete('/deleteMovie/:title', movieController.deleteMovie);
  


module.exports = router

