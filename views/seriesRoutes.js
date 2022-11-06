const express = require('express');
const router = express.Router()
const serieController = require('../controllers/seriesControllers')

const models = require('../models/index')
const db = require('../db/db')



// LISTADO DE TODAS LAS SERIES
router.get('/', serieController.getSeries)

//  LISTADO DE SERIES TOP RATED
router.get('/topSeries' , serieController.getTopSeries)

//  SERIE SEGUN SU ID
router.get("/id/:id", serieController.getSerieById);

//  SERIE SEGUN SU TITULO
router.get("/title/:title", serieController.getSerieByTitle);

//  SERIE SEGUN SU GENERO
router.get("/genre/:genre", serieController.getSeriesByGenre);

//  LISTADO SERIES SEGUN CAPITULO PROXIMOS 7 DIAS
router.get("/nextsevendays", serieController.getSeriesNextDays);

//  LISTADO SERIES SEGUN PASE EN TEATRO 
router.get("/theater", serieController.getSeriesNextTheater);

//  LISTADO SERIES SEGUN PASE EN CINES 
router.get("/cine", serieController.getSeriesNextCine);

// //  REGISTAR NUEVA SERIE
// router.post('/newSerie', serieController.postNewSerie);
   
// // BORRAR SERIE
// router.delete('/deleteSerie/:title', serieController.deleteSerie);
  


module.exports = router