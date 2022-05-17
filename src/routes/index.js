const {Router} = require('express');
const router = Router();

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const userContorller = require('../controllers/users.controllers.js');

router.post('/register', async (req, res) => {
    // Obtener datos del usuario
    const { email, password, nombre, apellidos, cp, telefono } = req.body;

    // Verificar que el usuario no exista
    let user = await User.findOne({email}) || null;

    if(user !== null) {
        return res.json({
            succes: false,
            msg: 'Usuario ya existe'
        })
    }
    console.log(req.body)
    // Crear y guardar en bdd el usuario
    const newUser = new User({email: email, password: password, nombre: nombre, apellidos: apellidos, cp: cp, telefono: telefono});
    await newUser.save();
    
    // Crear token
    const token = jwt.sign({_id: newUser._id}, 'secretkey');
    res.status(200).json({token});
});

router.post('/login', async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({email: email})
    if (!user) return res.status(401).send("El email introducido no existe");
    console.log(user)
    if (user.password !== password) return res.status(401).send('Contraseña erronea');

    const token = jwt.sign({_id: user._id}, 'secretkey');

    return res.status(200).json({token});
});

router.get('/pcs', (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Task one',
            description: 'lorem ipsum',
            date: "2022-05-11T11:36:52.561Z"
        },
        {
            _id: 2,
            name: 'Task two',
            description: 'lorem ipsum',
            date: "2022-05-11T11:36:52.561Z"
        },
        {
            _id: 3,
            name: 'Task three',
            description: 'lorem ipsum',
            date: "2022-05-11T11:36:52.561Z"
        }
    ])
});

router.get('/usuarios', verifyToken, userContorller.getUsers);

router.get('/usuarios/:email', verifyToken, userContorller.getUser);

router.put('/usuarios/:email', verifyToken, userContorller.editUser);

router.delete('/usuarios/:email', verifyToken, userContorller.deleteUser);


router.get('/componentes', (req, res) => {
    res.json([
        {
            _id: 1,
            name: 'Task one',
            description: 'lorem ipsum',
            date: "2022-05-11T11:36:52.561Z"
        },
        {
            _id: 2,
            name: 'Task two',
            description: 'lorem ipsum',
            date: "2022-05-11T11:36:52.561Z"
        },
        {
            _id: 3,
            name: 'Task three',
            description: 'lorem ipsum',
            date: "2022-05-11T11:36:52.561Z"
        },
        {
            _id: 4,
            name: 'Task four',
            description: 'lorem ipsum',
            date: "2022-05-11T11:36:52.561Z"
        }
    ])
})

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