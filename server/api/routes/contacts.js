const express = require('express')
const router = express.Router();

const pool = require("../../db/db");



// FETCH  ALL DATA
router.get("/", async (req,res) => {
    try {
        const allData = await pool.query('SELECT id, name FROM res_partner LIMIT 10')
        res.json(allData.rows);
    } catch (err) {
        console.log(err.message)
    }
})

// FETCH DATA BY ID
router.get("/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const idData = await pool.query('SELECT id, name FROM res_partner WHERE id = $1', [id])
        res.json(idData.rows[0]);
    } catch (err){
        console.log(err.message)
    }
})

module.exports = router;