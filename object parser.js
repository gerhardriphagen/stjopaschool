function objectParser(obj) {

    var strings = 0;
    var numbers = 0;
    var booleans = 0;
    var objects = 0;
    var functions = 0;

    for(var prop in obj) {
        if(typeof obj[prop] === 'string')
            ++strings;
    }

    for(var prop in obj) {
        if(typeof obj[prop] === 'number')
            ++numbers;
    }

    for(var prop in obj) {
        if(typeof obj[prop] === 'boolean')
            ++booleans;
    }

    for(var prop in obj) {
        if(typeof obj[prop] === 'object')
            ++objects;
    }

    for(var prop in obj) {
        if(typeof obj[prop] === 'function')
            ++functions;
    }

    return [strings, numbers, booleans, objects, functions];

}
