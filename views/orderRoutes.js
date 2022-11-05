const express = require('express');
const router = express.Router()
const orderController = require('../controllers/orderControllers')

const models = require('../models/index')

const db = require('../db/db');



// GENERAR UN NUEVO PEDIDO
router.post('/newOrder', orderController.postNewOrder);

//MODIFICAR DATOS DE UN PEDIDO
router.put('/updateOrder', orderController.updateOrder);

//LISTAR TODOS LOS PEDIDOS DE UN USUARIO
router.get('/orders/:id', orderController.getOrdersByUser)

//LISTAR TODOS LOS PEDIDOS HECHOS EN LA APLICACION(sólo puede realizarlo el admin)
router.get('/appOrders', orderController.getAppOrders)









module.exports = router