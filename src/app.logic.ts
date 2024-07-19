import fs from 'fs';
import { yarg } from './config/plugins/yargs.plugin';

// destructuramos el yarg

const {b:base, l:Limit, s:Showtable}=yarg;


let outputMessage = '';
const headerMessage = `
===============================
        Tabla del ${base}
===============================\n
`;


for (let
    i = 1;
    i <= Limit;
    i++
) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;

}
outputMessage = headerMessage + outputMessage;

if( Showtable){
    console.log(outputMessage);

}




const outputPath = `outpots/`;// puedes crear todas las carpetas que desees despues de cada /



if(Showtable){
fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('Archivo Creado');}

