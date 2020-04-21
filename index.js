const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 8080;

const server = express()

server.use(bodyParser.json()); 
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());


server.use('/', require('./routes'));


server.listen(port, () => console.log('API SERVER ITS RUNNING ON PORT -> ', port))