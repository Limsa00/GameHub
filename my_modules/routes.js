const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index')
});

router.get('/game/fourchette', (req,res) => {
    res.render('fourchette')
});

router.get('/game/diceRoller', (req,res) => {
    res.render('diceRoller')
});

module.exports = router;