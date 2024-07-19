// import exp from "constants";
// import { boolean } from "yargs";
import fs from 'fs';



export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    fileContent: string;
    fileDestination?: string;
    fileName?: string;
    
}

export class SaveFile implements SaveFileUseCase {
    constructor() { }


    // execute ({fileContent,destination,fileName}: Options) :boolean{
    execute({
        fileContent,
        fileDestination = 'outpost',
        fileName = 'tabla'
    }: Options): boolean {
        try {
            fs.mkdirSync(fileDestination, { recursive: true });
            fs.writeFileSync(`${fileDestination}/${fileName}.docx`, fileContent);
            return true;

        } catch (error) {
            console.error(error);
            return false;
        }



    }


}