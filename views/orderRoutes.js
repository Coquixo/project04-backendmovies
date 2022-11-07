const express = require('express');
const router = express.Router()
const orderController = require('../controllers/orderControllers')

const {isValidUser, isValidRole} = require('../middlewares/authMiddleware')

const models = require('../models/index')
const db = require('../db/db');



// GENERAR UN NUEVO PEDIDO (PELICULA)
router.post('/newOrderMovie',  isValidUser(), orderController.postNewOrderMovie);

// GENERAR UN NUEVO PEDIDO (SERIE)
router.post('/newOrderSerie',  isValidUser(), orderController.postNewOrderSerie);

//MODIFICAR DATOS DE UN PEDIDO
router.patch('/updateOrder', isValidUser(), orderController.updateOrder);

//LISTAR TODOS LOS PEDIDOS DE UN USUARIO
router.get('/orders/:id', orderController.getOrdersByUser)

//LISTAR TODOS LOS PEDIDOS HECHOS EN LA APLICACION(sólo puede realizarlo el admin)
router.get('/appOrders', isValidRole("admin"), orderController.getAppOrders)









module.exports = router