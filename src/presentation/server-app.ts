import { CreateTable } from "../domain/use_case/create-table.use-case";
import { SaveFile } from "../domain/use_case/save-file.use-case";


interface RunOption {
    base: number;
    limit: number;
    showTable: boolean;
    fileName: string;
    fileDestination: string;
}




export class ServerApp {

    static run({ base, limit, showTable, fileDestination, fileName }: RunOption) {
        console.log('Server Runing...');

        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile()
        .execute({ 
            fileContent: table,
            fileDestination,//tambien se puede crear asi
            fileName,
        });

        if (showTable) console.log(table);
        (wasCreated)
            ? console.log('Archivo Creado')
            : console.log('Archivo no Creado')

    }
}








