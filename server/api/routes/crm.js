const express  = require('express');
const router = express.Router();

const pool = require("../../db/db");

router.get('/', async (req, res) =>{
    try {
        const allData = await pool.query('SELECT * FROM crm_lead')
        res.json(allData.rows)
    } catch (err){
        console.log(err.message);
    }
})

router.get('/user', async (req, res) =>{
    try {
        const allData = await pool.query('SELECT user_id, count(user_id) as leads FROM crm_lead GROUP BY user_id')
        res.json(allData.rows)
    } catch (err){
        console.log(err.message);
    }
})

module.exports = router;