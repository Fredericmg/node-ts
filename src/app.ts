import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";


// console.log(process.argv);

// console.log(yarg.b);


//Funcion anonima asincrona

(async () => {

    await main();
    // console.log('Fin de programa');
})();

async function main() {
    // console.log(yarg);
    const{
        b:base,
        l:limit,
        s:showTable, 
        n:fileName, 
        d:fileDestination
    }=yarg;
    ServerApp.run({
        base,
        limit,
        showTable,
        fileDestination,
        fileName,   
    });

}
