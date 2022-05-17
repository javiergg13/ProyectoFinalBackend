const express = require('express');
const app = express();
const cors = require('cors');
const { urlencoded } = require('express');

require('./database');

app.use(cors());
app.use(express.json());
app.use('/api', require('./routes/index'));
app.use(express,urlencoded({extended: false}));

app.listen(3000);
console.log('Server on port', 3000);