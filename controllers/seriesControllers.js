const models = require('../models/index')

const serieController = {}


//LISTADO DE TODAS LAS SERIES
serieController.getSeries = async (req, res) => {
    let resp = await models.serie.findAll()

    res.send(resp)
}

//LISTADO SERIES MAS VALORADAS
serieController.getTopSeries = async (req, res) => {
    try {
        let resp = await models.serie.findAll({
            where: { rating: '5' }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

//SERIE SEGUN SU ID
serieController.getSerieById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await models.serie.findAll({
            where: { id_serie: id }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

// SERIE SEGUN SU TITULO
serieController.getSerieByTitle = async (req, res) => {
    try {
        let title = req.params.title
        let resp = await models.serie.findAll({
            where: { title: title }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

// LISTADO DE SERIES SEGUN SU GENERO
serieController.getSeriesByGenre = async (req, res) => {
    try {
        let genre = req.params.genre
        let resp = await models.serie.findAll({
            where: {
                genre: genre
            }

        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

// LISTADO DE SERIES SEGUN CAPITULO PROXIMOS 7 DIAS
serieController.getSeriesNextDays = async (req, res) => {
    try {
        let resp = await models.serie.findAll({
            where: { nextsevendays: true }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

// LISTADO DE SERIES SEGUN TENGAN PASE PROXIMAMENTE EN TEATROS
serieController.getSeriesNextTheater = async (req, res) => {
    try {
        let resp = await models.serie.findAll({
            where: { theater: true }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

// LISTADO DE SERIES SEGUN TENGAN PASE PROXIMAMENTE EN CINES
serieController.getSeriesNextCine = async (req, res) => {
    try {
        let resp = await models.serie.findAll({
            where: { cine: true }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}


// REGISTRAR NUEVA SERIE
serieController.postNewSerie = async (req, res) => {
    try {
        let data = req.body
        let resp = await models.serie.create({
            title: data.title,
            genre: data.genre,
            image: data.image,
            synopsis: data.synopsis,
            rating: data.rating,
            nextsevendays: data.nextsevendays,
            theater: data.theater,
            cine: data.cine
        })

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}

// ELIMINAR UNA SERIE
serieController.deleteSerie = async (req, res) => {
    try {
        let title = req.params.title
        let resp = await models.serie.destroy({
            where: { title: title }
        })

        if (resp == 1) {
            res.send("Se ha eliminado la serie correctamente")
        } else {
            res.send("No se ha podido eliminar la serie")
        }

    } catch (err) {

    }
}

module.exports = serieController