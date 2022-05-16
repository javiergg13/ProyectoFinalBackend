const {Schema, model} = require('mongoose');

const pcSchema = new Schema({
    id: String,
    precio: Number,
    descripcion: String,
}, {
    timestamps: true
});

module.exports = model('Pc', pcSchema);