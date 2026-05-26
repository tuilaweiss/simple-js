export function transformSyntax(code){

    const rules = [

        {
            from: /\bfunc\b/g,
            to: "function"
        },

        {
            from: /\bvar\b/g,
            to: "let"
        },

        {
            from: /\blog\s*\(/g,
            to: "console.log("
        },

        {
            from: /\$id\s*\(/g,
            to: "document.getElementById("
        },

        {
            from: /\$query\s*\(/g,
            to: "document.querySelector("
        },

        {
            from: /foreach\s+(.+)\s+as\s+(.+)\s*\{/g,
            to: "for (const $2 of $1) {"
        }

    ];

    for(const rule of rules){

        code =
            code.replace(
                rule.from,
                rule.to
            );
    }

    return code;
}