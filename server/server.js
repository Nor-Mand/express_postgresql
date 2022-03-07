const express = require('express');
const server = express();
const port = 5000;
const cors = require('cors');
const app = require('./app')

// MIDDLEWARE
server.use(cors());
server.use(express.json());

server.use(app)
// PORT
server.listen(port,() => { console.log(`Listening on port: ${port}`)});

