export class Parser {

    parse(tokens){

        return {
            type: "Program",
            body: tokens
        };
    }
}
