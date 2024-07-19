import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';


// export const yarg= yargs(process.argv).parseSync();
export const yarg = yargs(hideBin(process.argv))
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multipicación de base de tablas',
    })
    .option('l', {
        alias: 'Limit',
        type: 'number',
        default: 10,
        describe: 'Multipicación de base de tablas limite',
    })
    .option('s', {
        alias: 'Show',
        type: 'boolean',
        default: false,
        describe: 'Show Multipicación de base de tablas limite',
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'multipication-table',
        describe: 'Nombre de archivo nuevo',
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'Nombre destino nuevo',
    })
    .check((argv, option) => {
        if (argv.b < 1) throw 'Error : la base deve ser mayor que 0';
        return true;

    })
    .parseSync();




