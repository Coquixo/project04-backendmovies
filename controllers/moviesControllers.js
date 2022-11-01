const models = require('../models/index')

const movieController = {}


//LISTADO DE TODAS LAS PELICULAS
movieController.getMovies = async (req, res) => {
    let resp = await models.movie.findAll()

    res.send(resp)
}

//LISTADO PELICULAS MAS VALORADAS
movieController.getTopMovies = async (req, res) => {
    try {
        let resp = await models.movie.findAll({
            where: { punctuation: '5' }
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
        let resp = await models.movie.findAll({
            where: { id: id }
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
        let resp = await models.movie.findAll({
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
        let resp = await models.movie.findAll({
            where: {
                genre: genre
            }
        })
    } catch (err) {
        res.send(err)
    }
}

// REGISTRAR NUEVA PELICULA
movieController.postNewMovie = async (req, res) => {
    try {
        let data = req.body
        let resp = await models.movie.create({
            title: data.title,
            genre: data.genre,
            image: data.image,
            synopsis: data.synopsis,
            punctuation: data.punctuation
        })

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}

// ELIMINAR UNA PELICULA
movieController.deleteMovie = async (req, res) => {
    try{
        let title = req.params.title
        let resp = await models.movie.destroy({
            where: { title: title }
        })

        if(resp == 1) {
            res.send("Se ha eliminado la pelicula correctamente")
        } else {
            res.send("No se ha podido eliminar la pelicula")
        }

    } catch(err) {

    }
}

module.exports = movieController