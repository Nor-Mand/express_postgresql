const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const pool = require('./db/db');
const {json} = require("express");

// MIDDLEWARE
app.use(cors());

app.use(express.json());


// FETCH DATA
app.use("/testing", async (req,res) => {
    try {
        const getAll = await pool.query('SELECT * FROM res_partner LIMIT 10')
        res.json(getAll.rows);
    } catch (err) {
        console.log(err.message)
    }
})

// PORT
app.listen(port,() => { console.log(`Listening on port: ${port}`)});
