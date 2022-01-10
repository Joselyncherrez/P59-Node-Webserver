const hbs = require('hbs');
//Registar un helper
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

//capitalizar elnombre

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});