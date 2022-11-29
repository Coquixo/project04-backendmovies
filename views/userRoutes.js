const express = require("express");
const router = express.Router();
const {
  authBearerMiddleware,
  isValidRole,
  isValidUser,
} = require("../middlewares/authMiddleware");

const userController = require("../controllers/userControllers");

const models = require("../models/index");
const db = require("../db/db");

// MOSTRAR DATOS DE USUARIO SEGUN MAIL
router.get("/user/:mail", isValidUser(), userController.getUserByMail);

// MODIFICAR DATOS DE USUARIO
router.patch("/updateUser/:mail", isValidUser(), userController.updateUser);

//BORRAR UN USUARIO(solo puede hacerlo el admin)
router.delete(
  "/deleteUser/:mail",
  isValidRole("admin"),
  userController.deleteUser
);

module.exports = router;
