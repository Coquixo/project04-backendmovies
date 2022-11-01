const express = require('express');
const router = express.Router()
const userController = require('../controllers/userControllers')

const models = require('../models/index')

const db = require('../db/db');



// DAR DE ALTA UN NUEVO USUARIO
router.post('/newUser', userController.postNewUser);

// MOSTRAR DATOS DE USUARIO SEGUN ID
router.get("/user/:id", userController.getUserById);

// MODIFICAR DATOS DE USUARIO
router.put('/updateUser', userController.updateUser);

//BORRAR UN USUARIO(solo puede hacerlo el admin)


  


module.exports = router

