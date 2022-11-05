const models = require('../models/index')

const orderController = {}



// GENERAR NUEVO PEDIDO
orderController.postNewOrder = async (req, res) => {
    try {
        let { rentingDate, id_user, id_article } = req.body
        let resp = await models.order.create({
            rentingDate: rentingDate,
            id_user: id_user
        })
        if (id_article) {
            id_article.forEach(async (id_article) => {
                await sequelize.query(`INSERT INTO articleOrders(id_article, id_order) VALUES (${id_article}, ${resp.id_order})`)
            });
            res.send('Order created')
        } else {
            throw new Error('Article error')
        }
    } catch (err) {
        res.send(err)
    }
}

//MODIFICAR DATOS DE UN PEDIDO
orderController.updateOrder = async (req, res) => {
    try {
        let data = req.body
        let resp = await models.articleOrder.update(
            {
                id_article: data.id_article

            },
            {
                where: { id_articleOrder: data.id_articleOrder }
            }
        )

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}

//LISTAR TODOS LOS PEDIDOS DE UN USUARIO
orderController.getOrdersByUser = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await models.order.findAll(
            { where: { id_user: id } }
            // include: {
            //     model: models.articleOrder,
            //     attributes: ['id_article', 'id_articleOrder'],
            //     exclude: ['orderIdOrder' ]
            // },
            // attributes: ['rentingDate'],
            // exclude: ['orderIdorder' ]}
        )
        res.send(resp)
    } catch (err) {
        res.send(err)
    }

}





//LISTAR TODOS LOS PEDIDOS HECHOS EN LA APLICACION(sólo puede realizarlo el admin)
orderController.getAppOrders = async (req, res) => {
    try {
        let resp = await models.articleOrder.findAll(
            {
                include: {
                    model: models.article,
                    attributes: ['id_article'],
                    exclude: ['articleOrderIdArticleOrder']

                },
                attributes: ['id_articleOrder'],
                exclude: ['articleOrderIdArticleOrder']
            }
        )
        res.send(resp)
    } catch (err) {
        res.send(err)
    }

}






module.exports = orderController