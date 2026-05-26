import fs from "fs";
import { compile } from "../compiler/compiler.js";

const args = process.argv.slice(2);

const command = args[0];
const file = args[1];

function build(filePath){

    if(!filePath){
        console.log("Missing input file");
        process.exit(1);
    }

    if(!fs.existsSync(filePath)){
        console.log("File not found");
        process.exit(1);
    }

    const source =
        fs.readFileSync(filePath, "utf8");

    const output =
        compile(source);

    const outputFile =
        filePath.replace(".sjs", ".js");

    fs.writeFileSync(outputFile, output);

    console.log(`Built ${outputFile}`);
}

switch(command){

    case "build":
        build(file);
        break;

    default:
        console.log("simplejs build app.sjs");
}
