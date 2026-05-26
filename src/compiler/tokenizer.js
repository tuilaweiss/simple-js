export function tokenize(code){

    return code
        .split(/\s+/)
        .filter(Boolean);
}
