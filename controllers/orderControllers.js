const models = require('../models/index')

const orderController = {}

const {Op} = require('sequelize');



// GENERAR NUEVO PEDIDO (PELICULA)            
orderController.postNewOrderMovie = async (req, res) => {
    try {
        let body = req.body;
        delete body.rentingDate

        if (body.mail === req.auth?.mail) {
            let movie = await models.movies.findOne({
                where: { title: body.name }
            })
            let repeated = await models.orders.findOne({
                where: {
                    UserIdUser: req.auth.id,
                    ArticleIdArticle: movie.ArticleIdArticle,
                }
            })
            if (!repeated) {
                let resp = await models.orders.create({
                    rentingDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
                    UserIdUser: req.auth.id,
                    ArticleIdArticle: movie.ArticleIdArticle
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

        if (body.mail === req.auth?.mail) {
            let serie = await models.series.findOne({
                where: { title: body.name }
            })
            let repeated = await models.orders.findOne({
                where: {
                    UserIdUser: req.auth.id,
                    ArticleIdArticle: serie.ArticleIdArticle,
                }
            })
            if (!repeated) {
                let resp = await models.orders.create({
                    rentingDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
                    UserIdUser: req.auth.id,
                    ArticleIdArticle: serie.ArticleIdArticle
                })
                res.status(200).json({
                    resp,
                    mail: req.auth?.mail,
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
            where: { title: body.name }
        })
        let orderedMovie = await models.orders.findOne({
            where: {
                ArticleIdArticle: movie.ArticleIdArticle,
            }
        })
        if (body.email === req.auth?.email && movie.ArticleIdArticle === orderedMovie.ArticleIdArticle) {
            let resp = await models.orders.update({
                rentingDate: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
            },
                {
                    where: {
                        ArticleIdArticle: orderedMovie.ArticleIdArticle
                    }
                })
        } res.status(200).json({
            message: `New Date for the movie ${movie.title}`
        })
    } catch (error) {
        res.json({ message: "That movie is not on the order" })
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
      message: "The orders from the user: "
    })
  }    
// orderController.getOrdersByUser = async (req, res) => {
//     try {
//         // QUERY Para traerme todos los parametros en la respuesta que yo quiero:
//         let id = req.params.id
//         let consulta = `SELECT orders.id_user AS id_user, orders.id_order AS id_order, orders.rentingDate AS date, articleOrders.id_article AS id_article
//     FROM orders INNER JOIN articleOrders
//     ON orders.id_order = articleOrders.id_order WHERE orders.id_user = ${id} `

//         let resultado = await models.order.sequelize.query(consulta, { type: models.order.sequelize.QueryTypes.SELECT });
//         if (resultado) {
//             res.send(resultado);
//         }

//     } catch (err) {
//         res.send(err)
//     }

// }






//LISTAR TODOS LOS PEDIDOS HECHOS EN LA APLICACION(sólo puede realizarlo el admin)
orderController.getAppOrders = async (req, res) => {
    let resp = await models.orders.findAll({
    })
    res.status(200).json({message:"All the orders: ", resp})}
  






module.exports = orderController