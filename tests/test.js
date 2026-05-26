import { compile } from "../src/compiler/compiler.js";

const code = `
func hello(){

log("hello");

}
`;

const result = compile(code);

console.log(result);

if(!result.includes("function")){
    throw new Error("Compiler failed");
}

console.log("Tests passed");
