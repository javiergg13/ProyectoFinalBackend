const {Schema, model} = require('mongoose');

const Componente = require('./Componente')
const Pc = require('./Pc')

const userSchema = new Schema({
    nombre: {type: String, required: true},
    apellidos: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    cp: {type: Number, required: true},
    telefono: {type: Number, required: true},
    pc_favoritos:{type: Array, required: true},
    componente_favoritos:{type: Array, required: true}
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('User', userSchema);