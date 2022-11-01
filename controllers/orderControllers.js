const models = require('../models/index')

const orderController = {}



// GENERAR NUEVO PEDIDO
orderController.postNewOrder = async (req, res) => {
    try {
        let data = req.body
        let resp = await models.order.create({
            rentingDate: data.rentingDate,
            returnDate: data.returnDate,
        })

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}

// // ELIMINAR UNA PELICULA
// movieController.deleteMovie = async (req, res) => {
//     try {
//         let title = req.params.title
//         let resp = await models.movie.destroy({
//             where: { title: title }
//         })

//         if (resp == 1) {
//             res.send("Se ha eliminado la pelicula correctamente")
//         } else {
//             res.send("No se ha podido eliminar la pelicula")
//         }

//     } catch (err) {

//     }
// }

module.exports = orderController