const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers');

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

//motor de busquedas
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Home',
        nombre: "ElIzAbEtH",

    });
});
app.get('/acerca', (req, res) => {
    res.render('acerca', {
        titulo: "Acerca"
    });
});


app.listen(port, () => {
    console.log(`Escuchando en el puerto 3000 ${ port }`);
});