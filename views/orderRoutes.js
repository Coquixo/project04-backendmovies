const express = require('express');
const router = express.Router()
const orderController = require('../controllers/oderControllers')

const models = require('../models/index')

const db = require('../db/db');



// GENERAR UN NUEVO PEDIDO
router.post('/newOrder', orderController.postNewOrder);

// // MOSTRAR DATOS DE USUARIO SEGUN ID
// router.get("/user/:id", orderController.getUserById);

// // MODIFICAR DATOS DE USUARIO
// router.put('/updateUser', orderController.updateUser);




  


module.exports = router