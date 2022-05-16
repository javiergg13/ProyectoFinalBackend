const {Schema, model} = require('mongoose');

const componenteSchema = new Schema({
    id: String,
    tipo_componente: String,
    descripcion: String,
    nucleos: Number,
    hilos: Number,
    precio: Number,
    memoria_cache: Number,
    socket: Number,
    modelo: String,
    chipset: String,
    slots_ram: Number,
    puetos_usb_2_0: Number,
    puertos_usb_c: Number,
    puertos_usb_3_2: Number,
    puertos_hdmi: Number,
    display_ports: Number,
    frecuencia_base: Number,
    frecuencia_turbo: Number,
    memoria: Number,
    memoria_virtual: Number,
    nucleos_cuda: Number,
    nucleos_rt: Number,
    nucleos_tensor: Number,
    tdp: Number,
    marca: String,
    latencia: Number,
    tecnologia: String,
}, {
    timestamps: true
});

module.exports = model('Componente', componenteSchema);