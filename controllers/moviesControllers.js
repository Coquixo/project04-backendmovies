const models = require('../models/index')
const {Op} = require('sequelize');
const movieController = {}


//LISTADO DE TODAS LAS PELICULAS
movieController.getMovies = async (req, res) => {
    let resp = await models.movies.findAll()

    res.send(resp)
}

//LISTADO PELICULAS MAS VALORADAS
movieController.getTopMovies = async (req, res) => {
    try {
        let resp = await models.movies.findAll({
            where: { rating: '5' }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

//PELICULA SEGUN SU ID
movieController.getMovieById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await models.movies.findAll({
            where: { id_movie: id }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

// PELICULA SEGUN SU TITULO
movieController.getMovieByTitle = async (req, res) => {
    try {
        let title = req.params.title
        let resp = await models.movies.findAll({
            where: { title: title }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

// LISTADO DE PELICULAS SEGUN SU GENERO
movieController.getMoviesByGenre = async (req, res) => {
    try {
        let genre = req.params.genre
        let resp = await models.movies.findAll({
            attributes: ['title', 'genre'],
            where: {
                genre: genre
            }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

// REGISTRAR NUEVA PELICULA
// movieController.postNewMovie = async (req, res) => {
//     try {
//         let data = req.body
//         let resp = await models.movies.create({
//             title: data.title,
//             genre: data.genre,
//             image: data.image,
//             synopsis: data.synopsis,
//             rating: data.rating,
//             year: data.year
//         })

//         if(resp == 1) {
//             res.send("Se ha registrado la pelicula correctamente")
//         } else {
//             res.send("No se ha podido registar la pelicula")
//         }

//     } catch (err) {
//         res.send(err)
//     }
// }

// ELIMINAR UNA PELICULA
// movieController.deleteMovie = async (req, res) => {
//     try{
//         let title = req.params.title
//         let resp = await models.movies.destroy({
//             where: { title: title }
//         })

//         if(resp == 1) {
//             res.send("Se ha eliminado la pelicula correctamente")
//         } else {
//             res.send("No se ha podido eliminar la pelicula")
//         }

//     } catch(err) {

//     }
// }

module.exports = movieController