const componentContorller = {}

const Componente = require('../models/Componente')

componentContorller.getComponentes = async (req, res) => {
    const componentes = await Componente.find();
    res.json(componentes);
}

componentContorller.getComponente = async (req, res) => {
    const componente = await Componente.findOne({tipo: req.params.tipo});
    console.log(req.params)
    res.send(componente);
}

module.exports = componentContorller;