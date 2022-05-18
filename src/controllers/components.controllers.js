const componentContorller = {}

const Componente = require('../models/Componente')

componentContorller.getComponentes = async (req, res) => {
    const componentes = await Componente.find();
    console.log(res, 'res')
    res.json(componentes);
}

componentContorller.getComponente = async (req, res) => {
    const componente = await Componente.findOne({tipo: req.params.tipo});
    res.send(componente);
}

module.exports = componentContorller;