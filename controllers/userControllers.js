const models = require('../models/index')

const userController = {}


const {
    encryptPassword
} = require('../services/auth.service');
require('dotenv').config();







//USUARIO SEGUN SU EMAIL
userController.getUserByMail = async (req, res) => {
    try {
        let { mail } = req.params;
        let resp = await models.users.findAll({
            where: { mail: mail }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

// MODIFICAR DATOS DE USUARIO
userController.updateUser = async (req, res) => {

    let { mail } = req.params;
    let user = req.body
    let searchUser = await models.users.findOne(

        {
            where: { mail: req.auth.mail }
        }
    )
    let newPassword = searchUser.password
    if (user.password) {
        newPassword = encryptPassword(user.password)
    }

    let resp = await models.users.update(
        {
            name: user.name,
            mail: user.mail,
            password: newPassword
        },
        {
            where: { mail: mail }
        }
    )
    res.json({
        resp, message: "El usuario se ha modificado correctamente"
    })
};








//BORRAR UN USUARIO(solo puede hacerlo el admin)

userController.deleteUser = async (req, res) => {
    try {
        let { mail } = req.params
        let resp = await models.users.destroy({
            where: { mail: mail }
        })
        res.json({ resp, message: "Se ha elminado el usuario correctamente" })
        

    } catch (err) {

    }
}


module.exports = userController