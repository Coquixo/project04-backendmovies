const models = require('../models/index')

const userController = {}





// REGISTRAR NUEVO USUARIO
userController.postNewUser = async (req, res) => {
    try {
        let data = req.body
        let resp = await models.user.create({
            name: data.name,
            surname: data.surname,
            age: data.age,
            phone: data.phone,
            address: data.address,
            mail: data.mail,
            password: data.password
        })

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}

//USUARIO SEGUN SU EMAIL
userController.getUserById = async (req, res) => {
    try {
        let mail = req.params.mail
        let resp = await models.user.findAll({
            where: { mail: mail }
        })
        res.send(resp)
    } catch (err) {
        res.send(err)
    }
}

// MODIFICAR DATOS DE USUARIO
userController.updateUser = async (req, res) => {
    try {
        let data = req.body
        let resp = await models.user.update(
            {
                name: data.name,
                surname: data.surname,
                age: data.age,
                phone: data.phone,
                address: data.address,
                mail: data.mail,
                password: data.password,
            },
            {
                where: { id_user: data.id_user }
            }
        )

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}


//BORRAR UN USUARIO(solo puede hacerlo el admin)

userController.deleteUser = async (req, res) => {
    try{
        let mail = req.params.mail
        let resp = await models.user.destroy({
            where: { mail: mail }
        })

        if(resp == 1) {
            res.send("Se ha eliminado la pelicula correctamente")
        } else {
            res.send("No se ha podido eliminar la pelicula")
        }

    } catch(err) {

    }
}


module.exports = userController