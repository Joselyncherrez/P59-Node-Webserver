const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

//motor de busquedas
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Home',
        nombre: "ElIzAbEtH",

    });
});


app.listen(3000, () => {
    console.log('Esuchando en el puerto 3000');
});