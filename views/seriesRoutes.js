const express = require('express');
const router = express.Router()
const serieController = require('../controllers/seriesControllers')

const models = require('../models/index')

const db = require('../db/db')



// CRUD READ SERIE. LISTADO DE TODAS LAS SERIES
router.get('/', serieController.getSeries)

// CRUD READ SERIE. LISTADO DE SERIES TOP RATED
router.get('/topSeries' , serieController.getTopSeries)

// CRUD READ SERIE. SERIE SEGUN SU ID
router.get("/id/:id", serieController.getSerieById);

// CRUD READ SERIE. SERIE SEGUN SU TITULO
router.get("/title/:title", serieController.getSerieByTitle);

// CRUD READ SERIE. SERIE SEGUN SU GENERO
router.get("/genre/:genre", serieController.getSeriesByGenre);

// CRUD READ SERIE. LISTADO SERIES SEGUN CAPITULO PROXIMOS 7 DIAS
router.get("/nextsevendays", serieController.getSeriesNextDays);

// CRUD READ SERIE. LISTADO SERIES SEGUN PASE EN TEATRO 
router.get("/theater", serieController.getSeriesNextTheater);

// CRUD READ SERIE. LISTADO SERIES SEGUN PASE EN CINES 
router.get("/cine", serieController.getSeriesNextCine);

// CRUD CREATE SERIE. REGISTAR NUEVA SERIE
router.post('/newSerie', serieController.postNewSerie);
   
// CRUD DELETE SERIE
router.delete('/deleteSerie/:title', serieController.deleteSerie);
  


module.exports = router