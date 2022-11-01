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

//USUARIO SEGUN SU ID
userController.getUserById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await models.user.findAll({
            where: { id: id }
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




module.exports = userController