const express = require('express');
const router = express.Router()
const movieController = require('../controllers/moviesControllers')

const models = require('../models/index')

const db = require('../db/db');



//  LISTADO DE TODAS LAS PELICULAS
router.get('/', movieController.getMovies)

// LISTADO DE PELICULAS TOP RATED
router.get('/topMovies' , movieController.getTopMovies)

//  PELICULA SEGUN SU ID
router.get("/id/:id", movieController.getMovieById);

//  PELICULA SEGUN SU TITULO
router.get("/title/:title", movieController.getMovieByTitle);

// PELICULA SEGUN SU GENERO
router.get("/genre/:genre", movieController.getMoviesByGenre);

//  // REGISTAR NUEVA PELICULA
// router.post('/newMovie', movieController.postNewMovie);
   
// // BORRAR PELICULA
// router.delete('/deleteMovie/:title', movieController.deleteMovie);
  


module.exports = router

