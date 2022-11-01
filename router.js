const express = require('express')
const router = express.Router()

const MoviesRoutes = require('./views/moviesRoutes')
const SeriesRoutes = require('./views/seriesRoutes')
const userRoutes = require('./views/userRoutes')




//middleware para las rutas de movie
router.use('/movies', MoviesRoutes)
//middleware para las rutas de serie
router.use('/series', SeriesRoutes)
//middleware para las rutas de user
router.use('/user', userRoutes)


module.exports = router