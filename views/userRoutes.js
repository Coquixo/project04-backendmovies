const express = require('express');
const router = express.Router()
const userController = require('../controllers/userControllers')

const models = require('../models/index')

const db = require('../db/db');



// DAR DE ALTA UN NUEVO USUARIO
router.post('/newUser', userController.postNewUser);

// MOSTRAR DATOS DE USUARIO SEGUN MAIL
router.get("/user/:mail", userController.getUserById);

// MODIFICAR DATOS DE USUARIO
router.put('/updateUser', userController.updateUser);

//BORRAR UN USUARIO(solo puede hacerlo el admin)
router.delete('deleteUser/:mail', userController.deleteUser)




module.exports = router

