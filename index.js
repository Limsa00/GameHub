const express = require('express');
const router = require('./my_modules/routes');
const port = 3000;
const games = require ('./games.json');


const server = express();
server.set('view engine', 'ejs');

server.use(express.static(__dirname + '/public'));

server.use(router);

server.use((req,res)=>{
    res.status(404).render('error');
})

server.locals.games = games;

server.listen(port, () => {
    console.log(`Le serveur tourne sur http://localhost:${port}`);
});
