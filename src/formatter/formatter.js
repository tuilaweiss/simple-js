export function formatCode(code){

    code =
        code.replace(/\{/g, "{\n");

    code =
        code.replace(/\}/g, "\n}\n");

    code =
        code.replace(/;/g, ";\n");

    const lines = [];

    let indent = 0;

    for(let line of code.split("\n")){

        line = line.trim();

        if(!line)
            continue;

        if(line.startsWith("}"))
            indent--;

        lines.push(
            "    ".repeat(indent) + line
        );

        if(line.endsWith("{"))
            indent++;
    }

    return lines.join("\n");
}
