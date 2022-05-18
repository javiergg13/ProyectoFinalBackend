const pcContorller = {}

const Pc = require('../models/Pc')

pcContorller.getPcs = async (req, res) => {
    const pcs = await Pc.find();
    res.json(pcs);
}

pcContorller.getPc = async (req, res) => {
    const pc = await Pc.findOne({tipo: req.params.tipo});
    res.send(pc);
}

module.exports = pcContorller;