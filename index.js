const express = require('express');
const router = require('./my_modules/routes');
const port = 3000;
const games = require ('./games.json');


const server = express();
server.set('view engine', 'ejs');

server.use(router);

server.use(express.static(__dirname + '/public'));

server.locals.games = games;

server.listen(port, () => {
    console.log(`Le serveur tourne sur http://localhost:${port}`);
});
