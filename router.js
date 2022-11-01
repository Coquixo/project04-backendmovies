const express = require('express')
const router = express.Router()

const MoviesRoutes = require('./views/moviesRoutes')
const SeriesRoutes = require('./views/seriesRoutes')




//middleware para las rutas de movie
router.use('/movies', MoviesRoutes)
//middleware para las rutas de serie
router.use('/series', SeriesRoutes)


module.exports = router