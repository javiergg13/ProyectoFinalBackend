const userContorller = {}

const User = require('../models/User')

userContorller.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userContorller.getUser = async (req, res) => {
    const user = await User.findOne({email: req.params.email});
    res.send(user);
}

userContorller.editUser = async (req, res) => {
    await User.findOneAndUpdate({email: req.params.email}, req.body);
    res.send({status: 'usuario actualizado'})
}

userContorller.deleteUser = async (req, res) => {
    await User.findOneAndDelete({email: req.params.email});
    res.json({status: 'Usuario eliminado'})
}

module.exports = userContorller;