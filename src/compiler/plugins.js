const plugins = [];

export function use(plugin){
    plugins.push(plugin);
}

export function runPlugins(code){

    for(const plugin of plugins){
        code = plugin(code);
    }

    return code;
}
