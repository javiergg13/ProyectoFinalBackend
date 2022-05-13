const {Router} = require('express');
const router = Router();

const User = require('../models/User');

const jwt = require('jsonwebtoken');

router.get('/', (req, res) => res.send('Hello world'))

router.post('/register', async (req, res) => {
    const { email, password } = req.body;
    const newUser = new User({email: email, password: password});
    await newUser.save();
    console.log(newUser)
    
    const token = jwt.sign({_id: newUser._id}, 'secretkey');
    res.status(200).json({token});
});

router.post('/login', async (req, res) => {

    const { email, password } = req.body;
    const user = await User.findOne({email: email})
    if (!user) return res.status(401).send("El email introducido no existe");
    console.log(password, user)
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

router.get('/usuarios', verifyToken, (req, res) => {
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
})

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