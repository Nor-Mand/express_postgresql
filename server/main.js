const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

// MIDDLEWARE
app.use(cors());

// PORT
app.listen(port,() => { console.log(`Listening on port: ${port}`)});
