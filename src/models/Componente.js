const {Schema, model} = require('mongoose');

const propiedadesGenericas = {
    tipo: {type: String, required: true},
    descripcion: {type: String, required: true},
    precio: {type: Number, required: true},
    modelo: {type: String, required: true},
    marca: {type: String, required: true},
}

const componenteSchema = new Schema({...propiedadesGenericas}, {
    timestamps: true,
    versionKey: false
});

const gpuSchema = new Schema({
    ...propiedadesGenericas,
    tecnologia: {type: String, required: true},
    memoria_virtual: {type: Number, required: true},
    nucleos_cuda: {type: Number, required: true},
    nucleos_rt: {type: Number, required: true},
    nucleos_tensor: {type: Number, required: true},
    frecuencia_base: {type: Number, required: true},
    frecuencia_turbo: {type: Number, required: true},
    tdp: {type: Number, required: true},
    ancho: {type: Number, required: true},
    alto: {type: Number, required: true}
}, {
    timestamps: true,
    versionKey: false
});

// const cpuSchema = new Schema({
//     ...componenteSchema,
//     chipset: {type: String, required: true},
//     nucleos: {type: Number, required: true},
//     hilos: {type: Number, required: true},
//     memoria_cache: {type: Number, required: true},
//     socket: {type: String, required: true},
//     frecuencia_base: {type: Number, required: true},
//     frecuencia_turbo: {type: Number, required: true},
//     tdp: {type: Number, required: true},
// }, {
//     timestamps: true,
//     versionKey: false
// });

// const placaBaseSchema = new Schema({
//     ...componenteSchema,
//     chipset: {type: String, required: true},
//     socket: {type: String, required: true},
//     slots_ram: {type: Number, required: true},
//     puetos_usb_2_0: {type: Number, required: true},
//     puertos_usb_c: {type: Number, required: true},
//     puertos_usb_3_2: {type: Number, required: true},
//     puertos_hdmi: {type: Number, required: true},
//     display_ports: {type: Number, required: true},
//     tamaño: {type: Number, required: true},
// }, {
//     timestamps: true,
//     versionKey: false
// });

// const discosDurosSchema = new Schema({
//     ...componenteSchema,
//     tecnologia: {type: String, required: true},
//     memoria: {type: Number, required: true},
//     velocidad_lectura: {type: Number, required: true},
//     velocidad_escritura: {type: Number, required: true},
// }, {
//     timestamps: true,
//     versionKey: false
// });

// const ramSchema = new Schema({
//     ...componenteSchema,
//     tecnologia: {type: String, required: true},
//     memoria: {type: Number, required: true},
//     latencia: {type: Number, required: true},
// }, {
//     timestamps: true,
//     versionKey: false
// });

// const ventilacionSchema = new Schema({
//     ...componenteSchema,
//     tipo_ventilacion: {type: String, required: true},
//     led: {type: Boolean, required: true},
//     tdp: {type: Number, required: true},
//     socket: {type: String, required: true},
//     rpm: {type: Number, required: true},
//     tamaño_ventilador: {type: Number, required: true},
//     tdp: {type: Number, required: true},
//     ancho: {type: Number, required: true},
//     alto: {type: Number, required: true}
// }, {
//     timestamps: true,
//     versionKey: false
// });

// const psuSchema = new Schema({
//     ...componenteSchema,
//     certificacion: {type: String, required: true},
//     potencia: {type: Number, required: true},
//     tipo: {type: String, required: true}
// }, {
//     timestamps: true,
//     versionKey: false
// });


module.exports = model('Componente', componenteSchema);
// module.exports = model('Psu', psuSchema);
// module.exports = model('RAM', ramSchema);
// module.exports = model('DiscosDuros', discosDurosSchema);
// module.exports = model('PlacaBase', placaBaseSchema);
// module.exports = model('Cpu', cpuSchema);
// module.exports = model('Gpu', gpuSchema);