const componentContorller = {}

const Componente = require('../models/Componente')

componentContorller.getComponentes = async (req, res) => {
    const componentes = await Componente.find();
    res.json(componentes);
}

componentContorller.getComponente = async (req, res) => {
    const componente = await Componente.find({tipo: req.params.tipo});
    console.log(req.params.tipo)
    res.json(componente);
}

module.exports = componentContorller;