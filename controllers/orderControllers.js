const models = require('../models/index')

const orderController = {}

const {Op} = require('sequelize');




// GENERAR NUEVO PEDIDO (PELICULA)            
orderController.postNewOrderMovie = async (req, res) => {
    try {
        let body = req.body;
        delete body.rentingDate

        if (body.email === req.auth?.email) {
            let movie = await models.movies.findOne({
                where: { title: body.title }
            })
            let repeated = await models.orders.findOne({
                where: {
                    UserIdUser: req.auth.id,
                    articleIdArticle: movie.articleIdArticle,
                }
            })
            if (!repeated) {
                let resp = await models.orders.create({
                    rentingDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
                    UserIdUser: req.auth.id,
                    articleIdArticle: movie.articleIdArticle
                })
                res.status(200).json({
                    resp,
                    email: req.auth?.email,
                    message: "Tu pedido de peliculas se ha realizado correctamente"
                })
            } else {
                res.json({
                    message: "No se ha realizado el pedido, ya tienes esta pelicula"
                })
            }
        }
    } catch (err) {
        res.send(err)
    }
}

// GENERAR NUEVO PEDIDO (SERIE)  
orderController.postNewOrderSerie = async (req, res) => {
    try {
        let body = req.body;
        delete body.rentingDate

        if (body.email === req.auth?.email) {
            let serie = await models.series.findOne({
                where: { title: body.title }
            })
            let repeated = await models.orders.findOne({
                where: {
                    UserIdUser: req.auth.id,
                    articleIdArticle: serie.articleIdArticle,
                }
            })
            if (!repeated) {
                let resp = await models.orders.create({
                    rentingDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
                    UserIdUser: req.auth.id,
                    articleIdArticle: serie.articleIdArticle
                })
                res.status(200).json({
                    resp,
                    email: req.auth?.email,
                    message: "Tu pedido de series se ha realizado correctamente"
                })
            } else {
                res.json({
                    message: "No se ha realizado el pedido, ya tienes esta serie"
                })
            }
        }
    } catch (err) {
        res.send(err)
    }
}
//MODIFICAR DATOS DE UN PEDIDO              
orderController.updateOrder = async (req, res) => {
    try {
        let body = req.body;
        let movie = await models.movies.findOne({
            where: { title: body.title }
        })
        let orderedMovie = await models.orders.findOne({
            where: {
                articleIdArticle: movie.articleIdArticle,
            }
        })
        if (body.email === req.auth?.email && movie.articleIdArticle === orderedMovie.articleIdArticle) {
            let resp = await models.orders.update({
                rentingDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
            },
                {
                    where: {
                        articleIdArticle: orderedMovie.articleIdArticle
                    }
                })
        } res.status(200).json({
            message: `Nueva fecha para la pelicula ${movie.title}`
        })
    } catch (error) {
        res.json({ message: "esta pelicula no esta en el pedido" })
        console.error(error)
    }
}

//LISTAR TODOS LOS PEDIDOS DE UN USUARIO  
orderController.getOrdersByUser = async (req, res) => {
    let resp = await models.orders.findAll({
      where: {
        UserIdUser: req.auth.id
      }
    })
    res.status(200).json({
      resp,
      message: "Aquí estan tus pedidos "
    })
  }    


//LISTAR TODOS LOS PEDIDOS HECHOS EN LA APLICACION(sólo puede realizarlo el admin)
orderController.getAppOrders = async (req, res) => {
    let resp = await models.orders.findAll({
    })
    res.status(200).json({message:"Estos son todos los pedidos. ", resp})}
  






module.exports = orderController