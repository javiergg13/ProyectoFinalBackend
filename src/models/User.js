const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    nombre: String,
    apellidos: String,
    password: String,
    email: String,
    cp: Number,
    telefono: Number,
}, {
    timestamps: true
});

module.exports = model('User', userSchema);