import { transformSyntax } from "./transforms.js";
import { formatCode } from "../formatter/formatter.js";

export function compile(code){

    let output =
        transformSyntax(code);

    output =
        formatCode(output);

    return output;
}