const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const pool = require('./db/db');
const {json} = require("express");

// MIDDLEWARE
app.use(cors());

app.use(express.json());


// FETCH  ALL DATA
app.get("/testing", async (req,res) => {
    try {
        const allData = await pool.query('SELECT id, name FROM res_partner LIMIT 10')
        res.json(allData.rows);
    } catch (err) {
        console.log(err.message)
    }
})

// FETCH DATA BY ID
app.get("/testing/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const idData = await pool.query('SELECT id, name FROM res_partner WHERE id = $1', [id])
        res.json(idData.rows[0]);
    } catch (err){
        console.log(err.message)
    }
})

// PORT
app.listen(port,() => { console.log(`Listening on port: ${port}`)});
