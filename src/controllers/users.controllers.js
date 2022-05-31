const userController = {}

const User = require('../models/User')

userController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userController.getUser = async (req, res) => {
    const user = await User.findOne({email: req.params.email});
    res.send(user);
}

userController.editUser = async (req, res) => {
    await User.findOneAndUpdate({email: req.params.email}, req.body);
    res.send({status: 'usuario actualizado'})
}

userController.deleteUser = async (req, res) => {
    await User.findOneAndDelete({email: req.params.email});
    res.json({status: 'Usuario eliminado'})
}

module.exports = userController;