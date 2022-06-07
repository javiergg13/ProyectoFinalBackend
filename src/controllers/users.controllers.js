const userController = {}

const User = require('../models/User')

const CryptoJS = require('crypto-js')

const clave = 'phamsfnUHYhbasf738';

userController.getUsers = async (req, res) => {
    let users = await User.find();
    for(let user of users){
        user.password = CryptoJS.AES.encrypt(user.password.trim(), clave.trim()).toString();
    }
    res.json(users);
}

userController.getUser = async (req, res) => {
    let user = await User.findOne({email: req.params.email});
    user.password = CryptoJS.AES.encrypt(user.password.trim(), clave.trim()).toString();
    res.send(user);
}

userController.editUser = async (req, res) => {
    let editedUser = { email, password, nombre, apellidos, cp, telefono, pc_favoritos, componente_favoritos } = req.body;
    editedUser.password = CryptoJS.AES.encrypt(editedUser.password.trim(), clave.trim()).toString();

    await User.findOneAndUpdate({email: req.params.email}, editedUser);
    res.send({status: 'usuario actualizado'})
}

userController.deleteUser = async (req, res) => {
    await User.findOneAndDelete({email: req.params.email});
    res.json({status: 'Usuario eliminado'})
}

module.exports = userController;