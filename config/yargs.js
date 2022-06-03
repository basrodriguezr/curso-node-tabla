const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar.'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Sirve para listar los datos que se han guardado en el archivo.'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Hasta donde se va a multiplicar la base.'
                })
                .check((argv,options) => {
                    if(isNaN(argv.b)){
                        throw 'La base debe ser un número.'
                    }
                    return true;
                })
                .argv;

module.exports = argv;