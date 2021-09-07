const express = require('express');
const router = express.Router();
const gamesData = require ('../games.json');


router.get('/', (req,res) => {
    res.render('index')
});

router.get('/game/:name', (req,res) => {
    const name = req.params.name;

    let game

    for (let index = 0; index < gamesData.length; index++) {
        const gameData = gamesData[index];

        if (gameData.name === name) {
            game = gameData;
        };
    };

    if (typeof game !== 'undefined') {
        res.render(game.name);
    }
    else {
        res.status(404).send('erreur');
    }
});

module.exports = router;