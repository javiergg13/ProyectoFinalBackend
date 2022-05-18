const {Schema, model} = require('mongoose');

const Componente = require('./Componente')

const pcSchema = new Schema({
    precio: {type: Number, required: true},
    descripcion: {type: String, required: true},
    componentes: [String]
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Pc', pcSchema);