
const {crearArchivo} = require('./helpers/multiplicar');
const {crearArchivo2} = require('./helpers/multiplicar');
const argv = require('./config/yargs')
require('colors');

console.clear();
//const multiplicador = -12;

// const[,,arg3 = 'Sin base asignada']  = process.argv;
// const[,multiplicador = 'Sin base asignada'] = arg3.split('=');

crearArchivo2(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow))
    .catch(error => console.log(error.red));




// console.log(argv);
// console.log('base: yargs', argv.b);