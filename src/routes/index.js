const {Router} = require('express');
const router = Router();

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const userController = require('../controllers/users.controllers.js');
const pcController = require('../controllers/pcs.controllers.js');
const componentController = require('../controllers/components.controllers.js');

router.post('/register', async (req, res) => {
    // Obtener datos del usuario
    const { email, password, nombre, apellidos, cp, telefono, pc_favoritos, componente_favoritos } = req.body;

    // Verificar que el usuario no exista
    let user = await User.findOne({email}) || null;

    if(user !== null) {
        return res.json({
            succes: false,
            msg: 'Usuario ya existe'
        })
    }
    
    // Crear token
    const token = jwt.sign({_id: newUser._id}, 'secretkey');
    res.status(200).json({token});

    // Crear y guardar en bdd el usuario
    const newUser = new User({email: email, password: password, nombre: nombre, apellidos: apellidos, cp: cp, telefono: telefono, pc_favoritos: pc_favoritos, componente_favoritos: componente_favoritos});
    await newUser.save();

    return res.json({
        succes:true,
        msg: 'Usuario añadido correctamente'
    })
});

router.post('/login', async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({email: email})

    if (!user) return res.status(401).json({
        succes: false,
        msg: 'El email o la contraseña no se corresponden con ningún usuario existente'
    });

    if (user.password !== password) return res.status(401).json({
        succes: false,
        msg: 'El email o la contraseña no se corresponden con ningún usuario existente'
    });

    const token = jwt.sign({_id: user._id}, 'secretkey');

    return res.status(200).json({token});
});

router.get('/pcs', pcController.getPcs);

router.get('/pcs/:tipo', pcController.getPc);

router.get('/usuarios', verifyToken, userController.getUsers);

router.get('/usuarios/:email', verifyToken, userController.getUser);

router.put('/usuarios/:email', verifyToken, userController.editUser);

router.delete('/usuarios/:email', verifyToken, userController.deleteUser);

router.get('/componentes', componentController.getComponentes);

router.get('/componentes/:tipo', componentController.getComponente);

module.exports = router;

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Peticion no autorizada');
    }

    const token = req.headers.authorization.split(' ')[1];
    if (token === 'null') {
        return res.status(401).send('Peticion no autorizada');
    }

    const payload = jwt.verify(token, 'secretkey');
    req.userId = payload._id;
    next();
}