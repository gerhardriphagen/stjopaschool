function objectParser(obj) {

    var strings = 0;
    var numbers = 0;
    var booleans = 0;
    var objects = 0;
    var functions = 0;
    var arrays = 0;
    var dates = 0;


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
        if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop]) && !(obj[prop] instanceof Date))
            ++objects;
    }

    for(var prop in obj) {
        if(typeof obj[prop] === 'function')
            ++functions;
    }

    for(var prop in obj) {
        if(typeof obj[prop] === 'object' && Array.isArray(obj[prop]))
            ++arrays;
    }

    for(var prop in obj) {
        if(obj[prop] instanceof Date)
            ++dates;
    }

    for(var prop in obj) {
        if(typeof obj[prop] === 'object')
            for(var nestedprop in obj[prop]) {
                if(typeof obj[prop][nestedprop] === 'string')
                    ++strings;
            }

            for(var nestedprop in obj[prop]) {
                if(typeof obj[prop][nestedprop] === 'number')
                    ++numbers;
            }

            for(var nestedprop in obj[prop]) {
                if(typeof obj[prop][nestedprop] === 'boolean')
                    ++booleans;
            }

            for(var nestedprop in obj[prop]) {
                if(typeof obj[prop][nestedprop] === 'object' && !Array.isArray(obj[prop][nestedprop]) && !(obj[prop][nestedprop] instanceof Date))
                    ++objects;
            }

            for(var nestedprop in obj[prop]) {
                if(typeof obj[prop][nestedprop] === 'function')
                    ++functions;
            }

            for(var nestedprop in obj[prop]) {
                if(typeof obj[prop][nestedprop] === 'object' && Array.isArray(obj[prop][nestedprop]))
                    ++arrays;
            }

            for(var nestedprop in obj[prop]) {
                if(obj[prop][nestedprop] instanceof Date)
                    ++dates;
            }
    }

    var types = {
        'strings': strings,
        'numbers': numbers,
        'booleans': booleans,
        'objects': objects,
        'functions': functions,
        'arrays': arrays,
        'dates': dates
    };

    return types;

}

objectParser(obj);